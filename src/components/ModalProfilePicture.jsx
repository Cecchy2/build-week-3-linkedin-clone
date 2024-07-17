import { Button, Form, Image, Modal } from "react-bootstrap";

const ModalProfilePicture = ({
  showPicture,
  handleClosePicture,
  selectedImage,
  profileMe,
  handleImageUpload,
  handleImageChange,
}) => {
  return (
    <Modal size="lg" show={showPicture} onHide={handleClosePicture}>
      <Modal.Header closeButton className="dark text-white close-white border-0">
        <Modal.Title>Foto Profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body className="dark text-white d-flex justify-content-center align-items-center">
        <Image
          src={selectedImage ? URL.createObjectURL(selectedImage) : profileMe.image}
          alt="immagine profilo"
          className="border rounded-circle m-5 object-fit-cover"
          style={{ width: "278px", height: "278px" }}
        />
      </Modal.Body>
      <div className="dark text-white">
        <Form onSubmit={handleImageUpload}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Carica una nuova immagine</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Carica
          </Button>
        </Form>
      </div>
    </Modal>
  );
};
export default ModalProfilePicture;
