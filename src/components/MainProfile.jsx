import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfileMe, uploadProfilePicture } from "../redux/actions";

import ModalProfilePicture from "./ModalProfilePicture";
import ModalUserEdit from "./ModalUserEdit";
import Experiences from "./Experiences";
import Formazione from "./Fomazione";
import Competenze from "./Competenze";

const MainProfile = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [showPicture, setShowPicture] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const profileMe = useSelector(state => state.userProfile.meUser);

  const dispatch = useDispatch();

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseExp = () => setShowExp(false);
  const handleShowExp = () => setShowExp(true);
  const handleShowPicture = () => setShowPicture(true);
  const handleClosePicture = () => setShowPicture(false);

  useEffect(() => {
    dispatch(getProfileMe());
  }, [dispatch]);

  const handleImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleImageUpload = e => {
    e.preventDefault();
    if (selectedImage) {
      dispatch(uploadProfilePicture(selectedImage, profileMe._id));
      setShowPicture(false);
    }
  };

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
              <Button variant="link" onClick={handleShowPicture} style={{ padding: 0 }}>
                <Image
                  className="rounded-circle position-absolute mb-3 object-fit-cover"
                  src={profileMe.image}
                  width="150"
                  height="150"
                  style={{ bottom: "-70px", left: "50px", objectFit: "cover" }}
                />
              </Button>
              <ModalProfilePicture
                showPicture={showPicture}
                handleClosePicture={handleClosePicture}
                selectedImage={selectedImage}
                profileMe={profileMe}
                handleImageUpload={handleImageUpload}
                handleImageChange={handleImageChange}
              />
            </Container>
          </div>
          <Container fluid className="mt-5">
            <div className="mt-5 w-50 ms-auto d-flex justify-content-end">
              <Button variant="link" onClick={handleShowEdit} style={{ padding: 0 }}>
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9ImVkaXQtbWVkaXVtIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIyNHgyNCIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNMjEuMTMgMi44NmEzIDMgMCAwMC00LjE3IDBsLTEzIDEzTDIgMjJsNi4xOS0yTDIxLjEzIDdhMyAzIDAgMDAwLTQuMTZ6TTYuNzcgMTguNTdsLTEuMzUtMS4zNEwxNi42NCA2IDE4IDcuMzV6Ii8+Cjwvc3ZnPg=="
                  width="25"
                  height="25"
                />
              </Button>
              <ModalUserEdit showEdit={showEdit} handleCloseEdit={handleCloseEdit} profileMe={profileMe} />
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
