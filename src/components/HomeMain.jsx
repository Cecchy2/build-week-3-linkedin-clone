import { useEffect } from "react";
import { Button, Card, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions";

const HomeMain = () => {
  const profileMe = useSelector(state => state.userProfile.meUser);
  const postsList = useSelector(state => state.postsList.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
    console.log(postsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Col xs={{ span: 6 }} className="profile-info ms-2 h-100">
      <Container>
        <Row className="align-items-center">
          <Col xs={2}>
            <Image src={profileMe?.image} className="rounded-circle object-fit-cover" width="50" height="50" />
          </Col>
          <Col xs={10}>
            <InputGroup>
              <Form.Control className=" rounded-5" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </InputGroup>
          </Col>
        </Row>
      </Container>
      <Container>
        {postsList.length > 0 &&
          postsList.map(post => {
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{post.username}</Card.Title>
                <Card.Text>{post.text}</Card.Text>
                <Button variant="primary">Modifica</Button>
              </Card.Body>
            </Card>;
          })}
      </Container>
    </Col>
  );
};

export default HomeMain;
