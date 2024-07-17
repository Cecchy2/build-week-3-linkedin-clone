import { Button, Form, Modal } from "react-bootstrap";

const ModalUserEdit = ({
  showEdit = { showEdit },
  handleCloseEdit = { handleCloseEdit },
  handleFormSubmit = { handleFormSubmit },
  inputValue = { inputValue },
  handleInputChange = { handleInputChange },
}) => {
  return (
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
            <Form.Label>Email address</Form.Label>
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
            <Form.Label>Username</Form.Label>
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
            <Form.Label>Area</Form.Label>
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
  );
};

export default ModalUserEdit;
