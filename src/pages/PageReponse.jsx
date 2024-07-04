import React from "react";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Buttons from "../components/Buttons.jsx";
import CardReponse from "../components/CardReponse.jsx";
import ProgressBar from "../components/ProgressBar";

export default function PageReponse() {
  const location = useLocation();
  const { isCorrect } = location.state || { isCorrect: false };

  const title = "Réponse";
  const text = isCorrect ? "Bonne réponse !" : "Mauvaise réponse.";

  return (
    <>
      <ProgressBar />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <CardReponse title={title} text={text} />
        </Row>
        <Row className="justify-content-center align-items-center flex-column mt-3">
          <Col className="text-center">
            <Buttons text="Suivant" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
