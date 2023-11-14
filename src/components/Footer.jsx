import React from "react";
import styled from "styled-components";

//styled-components
const StFooterContainer = styled.section`
  width: 100%;
  height: 100px;
  padding: 80px;
  background-color: #892be224;
  margin-top: 20px;
`;

function Footer() {
  return (
    <StFooterContainer>
      FOOTER // 필요할진 모르겠지만 일단 Layout 연습겸 넣어볼까?
    </StFooterContainer>
  );
}

export default Footer;
