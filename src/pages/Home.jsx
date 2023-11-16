import SubmitLetter from "components/SubmitLetter";
import React from "react";
import styled from "styled-components";
import Letters from "components/Letters";
import ReusableButton from "components/ReusableButton";

const StHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  /* background-color: aliceblue; */
`;

function Home() {
  const storageClear = () => {
    window.localStorage.removeItem("persist:root");
    window.location.reload();
  };
  return (
    <StHomeContainer>
      <SubmitLetter />
      <Letters />
      <ReusableButton onClick={storageClear}>
        개발자용:LocalStorage 지우기
      </ReusableButton>
      {"누르면 초기상태로 reset >> 배포시엔 지울것!"}
    </StHomeContainer>
  );
}

export default Home;
