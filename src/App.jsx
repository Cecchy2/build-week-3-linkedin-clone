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
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/profilo/:idprofilo" element={<HomeProfile />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <MessageComp />
      </BrowserRouter>
    </>
  );
}
 /*       <HomeProfile />
      <MessageComp /> */
export default App;