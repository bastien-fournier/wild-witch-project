import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function PageQuiz() {
  const navigate = useNavigate();

  const handleAnswer = (isCorrect) => {
    navigate("/quiz-reponse", { state: { isCorrect } });
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="src/assets/images/integoration.png" />
        <Card.Body>
          <Card.Title>Question 1</Card.Title>
          <Card.Text>
            Quel événement historique est souvent associé à la persécution des
            sorcières en Europe et en Amérique ?
          </Card.Text>
        </Card.Body>
        <ListGroup className="text-center">
          <ListGroup.Item className="d-flex justify-content-center">
            <Button variant="light" onClick={() => handleAnswer(false)}>A. La Peste Noire</Button>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-center">
            <Button variant="light" onClick={() => handleAnswer(false)}>B. Les Croisades</Button>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-center">
            <Button variant="light" onClick={() => handleAnswer(true)}>C. Les Procès de sorcières de Salem</Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default PageQuiz;
