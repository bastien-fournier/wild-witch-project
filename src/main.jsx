import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import HomePage from "./pages/HomePage.jsx";
import PageQuiz from "./pages/PageQuiz.jsx";
import PageReponse from "./pages/PageReponse.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
        path: "/quiz-reponse",
        id: "reponseQuiz",
        element: <PageReponse />,
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
  <RouterProvider router={router} />,
);
