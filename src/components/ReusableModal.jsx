import React from "react";
import ReusableButton from "./ReusableButton";
import styled from "styled-components";

const StBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
const StModalDiv = styled.div`
  position: fixed;
  top: 30vh;
  left: 20%;
  width: 60%;
  z-index: 100;
  overflow: hidden;
  background-color: white; //임의추가
  border-radius: 10px;

  header {
    background: #4f005f;
    padding: 1rem;
  }
  header > h2 {
    margin: 0;
    color: white;
  }
  div {
    padding: 1rem;
  }
  footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }
  footer button {
    margin-left: 20px;
    padding: 0.5em;
  }
`;

function ReusableModal(props) {
  return (
    <>
      <StBackdrop onClick={props.onClose} />
      <StModalDiv>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          {props.btnMsg && (
            <ReusableButton onClick={props.btnFn}>
              {props.btnMsg}
            </ReusableButton>
          )}
          <ReusableButton onClick={props.onClose}>창 닫기</ReusableButton>
        </footer>
      </StModalDiv>
    </>
  );
}

export default ReusableModal;
