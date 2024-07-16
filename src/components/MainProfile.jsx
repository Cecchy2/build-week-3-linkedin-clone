import { useState } from "react";
import { Button, Col, Container, Form, Image, ListGroup, ListGroupItem, Modal, Row } from "react-bootstrap";

const MainProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="badgeContainer border rounded-3 my-3 px-0 " style={{ overflow: "hidden" }}>
        <div className="position-relative">
          <Image
            className=" w-100"
            src="https://media.licdn.com/dms/image/D4D16AQFsGlm6VDoeXg/profile-displaybackgroundimage-shrink_350_1400/0/1720601266129?e=1726704000&v=beta&t=4S9lvM6oCsEmZvwmBWICewK5cjTLixOITQDewadEhug"
            alt="profile banner"
            style={{ maxHeight: "25vh" }}
          />
          <Image
            className="rounded-circle position-absolute mb-3"
            src="https://media.licdn.com/dms/image/D4D03AQEsFXt1c56YnQ/profile-displayphoto-shrink_200_200/0/1715036214765?e=1726704000&v=beta&t=C9wJQFQf0myJr_2j3b9YQuVIbQVwcKtaTPbaiNQyNzI"
            style={{ top: "100px", left: "50px" }}
          />
        </div>
        <Container fluid className="mt-5">
          <div className="mt-5 w-50 ms-auto d-flex justify-content-end">
            <Button variant="link" onClick={handleShow} style={{ padding: 0 }}>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9ImVkaXQtbWVkaXVtIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIyNHgyNCIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNMjEuMTMgMi44NmEzIDMgMCAwMC00LjE3IDBsLTEzIDEzTDIgMjJsNi4xOS0yTDIxLjEzIDdhMyAzIDAgMDAwLTQuMTZ6TTYuNzcgMTguNTdsLTEuMzUtMS4zNEwxNi42NCA2IDE4IDcuMzV6Ii8+Cjwvc3ZnPg=="
                width="25"
                height="25"
              />
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modifica presentazione</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className="text-muted fs-6">
                  <span>*</span>indica che è obbligatorio
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nome*</Form.Label>
                    <Form.Control type="text" placeholder="nome" autoFocus />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Cognome*</Form.Label>
                    <Form.Control type="text" placeholder="cognome" autoFocus />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" autoFocus />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="username" autoFocus />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Bio*</Form.Label>
                    <Form.Control type="text" placeholder="bio" autoFocus />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Title*</Form.Label>
                    <Form.Control type="text" placeholder="title" autoFocus />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Area</Form.Label>
                    <Form.Control type="text" placeholder="area" autoFocus />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <h2>Andrea Geria</h2>
          <Row>
            <Col xs={12} md={8}>
              <p className="mb-1">
                Junior Fullstack Developer | HTML5 | CSS3 | Javascript | Bootstrap | Sass | React | React-Vite |
                React-testing | Redux
              </p>
              <p className="mt-0 text-secondary">
                Luogo -{" "}
                <a className="link-offset-2 link-underline link-underline-opacity-0" href="#">
                  Informazioni di contatto
                </a>
              </p>
            </Col>
            <Col xs={12} md={4}>
              <h5>Job</h5>

              <h5>Istruzione</h5>
            </Col>
          </Row>
          <Button className="ms-0 bgbtn-outline rounded-5 px-3 mx-1">Disponibile per</Button>
          <Button className="bgbtn-outline bg-transparent text-primary fw-semibold rounded-5 px-3 mx-2">
            Aggiungi sezione del profile
          </Button>
          <Button className="bgbtn-outline bg-transparent text-primary fw-semibold rounded-5 px-3 mx-1">
            Migliora Profilo
          </Button>
          <Row>
            <Col xs={12} md={8}>
              <Container className="bg-info-subtle rounded-3 mt-3 py-2 mb-3">
                <h5>Disponibile a lavorare</h5>
                <p>Ruoli di...</p>
                <p className="mb-0">
                  <a className="link-offset-2 link-underline link-underline-opacity-0" href="#">
                    Mostra dettagli
                  </a>
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="border rounded-3 my-3">
        <div className="d-flex justify-content-between align-items-center pt-3">
          <h4>Esperienza</h4>
          <button className="bg-transparent border-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
            </svg>
          </button>
        </div>
        <Container className="border-bottom">
          <Row>
            <Col xs={1}>
              <img
                width="48"
                src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1729123200&amp;v=beta&amp;t=h5xweoh6ztkgY0_oRfROE4Q649H11tcWlMMnHpR8qok"
                loading="lazy"
                height="48"
                alt="Logo di EPICODE"
                id="ember2008"
                className="ms-auto"
              ></img>
            </Col>
            <Col xs={11}>
              <h5 className="mb-0">Current Role</h5>
              <p className="mb-0">Where</p>
              <p className="mb-0">present from... </p>
              <p>Area</p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="border rounded-3 my-3">
        <div className="d-flex justify-content-between align-items-center pt-3">
          <h4>Formazione</h4>
          <button className="bg-transparent border-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
            </svg>
          </button>
        </div>
        <Container className="border-bottom p-0">
          <div className="p-3">
            <Row>
              <Col xs={1} className="p-0 ">
                <img
                  width="55"
                  src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1729123200&amp;v=beta&amp;t=h5xweoh6ztkgY0_oRfROE4Q649H11tcWlMMnHpR8qok"
                  loading="lazy"
                  height="55"
                  alt="Logo di EPICODE"
                  id="ember2008"
                  className="ms-auto"
                ></img>
              </Col>
              <Col xs={11} className="p-0">
                <h5 className="mb-0 px-0">School</h5>
                <p className="mb-0">Where</p>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      <Container className="border rounded-3 my-3">
        <div className="d-flex justify-content-between align-items-center pt-3">
          <h4>Competenze</h4>
          <button className="bg-transparent border-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
            </svg>
          </button>
        </div>
        <ListGroup>
          <ListGroupItem className="border-start-0 border-top-0 border-end-0 py-3">
            <Container>
              <Row>
                <Col xs={1} className="p-0 ">
                  <img
                    width="45"
                    src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1729123200&amp;v=beta&amp;t=h5xweoh6ztkgY0_oRfROE4Q649H11tcWlMMnHpR8qok"
                    loading="lazy"
                    height="45"
                    alt="Logo di EPICODE"
                    id="ember2008"
                    className="ms-auto"
                  ></img>
                </Col>
                <Col xs={11} className="p-0">
                  <p className="mb-0">Competenza #1</p>
                </Col>
              </Row>
            </Container>
          </ListGroupItem>
          <ListGroupItem className="border-0 py-3">
            <Container>
              <Row>
                <Col xs={1} className="p-0 ">
                  <img
                    width="45"
                    src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1729123200&amp;v=beta&amp;t=h5xweoh6ztkgY0_oRfROE4Q649H11tcWlMMnHpR8qok"
                    loading="lazy"
                    height="45"
                    alt="Logo di EPICODE"
                    id="ember2008"
                    className="ms-auto"
                  ></img>
                </Col>
                <Col xs={11} className="p-0">
                  <p className="mb-0">Competenza #2</p>
                </Col>
              </Row>
            </Container>
          </ListGroupItem>
        </ListGroup>
      </Container>
    </>
  );
};
export default MainProfile;
