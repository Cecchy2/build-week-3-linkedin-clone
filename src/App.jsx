import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainProfile from "./components/MainProfile";
import Aside from "./components/AsideProfile"
import MyNavbar from './components/MyNavbar';
function App() {
  return (
    <>
    <MyNavbar />
      <MainProfile />
      
      <Aside/>
    </>
  );
}

export default App;