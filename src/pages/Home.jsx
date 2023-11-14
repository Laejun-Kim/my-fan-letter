import SubmitLetter from "components/SubmitLetter";
import React from "react";
import styled from "styled-components";
import Letters from "components/Letters";

const StHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

function Home() {
  return (
    <StHomeContainer>
      <SubmitLetter />
      <Letters />
    </StHomeContainer>
  );
}

export default Home;
