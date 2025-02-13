import { useContext } from "react";
import { ThemeContext } from "../../ContextAPI/ThemeContext";

const ColorBtn = ({ mode, btnColor }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={() => setTheme(mode)}
      style={{ backgroundColor: btnColor }}
      className={`hover:scale-120 duration-300 hover:border-cta cursor-pointer w-7 h-7 ${
        theme == mode
          ? "border-cta-active border-3"
          : "border-2 border-border-color"
      } rounded`}
    ></div>
  );
};

export default ColorBtn;
