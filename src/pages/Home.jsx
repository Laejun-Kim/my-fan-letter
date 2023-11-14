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

function Home({ fanLetters, setFanLetters, chosenMember }) {
  return (
    <StHomeContainer>
      <p>개발용 // 임시 선택된 멤버: {chosenMember}</p>
      <SubmitLetter fanLetters={fanLetters} setFanLetters={setFanLetters} />
      <Letters fanLetters={fanLetters} chosenMember={chosenMember} />
    </StHomeContainer>
  );
}

export default Home;
