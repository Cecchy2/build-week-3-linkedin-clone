import { useEffect } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPosts } from "../redux/actions";
import ModalPostCreate from "./ModalPostCreate";
import ModalPostEdit from "./ModalPostEdit";

const HomeMain = () => {
  const profileMe = useSelector(state => state.userProfile.meUser);
  const postsList = useSelector(state => state.postsList.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      <Container className="profile-info ms-2 ">
        <Row className="align-items-center">
          <Col xs={2}>
            <Image src={profileMe?.image} className="rounded-circle object-fit-cover" width="50" height="50" />
          </Col>
          <Col xs={10}>
            <ModalPostCreate />
          </Col>
        </Row>
      </Container>
      <Container>
        {[...postsList].reverse().map(post => {
          return (
            <Card className="mt-3" key={post._id}>
              <Card.Body>
                <Container className="d-flex justify-content-between aling-items-center p-0">
                  <Container className="p-0">
                    <Card.Title>{post.username}</Card.Title>
                  </Container>
                  <Container className="p-0 d-flex justify-content-end">
                    {profileMe._id === post.user._id ? (
                      <>
                        <ModalPostEdit userId={post._id} />
                        <Button className="bg-transparent border border-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            fill="black"
                            className="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                            onClick={() => {
                              dispatch(deletePost(post._id));
                            }}
                          >
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                          </svg>
                        </Button>
                      </>
                    ) : (
                      <></>
                    )}
                  </Container>
                </Container>
                <Card.Text>{post.text}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default HomeMain;
