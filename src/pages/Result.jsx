import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "animate.css";
import witchMaster from "../assets/images/witch3.jpg";
import witchGood from "../assets/images/witch4.jpg";
import witchNovice from "../assets/images/witch1.jpg";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score || 0;

  const getMessage = (score) => {
    if (score === 5) {
      return "Félicitations, vous êtes un véritable maître sorcier !";
    } else if (score >= 3) {
      return "Bien joué ! Vous avez de solides connaissances en sorcellerie.";
    } else {
      return "Vous pouvez faire mieux. Replongez-vous dans les grimoires et réessayez !";
    }
  };

  const getImage = (score) => {
    if (score === 5) {
      return witchMaster;
    } else if (score >= 3) {
      return witchGood;
    } else {
      return witchNovice;
    }
  };

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
        <Modal.Header style={{ backgroundColor: "#DCC1FF" }}>
          <Modal.Title>Résultat</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ backgroundColor: "#DCC1FF" }}>
          <img
            src={getImage(score)}
            alt="Witch Theme"
            style={{ width: "100%", marginBottom: "15px" }}
          />
          <p>{getMessage(score)}</p>
          <p>Votre score est de {score} sur 5.</p>
        </Modal.Body>

        <Modal.Footer style={{ backgroundColor: "#DCC1FF" }}>
          <Button variant="primary" onClick={() => navigate("/")}>
            Recommencer
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Result;
