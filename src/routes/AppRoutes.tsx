import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import GridExample from "../pages/GridExample/GridExample";
import About from "../pages/About/About";
import FormExample from "../pages/FormExample/FormExample";
import FormWatchExample from "../pages/FormWatchExample/FormWatchExample";
import ShoppingCart from "../pages/ShoopingCart/ShoopingCart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/grid" element={<GridExample />} />
      <Route path="/form" element={<FormExample />} />
      <Route path="/form-watch" element={<FormWatchExample />} />
      <Route path="/redux" element={<ShoppingCart />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
