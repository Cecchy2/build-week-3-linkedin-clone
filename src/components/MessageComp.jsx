import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { PiNotePencilDuotone } from "react-icons/pi";
import { RiArrowUpWideLine } from "react-icons/ri";
import { Col, Container, Row, Button, InputGroup, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoSearchOutline } from "react-icons/io5";

function MessageComp() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`messageTool ${open ? "open" : ""}`}>
      <div className="d-flex justify-content-around align-items-center top-bar border rounded-top-2 p-2">
        <img
          src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="immagine user"
          className="border rounded-circle me-2"
          style={{ width: "35px" }}
        />
        <span className="fs-6 fw-medium" onClick={() => setOpen(!open)}>
          Messagistica
        </span>
        <BsThreeDots className="ms-5" size={17} />
        <PiNotePencilDuotone className="ms-3" size={15} />
        <Button
          variant="link"
          className="p-0 ms-3"
          onClick={() => setOpen(!open)}
          aria-controls="message-collapse"
          aria-expanded={open}
        >
          <RiArrowUpWideLine size={20} />
        </Button>
      </div>
      <div id="message-collapse" className="dropdown-menu-custom">
        <Container className="border-start border-end">
          <Row>
            <Col>
              <InputGroup size="sm" className="my-3">
                <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="cerca messaggi" />
              </InputGroup>
            </Col>
          </Row>
          <Row className="align-items-center messageRow">
            <Col xs="auto">
              <img
                src="https://plus.unsplash.com/premium_photo-1664199486611-3e1277e150cd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="immagine utente"
                className="border rounded-circle img-fluid ms-1"
                style={{ width: "50px", height: "50px" }}
              />
            </Col>
            <Col className="messageData">
              <p className="mb-0 truncate msgTxt">NOME COGNOME</p>
              <p className="mb-0 truncate msgTxt">NOME: messaggio default dell'utente</p>
            </Col>
            <Col xs="auto">
              <p className="msgTxt me-1">15 Luglio 2024</p>
            </Col>
          </Row>
          <hr className="ms-5" />
          <Row className="align-items-center">
            <Col xs="auto">
              <img
                src="https://plus.unsplash.com/premium_photo-1664199486611-3e1277e150cd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="immagine utente"
                className="border rounded-circle img-fluid ms-1"
                style={{ width: "50px", height: "50px" }}
              />
            </Col>
            <Col className="messageData">
              <p className="mb-0 truncate msgTxt">NOME COGNOME</p>
              <p className="mb-0 truncate msgTxt">NOME: messaggio default dell'utente</p>
            </Col>
            <Col xs="auto">
              <p className="msgTxt me-1">15 Luglio 2024</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MessageComp;
