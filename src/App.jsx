// import "./App.css";
import Router from "router/Router";
import "reset.css";
import GlobalStyle from "GlobalStyle";
import { useState } from "react";
import dummyData from "fakeData.json";
import { useSelector } from "react-redux";

function App() {
  const [fanLetters, setFanLetters] = useState(dummyData);
  const [chosenMember, setChosenMember] = useState("ALL");
  const data = useSelector((state) => {
    return state;
  });

  console.log("data", data);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
