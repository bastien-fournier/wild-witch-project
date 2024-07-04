import { Col, Container, Row } from "react-bootstrap";
import Buttons from "../components/Buttons.jsx";
import CardInfo from "../components/CardInfo";

export default function DataPage() {
  const title = "Card Title";
  const text =
    "Some quick example text to build on the card title and make up the\n" +
    "          bulk of the card's content.";
  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <CardInfo title={title} text={text} />
        </Row>
        <Row className="justify-content-center align-items-center flex-column mt-3">
          <Col className="text-center">
            <Buttons text="Précédent" link="/" />
            <Buttons text="Suivant" link="/sansibilisation" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
