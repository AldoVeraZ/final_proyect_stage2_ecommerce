// En el archivo Home.jsx del Proyecto 2

import React from "react";
// Importa las imágenes que vas a usar
import ZodiackMask from "../img/ZodiackMask.jpeg";
import RockerRichard from "../img/Rocker-Richard.jpeg";
import ZodiacKiller from "../img/ZodiacKiller.jpeg";
import DavidBKZ from "../img/DavidBKZ.jpg";
import JWG from "../img/JWG.jpeg";
import RichardPenta from "../img/RichardPenta.jpeg";
import CharlesMansonKnife from "../img/CharlesMansonKnife.jpeg";
import EdKemper from "../img/EdKemper.jpg";

function Home() {
  // Datos de las tarjetas para renderizar, cada uno con su imagen y descripción
  const cards = [
    {
      img: ZodiackMask,
      description: "Figura de acción, el asesino del zodiaco con máscara",
    },
    {
      img: RockerRichard,
      description: "Richard Rockero con gafas de sol y cuchilla",
    },
    { img: ZodiacKiller, description: "Asesino del zodiaco desenmascarado" },
    {
      img: DavidBKZ,
      description: "David Berkowitz Hijo de Sam Figura de acción",
    },
    {
      img: JWG,
      description:
        "Figura de acción de John Wayne Gacy como Patches, el payaso",
    },
    {
      img: RichardPenta,
      description:
        "Richard Ramirez con pentagrama, tamaño escala 7 pulgadas, 18 cm de estatura",
    },
    {
      img: CharlesMansonKnife,
      description:
        "Figura de acción de Charles Manson con cuchillo a escala de 7 pulgadas o 18 cm de tamaño",
    },
    {
      img: EdKemper,
      description:
        "Figura de acción de Ed Kemper escala de 7 pulgadas o 18 cm de tamaño",
    },
  ];

  return (
    <div>
      {/* Contenedor principal para las tarjetas, con padding */}
      <div className="horizontal-padding vertical-padding">
        {/* Contenedor de las tarjetas */}
        <div className="cards">
          {/* Iteración sobre el array de tarjetas para renderizar cada una */}
          {cards.map((card, index) => (
            <div className="card" key={index}>
              {/* La imagen de la tarjeta */}
              <img src={card.img} alt="" className="card__image" />
              {/* Descripción de la tarjeta */}
              <div className="card__content">
                <p>{card.description}</p>
              </div>
              {/* Información de precio y enlace para ver más detalles */}
              <div className="card__info">
                <div>
                  <i className="material-icons">$</i>129.99
                </div>
                <div>
                  <a href="./" className="card__link">
                    Ver figura
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
