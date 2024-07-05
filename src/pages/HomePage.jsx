import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <Logo />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Buttons text="Commencer" link="/info" />
      </div>
    </div>
  );
}
