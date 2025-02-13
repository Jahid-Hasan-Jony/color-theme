import { Route, Routes } from "react-router";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";

const ReactRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="register" element={<Registration />}></Route>
      <Route path="login" element={<Login />}></Route>
    </Routes>
  );
};

export default ReactRoutes;
