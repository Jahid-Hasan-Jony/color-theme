import { useContext } from "react";
import { ThemeContext } from "../../ContextAPI/ThemeContext";
import Card from "./Card";
const Home: React.FC = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="min-h-[7vh] flex flex-wrap bg-background justify-end py-3 px-12 gap-3">
        <button
          onClick={() => setTheme("")}
          className="cursor-pointer hover:scale-95 hover:bg-secondary hover:shadow-btn-shadow-hover-color bg-primary text-cta-text text-center duration-500 py-2 shadow-btn-style shadow-btn-shadow-color px-3 rounded font-secondary"
        >
          Dark Mode
        </button>
        <button
          onClick={() => setTheme("light-mode")}
          className="cursor-pointer hover:scale-95 hover:bg-secondary hover:shadow-btn-shadow-hover-color bg-primary text-cta-text text-center duration-500 py-2 shadow-btn-style shadow-btn-shadow-color px-3 rounded font-secondary"
        >
          Light Mode
        </button>
        <button
          onClick={() => setTheme("red-mode")}
          className="cursor-pointer hover:scale-95 hover:bg-secondary hover:shadow-btn-shadow-hover-color bg-primary text-cta-text text-center duration-500 py-2 shadow-btn-style shadow-btn-shadow-color px-3 rounded font-secondary"
        >
          Red Mode
        </button>
      </div>
      <div className="p-5 w-full gap-5 min-h-[93vh] bg-background flex flex-wrap items-center justify-center">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
