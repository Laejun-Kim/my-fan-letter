import React from "react";
import styled from "styled-components";
import EachLetter from "./EachLetter";
import { useSelector } from "react-redux";

const StLetters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  margin-bottom: 50px;

  > p {
    margin: 20px;
  }
`;

function Letters() {
  const chosenMember = useSelector((state) => state.chosenMember.chosenMember);
  const fanLetters = useSelector((state) => state.fanLetter);
  console.log(fanLetters);

  // const ctx = useContext(FanLettersContext);

  let filteredLetter;
  switch (chosenMember) {
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
  console.log(filteredLetter);

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
