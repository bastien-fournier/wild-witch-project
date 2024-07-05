// import Buttons from "../components/Buttons";
import Modals from "../components/Modals";
import { Container } from "react-bootstrap";

export default function AlertePage() {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modals />
    </Container>
  );
}
