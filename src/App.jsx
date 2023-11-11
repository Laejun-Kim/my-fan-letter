// import "./App.css";
import Router from "router/Router";
import "reset.css";
import GlobalStyle from "GlobalStyle";
import { useState } from "react";
import baron from "assets/portrait/Baron.webp";
import bladebird from "assets/portrait/bladebird.webp";
import garen from "assets/portrait/garen.jpg";
import sona from "assets/portrait/sona.jpg";
import chad from "assets/portrait/chad.png";

const dummyData = [
  {
    id: 1,
    username: "Baron",
    text: "아리 누나 너무 이뻐요",
    foward: "AHRI",
    portrait: baron,
  },
  {
    id: 2,
    username: "칼날부리",
    text: "아칼리 춤 너무 잘춘다 ㄷㄷ",
    foward: "AKALI",
    portrait: bladebird,
  },
  {
    id: 3,
    username: "수풀속의 남자",
    text: "이블린님 탑갱 안오시나요?",
    foward: "EVELYN",
    portrait: garen,
  },
  // {
  //   id: 4,
  //   username: "서폿안주면던짐",
  //   text: "아이고 우리 카이사 이쁘게 잘 컸네~",
  //   foward: "KAISA",
  //   portrait: sona,
  // },
  {
    id: 5,
    username: "MIKE",
    text: "I love Ahri! Marry me Ahri!! Marry me Ahri!! Marry me Ahri!! Marry me Ahri!! Marry me Ahri!! Marry me Ahri!! Marry me Ahri!! Marry me Ahri!! ",
    foward: "AHRI",
    portrait: chad,
  },
];

function App() {
  const [fanLetters, setFanLetters] = useState(dummyData);
  const [chosenMemeber, setChosenMember] = useState("ALL");

  console.log(fanLetters);
  return (
    <>
      <GlobalStyle />
      <Router
        fanLetters={fanLetters}
        setFanLetters={setFanLetters}
        chosenMemeber={chosenMemeber}
        setChosenMember={setChosenMember}
      />
    </>
  );
}

export default App;
