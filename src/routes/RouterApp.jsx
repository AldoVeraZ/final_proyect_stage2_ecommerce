import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "../layout/NavBar";
import Home from "../pages/Home";

// Importar otras páginas del Proyecto 1 aquí
import About from "../pages/About"; // Importar la página About del Proyecto 1
import Contact from "../pages/Contact"; // Importar la página Contact del Proyecto 1
import Upload from "../pages/Upload"; // Importar la página Upload del Proyecto 1
import Footer from "../layout/Footer";
import Checkout from "../pages/Checkout";

function RouterApp() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default RouterApp;
