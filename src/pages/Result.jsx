import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score || 0;

  return (
    <div className="d-flex justify-content-center my-4">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Résultat</Card.Title>
          <Card.Text>Votre score est de {score} sur 5.</Card.Text>
          <Button variant="primary" onClick={() => navigate("/")}>
            Recommencer
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Result;
