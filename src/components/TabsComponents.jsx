import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TableauEmbed from "./TableauEmbed.jsx";

export default function TabsComponents() {
  const tableauUrl =
    "https://public.tableau.com/views/SorcellerieetInclusionProfessionnelleenEurope/ProcsdeSorcellerie";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 150,
      }}
    >
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 col-md-6 col-lg-4"
      >
        <Tab
          style={{
            maxHeight: "200px",
            overflowY: "auto",
            padding: "10px",
            border: 2,
            marginLeft: 10,
          }}
          eventKey="home"
          title="Des bûchers aux bureaux"
        >
          Les femmes ont parcouru un long chemin depuis les procès de
          sorcellerie. Aujourd'hui, elles sont une force vive dans le monde
          professionnel. Mais le taux d'emploi des femmes en Europe n'est que de
          69%. Certes, c'est mieux que le taux de survie des sorcières, mais on
          peut faire mieux, non ?
        </Tab>
        <Tab
          style={{
            maxHeight: "200px",
            overflowY: "auto",
            padding: "10px",
            marginLeft: 10,
            border: 2,
          }}
          eventKey="profile"
          title="Enseignement des procès"
        >
          Analyser les discriminations historiques, comme les procès de
          sorcellerie, nous aide à comprendre les obstacles actuels à
          l'inclusion. C'est comme lire dans une boule de cristal : pour un
          avenir plus juste, il faut apprendre du passé. Disons adieu aux
          préjugés et bonjour à l'inclusion !
        </Tab>
        <Tab
          style={{
            maxHeight: "200px",
            overflowY: "auto",
            padding: "10px",
            marginLeft: 10,
            border: 2,
          }}
          eventKey="contact"
          title="Des sorcières modernes à l'œuvre !"
        >
          Rencontrez des femmes extraordinaires qui ont surmonté les obstacles.
          De Sophie, entrepreneure innovante, à Maria, ingénieure pionnière,
          découvrez comment elles ont enchanté le monde professionnel. Parce que
          les véritables sorcières modernes, ce sont celles qui transforment les
          défis en opportunités.
        </Tab>
      </Tabs>
      <TableauEmbed tableauUrl={tableauUrl} />
    </div>
  );
}
