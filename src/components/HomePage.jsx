import { Col, Container, Row } from "react-bootstrap";
import HomeAsideLeft from "./HomeAsideLeft";
import HomeAsideRight from "./HomeAsideRight";
import HomeMain from "./HomeMain";

const HomePage = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={3}>
          <HomeAsideLeft></HomeAsideLeft>
        </Col>
        <Col xs={12} md={6}>
          <HomeMain></HomeMain>
        </Col>
        <Col xs={12} md={3}>
          <HomeAsideRight></HomeAsideRight>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
