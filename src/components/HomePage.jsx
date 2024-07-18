import { Col, Container, Row } from "react-bootstrap";
import JobsLeftAside from "./JobsLeftAside";
import HomeAsideRight from "./HomeAsideRight";
import HomeMain from "./HomeMain";
import 'bootstrap/dist/css/bootstrap.min.css';


const HomePage = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={3}>
          <JobsLeftAside />
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
