import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(false);

  const memo = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <>
      <ThemeContext.Provider value={memo}>{children}</ThemeContext.Provider>
    </>
  );
}

export const useTheme = () => useContext(ThemeContext);
