// En el archivo Footer.jsx del Proyecto 2

// En el archivo Footer.jsx del Proyecto 2

import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        <h2>Información</h2>
        <a href="./about">Nosotros</a>{" "}
        {/* Actualizado para usar rutas relativas */}
        <p>Terminos y condiciones</p>
      </div>
      <div>
        <h2>©Toys Collection 2024-♾</h2>
        <p>Desarrollado por LoneWolfDevv</p>
      </div>
      <div>
        <h2>Servicio al Cliente</h2>
        <p>aestebanveraz@gmail.com</p>
        <p>
          <span className="phone">
            <ion-icon name="call-outline"></ion-icon>
            +56950343398
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
