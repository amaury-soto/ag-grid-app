import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import GridExample from "../pages/GridExample/GridExample";
import About from "../pages/About/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/grid" element={<GridExample />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
