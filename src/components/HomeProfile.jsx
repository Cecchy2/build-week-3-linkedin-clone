import { Col, Container, Row } from "react-bootstrap";
import MainProfile from "./MainProfile";
import Aside from "./AsideProfile";

const HomeProfile = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={7}>
          <MainProfile />
        </Col>
        <Col xs={12} md={5}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
};
export default HomeProfile;
