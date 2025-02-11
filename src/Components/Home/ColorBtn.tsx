import { useContext } from "react";
import { ThemeContext } from "../../ContextAPI/ThemeContext";

const ColorBtn = ({ mode, btnColor }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={() => setTheme(mode)}
      style={{ backgroundColor: btnColor }}
      className={`shadow-btn-style hover:scale-120 duration-300 hover:border-cta cursor-pointer w-7 h-7 border-2 ${
        theme == mode ? "border-cta-active" : "border-border-color"
      } rounded`}
    ></div>
  );
};

export default ColorBtn;
