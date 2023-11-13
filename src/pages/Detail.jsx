import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

//styled components
const StDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

const StLetterDetail = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid black;
  padding: 10px;
  width: 90%;
`;
const StSenderDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: wheat;
  width: 100%;
  padding: 10px;
  font-size: larger;

  margin: 0 0 20px 0;
  img {
    margin-right: 10px;
    width: 100px;
    height: 100px;
  }
`;

const StBtnDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 50px;
  button {
    padding: 0.8rem;
    width: 100px;
    cursor: pointer;
  }
  button:first-of-type {
    background-color: #b0e0e688;
  }
  button:last-of-type {
    background-color: #cd32179c;
  }
`;
const StReceiverP = styled.p`
  font-size: large;
  margin-bottom: 10px;
`;

const StEditInput = styled.textarea`
  /* height: ${(props) => (props.isEditing ? "300px" : "auto")}; */
  min-height: 150px;
  width: 100%;
  /* word-break: break-all; */
`;

function Detail({ fanLetters, setFanLetters }) {
  const params = useParams();
  const matchingLetter = fanLetters.find((letter) => letter.id == params.id);
  const editRef = useRef("");

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(matchingLetter.text);
  const navigate = useNavigate();

  const deleteBtnHndlr = () => {
    let temp = fanLetters.filter((letter) => letter.id !== matchingLetter.id);
    setFanLetters(temp);
    navigate("/");
  };

  const editBtnHndlr = () => {
    setIsEditing((prev) => !prev);
  };
  const editChangeHndlr = (e) => {
    setEditText(e.target.value);
  };
  const editCompleteBtnHndlr = () => {
    let temp = fanLetters.filter((letter) => letter.id !== matchingLetter.id);
    let editTarget = fanLetters.filter(
      (letter) => letter.id == matchingLetter.id
    );
    editTarget[0].text = editRef.current.value;
    setFanLetters([...temp, editTarget[0]]);
    setIsEditing((prev) => !prev);
    navigate("/");
  };

  return (
    <StDetailContainer>
      <StLetterDetail>
        <StSenderDiv>
          <img src={matchingLetter.portrait} alt="" />
          <p>By. {matchingLetter.username}</p>
        </StSenderDiv>

        <StReceiverP>{matchingLetter.foward} 님에게...</StReceiverP>
        {!isEditing && <p>{matchingLetter.text}</p>}
        {isEditing && (
          <StEditInput
            value={editText}
            onChange={editChangeHndlr}
            ref={editRef}
            isEditing={isEditing}
          />
        )}
        <StBtnDiv>
          {!isEditing && <button onClick={editBtnHndlr}>수정</button>}
          {isEditing && (
            <button onClick={editCompleteBtnHndlr}>수정 완료</button>
          )}
          <button onClick={deleteBtnHndlr}>삭제</button>
        </StBtnDiv>
      </StLetterDetail>
    </StDetailContainer>
  );
}

export default Detail;
