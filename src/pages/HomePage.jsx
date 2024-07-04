import Buttons from "../components/Buttons";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Buttons text="Commencer" link="/info" />
    </div>
  );
}
