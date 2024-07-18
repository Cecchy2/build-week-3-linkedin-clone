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

  const fallbackImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNK4d0igyhvVVsYW2LIAn45LUbcWZpewEerQ&s",
    "https://img.freepik.com/vettori-premium/profilo-di-avatar-uomo-su-icona-rotonda_24640-14049.jpg",
    "https://img.freepik.com/vettori-premium/profilo-di-avatar-donna-sull-icona-rotonda_24640-14042.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6JPaMyl7e0oZfSdBa84_MTOUWwR50niJlLF79QPOlAIEYlSwWcWLG35W3EFI0iGzWFc&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1lqDgPl7H0dLC70TEOK3luClj7HafIJBHP7WJZyKhv_TatYKCl-vc5Sgwco0dYAeuh8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1EUJhfkJFRPWrm0_xMgLz7rxsnr81oS5iZ3ly6AEujgWMbOoIFi8OBgkARmQhjl5X_Y&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgS9gt7bRQjO4-HPlDtfczUF7pOHNwDfqHnZgrbXm4qgyul1MgHkneswnmeMRUQNolJeM&usqp=CAU",
    "https://img.freepik.com/vettori-premium/profilo-di-avatar-uomo-su-icona-rotonda_24640-14049.jpg",
  ];

  return (
    <div className="profile-info-container ps-2">
      <div className="profile-info mt-3 p-3">
        <div className="mb-2">
          <span className="text-black fw-bold">Altri profili simili</span>
        </div>

        {listProfiles.length > 0 &&
          listProfiles.slice(24, 28).map((profile, index) => (
            <Container key={profile._id} className="p-0">
              <Row className="align-items-center">
                <Col xs={3} className="p-0">
                  <Image
                    src={profile.image}
                    roundedCircle
                    fluid
                    style={{ width: "55px", height: "55px", objectFit: "cover" }}
                  />
                </Col>
                <Col xs={9}>
                  <p className="text-black fw-bold mb-0">
                    {profile.name} {profile.surname} <br />
                    <span className="text-secondary">{profile.title}</span>
                  </p>
                </Col>
              </Row>
              <div className="btn-msg mt-2">
                <i className="fa fa-paper-plane me-2" aria-hidden="true"></i>Messaggio
              </div>
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
            <Container key={profile._id} className="p-0">
              <Row className="align-items-center">
                <Col xs={3} className="p-0">
                  <Image
                    src={profile.image}
                    roundedCircle
                    fluid
                    style={{ width: "55px", height: "55px", objectFit: "cover" }}
                  />
                </Col>
                <Col xs={9}>
                  <p className="text-black fw-bold mb-0">
                    {profile.name} {profile.surname} <br />
                    <span className="text-secondary">{profile.title}</span>
                  </p>
                </Col>
              </Row>
              <div className="btn-msg mt-2">
                <i className="fa fa-paper-plane me-2" aria-hidden="true"></i>Messaggio
              </div>
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
