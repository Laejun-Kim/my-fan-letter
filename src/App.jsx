// import "./App.css";
import Router from "router/Router";
import "reset.css";
import GlobalStyle from "GlobalStyle";
import { useState } from "react";
import dummyData from "fakeData.json";
import FanLettersContext from "store/fan-letters";

function App() {
  const [fanLetters, setFanLetters] = useState(dummyData);
  const [chosenMember, setChosenMember] = useState("ALL");

  // console.log(fanLetters);
  return (
    <>
      <GlobalStyle />
      <FanLettersContext.Provider
        value={{
          fanLetters: fanLetters,
          setFanLetters: setFanLetters,
          chosenMember: chosenMember,
          setChosenMember: setChosenMember,
        }}
      >
        <Router />
      </FanLettersContext.Provider>
    </>
  );
}

export default App;
