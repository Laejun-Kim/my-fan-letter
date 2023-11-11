import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const StForm = styled.form`
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

function SubmitLetter({ setFanLetters, fanLetters }) {
  const [userName, setUserName] = useState("");
  const [letterContent, setLetterContent] = useState("");
  const [selmem, setSelmem] = useState("AKALI");
  const memberSelectHndlr = (e) => {
    setSelmem(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("연결됨");
    let newLetter = {
      id: uuid(),
      username: userName,
      text: letterContent,
      foward: selmem,
      portrait: null,
    };
    setFanLetters([...fanLetters, newLetter]);
  };

  return (
    <StForm onSubmit={submitHandler}>
      <label htmlFor="username">닉네임 : </label>
      <input
        type="text"
        id="username"
        placeholder="너의 이름을 적어주세요"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor="letterContent">메시지 : </label>
      <input
        type="text"
        id="letterContent"
        placeholder="응원 메시지를 적어주세요!"
        value={letterContent}
        onChange={(e) => setLetterContent(e.target.value)}
      />
      <span>
        <label htmlFor="toWhom">누구에게 보내는 메시지인가요?</label>
        <select onChange={memberSelectHndlr} name="" id="toWhom">
          <option value="AKALI">아칼리</option>
          <option value="AHRI">아리</option>
          <option value="EVELYN">이블린</option>
          <option value="KAISA">카이사</option>
        </select>
      </span>
      <button>제출하기</button>
    </StForm>
  );
}

export default SubmitLetter;
