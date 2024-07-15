import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { RiArrowUpWideLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { PiNotePencilDuotone } from "react-icons/pi";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MessageComp() {
  return (
    <div className="d-inline-block position-fixed border rounded-top p-2" id="messageTool">
      <Dropdown as={NavItem} drop="up">
        <div className="d-flex justify-content-around align-items-center top-bar">
          <img
            src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="immagine user"
            className="border rounded-circle me-2"
            style={{ width: "35px" }}
          />
          <Dropdown.Toggle as={NavLink}>
            <span className="fs-6 fw-medium">Messagistica</span>
          </Dropdown.Toggle>
          <BsThreeDots className="ms-5" size={17} />
          <PiNotePencilDuotone className="ms-3" size={15} />
          <RiArrowUpWideLine className="ms-3" size={20} />
        </div>
        <Dropdown.Menu className="mb-3 dropdown-menu-custom">
          <Dropdown.Item className="messageDropDown p-0">
            <Container>
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
                  <p className="mb-0 truncate msgTxt">NOME: messaggio default dell' utente</p>
                </Col>
                <Col xs="auto">
                  <p className="msgTxt me-1">15 Luglio 2024</p>
                </Col>
              </Row>
            </Container>
          </Dropdown.Item>
          <hr className="w-75 ms-5" />
          <Dropdown.Item className="messageDropDown p-0">
            <Container>
              <Row className="align-items-center">
                <Col xs="auto">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1664199486611-3e1277e150cd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="immagine utente"
                    className="border rounded-circle img-fluid"
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
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default MessageComp;
