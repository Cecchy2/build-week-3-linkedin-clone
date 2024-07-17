import { Col, Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const HomeAsideLeft = () => {
  const profileMe = useSelector((state) => state.userProfile.meUser);
  return (
    <Col Col xs={{ span: 2 }} className="profile-info">
      <div className="position-relative">
        <Image
          className=" w-100"
          src="https://media.licdn.com/dms/image/D4D16AQFsGlm6VDoeXg/profile-displaybackgroundimage-shrink_350_1400/0/1720601266129?e=1726704000&v=beta&t=4S9lvM6oCsEmZvwmBWICewK5cjTLixOITQDewadEhug"
          alt="profile banner"
          style={{ maxHeight: "25vh" }}
        />
      </div>
      <Container>
        <Image
          className="rounded-circle position-absolute mb-3 object-fit-cover"
          src={profileMe?.image}
          width="150"
          style={{ bottom: "-70px", left: "50px", width: "150", height: "150px" }}
        />
      </Container>
    </Col>
  );
};

export default HomeAsideLeft;
