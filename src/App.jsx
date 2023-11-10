// import "./App.css";
import Router from "router/Router";
import "reset.css";
import GlobalStyle from "GlobalStyle";
import { useState } from "react";

const dummyData = [
  { id: 1, username: "Baron", text: "아리 누나 너무 이뻐요", foward: "AHRI" },
  {
    id: 2,
    username: "칼날부리",
    text: "아칼리 춤 너무 잘춘다 ㄷㄷ",
    foward: "AKALI",
  },
  {
    id: 3,
    username: "탑신병자",
    text: "이블린님 탑갱 안오시나요?",
    foward: "EVELYN",
  },
  { id: 4, username: "JOHN DOE", text: "카이사 최고!!", foward: "KAISA" },
  { id: 5, username: "MIKE", text: "I love Ahri", foward: "AHRI" },
];

function App() {
  const [fanLetters, setFanLetters] = useState(dummyData);
  console.log(fanLetters);
  return (
    <>
      <GlobalStyle />
      <Router fanLetters={fanLetters} setFanLetters={setFanLetters} />
    </>
  );
}

export default App;
