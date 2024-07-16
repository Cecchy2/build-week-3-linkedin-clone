import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainProfile from "./components/MainProfile";
import MyNavbar from './components/MyNavbar';
import Aside from "./components/AsideProfile";

function App() {
  return (
    <>
      <MyNavbar />
      <MainProfile />
    
      <Aside/>
    </>)}

export default App;