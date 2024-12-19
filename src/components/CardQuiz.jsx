import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const questions = [
  {
    id: 1,
    question:
      "Pourquoi est-il crucial d'analyser le passé des accusations de sorcellerie pour comprendre les injustices présentes ?",
    answers: [
      {
        text: "A. Pour promouvoir un environnement de travail inclusif",
        isCorrect: false,
      },
      {
        text: "B. Pour bâtir un avenir équitable et inclusif",
        isCorrect: true,
      },
      {
        text: "C. Pour comparer les taux d'emploi des femmes aujourd'hui",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question:
      "Quelle perspective l'analyse des accusations de sorcellerie offre-t-elle sur les progrès en matière d'égalité des sexes ?",
    answers: [
      { text: "A. Une perspective économique", isCorrect: false },
      { text: "B. Une perspective historique", isCorrect: true },
      { text: "C. Une perspective politique", isCorrect: false },
    ],
  },
  {
    id: 3,
    question:
      "Pourquoi comparer les procès de sorcellerie aux taux d'emploi des femmes est-il significatif selon le paragraphe ?",
    answers: [
      {
        text: "A. Pour souligner les défis économiques actuels",
        isCorrect: false,
      },
      {
        text: "B. Pour illustrer les progrès et les défis en matière d'inclusion professionnelle",
        isCorrect: true,
      },
      {
        text: "C. Pour évaluer l'impact des politiques publiques sur l'emploi des femmes",
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    question:
      "Qu'est-ce que les chiffres comparatifs des procès de sorcellerie et des taux d'emploi des femmes révèlent selon le paragraphe ?",
    answers: [
      {
        text: "A. Une augmentation des discriminations historiques",
        isCorrect: false,
      },
      {
        text: "B. Une comparaison frappante entre le passé et le présent en matière d'égalité des sexes",
        isCorrect: true,
      },
      {
        text: "C. Une diminution des inégalités économiques",
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    question:
      "Quel aspect des procès de sorcellerie est essentiel pour comprendre les obstacles actuels à l'inclusion des femmes selon le paragraphe ?",
    answers: [
      { text: "A. Leur impact sur les politiques de santé", isCorrect: false },
      { text: "B. Leur lien avec les pratiques religieuses", isCorrect: false },
      {
        text: "C. Leur révélation des racines profondes des injustices présentes",
        isCorrect: true,
      },
    ],
  },
];

function PageQuiz() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentQuestionIndex = location.state?.currentQuestion || 0;
  const [score, setScore] = useState(location.state?.score || 0);
  const question = questions[currentQuestionIndex];

  const handleAnswer = (isCorrect) => {
    const nextScore = isCorrect ? score + 1 : score;
    setScore(nextScore);
    const nextQuestion = currentQuestionIndex + 1;

    if (nextQuestion < questions.length) {
      navigate("/quiz-reponse", {
        state: { isCorrect, score: nextScore, currentQuestion: nextQuestion },
      });
    } else {
      navigate("/result", { state: { score: nextScore } });
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "20rem" }}>
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

export default PageQuiz;
