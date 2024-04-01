// Importaciones necesarias: React, componentes de react-router-dom, y componentes o imágenes locales.
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import logo from "../img/jason.svg";
import menuIcon from "../img/hamburger-icon.svg";
import closeIcon from "../img/close-icon.svg";

// Definición del componente NavBar usando una función de flecha.
function NavBar() {
  // useState para manejar el estado de visibilidad del menú. Inicialmente falso, indicando que el menú está cerrado.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función toggleMenu que cambia el estado de isMenuOpen.
  // Si está abierto lo cierra y viceversa.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // La estructura JSX del componente, que React renderizará en el DOM.
  return (
    <div>
      <div className="cart-nav">
        {/* Link de react-router-dom usado para la navegación SPA (Single Page Application).
            Dirige al usuario a la ruta raíz ("/") sin recargar la página. */}
        <Link to="/" className="top-nav__logo">
          {/* Imagen del logo y texto. La imagen es importada arriba, lo que permite que Webpack maneje su ruta correctamente. */}
          <img src={logo} alt="icon-logo" />
          <div>
            TOYS COLLECTION <br />
            FROM HELL
          </div>
        </Link>
        {/* Formulario de búsqueda, puede requerir implementación adicional según las necesidades del proyecto. */}
        <form className="search-form">
          <input type="search" placeholder="Buscar..." />
          <button type="submit">Buscar</button>
        </form>

        <div className="cart-container">
          <Cart />
        </div>
      </div>
      {/*  El encabezado de la página, conteniendo la barra de navegación. */}
      <header className="top-header">
        <nav className="top-nav">
          {/* Botón para abrir el menú. Al hacer clic, se llama a toggleMenu para cambiar el estado de isMenuOpen. */}
          <button
            className="open-menu"
            aria-label="Abrir menú"
            onClick={toggleMenu}
          >
            <img src={menuIcon} alt="abrir menú" />
          </button>
          {/* Menú de navegación. La visibilidad se controla con una clase dinámica basada en isMenuOpen. */}
          <ul className={`top-nav__menu ${isMenuOpen ? "menu_opened" : ""}`}>
            {/* Botón para cerrar el menú, también llama a toggleMenu. */}
            <button
              className="close-menu"
              aria-label="Cerrar menú"
              onClick={toggleMenu}
            >
              <img src={closeIcon} alt="cerrar menú" />
            </button>
            {/* Lista de enlaces de navegación. Usan el componente Link para una navegación SPA eficiente. */}
            <li>
              <Link to="/" className="selected">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/upload">Alta</Link>
            </li>
            <li>
              <Link to="/contact">Contáctanos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

// Exportación del componente NavBar para su uso en otras partes de la aplicación.
export default NavBar;
