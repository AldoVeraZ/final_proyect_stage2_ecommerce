import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/jason.svg"; // Asumiendo que tienes esta imagen en tu proyecto
import menuIcon from "../img/barswhite.svg"; // Asumiendo el ícono de menú
import closeIcon from "../img/close-svgrepo-com.svg"; // Asumiendo el ícono de cerrar
import Cart from "../components/Cart";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-header">
      <div>
        <div className="top-bar">
          <span className="search-form">
            <form>
              <input type="search" placeholder="Buscar..." />
              <button type="submit">Buscar</button>
            </form>
          </span>
          <ul>
            <li>
              <div className="cart-container">
                <Cart />
              </div>
            </li>
          </ul>
        </div>

        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
              <div>
                <h5>
                  TOYS COLLECTION <br />
                  FROM HELL
                </h5>
              </div>
            </Link>
          </div>
          <div className="toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={isMenuOpen ? closeIcon : menuIcon} alt="menu toggle" />
          </div>
          <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/contact">Contactus</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
