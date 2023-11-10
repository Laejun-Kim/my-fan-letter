import React from "react";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();

  return (
    <>
      <div>Detail</div>
      <h2>여기다가 각 팬레터를 자세히 뿌릴 예정</h2>
      <p>여기까지 전역 스타일 설정이 마수를 끼칠까?</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home으로 가는 임시 버튼
      </button>
    </>
  );
}

export default Detail;
