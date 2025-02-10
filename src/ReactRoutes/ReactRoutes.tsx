import { Route, Routes } from "react-router";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";

const ReactRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Routes>
  );
};

export default ReactRoutes;
