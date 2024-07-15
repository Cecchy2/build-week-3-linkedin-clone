import { Button, Col, Container, Image, Row } from "react-bootstrap";

const MainProfile = () => {
  return (
    <>
      <Container className="badgeContainer border rounded-3 my-3">
        <Image className="img-fluid h-25" src="../assets/Business LinkedIn Banner.png" alt="profile banner" />
        <Container fluid>
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
        <div className="d-flex justify-content-between align-items-center">
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
    </>
  );
};
export default MainProfile;
