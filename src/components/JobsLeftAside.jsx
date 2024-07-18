import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCog, faStar, faInfoCircle, faPen } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Assicurati di importare il file CSS

const JobsLeftAside = () => {
  return (
    <>
      <div className="bg-white p-3 rounded mb-3 p-0" style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}>
        <Row className="mb-2">
          <Col>
            <Button variant="custom" className="w-100 d-flex align-items-center custom-button text-start p-0">
              <FontAwesomeIcon icon={faBriefcase} className="me-2" />
              Le mie offerte di lavoro
            </Button>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Button variant="custom" className="w-100 d-flex align-items-center custom-button text-start p-0">
              <FontAwesomeIcon icon={faCog} className="me-2" />
              Preferenze
            </Button>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Button variant="custom" className="w-100 d-flex align-items-center custom-button text-start p-0">
              <FontAwesomeIcon icon={faStar} className="me-2" />
              Valutazioni delle competenze
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="custom" className="w-100 d-flex align-items-center custom-button text-start p-0">
              <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
              Indicazioni per chi cerca lavoro
            </Button>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <Button variant="outline-primary" className="w-100 d-flex align-items-center custom-publish-button">
            <FontAwesomeIcon icon={faPen} className="me-2" />
            Pubblica offerta gratuita
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default JobsLeftAside;
