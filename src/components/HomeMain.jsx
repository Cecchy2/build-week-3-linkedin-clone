import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createComment, deleteComment, deletePost, getComments, getPosts } from "../redux/actions";
import ModalPostCreate from "./ModalPostCreate";
import ModalPostEdit from "./ModalPostEdit";
import { TbMessage } from "react-icons/tb";
// import { TbMessage } from "react-icons/tb";

const HomeMain = () => {
  const profileMe = useSelector(state => state.userProfile.meUser);
  const postsList = useSelector(state => state.postsList.posts);
  const commentsList = useSelector(state => state.commentsList.comments);
  const dispatch = useDispatch();
  const [selectedPost, setSelectedPost] = useState(null);

  const [comment, setComment] = useState({
    comment: "",
    rate: "1",
    elementId: "",
  });

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handlePostClick = postId => {
    if (selectedPost === postId) {
      setSelectedPost(null); // Chiudi i commenti se clicchi di nuovo sullo stesso post
    } else {
      setSelectedPost(postId);
      dispatch(getComments(postId));
    }
  };

  return (
    <>
      <Container className="profile-info ms-2">
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
        {[...postsList].reverse().map(post => (
          <Card className="mt-3" key={post._id}>
            {post.image && <Image className="img-fluid w-100 overflow-hidden" src={post.image} />}
            <Card.Body>
              <Container className="d-flex justify-content-between align-items-center p-0">
                <Container className="p-0">
                  <Card.Title>{post.username}</Card.Title>
                </Container>
                <Container className="p-0 d-flex justify-content-end">
                  {profileMe && profileMe._id === post.user._id && (
                    <>
                      <ModalPostEdit userId={post._id} postText={post.text} />
                      <Button
                        className="bg-transparent border border-0"
                        onClick={() => {
                          dispatch(deletePost(post._id));
                          dispatch(getPosts());
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="black"
                          className="bi bi-trash-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                        </svg>
                      </Button>
                    </>
                  )}
                </Container>
              </Container>
              <Card.Text>{post.text}</Card.Text>
            </Card.Body>
            <Row>
              <Col>
                <Button variant="custom" onClick={() => handlePostClick(post._id)}>
                  <TbMessage />
                </Button>
              </Col>
            </Row>
            <Container>
              {selectedPost === post._id && (
                <>
                  <Row>
                    <Col xs={12} md={2}>
                      <Image className="rounded-circle" src={profileMe.image} width="50" height="50" />
                    </Col>
                    <Col xs={12} md={10}>
                      <Form
                        onSubmit={e => {
                          e.preventDefault();
                          dispatch(createComment(comment));
                          setComment({ comment: "", rate: "1", elementId: "" });
                        }}
                      >
                        <Form.Control
                          className="rounded-5"
                          type="text"
                          placeholder="crea un post"
                          value={comment.comment}
                          style={{ textDecoration: "none" }}
                          onChange={e => setComment({ ...comment, comment: e.target.value, elementId: post._id })}
                        />
                        <Button className={!comment.comment ? "d-none" : "d-block rounded-5 py-0 m-3"} type="submit">
                          Pubblica
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                  <h5>Commenti</h5>
                  <Container>
                    <ListGroup>
                      {commentsList
                        .filter(comment => comment.elementId === post._id)
                        .map(comment => (
                          <Container className="d-flex justify-content-between rounded-4 border" key={comment._id}>
                            <ListGroupItem className="border-0 my-2">
                              <h6>{comment.author}</h6>
                              <h5>{comment.comment}</h5>
                            </ListGroupItem>
                            {profileMe.username === comment.author && (
                              <Button className="bg-transparent border border-0 ms-auto">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="15"
                                  height="15"
                                  fill="black"
                                  className="bi bi-trash-fill"
                                  viewBox="0 0 16 16"
                                  onClick={() => {
                                    dispatch(deleteComment(comment._id));
                                    dispatch(getComments());
                                  }}
                                >
                                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                </svg>
                              </Button>
                            )}
                          </Container>
                        ))}
                    </ListGroup>
                  </Container>
                </>
              )}
            </Container>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default HomeMain;
