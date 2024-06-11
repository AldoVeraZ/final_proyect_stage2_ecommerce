import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importamos componentes de React Router
import NavBar from "../layout/NavBar"; // Importamos el NavBar
import Home from "../pages/Home"; // Importamos la página Home
import About from "../pages/About"; // Importamos la página About
import Contact from "../pages/Contact"; // Importamos la página Contact
import Upload from "../pages/Upload"; // Importamos la página Upload
import Footer from "../layout/Footer"; // Importamos el Footer
import Checkout from "../pages/Checkout"; // Importamos la página Checkout
import Success from "../pages/Success"; // Importamos la página Success
import SearchResults from "../pages/SearchResults"; // Importamos la nueva página de resultados de búsqueda

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
          <Route path="/checkout/success" element={<Success />} />
          <Route path="/search" element={<SearchResults />} />{" "}
          {/* Añadimos la nueva ruta */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default RouterApp;
