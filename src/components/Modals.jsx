import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "animate.css";

function Modals() {
  return (
    <div
      className="modal show animate__animated animate__backInDown"
      style={{
        display: "block",
        position: "initial",
        marginTop: 250,
      }}
    >
      <Modal.Dialog>
        <Modal.Header style={{ backgroundColor: "#DCC1FF" }} closeButton>
          <Modal.Title>Attention ⚠️</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ backgroundColor: "#DCC1FF" }}>
          <p>
            Vous allez entrer dans un quiz, il n'y aura plus de retour en
            arrière possible !
          </p>
        </Modal.Body>

        <Modal.Footer style={{ backgroundColor: "#DCC1FF" }}>
          {/* <Button variant="secondary">Close</Button> */}
          <Link to="/quiz-page">
            <Button variant="primary">Lancer le quiz</Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Modals;
