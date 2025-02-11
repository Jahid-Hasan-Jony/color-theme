import { useState } from "react";
import { ThemeContext } from "./ContextAPI/ThemeContext";
import ReactRoutes from "./ReactRoutes/ReactRoutes";

function App() {
  const [theme, setTheme] = useState("");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        <ReactRoutes />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
