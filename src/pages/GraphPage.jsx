import { Container } from "react-bootstrap";
import PowerBI from "../components/PowerBI.jsx";

export default function GraphPage() {
  const embedUrl = "https://app.powerbi.com/reportEmbed?..."; // L'URL de l'iframe du dashboard Power BI
  const accessToken = "votre-access-token"; // Token d'accès pour les dashboards sécurisés

  return (
    <>
      <Container style={{ height: "100vh" }} className="mt-5">
        <PowerBI embedUrl={embedUrl} accessToken={accessToken} />
      </Container>
    </>
  );
}
