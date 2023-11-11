import React from "react";
import styled from "styled-components";
import EachLetter from "./EachLetter";

const StLetters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  > p {
    margin: 20px;
  }
`;

function Letters({ fanLetters, chosenMemeber }) {
  let filteredLetter;
  switch (chosenMemeber) {
    case "ALL":
      filteredLetter = fanLetters;
      break;
    case "AKALI":
      filteredLetter = fanLetters.filter((letter) => letter.foward === "AKALI");
      break;
    case "AHRI":
      filteredLetter = fanLetters.filter((letter) => letter.foward === "AHRI");
      break;
    case "EVELYN":
      filteredLetter = fanLetters.filter(
        (letter) => letter.foward === "EVELYN"
      );
      break;
    case "KAISA":
      filteredLetter = fanLetters.filter((letter) => letter.foward === "KAISA");
      break;
  }

  console.log(chosenMemeber);
  return (
    <StLetters>
      {filteredLetter.length === 0 && (
        <p>아직 등록된 팬레터가 없어요! 팬레터를 보내볼까요?</p>
      )}
      {filteredLetter.map((letter) => {
        return <EachLetter key={letter.id} letter={letter} />;
      })}
    </StLetters>
  );
}

export default Letters;
