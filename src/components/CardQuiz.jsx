import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const questions = [
  {
    id: 1,
    question:
      "Quel événement historique est souvent associé à la persécution des sorcières en Europe et en Amérique ?",
    answers: [
      { text: "A. La Peste Noire", isCorrect: false },
      { text: "B. Les Croisades", isCorrect: false },
      { text: "C. Les Procès de sorcières de Salem", isCorrect: true },
    ],
  },
  {
    id: 2,
    question:
      "Quelle maladie dévastatrice a ravagé l'Europe au XIVe siècle, mais n'est pas directement liée aux procès de sorcières ?",
    answers: [
      { text: "A. La Peste Noire", isCorrect: true },
      { text: "B. La Lèpre", isCorrect: false },
      { text: "C. La Grippe Espagnole", isCorrect: false },
    ],
  },
  {
    id: 3,
    question:
      "Quel mouvement religieux et militaire des XIe au XIIIe siècles n'est pas associé à la persécution des sorcières ?",
    answers: [
      { text: "A. Les Croisades", isCorrect: false },
      { text: "B. La Reconquista", isCorrect: false },
      { text: "C. La Guerre de Cent Ans", isCorrect: true },
    ],
  },
  {
    id: 4,
    question:
      "Quelle période historique est spécifiquement associée aux célèbres procès de sorcières à Salem, Massachusetts ?",
    answers: [
      { text: "A. Le Maccarthisme", isCorrect: false },
      { text: "B. La Révolution Américaine", isCorrect: false },
      { text: "C. Les Procès de sorcières de Salem", isCorrect: true },
    ],
  },
  {
    id: 5,
    question:
      "Quel terme désigne la pratique de juger et de condamner des personnes accusées de sorcellerie, souvent par des tribunaux ecclésiastiques ?",
    answers: [
      { text: "A. L'Inquisition", isCorrect: true },
      { text: "B. L'Excommunication", isCorrect: false },
      { text: "C. La Réforme", isCorrect: false },
    ],
  },
];

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentQuestionIndex = location.state?.currentQuestion || 0;
  const question = questions[currentQuestionIndex];

  const handleAnswer = (isCorrect) => {
    const nextQuestion = currentQuestionIndex + 1;
    navigate("/quiz-reponse", { state: { isCorrect, nextQuestion } });
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="src/assets/images/integoration.png" />
        <Card.Body>
          <Card.Title>Question {question.id}</Card.Title>
          <Card.Text>{question.question}</Card.Text>
        </Card.Body>
        <ListGroup className="text-center">
          {question.answers.map((answer, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-center"
            >
              <Button
                variant="light"
                onClick={() => handleAnswer(answer.isCorrect)}
              >
                {answer.text}
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}

export default Quiz;
