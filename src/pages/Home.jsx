import SubmitLetter from "components/SubmitLetter";
import React from "react";
import styled from "styled-components";
import Letters from "components/Letters";
import ReusableButton from "components/UI/ReusableButton";
import Wrapper from "components/UI/Wrapper";

const StHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 900px;

  height: 100%;
  padding: 10px;
  min-width: 700px;
  margin: auto;
`;

function Home() {
  const storageClear = () => {
    window.localStorage.removeItem("persist:root");
    window.location.reload();
  };
  return (
    <Wrapper>
      <StHomeContainer>
        <SubmitLetter />
        <Letters />
      </StHomeContainer>
    </Wrapper>
  );
}

export default Home;
