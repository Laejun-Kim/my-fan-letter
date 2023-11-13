import SubmitLetter from "components/SubmitLetter";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Letters from "components/Letters";

const StHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

function Home({ fanLetters, setFanLetters, chosenMemeber }) {
  return (
    <StHomeContainer>
      <p>개발용 임시 선택된 멤버: {chosenMemeber}</p>
      <SubmitLetter fanLetters={fanLetters} setFanLetters={setFanLetters} />
      <Letters fanLetters={fanLetters} chosenMemeber={chosenMemeber} />
    </StHomeContainer>
  );
}

export default Home;
