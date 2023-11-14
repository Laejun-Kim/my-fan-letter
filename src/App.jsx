// import "./App.css";
import Router from "router/Router";
import "reset.css";
import GlobalStyle from "GlobalStyle";
import { useState } from "react";
// import baron from "assets/portrait/Baron.webp";
// import bladebird from "assets/portrait/bladebird.webp";
// import garen from "assets/portrait/garen.jpg";
// import sona from "assets/portrait/sona.jpg";
// import chad from "assets/portrait/chad.png";
// import uuid from "react-uuid";
import dummyData from "fakeData.json";
import FanLettersContext from "store/fan-letters";

// const dummyData = [
//   {
//     id: 1,
//     username: "Baron",
//     text: "아리 누나 너무 이뻐요",
//     foward: "AHRI",
//     portrait: baron,
//   },
//   {
//     id: 2,
//     username: "칼날부리",
//     text: "아칼리 춤 너무 잘춘다 ㄷㄷ",
//     foward: "AKALI",
//     portrait: bladebird,
//   },
//   {
//     id: 3,
//     username: "수풀속의 남자",
//     text: "이블린님 탑갱 안오시나요? 하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~하티하티 하티호~",
//     foward: "EVELYN",
//     portrait: garen,
//   },
//   {
//     id: 4,
//     username: "서폿안주면던짐",
//     text: "아이고 우리 카이사 이쁘게 잘 컸네~",
//     foward: "KAISA",
//     portrait: sona,
//   },
//   {
//     id: 5,
//     username: "MIKE",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, sapiente. Aut accusantium odit, mollitia repellendus provident perspiciatis eum nulla nam, quasi deleniti amet sint aperiam veritatis! Laboriosam qui sapiente, fugiat, est veritatis nemo ab quaerat quam dolor architecto reiciendis explicabo debitis consectetur asperiores perspiciatis ipsum inventore. Possimus molestiae odit delectus at temporibus aut vero deleniti magnam dignissimos, laboriosam pariatur ex ad vitae laudantium laborum rerum sed ea velit dolores quos quo praesentium? Iusto, dolores voluptatum? Minus illo culpa ex harum cupiditate laudantium aspernatur labore aperiam! Harum aut nostrum modi placeat unde libero, deserunt nulla? Ex reiciendis eveniet magni molestias voluptates!",
//     foward: "AHRI",
//     portrait: chad,
//   },
// ];

function App() {
  const [fanLetters, setFanLetters] = useState(dummyData);
  const [chosenMember, setChosenMember] = useState("ALL");

  console.log(fanLetters);
  return (
    <FanLettersContext.Provider
      value={{
        fanLetters: fanLetters,
        setFanLetters: setFanLetters,
        chosenMember: chosenMember,
        setChosenMember: setChosenMember,
      }}
    >
      <GlobalStyle />
      <Router
        fanLetters={fanLetters}
        setFanLetters={setFanLetters}
        chosenMember={chosenMember}
        setChosenMember={setChosenMember}
      />
    </FanLettersContext.Provider>
  );
}

export default App;
