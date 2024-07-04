import { Outlet } from "react-router-dom";

import "./App.scss";
import LightDarkTheme from "./components/LightDarkTheme.jsx";

function App() {
  return (
    <main>
      <Outlet />
      <LightDarkTheme />
    </main>
  );
}

export default App;
