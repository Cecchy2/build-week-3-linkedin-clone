import { Col, Container, Row } from "react-bootstrap";
import MainProfile from "./MainProfile";
import Aside from "./AsideProfile";

const HomeProfile = () => {
  return (
    <Container fluid className="px-3">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={7}>
          <MainProfile />
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeProfile;
