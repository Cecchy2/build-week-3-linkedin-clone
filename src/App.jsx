import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainProfile from "./components/MainProfile";
import Aside from "./components/AsideProfile";
import MyNavbar from "./components/MyNavbar";
import { Col, Container, Row } from "react-bootstrap";
function App() {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <MainProfile />
          </Col>
          <Col xs={12} md={2}>
            <Aside />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
