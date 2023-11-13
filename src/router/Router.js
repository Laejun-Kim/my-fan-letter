import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "components/Layout";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Header from "components/Header";

const Router = ({
  fanLetters,
  setFanLetters,
  chosenMemeber,
  setChosenMember,
}) => {
  return (
    <BrowserRouter>
      <Layout>
        <Header
          setChosenMember={setChosenMember}
          chosenMemeber={chosenMemeber}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                fanLetters={fanLetters}
                setFanLetters={setFanLetters}
                chosenMemeber={chosenMemeber}
              />
            }
          />
          <Route
            path="detail/:id"
            element={
              <Detail fanLetters={fanLetters} setFanLetters={setFanLetters} />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
