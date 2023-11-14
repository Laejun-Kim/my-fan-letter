import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StLetterDiv = styled.div`
  display: flex;
  border: 1px solid #d1e0fa;
  width: 90%;
  margin-top: 10px;
  padding: 10px;

  div {
    width: 100%;
  }

  img {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }

  &:hover {
    scale: 1.05;
  }
`;

const StP = styled.p`
  /* display: block; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 80%;
`;

function EachLetter({ letter }) {
  const navigate = useNavigate();
  const letterClickHndlr = () => {
    navigate(`/detail/${letter.id}`);
  };
  return (
    <StLetterDiv onClick={letterClickHndlr}>
      <img src={letter.portrait} alt="" />
      <div>
        <p>By. {letter.username}</p>
        <br />
        <p>To. {letter.foward}</p>
        <br />
        <StP>{letter.text}</StP>
      </div>
    </StLetterDiv>
  );
}

export default EachLetter;
