import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, setChosenMember, chosenMember }) {
  return (
    <>
      <Header chosenMember={chosenMember} setChosenMember={setChosenMember} />

      {children}
      <Footer />
    </>
  );
}

export default Layout;
