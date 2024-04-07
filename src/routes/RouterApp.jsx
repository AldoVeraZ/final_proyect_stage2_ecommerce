import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "../layout/NavBar";
import Home from "../pages/Home";

// Importar otras páginas del Proyecto 1 aquí
import About from "../pages/About"; // Importar la página About del Proyecto 1
import Contact from "../pages/Contact"; // Importar la página Contact del Proyecto 1
import Upload from "../pages/Upload"; // Importar la página Upload del Proyecto 1
import Footer from "../layout/Footer";
// Importar el componente Footer del Proyecto 1

function RouterApp() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />{" "}
        {/* Ruta para la página About */}
        <Route path="/contact" element={<Contact />} />{" "}
        {/* Ruta para la página Contact */}
        <Route path="/upload" element={<Upload />} />{" "}
        {/* Ruta para la página Upload */}
      </Routes>
      <Footer /> {/* Colocar el footer fuera del componente Routes */}
    </BrowserRouter>
  );
}

export default RouterApp;
