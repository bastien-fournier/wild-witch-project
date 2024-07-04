import { Outlet } from "react-router-dom";
import "./App.scss";
import LightDarkTheme from "./components/LightDarkTheme.jsx";
import { useTheme } from "./context/ThemeContext.jsx";

function App() {
  const { darkblue } = useTheme();
  const appStyles = {
    background:
    theme ===
      ? "var( --background-gradient-false)"
      : "var(--background-gradient)",
  };
  return (
    <main style={appStyles}>
      <Outlet />
      <LightDarkTheme />
    </main>
  );
}

export default App;
