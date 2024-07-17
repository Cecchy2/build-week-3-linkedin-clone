import { Col, Form, InputGroup } from "react-bootstrap";

const HomeMain = () => {
  return (
    <Col xs={{ span: 6 }} className="profile-info ms-2">
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
        <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" />
      </InputGroup>
    </Col>
  );
};

export default HomeMain;
