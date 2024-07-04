import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";
import CardReponse from "../components/CardReponse.jsx";
// import ProgressBar from "../components/ProgressBar";

export default function PageReponse() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isCorrect, nextQuestion } = location.state || { isCorrect: false, nextQuestion: 0 };

  const title = "Réponse";
  const text = isCorrect ? "Bonne réponse !" : "Mauvaise réponse. Réessayez.";

  const handleNext = () => {
    navigate("/quiz-page", { state: { currentQuestion: nextQuestion } });
  };

  return (
    <>
      <h1>Quizz</h1>
      <Container className="mt-5">
      {/* <ProgressBar /> */}
        <Row className="justify-content-center">
          <CardReponse title={title} text={text} />
        </Row>
        <Row className="justify-content-center align-items-center flex-column mt-3">
          <Col className="text-center">
            <Button variant="primary" onClick={handleNext}>Suivant</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
