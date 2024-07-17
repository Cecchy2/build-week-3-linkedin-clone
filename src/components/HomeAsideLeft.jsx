import { useEffect } from "react";
import { Col, Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfileMe } from "../redux/actions";

const HomeAsideLeft = () => {
  const profileMe = useSelector(state => state.userProfile.meUser);
  const dispatch = useDispatch();
  console.log(profileMe);

  useEffect(() => {
    dispatch(getProfileMe());
  }, [dispatch]);

  return (
    profileMe && (
      <Col Col xs={12} md={2} className="profile-info p-0 overflow-hidden h-100">
        <div className="p-0 position-relative">
          <Image
            className="img-fluid w-100"
            src="https://media.licdn.com/dms/image/D4D16AQFsGlm6VDoeXg/profile-displaybackgroundimage-shrink_350_1400/0/1720601266129?e=1726704000&v=beta&t=4S9lvM6oCsEmZvwmBWICewK5cjTLixOITQDewadEhug"
            alt="profile banner"
            style={{ maxHeight: "25vh" }}
          />
          <Image
            className="rounded-circle position-absolute  object-fit-cover"
            src={profileMe?.image}
            width="60"
            height="60"
            style={{ bottom: "-35px", left: "20px" }}
          />
        </div>
        <Container className="mt-5">
          <h6>
            {profileMe.name} {profileMe.surname}
          </h6>
          <p className="mb-1 line-truncate-2">
            {profileMe.title} | {profileMe.bio}
          </p>
          <p className="mb-1 text-secondary line-truncate-2">{profileMe.area}</p>
          <p className="line-truncate-2">{profileMe.title}</p>
        </Container>
      </Col>
    )
  );
};

export default HomeAsideLeft;
