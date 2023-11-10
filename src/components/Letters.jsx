import React from "react";
import styled from "styled-components";

const StLetters = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const StLetterDiv = styled.div`
  display: flex;
  border: 1px solid red;
  width: 100%;
  text-align: center;
  img {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }
  /* &:hover {
    scale: 1.1;
  } */
`;

function Letters({ fanLetters }) {
  console.log(fanLetters);
  return (
    <StLetters>
      {fanLetters.map((letter) => {
        return (
          <StLetterDiv>
            <img src={letter.portrait} alt="" />
            <div>
              <p>By. {letter.username}</p>
              <br />
              <p>To. {letter.foward}</p>
              <br />
              <p>{letter.text}</p>
            </div>
          </StLetterDiv>
        );
      })}
    </StLetters>
  );
}

export default Letters;
