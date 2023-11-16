import React, { useState } from "react";
import styled from "styled-components";
import headerAllbg from "assets/pic/kdaHeaderBg.jpg";
import headerAhribg from "assets/pic/cropped-ahri.jpg";
import headerAkalibg from "assets/pic/cropped-akali.jpg";
import headerEvelynbg from "assets/pic/cropped-evelyn.jpg";
import headerKaisabg from "assets/pic/cropped-kaisa.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setMemeber,
  ALL,
  AHRI,
  AKALI,
  EVELYN,
  KAISA,
} from "redux/modules/chosen-member";

//styled-components
const StHeaderContainer = styled.section`
  width: 100%;
  height: 250px;
  background-image: ${(props) => {
    switch (props.$chosenMember) {
      case "AHRI":
        return `url(${headerAhribg})`;
      case "AKALI":
        return `url(${headerAkalibg})`;
      case "EVELYN":
        return `url(${headerEvelynbg})`;
      case "KAISA":
        return `url(${headerKaisabg})`;
      default:
        return `url(${headerAllbg})`;
    }
  }};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StHeaderTitle = styled.h1`
  color: white;
  font-size: 3rem;
  text-shadow: 0 0 7px #8248f6, 0 0 10px #8248f6, 0 0 21px #8248f6,
    0 0 42px #7a49b4, 0 0 82px #7a49b4, 0 0 92px #7a49b4, 0 0 102px #7a49b4,
    0 0 151px #7a49b4;
  cursor: pointer;
`;
const StMemberSelect = styled.ul`
  gap: 20px;
  margin-top: 50px;
  display: ${(props) =>
    props.$shouldDisplay ? "flex" : "none"}; //detail page에선 안보이게.
`;

const StTab = styled.li`
  font-size: 1.5rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);

  width: 150px;
  padding: 5px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    scale: 1.1;
    color: white;
  }
  ${(props) =>
    props.$clicked &&
    `
      background-color: #971f977e;
      color: #fff;
      border:1px solid white;
      scale:1.1;
    `}
`;

function Header() {
  //redux
  const chosenMember = useSelector((state) => state.chosenMember.chosenMember);
  console.log(chosenMember);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("전체보기");
  let isAtHome = location.pathname === "/" ? true : false;
  function handleClick(event) {
    // console.log(event.target.textContent);
    let member;
    switch (event.target.textContent) {
      case "전체보기":
        member = ALL;
        break;
      case "아칼리":
        member = AKALI;
        break;
      case "아리":
        member = AHRI;
        break;
      case "이블린":
        member = EVELYN;
        break;
      case "카이사":
        member = KAISA;
        break;
    }
    // ctx.setChosenMember(member);
    // dispatch({ type: member });
    dispatch(setMemeber(member));
    setSelectedTab(event.target.textContent);
  }
  const tempArr = ["전체보기", "아칼리", "아리", "이블린", "카이사"];

  const titleClickHndlr = () => {
    navigate("/");
    setSelectedTab("전체보기");
    // dispatch({ type: "ALL" });
    dispatch(setMemeber(ALL));
  };
  return (
    <StHeaderContainer $chosenMember={chosenMember}>
      <StHeaderTitle onClick={titleClickHndlr}>K/DA Fan Letters</StHeaderTitle>
      <StMemberSelect $shouldDisplay={isAtHome}>
        {tempArr.map((item) => {
          return (
            <StTab
              key={item}
              onClick={handleClick}
              $clicked={selectedTab === `${item}`}
            >
              {item}
            </StTab>
          );
        })}
      </StMemberSelect>
    </StHeaderContainer>
  );
}

export default Header;
