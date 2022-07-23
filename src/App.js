import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
/*

Interview Task:

Create a WCAG 2.1 AA Compliant Modal

Put any content you want in the modal,
ensure it is dismissable or closable,
include comments to help us understand
your choices, the modal must prevent 
interaction with th eunderlying page
until dismissed or actioned

Write some tests to confirm that the
modal works and is compliant

Create some styles, remember any styles,
should also be WCAG 2.1 AA Compliant

NB: Getting the task done is more important than
it being complete, don't worry about impelementing 
the solution in a single file

Use comments to explain missing parts of the 
implementation or to explain where you stopped
and why - the more comments you leave us the
easier it will be for use to undersand how you
write code :)

Feel free to add libraries on the left,
the test runner is in a tab on the right

*/

export function CustomModal({ toggleVisibility, visible }) {
  const el = document.createElement("div");

  return ReactDOM.createPortal(
    <Modal
      show={visible}
      onHide={() => toggleVisibility(false)}
      backdrop="static"
      keyboard={false}
      autoFocus
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

export function App() {
  const [visible, toggleVisibility] = useState(false);

  return (
    <div className="App">
      <h1>NewDay</h1>
      <h2>This is just a demo container</h2>
      <Button variant="secondary" onClick={() => toggleVisibility(true)}>
        Open Modal
      </Button>
      {visible && (
        <CustomModal
          visible={visible}
          toggleVisibility={toggleVisibility}
        ></CustomModal>
      )}
    </div>
  );
}
