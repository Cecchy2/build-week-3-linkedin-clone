import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "../redux/actions";
import { Col, Image, Container, Row } from "react-bootstrap";

const AsideProfile = () => {
  const dispatch = useDispatch();
  const listProfiles = useSelector((state) => state.userProfile.listProfiles);

  useEffect(() => {
    dispatch(getProfileData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="profile-info-container ps-2">
      <div className="profile-info mt-3 p-3">
        <div className="mb-2">
          <span className="text-black fw-bold">Altri profili simili</span>
        </div>

        {listProfiles.length > 0 &&
          listProfiles.slice(24, 28).map((profile) => (
            <Container key={profile._id} className="p-3">
              <Row className="align-items-center">
                <Col xs={3}>
                  <Image
                    src={profile.image}
                    roundedCircle
                    fluid
                    style={{ width: "55px", height: "55px", objectFit: "cover" }}
                  />
                </Col>
                <Col xs={9} className="d-flex justify-content-center">
                  <p className="text-black fw-bold mb-0">
                    {profile.name} {profile.surname} <br />
                    <span className="text-secondary">{profile.title}</span>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <div className="btn-msg mt-2">
                    <i className="fa fa-paper-plane me-2" aria-hidden="true"></i>Messaggio
                  </div>
                </Col>
              </Row>
              <hr />
            </Container>
          ))}
      </div>

      <div className="profile-info mt-3 p-3">
        <div>
          <span className="text-black fw-bold">Persone che potresti conoscere</span> <br />
          <p className="text-normal text-secondary pt-1">Dalla tua scuola o università</p>
        </div>
        {listProfiles.length > 0 &&
          listProfiles.slice(40, 45).map((profile) => (
            <Container key={profile._id} className="p-3">
              <Row className="align-items-center">
                <Col xs={3} className="p-0">
                  <Image
                    src={profile.image}
                    roundedCircle
                    fluid
                    style={{ width: "55px", height: "55px", objectFit: "cover" }}
                  />
                </Col>
                <Col xs={9} className="d-flex justify-content-center">
                  <p className="text-black fw-bold mb-0">
                    {profile.name} {profile.surname} <br />
                    <span className="text-secondary">{profile.title}</span>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <div className="btn-msg mt-2">
                    <i className="fa fa-paper-plane me-2" aria-hidden="true"></i>Messaggio
                  </div>
                </Col>
              </Row>
              <hr />
            </Container>
          ))}
      </div>
      <Image
        className="img-sponsor mt-3"
        src="https://francescoursino.it/wp-content/uploads/2021/04/hero-barilla-1024x633.jpg"
        fluid
      />
    </div>
  );
};

export default AsideProfile;
