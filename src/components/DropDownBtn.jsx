import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { icons } from "../assets/icons.js";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";

export default function DropDownBtn() {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme ? "light" : "dark");

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    setTheme(theme);
  };

  const themeIcons = {
    light: "bi-sun-fill",
    dark: "bi-moon-stars-fill",
    auto: "bi-circle-half",
  };

  const getPath = (iconName) => {
    if (iconName === themeIcons["dark"]) {
      return (
        <>
          <path d={icons.path[themeIcons["dark"]]["1"]} />
          <path d={icons.path[themeIcons["dark"]]["2"]} />
        </>
      );
    }
    return <path d={icons.path[iconName]} />;
  };

  return (
    <>
      <Dropdown className="position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <DropdownToggle
          variant="primary"
          className="py-2 d-flex align-items-center show"
          aria-expanded="true"
          data-bs-toggle="dropdown"
          aria-label={`Toggle theme (${selectedTheme})`}
        >
          <svg
            xmlns={icons.xmlns}
            width={icons.widthHeight}
            height={icons.widthHeight}
            fill={icons.fill}
            className={`bi ${themeIcons[selectedTheme]} my-1`}
            viewBox={icons.viewBox}
          >
            {getPath(themeIcons[selectedTheme])}
            <path d={icons.path[themeIcons[selectedTheme]]} />
          </svg>
        </DropdownToggle>
        <DropdownMenu>
          {["light", "dark", "auto"].map((theme) => {
            const isActive = theme === selectedTheme;
            return (
              <DropdownItem
                className={`d-flex align-items-center ${isActive ? "active" : ""}`}
                data-bs-theme-value={theme}
                aria-pressed={isActive}
                onClick={() => handleThemeChange(theme)}
                key={theme}
              >
                <svg
                  xmlns={icons.xmlns}
                  width={icons.widthHeight}
                  height={icons.widthHeight}
                  fill={icons.fill}
                  className={`bi ${themeIcons[theme]} me-2 opacity-50`}
                  viewBox={icons.viewBox}
                >
                  {getPath(themeIcons[theme])}
                </svg>{" "}
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
                <svg
                  xmlns={icons.xmlns}
                  width={icons.widthHeight}
                  height={icons.widthHeight}
                  fill={icons.fill}
                  className={`bi bi-check2 ms-auto ${isActive ? "" : "d-none"}`}
                  viewBox={icons.viewBox}
                >
                  <path d={icons.path["bi-check2"]} />
                </svg>{" "}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
