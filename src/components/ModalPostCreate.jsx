import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, token } from "../redux/actions";

const ModalPostCreate = () => {
  const [lgShow, setLgShow] = useState(false);
  const profileMe = useSelector(state => state.userProfile.meUser);
  const dispatch = useDispatch();

  const [post, setPost] = useState({
    text: "",
  });

  const createPosts = async post => {
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/posts`;
    try {
      const resp = await fetch(baseEndpoint, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        console.log(result);
        dispatch(getPosts());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const uploadImagePost = async file => {
    let formData = new FormData();
    formData.append("post", file);
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/posts/${profileMe._id}`;
    try {
      const resp = await fetch(baseEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        console.log(result);
        dispatch(getPosts());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleImageUpload = e => {
    e.preventDefault();
    if (selectedImage) {
      dispatch(uploadImagePost(selectedImage));
    }
  };

  const handleFetchSubmit = e => {
    e.preventDefault();
    uploadImagePost(e.target.files);
    console.log(post.user._id);
    createPosts(post);
    setPost({ text: "" });
  };

  return (
    <div>
      <Button variant="link" onClick={() => setLgShow(true)} className="w-100">
        <InputGroup>
          <Form.Control
            className=" rounded-5 "
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="crea un post"
            style={{ textDecoration: "none" }}
          />
        </InputGroup>
      </Button>
      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton className="border border-0">
          <Modal.Title id="example-modal-sizes-title-lg">
            <Button variant="Link">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={profileMe?.image}
                  alt="immagine user"
                  className="border rounded-circle me-2 object-fit-cover"
                  style={{ width: "70px", height: "70px" }}
                />
                <div>
                  <h5>
                    {profileMe?.name} {profileMe?.surname}
                  </h5>
                  <p className="p-0">Pubblica : chiunque</p>
                </div>
              </div>
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleFetchSubmit}>
          <InputGroup className="px-3">
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              className="border border-0 "
              placeholder="Di cosa vorresti Parlare?"
              rows={15}
              value={post.text}
              onChange={e => setPost({ ...post, text: e.target.value })}
            />
          </InputGroup>
          <Modal.Body className="border border-top-1 d-flex justify-content-between">
            <Form onSubmit={handleImageUpload}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Carica una nuova immagine</Form.Label>
                <Form.Control type="file" onChange={handleImageChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Carica
              </Button>
            </Form>
            <Button className="rounded-pill" disabled={!post.text} type="submit" onClick={() => setLgShow(false)}>
              Pubblica
            </Button>
          </Modal.Body>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalPostCreate;
