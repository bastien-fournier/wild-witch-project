import { Container } from "react-bootstrap";
import TableauEmbed from "../components/TableauEmbed.jsx";

export default function GraphPage() {
  const tableauUrl =
    "https://public.tableau.com/views/SorcellerieetInclusionProfessionnelleenEurope/ProcsdeSorcellerie";

  return (
    <>
      <Container style={{ height: "100vh" }}>
        <TableauEmbed tableauUrl={tableauUrl} />
      </Container>
    </>
  );
}
