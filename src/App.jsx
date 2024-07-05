import { Outlet } from "react-router-dom";
import "./App.scss";
import LightDarkTheme from "./components/LightDarkTheme.jsx";
import { useTheme } from "./context/ThemeContext.jsx";

export default function App() {
  const { theme } = useTheme();
  const appStyles = {
    backgroundColor: theme === "light" ? "var(--bs-dark)" : "var(--bs-light)",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  };
  return (
    <main style={appStyles}>
      <Outlet />
      <LightDarkTheme />
    </main>
  );
}
