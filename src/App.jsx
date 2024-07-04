import { Outlet } from "react-router-dom";
import "./App.scss";
import LightDarkTheme from "./components/LightDarkTheme.jsx";
import { useTheme } from "./context/ThemeContext.jsx";

export default function App() {
  const { theme } = useTheme();
  const appStyles = {
    background: theme === "light" ? "white" : "dark",
  };
  return (
    <main style={appStyles}>
      <Outlet />
      <LightDarkTheme />
    </main>
  );
}
