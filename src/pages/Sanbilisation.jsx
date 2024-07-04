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
        <Buttons text="Précédent" link="/data-page" />
        <Buttons text="Suivant" link="/alerte-page" />
      </div>
    </>
  );
}
