import React from "react";
import styled from "styled-components";

const StLetters = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const StLetterDiv = styled.div`
  border: 1px solid red;
  width: 100%;
  text-align: center;
`;

function Letters({ fanLetters }) {
  console.log(fanLetters);
  return (
    <StLetters>
      {fanLetters.map((letter) => {
        return (
          <StLetterDiv>
            <p>To. {letter.foward}</p>
            <br />
            <p>By. {letter.username}</p>
            <br />
            <p>{letter.text}</p>
          </StLetterDiv>
        );
      })}
    </StLetters>
  );
}

export default Letters;
