
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pessoa from "./pages/Pessoa";
import NotFound from "./components/notFound/NotFound";


function routers() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pessoa" element={<Pessoa />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default routers;