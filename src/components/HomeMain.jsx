import { useEffect } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions";
import ModalPostCreate from "./ModalPostCreate";

const HomeMain = () => {
  const profileMe = useSelector((state) => state.userProfile.meUser);
  const postsList = useSelector((state) => state.postsList.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    console.log(postsList);
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
        {[...postsList].reverse().map((post) => {
          return (
            <Card className="mt-3" key={post._id}>
              <Card.Body>
                <Card.Title>{post.username}</Card.Title>
                <Card.Text>{post.text}</Card.Text>
                <Button variant="primary">Modifica</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default HomeMain;
