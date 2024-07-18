import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ModalPostCreate = () => {
  const [lgShow, setLgShow] = useState(false);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleFetchSubmit = (e) => {
    e.preventDefault();
    dispatch;
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
                  src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="immagine user"
                  className="border rounded-circle me-2"
                  style={{ width: "35px" }}
                />
                <div>
                  <h5>NOME COGNOME</h5>
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
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </InputGroup>
          <Modal.Body className="border border-top-1 d-flex justify-content-end">
            <Button className="rounded-pill" disabled={!text} type="submit">
              Pubblica
            </Button>
          </Modal.Body>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalPostCreate;
