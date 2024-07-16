import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainProfile from "./components/MainProfile";
import Aside from "./components/AsideProfile";
import MyNavbar from "./components/MyNavbar";
import MessageComp from "./components/MessageComp";

function App() {
  return (
    <>
      <MyNavbar />
      <MainProfile />
      <MessageComp />
      <Aside />
    </>
  );
}

export default App;
