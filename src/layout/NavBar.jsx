import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/jason.svg";
import menuIcon from "../img/barswhite.svg";
import closeIcon from "../img/close-svgrepo-com.svg";
import Cart from "../components/Cart";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <header className="top-header horizontal-padding">
      <div>
        <div className="top-bar">
          <span className="search-form">
            <form onSubmit={handleSearch}>
              <input
                type="search"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
              />
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
            <a href="/about">
              <img src={logo} alt="logo" />
              <div>
                <h5>
                  TOYS COLLECTION <br />
                  FROM HELL
                </h5>
              </div>
            </a>
          </div>
          <div className="toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={isMenuOpen ? closeIcon : menuIcon} alt="menu toggle" />
          </div>
          <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/upload">Upload</a>
            </li>
            <li>
              <a href="/contact">Contactus</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
