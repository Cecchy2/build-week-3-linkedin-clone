import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getExp } from "../redux/actions";
import { getProfileMe } from "../redux/actions";

import ModalProfilePicture from "./ModalProfilePicture";
import ModalUserEdit from "./ModalUserEdit";
import Experiences from "./Experiences";
import Formazione from "./Fomazione";
import Competenze from "./Competenze";

const MainProfile = () => {
  const profileMe = useSelector(state => state.userProfile.meUser);

  const [showExp, setShowExp] = useState(false);
  const dispatch = useDispatch();
  const handleCloseExp = () => setShowExp(false);
  const handleShowExp = () => setShowExp(true);

  useEffect(() => {
    dispatch(getProfileMe());
  }, [dispatch]);

  useEffect(() => {
    if (profileMe?._id) {
      dispatch(getExp(profileMe._id));
    }
  }, [dispatch, profileMe]);

  return (
    profileMe && (
      <>
        <Container className="badgeContainer border rounded-3 my-3 p-0 profile-info" style={{ overflow: "hidden" }}>
          <div className="position-relative">
            <div>
              <Button variant="link" className="position-absolute">
                bottone
              </Button>
              <Image
                className="w-100"
                src="https://media.licdn.com/dms/image/D4D16AQFsGlm6VDoeXg/profile-displaybackgroundimage-shrink_350_1400/0/1720601266129?e=1726704000&v=beta&t=4S9lvM6oCsEmZvwmBWICewK5cjTLixOITQDewadEhug"
                alt="profile banner"
                style={{ maxHeight: "25vh" }}
              />
            </div>
            <Container>
              <ModalProfilePicture profileMe={profileMe} />
              {/* -------MODALE PROFILE PICTURE------- */}
            </Container>
          </div>
          <Container fluid className="mt-5">
            <div className="mt-5 w-50 ms-auto d-flex justify-content-end">
              <ModalUserEdit profileMe={profileMe} />
              {/* -------MODALE USER EDIT------- */}
            </div>
            <h2>
              {profileMe.name} {profileMe.surname}
            </h2>
            <Row>
              <Col xs={12} md={8}>
                <p className="mb-1">
                  {profileMe.title} | {profileMe.bio}
                </p>
                <p className="mt-0 text-secondary">
                  {profileMe.area} -{" "}
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
                  <p>{profileMe.title}</p>
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
        <Experiences handleCloseExp={handleCloseExp} handleShowExp={handleShowExp} showExp={showExp} />
        <Formazione />
        <Competenze />
      </>
    )
  );
};

export default MainProfile;
