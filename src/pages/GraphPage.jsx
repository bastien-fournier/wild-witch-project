import { Container } from "react-bootstrap";
import TableauEmbed from "../components/TableauEmbed.jsx";

export default function GraphPage() {
  const tableauUrl =
    "https://public.tableau.com/views/hackathon4_17159405552530/Tableaudebord1";

  return (
    <>
      <Container style={{ height: "100vh" }} className="mt-5">
        <TableauEmbed tableauUrl={tableauUrl} />
      </Container>
    </>
  );
}
