import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PageReponse() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Destructure values from location.state, defaulting to false if undefined
  const { isCorrect = false, score, currentQuestion } = location.state || {};

  const handleNextQuestion = () => {
    navigate("/quiz-page", { state: { score, currentQuestion } });
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Réponse</Card.Title>
          <Card.Text>{isCorrect ? "Bonne réponse 😈" : "Mauvaise réponse 💀"}</Card.Text>
          <Button variant="primary" onClick={handleNextQuestion}>
            Suivant
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PageReponse;
