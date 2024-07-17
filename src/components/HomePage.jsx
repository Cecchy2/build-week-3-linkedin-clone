import { Container, Row } from "react-bootstrap";
import HomeAsideLeft from "./HomeAsideLeft";
import HomeAsideRight from "./HomeAsideRight";
import HomeMain from "./HomeMain";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <HomeAsideLeft></HomeAsideLeft>
        <HomeMain></HomeMain>
        <HomeAsideRight></HomeAsideRight>
      </Row>
    </Container>
  );
};

export default HomePage;
