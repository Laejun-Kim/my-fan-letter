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

function Home({ fanLetters, setFanLetters }) {
  const navigate = useNavigate();
  const [chosenMemeber, setChosenMember] = useState("AHRI");
  return (
    <StHomeContainer>
      <SubmitLetter />
      <Letters fanLetters={fanLetters} />
      <button
        onClick={() => {
          navigate("/detail");
        }}
      >
        디테일로 가는 임시 버튼
      </button>
    </StHomeContainer>
  );
}

export default Home;
