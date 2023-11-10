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
    background-color: rgba(10);
  }
`;

function Header() {
  return (
    <StHeaderContainer>
      <StHeaderTitle>K/DA 팬레터 사이트</StHeaderTitle>
      <StMemberSelect>
        <li>아칼리</li>
        <li>아리</li>
        <li>이블린</li>
        <li>카이사</li>
      </StMemberSelect>
    </StHeaderContainer>
  );
}

export default Header;
