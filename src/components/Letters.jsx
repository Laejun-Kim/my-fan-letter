import React, { useContext } from "react";
import styled from "styled-components";
import EachLetter from "./EachLetter";
import FanLettersContext from "store/fan-letters";

const StLetters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;

  > p {
    margin: 20px;
  }
`;

function Letters() {
  const ctx = useContext(FanLettersContext);

  let filteredLetter;
  switch (ctx.chosenMember) {
    case "ALL":
      filteredLetter = ctx.fanLetters;
      break;
    case "AKALI":
      filteredLetter = ctx.fanLetters.filter(
        (letter) => letter.foward === "AKALI"
      );
      break;
    case "AHRI":
      filteredLetter = ctx.fanLetters.filter(
        (letter) => letter.foward === "AHRI"
      );
      break;
    case "EVELYN":
      filteredLetter = ctx.fanLetters.filter(
        (letter) => letter.foward === "EVELYN"
      );
      break;
    case "KAISA":
      filteredLetter = ctx.fanLetters.filter(
        (letter) => letter.foward === "KAISA"
      );
      break;
  }

  // console.log(ctx.chosenMember);
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
