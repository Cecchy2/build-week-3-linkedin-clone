import { useEffect, useState } from "react";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editFetchProfile, editUserAction } from "../redux/actions";

const ModalUserEdit = ({ profileMe = { profileMe } }) => {
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [inputValue, setInputValue] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
  });

  useEffect(() => {
    if (profileMe) {
      setInputValue({
        name: profileMe.name || "",
        surname: profileMe.surname || "",
        email: profileMe.email || "",
        username: profileMe.username || "",
        bio: profileMe.bio || "",
        title: profileMe.title || "",
        area: profileMe.area || "",
      });
    }
  }, [profileMe]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserAction(inputValue));
    dispatch(editFetchProfile(inputValue));
  };

  return (
    <>
      <Button variant="link" onClick={handleShowEdit} style={{ padding: 0 }}>
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9ImVkaXQtbWVkaXVtIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIyNHgyNCIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNMjEuMTMgMi44NmEzIDMgMCAwMC00LjE3IDBsLTEzIDEzTDIgMjJsNi4xOS0yTDIxLjEzIDdhMyAzIDAgMDAwLTQuMTZ6TTYuNzcgMTguNTdsLTEuMzUtMS4zNEwxNi42NCA2IDE4IDcuMzV6Ii8+Cjwvc3ZnPg=="
          width="25"
          height="25"
        />
      </Button>
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica presentazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted fs-6">
            <span>*</span>indica che è obbligatorio
          </p>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome*</Form.Label>
              <Form.Control
                type="text"
                placeholder="nome"
                autoFocus
                name="name"
                value={inputValue.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Cognome*</Form.Label>
              <Form.Control
                type="text"
                placeholder="cognome"
                autoFocus
                name="surname"
                value={inputValue.surname}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Email address*</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                name="email"
                value={inputValue.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Username*</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                autoFocus
                name="username"
                value={inputValue.username}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Bio*</Form.Label>
              <Form.Control
                type="text"
                placeholder="bio"
                autoFocus
                name="bio"
                value={inputValue.bio}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Title*</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                autoFocus
                name="title"
                value={inputValue.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>Area*</Form.Label>
              <Form.Control
                type="text"
                placeholder="area"
                autoFocus
                name="area"
                value={inputValue.area}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Modal.Footer>
              <Button className="rounded-5 px-3" variant="primary" onClick={handleCloseEdit} type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalUserEdit;
