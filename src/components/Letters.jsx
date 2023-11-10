import React from "react";
import styled from "styled-components";
import EachLetter from "./EachLetter";

const StLetters = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

function Letters({ fanLetters }) {
  return (
    <StLetters>
      {fanLetters.map((letter) => {
        return <EachLetter key={letter.id} letter={letter} />;
      })}
    </StLetters>
  );
}

export default Letters;
