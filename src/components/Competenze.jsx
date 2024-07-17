import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

const Competenze = () => {
  return (
    <Container className="border rounded-3 my-3 profile-info ">
      <div className="d-flex justify-content-between align-items-center p-0">
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
              <Col xs={2} className="p-0 ">
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
              <Col xs={10} className="p-0">
                <p className="mb-0">Competenza #1</p>
              </Col>
            </Row>
          </Container>
        </ListGroupItem>
        <ListGroupItem className="border-0 py-3">
          <Container>
            <Row>
              <Col xs={2} className="p-0 ">
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
              <Col xs={10} className="p-0">
                <p className="mb-0">Competenza #2</p>
              </Col>
            </Row>
          </Container>
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};
export default Competenze;
