/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import ThemedButton from "./ThemedButton";
import { ThemeContext, themes } from "./themes-context";

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  const ToggleBtn = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <ThemedButton onClick={ToggleBtn}>Dynamic Theme</ThemedButton>
      </ThemeContext.Provider>

      <ThemedButton onClick={ToggleBtn}>Default Theme</ThemedButton>
    </div>
  );
};

export default App;
