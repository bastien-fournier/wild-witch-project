import CardInfo from "../components/CardInfo.jsx";
import { Col, Container, Row } from "react-bootstrap";
import Buttons from "../components/Buttons.jsx";
import darkAcademia from "../assets/images/dark-academia-7471412_1280.jpg";

export default function InfoPage() {
  const title = "Bienvenue dans le Monde Enchanté de l'Inclusion !";
  const text =
    "Salut à toi, aventurier du web ! Prépare-toi à un voyage à travers le temps où nous comparerons les procès de sorcellerie en Europe avec la situation actuelle des femmes dans le monde du travail. Oui, on va parler de sorcières, de bûchers et... de taux d'emploi ! Accroche-toi, ça va être magique !";
  return (
    <>
      <Container style={{ height: "100vh" }}>
        <Row className="justify-content-center">
          <CardInfo title={title} text={text} img={darkAcademia} />
        </Row>
        <Row className="justify-content-center align-items-center flex-column mt-3">
          <Col className="text-center">
            <Buttons text="Précédent" link="/" />
            <Buttons text="Suivant" link="/data-page" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
