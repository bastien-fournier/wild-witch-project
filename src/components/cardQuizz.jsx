import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Composant pour l'exemple de la barre de progression animée
function AnimatedExample() {
  return <ProgressBar animated now={45} />;
}

// Composant pour l'exemple de la carte
function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

// Page principale du quiz intégrant les deux composants ci-dessus
export default function PageQuiz() {
  return (
    <div>
      <h1>Hola que tal</h1>
      <AnimatedExample />
      <BasicExample />
    </div>
  );
}
