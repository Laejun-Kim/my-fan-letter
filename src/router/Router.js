import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "components/Layout";
import Home from "pages/Home";
import Detail from "pages/Detail";

const Router = ({
  fanLetters,
  setFanLetters,
  chosenMember,
  setChosenMember,
}) => {
  return (
    <BrowserRouter>
      <Layout setChosenMember={setChosenMember} chosenMember={chosenMember}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                fanLetters={fanLetters}
                setFanLetters={setFanLetters}
                chosenMember={chosenMember}
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
