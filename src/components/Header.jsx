import React from "react";
import styled from "styled-components";
import headerbg from "assets/pic/kdaHeaderBg.jpg";

const StHeaderContainer = styled.section`
  width: 100%;
  height: 250px;
  background-image: url(${headerbg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StHeaderTitle = styled.h1`
  color: white;
  font-size: 3rem;
  text-shadow: 3px 0px black; //글자 잘 안보여서 넣은건데 더 좋은 방법있으면 ㄱㄱ
`;
const StMemberSelect = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 50px;

  li {
    font-size: 1.5rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);

    width: 150px;
    padding: 5px;
    text-align: center;
    user-select: none;
    cursor: pointer;

    &:hover {
      scale: 1.1;
      background-color: rgba(0, 0, 0, 0.3);
      color: white;
    }
  }
`;

function Header({ setChosenMember }) {
  function handleClick(event) {
    // console.log(event.target.textContent);
    let member;
    switch (event.target.textContent) {
      case "전체보기":
        member = "ALL";
        break;
      case "아칼리":
        member = "AKALI";
        break;
      case "아리":
        member = "AHRI";
        break;
      case "이블린":
        member = "EVELYN";
        break;
      case "카이사":
        member = "KAISA";
        break;
    }
    setChosenMember(member);
  }
  const tempArr = ["전체보기", "아칼리", "아리", "이블린", "카이사"];
  return (
    <StHeaderContainer>
      <StHeaderTitle>K/DA 팬레터 사이트</StHeaderTitle>
      <StMemberSelect>
        {tempArr.map((item) => {
          return (
            <li key={item} onClick={handleClick}>
              {item}
            </li>
          );
        })}
      </StMemberSelect>
    </StHeaderContainer>
  );
}

export default Header;
