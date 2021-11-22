import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "../src/components/header/Header";

import Home from "./page/Home";
import Ciencia from "./page/Ciencia";
import Mundo from "./page/Mundo";
import Saude from "./page/Saude";
import Politica from "./page/Politica";

function Routers() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ciencia" element={<Ciencia/>} />
          <Route path="/mundo" element={<Mundo/>} />
          <Route path="/saude" element={<Saude/>} />
          <Route path="/politica" element={<Politica/>} />
        </Routes>
    </Router>
  );
}

export default Routers;