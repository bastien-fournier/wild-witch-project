import { Col, Container, Row } from "react-bootstrap";
import Buttons from "../components/Buttons.jsx";
import CardInfo from "../components/CardInfo";
import woman from "../assets/images/woman-8774376_1280.jpg";

export default function DataPage() {
  const title = "Sorcières, Sorcières, dîtes-moi qui est la plus discriminée ?";
  const text =
    "Au XVIe siècle, être accusée de sorcellerie n'était pas exactement une chance de gagner à la loterie. Souvent, ces accusations ciblaient des femmes indépendantes, pauvres, ou simplement différentes. Flash info : Survie aux procès de sorcellerie ? Environ 66%. Oui, tu as bien lu !";
  return (
    <>
      <Container style={{ height: "100vh" }}>
        <Row className="justify-content-center">
          <CardInfo title={title} text={text} img={woman} />
        </Row>
        <Row className="justify-content-center align-items-center flex-column mt-3">
          <Col className="text-center">
            <Buttons text="Précédent" link="/info" />
            <Buttons text="Suivant" link="/sansibilisation" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
