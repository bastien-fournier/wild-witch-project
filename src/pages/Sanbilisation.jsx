import { Link } from "react-router-dom";
import Buttons from "../components/Buttons";
import TabsComponents from "../components/TabsComponents";

export default function Sambilisation() {
  return (
    <>
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
        <Link to="/alerte-page">
          <Buttons />
        </Link>
        <Link to="/alerte-page">
          <Buttons />
        </Link>
      </div>
    </>
  );
}
