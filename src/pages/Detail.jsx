import React, { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setFanLetters } from "redux/modules/fanletter";
import ReusableButton from "components/ReusableButton";
import ReusableModal from "components/ReusableModal";

//styled components
const StDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 50px;
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
  background-color: #7949b434;
  width: 100%;
  padding: 10px;
  font-size: larger;

  margin: 0 0 20px 0;
  img {
    margin-right: 10px;
    width: 100px;
    height: 100px;
  }
  span {
    font-size: small;
  }
  p {
    font-size: larger;
    margin-bottom: 10px;
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
  min-height: 150px;
  width: 100%;
`;

function Detail() {
  //redux
  const fanLetters = useSelector((state) => state.fanLetter);
  const dispatch = useDispatch();

  const params = useParams();
  const navigate = useNavigate();
  const matchingLetter = fanLetters.find((letter) => letter.id == params.id);
  const editRef = useRef("");

  // local states
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(matchingLetter.text);
  const [modalActivation, setModalActivation] = useState();

  const deleteBtnHndlr = () => {
    setModalActivation({
      title: "삭제 확인",
      message: "한번 삭제된 메시지는 복구할 수 없습니다. 삭제하시겠습니까?",
      btnMsg: "삭제",
      btnFn: onDelete,
    });
    //기존 삭제 로직(모달 미사용)
    // if (window.confirm("삭제하시겠습니까?")) {
    //   let temp = fanLetters.filter((letter) => letter.id !== matchingLetter.id);
    //   // ctx.setFanLetters(temp);
    //   dispatch(setFanLetters(temp));
    //   navigate("/");
    // }
  };

  const editBtnHndlr = () => {
    setIsEditing((prev) => !prev);
  };
  const editChangeHndlr = (e) => {
    setEditText(e.target.value);
  };
  const editCompleteBtnHndlr = () => {
    let editTarget = fanLetters.filter(
      (letter) => letter.id == matchingLetter.id
    );
    if (editTarget[0].text === editRef.current.value) {
      setModalActivation({
        title: "수정 오류",
        message:
          "변경된 내용이 없는것 같습니다. 내용이 변경된 경우에 [수정완료]버튼을 눌러주세요",
      });

      // window.alert("수정 사항이 없는것 같네요");
      setIsEditing((prev) => !prev);
    } else {
      setModalActivation({
        title: "수정 확인",
        message: "이대로 수정하시겠습니까?",
        btnMsg: "확인",
        btnFn: onEditConfirm,
      });

      // let temp = fanLetters.filter((letter) => letter.id !== matchingLetter.id);
      // editTarget[0].text = editRef.current.value;
      // // ctx.setFanLetters([...temp, editTarget[0]]);
      // dispatch(setFanLetters([...temp, editTarget[0]]));

      // setIsEditing((prev) => !prev);
      // // navigate("/");
    }
  };

  //모달에 전달할 함수들
  const onClose = () => {
    setModalActivation();
  };
  const onDelete = () => {
    let temp = fanLetters.filter((letter) => letter.id !== matchingLetter.id);
    dispatch(setFanLetters(temp));
    navigate("/");
  };
  const onEditConfirm = () => {
    let editTarget = fanLetters.filter(
      (letter) => letter.id == matchingLetter.id
    );
    let temp = fanLetters.filter((letter) => letter.id !== matchingLetter.id);
    editTarget[0].text = editRef.current.value;
    dispatch(setFanLetters([...temp, editTarget[0]]));
    setModalActivation();
    setIsEditing((prev) => !prev);
  };

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
      <StDetailContainer>
        <StLetterDetail>
          <StSenderDiv>
            <img src={matchingLetter.portrait} alt="" />
            <div>
              <p>{matchingLetter.username}</p>
              <span>{matchingLetter.postedTime}</span>
            </div>
          </StSenderDiv>

          <StReceiverP>{matchingLetter.foward} 님에게...</StReceiverP>
          {!isEditing && <p>{matchingLetter.text}</p>}
          {isEditing && (
            <StEditInput
              value={editText}
              onChange={editChangeHndlr}
              ref={editRef}
            />
          )}
          <StBtnDiv>
            {!isEditing && (
              <ReusableButton onClick={editBtnHndlr}>수정</ReusableButton>
            )}
            {isEditing && (
              <ReusableButton onClick={editCompleteBtnHndlr}>
                수정 완료
              </ReusableButton>
            )}
            <ReusableButton onClick={deleteBtnHndlr}>삭제</ReusableButton>
          </StBtnDiv>
        </StLetterDetail>
      </StDetailContainer>
    </>
  );
}

export default Detail;
