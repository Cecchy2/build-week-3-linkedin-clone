import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { PiNotePencilDuotone } from "react-icons/pi";
import { RiArrowUpWideLine } from "react-icons/ri";
import { RiArrowDownWideLine } from "react-icons/ri";
import { Col, Container, Row, Button, InputGroup, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MessageComp() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`messageTool ${open ? "open" : ""}`}>
      <div className="d-flex justify-content-around align-items-center top-bar border rounded-top-2 p-2">
        <img
          src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="immagine user"
          className="border rounded-circle me-2 object-fit-cover"
          style={{ width: "35px" }}
        />
        <span className="fs-6 fw-medium textCursor" onClick={() => setOpen(!open)}>
          Messaggistica
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
          {open ? <RiArrowDownWideLine size={20} /> : <RiArrowUpWideLine size={20} />}
        </Button>
      </div>
      <div id="message-collapse" className="dropdown-menu-custom">
        <Container className="border-start border-end">
          <Row>
            <Col>
              <InputGroup size="lg" className="my-3 ">
                <Form.Control
                  aria-label="large"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="cerca messaggi"
                  variant="primary"
                  id="inputColor"
                  className="p-0 fs-6"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="align-items-center messageRow">
            <Col xs="auto" className="p-0">
              <img
                src="https://plus.unsplash.com/premium_photo-1664199486611-3e1277e150cd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="immagine utente"
                className="border rounded-circle img-fluid ms-1 object-fit-cover"
                style={{ width: "50px", height: "50px" }}
              />
            </Col>
            <Col className="messageData">
              <p className="mb-0 truncate msgTxt little d-flex align-items-center">
                Nina Moric
                <span className="ms-auto p-0">15 Luglio 2024</span>
              </p>
              <p className="mb-0 truncate msgTxt little text-truncate-2 p-0">
                Nina: Ciao Andrea, ti ho visto su linkedin e ti vorrei conoscere, possiamo incontrarci?{" "}
              </p>
            </Col>
          </Row>
          <hr className="ms-5" />
          <Row className="align-items-center messageRow">
            <Col xs="auto" className="p-0">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="immagine utente"
                className="border rounded-circle img-fluid ms-1 object-fit-cover"
                style={{ width: "50px", height: "50px" }}
              />
            </Col>
            <Col className="messageData">
              <p className="mb-0 truncate msgTxt little d-flex align-items-center">
                Belen Rodriguez
                <span className="ms-auto">10 Luglio 2024</span>
              </p>
              <p className="mb-0 truncate msgTxt little text-truncate-2 p-0">
                BELEN: Ciao Andrea non sposarti, io e le mie amiche ti vogliamo..
              </p>
            </Col>
          </Row>
          <hr className="ms-5" />
          <Row className="align-items-center messageRow">
            <Col xs="auto" className="p-0">
              <img
                src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="immagine utente"
                className="border rounded-circle img-fluid ms-1 object-fit-cover"
                style={{ width: "50px", height: "50px" }}
              />
            </Col>
            <Col className="messageData">
              <p className="mb-0 truncate msgTxt little d-flex align-items-center">
                Nino D&apos angelo
                <span className="ms-auto p-o">15 Luglio 2024</span>
              </p>
              <p className="mb-0 truncate msgTxt little text-truncate-2 p-0">
                Nino: Ciao Umberto, sono Nino D&apos angelo, ti voglio
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MessageComp;
