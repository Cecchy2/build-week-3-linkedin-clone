import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import MyNavbar from './components/MyNavbar';

import MessageComp from "./components/MessageComp";
import HomeProfile from "./components/HomeProfile";

function App() {
  return (
    <>
      <MyNavbar />
      <HomeProfile />
      <MessageComp />
    </>
  );
}

export default App;