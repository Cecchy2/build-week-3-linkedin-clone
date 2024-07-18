import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCog, faStar, faInfoCircle, faPen } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Assicurati di importare il file CSS

const JobsLeftAside = () => {
  return (
    <div>
      <div className="bg-white p-3 rounded mb-3" style={{ width: '250px', boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}>
        <Row className="mb-2">
          <Col>
            <Button variant="custom" className="w-100 d-flex align-items-center custom-button text-start">
              <FontAwesomeIcon icon={faBriefcase} className="me-2" />
              <span>Le mie offerte di lavoro</span>
            </Button>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Button variant="custom" className="w-100 d-flex align-items-center custom-button text-start">
              <FontAwesomeIcon icon={faCog} className="me-2" />
              <span>Preferenze</span>
            </Button>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Button variant="custom" className="w-100 d-flex align-items-center custom-button text-start">
              <FontAwesomeIcon icon={faStar} className="me-2" />
              <span>Valutazioni delle competenze</span>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="custom" className="w-100 d-flex align-items-center custom-button text-start">
              <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
              <span>Indicazioni per chi cerca lavoro</span>
            </Button>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <Button variant="primary" className=" d-flex align-items-center custom-publish-button">
            <FontAwesomeIcon icon={faPen} className="me-2" />
            <span className="text-blue font-weight-bold">Pubblica offerta gratuita</span>
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default JobsLeftAside;
