import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import PageQuiz from "./pages/PageQuiz.jsx";
// import PageReponse from "./pages/PageReponse.jsx";
import Sanbilisation from "./pages/Sanbilisation.jsx";
import AlertePage from "./pages/AlertePage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import GraphPage from "./pages/GraphPage.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        id: "homePage",
        element: <HomePage />,
      },
      {
        path: "/quiz-page",
        id: "quizPage",
        element: <PageQuiz />,
      },
      {
        path: "/sansibilisation",
        id: "sansibilisation",
        element: <Sanbilisation />,
      },
      {
        path: "/alerte-page",
        id: "alerte-page",
        element: <AlertePage />,
      },
      {
        path: "/info",
        id: "infoPage",
        element: <InfoPage />,
      },
      {
        path: "/graph",
        id: "graphPage",
        element: <GraphPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
