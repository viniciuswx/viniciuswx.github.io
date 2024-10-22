import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Works from "./Screens/Works/Works";
import { About } from "./Screens/About/About";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/works" element={<Works />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
}

export default MainRoutes;
