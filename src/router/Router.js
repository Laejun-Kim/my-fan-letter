import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "components/Layout";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Header from "components/Header";

const Router = ({ fanLetters, setFanLetters }) => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home fanLetters={fanLetters} setFanLetters={setFanLetters} />
            }
          />
          <Route path="detail" element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
