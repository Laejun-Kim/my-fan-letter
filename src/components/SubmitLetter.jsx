import React, { useState, useEffect } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { setFanLetters } from "redux/modules/fanletter";
import ReusableButton from "./ReusableButton";
import ReusableModal from "./ReusableModal";

//styled-components
const StForm = styled.form`
  border: 2px solid #734bad;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 10px;
  gap: 10px;

  button {
    padding: 0.7rem;
    color: white;
    background-color: #734bad;
    font-weight: 600;
  }
`;
const StTextarea = styled.textarea`
  width: 500px;
  height: 3rem;
  resize: none;
`;
const StDivForLetterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

function SubmitLetter() {
  //redux
  const fanLetters = useSelector((state) => state.fanLetter);
  const chosenMember = useSelector((state) => state.chosenMember.chosenMember);

  const dispatch = useDispatch();

  //local states
  const [modalActivation, setModalActivation] = useState();
  const [userName, setUserName] = useState("");
  const [letterContent, setLetterContent] = useState("");
  const [selmem, setSelmem] = useState("AKALI");

  const memberSelectHndlr = (e) => {
    setSelmem(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setModalActivation({
      title: "메시지 등록",
      message: "메시지가 등록되었습니다! 감사합니다 ❤️",
    });

    //날짜 생성
    let formattedDate = new Intl.DateTimeFormat("ko-KR", {
      dateStyle: "full",
      timeStyle: "short",
    }).format(new Date());
    //신규 팬레터 생성
    let newLetter = {
      id: uuid(),
      username: userName,
      text: letterContent,
      foward: selmem,
      postedTime: formattedDate,
      portrait:
        "https://global.discourse-cdn.com/turtlehead/optimized/2X/c/c830d1dee245de3c851f0f88b6c57c83c69f3ace_2_250x250.png",
    };
    // ctx.setFanLetters([...fanLetters, newLetter]);
    dispatch(setFanLetters([...fanLetters, newLetter]));
  };

  const onClose = () => {
    setModalActivation();
  };

  //form 입력값을 초기화
  useEffect(() => {
    setUserName("");
    setLetterContent("");
  }, [chosenMember, fanLetters]);

  return (
    <>
      {modalActivation && (
        <ReusableModal
          title={modalActivation.title}
          message={modalActivation.message}
          btnMsg={modalActivation.btnMsg}
          btnFn={modalActivation.btnFn}
          onClose={onClose}
        />
      )}
      <StForm onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">닉네임 : </label>
          <input
            type="text"
            id="username"
            placeholder="당신의 이름을 적어주세요"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <StDivForLetterContent>
          <label htmlFor="letterContent">메시지 : </label>
          <StTextarea
            type="text"
            id="letterContent"
            placeholder="응원 메시지를 적어주세요!"
            value={letterContent}
            onChange={(e) => setLetterContent(e.target.value)}
            required
          />
        </StDivForLetterContent>

        <span>
          <label htmlFor="toWhom">누구에게 보내는 메시지인가요?</label>&nbsp;
          <select onChange={memberSelectHndlr} name="" id="toWhom">
            <option value="AKALI">아칼리</option>
            <option value="AHRI">아리</option>
            <option value="EVELYN">이블린</option>
            <option value="KAISA">카이사</option>
          </select>
        </span>
        <ReusableButton>메시지 보내기</ReusableButton>
      </StForm>
    </>
  );
}

export default SubmitLetter;
