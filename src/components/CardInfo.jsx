import Card from "react-bootstrap/Card";
import Buttons from "./Buttons.jsx";

export default function CardInfo({ title, text }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src="holder.js/100px200" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
