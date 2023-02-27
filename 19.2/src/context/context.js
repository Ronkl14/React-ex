import { createContext, useState } from "react";

const ModeContext = createContext({});

export function ModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleMode() {
    setDarkMode(!darkMode);
  }

  return (
    <ModeContext.Provider value={{ darkMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export default ModeContext;
