import React from "react";
import Header from "./Header";

function Layout({ children, setChosenMember, chosenMember }) {
  return (
    <>
      <Header chosenMember={chosenMember} setChosenMember={setChosenMember} />

      {children}
    </>
  );
}

export default Layout;
