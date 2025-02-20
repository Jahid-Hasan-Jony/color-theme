import { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../../../ContextAPI/ThemeContext";
import ColorBtn from "../../Home/ColorBtn";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="max-h-[7vh] items-center flex flex-wrap bg-background justify-between py-3 px-12">
      <div>
        {theme != "light-mode" ? (
          <img
            className="w-28"
            src="MTS-Logo-in-white-color-with-text.png"
            alt=""
          />
        ) : (
          <img className="w-28" src="MTS-Logo-Branding.png" alt="" />
        )}
      </div>
      <div>
        <ul className="flex gap-5 items-center flex-wrap">
          <li>
            <Link
              className="text-accent hover:text-primary font-secondary text-md font-semibold"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-accent hover:text-primary font-secondary text-md font-semibold"
              to="/gallery"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className="text-accent hover:text-primary font-secondary text-md font-semibold"
              to="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="text-accent hover:text-primary font-secondary text-md font-semibold"
              to="/register"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        <ColorBtn btnColor="black" mode="dark" />
        <ColorBtn btnColor="white" mode="light-mode" />
        <ColorBtn btnColor="rgb(78, 0, 0)" mode="red-mode" />
      </div>
    </div>
  );
};

export default Header;
