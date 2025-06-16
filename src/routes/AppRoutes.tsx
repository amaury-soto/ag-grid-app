import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import FormExample from "../pages/FormExample/FormExample";
import FormWatchExample from "../pages/FormWatchExample/FormWatchExample";
import ShoppingCart from "../pages/ShoopingCart/ShoopingCart";
import GridLayout from "../pages/Grid/GridLayout";
import GridExample from "../pages/Grid/Basic/GridExample";
import GridExampleSS from "../pages/Grid/ServerSide/GridServerSide";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    <Route path="/grid" element={<GridLayout />}>
        <Route index element={<GridExample />} />
        <Route path="server-side" element={<GridExampleSS/>} />
        {/* more examples AG Grid */}
      </Route>
      <Route path="/form" element={<FormExample />} />
      <Route path="/form-watch" element={<FormWatchExample />} />
      <Route path="/redux" element={<ShoppingCart />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
