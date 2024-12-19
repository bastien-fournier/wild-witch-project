// import { PowerBIEmbed } from "powerbi-client-react";
// import { models } from "powerbi-client";
//
// export default function PowerBI({ embedUrl, accessToken }) {
//   return (
//     <PowerBIEmbed
//       embedConfig={{
//         type: "dashboard",
//         id: "dashboard-id",
//         pageView: "fitToWidth", // Properties: fitToWidth, oneColumn, actualSize
//         embedUrl: embedUrl,
//         accessToken: accessToken,
//         tokenType: models.TokenType.Embed,
//         settings: {
//           panes: {
//             filters: {
//               expanded: false,
//               visible: false,
//             },
//             background: models.BackgroundType.Transparent,
//           },
//         },
//       }}
//       eventHandlers={
//         new Map([
//           [
//             "loaded",
//             function () {
//               console.log("Dashboard loaded");
//             },
//           ],
//           [
//             "rendered",
//             function () {
//               console.log("Dashboard rendered");
//             },
//           ],
//           [
//             "error",
//             function (event) {
//               console.log(event.detail);
//             },
//           ],
//           ["visualClicked", () => console.log("visual clicked")],
//           ["pageChanged", (event) => console.log(event)],
//         ])
//       }
//       cssClassName={"dashboardClass"}
//       getEmbeddedComponent={(embedded) => {
//         this.dashboard = embedded;
//       }}
//     />
//   );
// }
