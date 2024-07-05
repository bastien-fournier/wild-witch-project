import Buttons from "../components/Buttons";
import TabsComponents from "../components/TabsComponents";
import { Container } from "react-bootstrap";

export default function Sambilisation() {
  return (
    <>
      <Container style={{ height: "100vh" }}>
        <div>
          <TabsComponents />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 300,
            gap: 30,
          }}
        >
          <Buttons text="Précédent" link="/data-page" />
          <Buttons text="Suivant" link="/alerte-page" />
        </div>
      </Container>
    </>
  );
}
