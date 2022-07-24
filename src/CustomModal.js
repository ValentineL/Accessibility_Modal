import { Modal, Button } from "react-bootstrap";
import ReactDOM from "react-dom";

export default function CustomModal({ toggleVisibility, visible }) {
  const el = document.createElement("div");

  return ReactDOM.createPortal(
    <Modal
      id="exampleModal"
      show={visible}
      onHide={() => toggleVisibility(false)}
      backdrop="static"
      keyboard={false}
      // focus on the modal once it's opened
      autoFocus
      // trap the focus in the modal for better accessibility
      enforceFocus
      aria-labelledby="heading"
      aria-describedby="description"
    >
      <Modal.Header id="heading" closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body id="description">
        I will not close if you click outside me. Don't even try to press escape
        key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => toggleVisibility(false)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => toggleVisibility(false)}>
          Understood
        </Button>
      </Modal.Footer>
    </Modal>,
    el
  );
}
