import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ListGroup";

function BasicExample() {
  return (
    <div className="d-flex justify-content-center my-4">
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src="src/assets/images/integoration.png" />
        <Card.Body>
          <Card.Title>Question 1</Card.Title>
          <Card.Text>
            Quel événement historique est souvent associé à la persécution des
            sorcières en Europe et en Amérique ?
          </Card.Text>
        </Card.Body>

        <ButtonGroup aria-label="Basic example">
          <Button variant="light">A. La Peste Noire</Button>
          <Button variant="light">B. Les Croisades</Button>
          <Button variant="light">C. Les Procès de sorcières de Salem</Button>
        </ButtonGroup>
      </Card>
    </div>
  );
}
export default BasicExample;
