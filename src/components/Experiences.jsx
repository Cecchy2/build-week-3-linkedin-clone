import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createExp, getExp } from "../redux/actions";

const Experiences = ({ handleShowExp, showExp, handleCloseExp }) => {
  const dispatch = useDispatch();
  const profileMe = useSelector(state => state.userProfile.meUser);
  const experiences = useSelector(state => state.skills.experiences);
  const [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  useEffect(() => {
    if (profileMe?._id) {
      dispatch(getExp(profileMe._id));
    }
  }, [dispatch, profileMe]);

  return (
    profileMe && (
      <Container className="border rounded-3 my-3 profile-info ">
        <div className="d-flex justify-content-between align-items-center p-0">
          <h4>Esperienze</h4>
          <button className="bg-transparent border-0">
            <svg
              onClick={handleShowExp}
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
          <Modal show={showExp} onHide={handleCloseExp}>
            <Modal.Header closeButton>
              <Modal.Title>Modifica presentazione</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="text-muted fs-6">
                <span>*</span> indica che è obbligatorio
              </p>
              <Form
                onSubmit={e => {
                  e.preventDefault();
                  dispatch(createExp(profileMe._id, experience));
                }}
              >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Qualifica*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="qualifica"
                    autoFocus
                    value={experience.role}
                    onChange={e => setExperience({ ...experience, role: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    autoFocus
                    value={experience.company}
                    onChange={e => setExperience({ ...experience, company: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="username"
                    autoFocus
                    value={experience.startDate}
                    onChange={e => setExperience({ ...experience, startDate: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="bio"
                    autoFocus
                    value={experience.endDate}
                    onChange={e => setExperience({ ...experience, endDate: e.target.value })}
                  />
                </Form.Group>{" "}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="area"
                    autoFocus
                    value={experience.description}
                    onChange={e => setExperience({ ...experience, description: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="area"
                    autoFocus
                    value={experience.area}
                    onChange={e => setExperience({ ...experience, area: e.target.value })}
                  />
                </Form.Group>
                <Modal.Footer>
                  <Button className="rounded-5 px-3" variant="primary" onClick={handleCloseExp} type="submit">
                    Save
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
        <Container>
          {experiences.length > 0 &&
            experiences.slice(0, 4).map(exp => {
              return (
                <Row key={exp._id}>
                  <Col xs={2}>
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
                  <Col xs={10}>
                    <h5 className="mb-0">{exp.role}</h5>
                    <p className="mb-0">{exp.company}</p>
                    <p className="mb-0">{exp.startDate}</p>
                    <p>{exp.area}</p>
                  </Col>
                </Row>
              );
            })}
        </Container>
      </Container>
    )
  );
};
export default Experiences;
