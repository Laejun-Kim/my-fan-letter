// import "./App.css";
import Router from "router/Router";
import "reset.css";
import GlobalStyle from "GlobalStyle";

function App() {
  // const [fanLetters, setFanLetters] = useState(dummyData);
  // const [chosenMember, setChosenMember] = useState("ALL");
  // const data = useSelector((state) => {
  //   return state;
  // });

  // console.log("data", data);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
