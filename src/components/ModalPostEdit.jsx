import { useState } from "react";
import { Button, Form, Image, InputGroup, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editPosts } from "../redux/actions";

const ModalPostEdit = ({ userId }) => {
  const [lgShow, setLgShow] = useState(false);
  const dispatch = useDispatch();

  const [post, setPost] = useState({ text: "" });

  const handleFetchSubmit = e => {
    e.preventDefault();
    dispatch(editPosts(userId, post));
  };

  return (
    <div>
      <Button
        variant="link"
        style={{ padding: 0 }}
        onClick={() => {
          setLgShow(true);
          dispatch(editPosts(post._id));
        }}
      >
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9ImVkaXQtbWVkaXVtIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIyNHgyNCIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNMjEuMTMgMi44NmEzIDMgMCAwMC00LjE3IDBsLTEzIDEzTDIgMjJsNi4xOS0yTDIxLjEzIDdhMyAzIDAgMDAwLTQuMTZ6TTYuNzcgMTguNTdsLTEuMzUtMS4zNEwxNi42NCA2IDE4IDcuMzV6Ii8+Cjwvc3ZnPg=="
          width="20"
          height="20"
        />
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
              value={post.text}
              onChange={e => setPost({ ...post, text: e.target.value })}
            />
          </InputGroup>
          <Modal.Body className="border border-top-1 d-flex justify-content-end">
            <Button className="rounded-pill" disabled={!post.text} type="submit" onClick={() => setLgShow(false)}>
              Pubblica
            </Button>
          </Modal.Body>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalPostEdit;
