import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import MyNavbar from './components/MyNavbar';

/* import MessageComp from "./components/MessageComp";
import HomeProfile from "./components/HomeProfile"; */
import ProfileSearch from "./components/PostCreator";

function App() {
  return (
    <>
      <MyNavbar />
      <ProfileSearch width="600px" />
    </>
  );
}
 /*       <HomeProfile />
      <MessageComp /> */
export default App;