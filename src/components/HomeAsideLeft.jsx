import { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfileMe } from "../redux/actions";

const HomeAsideLeft = () => {
  const profileMe = useSelector((state) => state.userProfile.meUser);
  const dispatch = useDispatch();
  console.log(profileMe);

  useEffect(() => {
    dispatch(getProfileMe());
  }, [dispatch]);

  return (
    profileMe && (
      <Container className="profile-info p-0 overflow-hidden ">
        <div className="p-0 position-relative">
          <Image
            className="img-fluid w-100"
            src={profileMe?.image}
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
          <p className="mb-1 line-truncate-2">{profileMe.bio}</p>
          <p className="mb-1 line-truncate-2">{profileMe.title}</p>
          <p className="mb-1 text-secondary line-truncate-2">{profileMe.area}</p>
        </Container>
      </Container>
    )
  );
};

export default HomeAsideLeft;
