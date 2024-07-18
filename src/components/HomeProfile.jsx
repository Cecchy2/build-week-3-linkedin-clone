import { Col, Container, Row } from "react-bootstrap";
import MainProfile from "./MainProfile";
import Aside from "./AsideProfile";

const HomeProfile = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="p-0">
          <MainProfile />
        </Col>
        <Col xs={12} md={3} className="p-0">
          <Aside />
        </Col>
      </Row>
    </Container>
  );
};
export default HomeProfile;
