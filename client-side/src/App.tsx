import { useState } from "react";
import Header from "./Components/Global Components/Header/Header";
import { ThemeContext } from "./ContextAPI/ThemeContext";
import ReactRoutes from "./ReactRoutes/ReactRoutes";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        <Header />
        <ReactRoutes />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
