import { Button, Form, Image, Modal } from "react-bootstrap";
import { uploadProfilePicture } from "../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ModalProfilePicture = ({ profileMe }) => {
  const dispatch = useDispatch();
  const [showPicture, setShowPicture] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShowPicture = () => setShowPicture(true);
  const handleClosePicture = () => setShowPicture(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    if (selectedImage) {
      dispatch(uploadProfilePicture(selectedImage, profileMe._id));
      setShowPicture(false);
    }
  };

  return (
    <>
      <Button variant="link" onClick={handleShowPicture} style={{ padding: 0 }}>
        <Image
          className="rounded-circle position-absolute mb-3 object-fit-cover"
          src={profileMe.image}
          width="150"
          height="150"
          style={{ bottom: "-70px", left: "50px", objectFit: "cover" }}
        />
      </Button>
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
    </>
  );
};
export default ModalProfilePicture;
