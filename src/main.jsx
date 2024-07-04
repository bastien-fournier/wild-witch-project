import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import HomePage from "./pages/HomePage.jsx";
import PageQuiz from "./pages/PageQuiz.jsx";
import Sanbilisation from "./pages/Sanbilisation.jsx";
import AlertePage from "./pages/AlertePage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        id: "salerte-page",
        element: <AlertePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
