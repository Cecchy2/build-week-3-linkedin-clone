import { Col, Container, Row } from "react-bootstrap";

const Formazione = () => {
  return (
    <Container className="border rounded-3 my-3 profile-info">
      <div className="d-flex justify-content-between align-items-center p-0 ">
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
      <Container className=" p-0">
        <div className="p-3">
          <Row>
            <Col xs={2} className="p-0 ">
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
            <Col xs={10} className="p-0">
              <h5 className="mb-0 px-0">School</h5>
              <p className="mb-0">Where</p>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
};

export default Formazione;
