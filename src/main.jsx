import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import PageQuiz from "./pages/PageQuiz.jsx";
import PageReponse from "./pages/PageReponse.jsx";
import Sanbilisation from "./pages/Sanbilisation.jsx";
import AlertePage from "./pages/AlertePage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import GraphPage from "./pages/GraphPage.jsx";
import DataPage from "./pages/DataPage.jsx";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import Result from "./pages/Result.jsx";

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
        path: "/quiz-reponse",
        id: "quizReponse",
        element: <PageReponse />,
      },
      {
        path: "/result",
        id: "result",
        element: <Result />,
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
      {
        path: "/data-page",
        id: "data-page",
        element: <DataPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <RouterProvider router={router} />,
  </ThemeContextProvider>,
);
