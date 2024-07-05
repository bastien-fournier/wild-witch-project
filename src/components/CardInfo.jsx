import Card from "react-bootstrap/Card";
import Buttons from "./Buttons.jsx";

export default function CardInfo({ title, text, img }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Img variant="top" img={img} alt={title} />
    </Card>
  );
}
