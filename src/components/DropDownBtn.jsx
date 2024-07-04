import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { icons } from "../assets/icons.js";

export default function DropDownBtn() {
  return (
    <>
      {["light", "dark", "auto"].map((theme, key) => {
        const isActive = theme === "auto";
        const themeIcons = {
          light: "bi-sun-fill",
          dark: "bi-moon-stars-fill",
          auto: "bi-circle-half",
        };
        console.log("isActive: ", isActive);
        console.log("themeIcons: ", themeIcons);
        return (
          <Dropdown
            className="position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle"
            key={key}
          >
            <DropdownToggle
              variant="primary"
              className="py-2 d-flex align-items-center show"
              aria-expanded={isActive}
              data-bs-toggle="dropdown"
              aria-label="Toggle theme (auto)"
            >
              <svg
                xmlns={icons.xmlns}
                width={icons.widthHeight}
                height={icons.widthHeight}
                fill={icons.fill}
                className="bi bi-sun-fill my-1"
                viewBox={icons.viewBox}
              >
                <path d={icons.path["bi-sun-fill"]} />
              </svg>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                className="d-flex align-items-center"
                data-bs-theme-value={theme}
                aria-pressed={isActive}
              >
                <svg
                  xmlns={icons.xmlns}
                  width={icons.widthHeight}
                  height={icons.widthHeight}
                  fill={icons.fill}
                  className={`bi ${themeIcons[theme]} me-2 opacity-50`}
                  viewBox={icons.viewBox}
                >
                  <path d={icons.path[themeIcons[theme]]["1"]} />
                  {
                    icons.path[
                      themeIcons[theme]["2"] && (
                        <path d={icons.path[themeIcons[theme]]["2"]} />
                      )
                    ]
                  }
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
            </DropdownMenu>
          </Dropdown>
        );
      })}

      {/*<DropdownItem*/}
      {/*  className="d-flex align-items-center"*/}
      {/*  data-bs-theme-value="light"*/}
      {/*  aria-pressed="false"*/}
      {/*  href="#"*/}
      {/*>*/}
      {/*  <svg*/}
      {/*    xmlns={icons.xmlns}*/}
      {/*    width={icons.widthHeight}*/}
      {/*    height={icons.widthHeight}*/}
      {/*    fill={icons.fill}*/}
      {/*    className="bi bi-sun-fill me-2 opacity-50"*/}
      {/*    viewBox={icons.viewBox}*/}
      {/*  >*/}
      {/*    <path d={icons.path["bi-sun-fill"]} />*/}
      {/*  </svg>{" "}*/}
      {/*  Light*/}
      {/*  <svg*/}
      {/*    xmlns={icons.xmlns}*/}
      {/*    width={icons.widthHeight}*/}
      {/*    height={icons.widthHeight}*/}
      {/*    fill={icons.fill}*/}
      {/*    className="bi bi-check2 ms-auto d-none"*/}
      {/*    viewBox={icons.viewBox}*/}
      {/*  >*/}
      {/*    <path d={icons.path["bi-check2"]} />*/}
      {/*  </svg>*/}
      {/*</DropdownItem>*/}
      {/*<DropdownItem*/}
      {/*  className="d-flex align-items-center"*/}
      {/*  data-bs-theme-value="dark"*/}
      {/*  aria-pressed="false"*/}
      {/*  href="#"*/}
      {/*>*/}
      {/*  <svg*/}
      {/*    xmlns={icons.xmlns}*/}
      {/*    width={icons.widthHeight}*/}
      {/*    height={icons.widthHeight}*/}
      {/*    fill={icons.fill}*/}
      {/*    className="bi bi-moon-stars-fill me-2 opacity-50"*/}
      {/*    viewBox={icons.viewBox}*/}
      {/*  >*/}
      {/*    <path d={icons.path["bi-moon-stars-fill"]["1"]} />*/}
      {/*    <path d={icons.path["bi-moon-stars-fill"]["2"]} />*/}
      {/*  </svg>{" "}*/}
      {/*  Dark*/}
      {/*  <svg*/}
      {/*    xmlns={icons.xmlns}*/}
      {/*    width={icons.widthHeight}*/}
      {/*    height={icons.widthHeight}*/}
      {/*    fill={icons.fill}*/}
      {/*    className="bi bi-check2 ms-auto d-none"*/}
      {/*    viewBox={icons.viewBox}*/}
      {/*  >*/}
      {/*    <path d={icons.path["bi-check2"]} />*/}
      {/*  </svg>*/}
      {/*</DropdownItem>*/}
      {/*<DropdownItem*/}
      {/*  className="d-flex align-items-center active"*/}
      {/*  data-bs-theme-value="auto"*/}
      {/*  aria-pressed="true"*/}
      {/*  href="#"*/}
      {/*>*/}
      {/*  <svg*/}
      {/*    xmlns={icons.xmlns}*/}
      {/*    width={icons.widthHeight}*/}
      {/*    height={icons.widthHeight}*/}
      {/*    fill={icons.fill}*/}
      {/*    className="bi bi-circle-half me-2 opacity-50"*/}
      {/*    viewBox={icons.viewBox}*/}
      {/*  >*/}
      {/*    <path d={icons.path["bi-circle-half"]} />*/}
      {/*  </svg>{" "}*/}
      {/*  Auto*/}
      {/*  <svg*/}
      {/*    xmlns={icons.xmlns}*/}
      {/*    width={icons.widthHeight}*/}
      {/*    height={icons.widthHeight}*/}
      {/*    fill={icons.fill}*/}
      {/*    className="bi bi-check2 ms-auto d-none"*/}
      {/*    viewBox={icons.viewBox}*/}
      {/*  >*/}
      {/*    <path d={icons.path["bi-check2"]} />*/}
      {/*  </svg>*/}
      {/*</DropdownItem>*/}
    </>
  );
}
