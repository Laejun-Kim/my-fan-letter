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
`;

const StLetterDetail = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  width: 90%;
`;

const StEditInput = styled.input`
  height: 300px;
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
        <img src={matchingLetter.portrait} alt="" />
        <p>By. {matchingLetter.username}</p>

        <p>{matchingLetter.foward} 에게 쓴 편지</p>
        {!isEditing && <p>{matchingLetter.text}</p>}
        {isEditing && (
          <StEditInput
            value={editText}
            onChange={editChangeHndlr}
            ref={editRef}
          />
        )}
        <div>
          {!isEditing && <button onClick={editBtnHndlr}>수정</button>}
          {isEditing && (
            <button onClick={editCompleteBtnHndlr}>수정 완료</button>
          )}
          <button onClick={deleteBtnHndlr}>삭제</button>
        </div>
      </StLetterDetail>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home으로 가는 임시 버튼
      </button>
    </StDetailContainer>
  );
}

export default Detail;
