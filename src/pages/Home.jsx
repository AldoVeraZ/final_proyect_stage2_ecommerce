// En el archivo Home.jsx del Proyecto 2

import React from "react";
import MoviesWrapper from "../components/MoviesWrapper";

function Home() {
  return (
    <div>
      {/* Contenedor principal para las tarjetas, con padding */}
      {/* <div className="horizontal-padding vertical-padding"> */}
      <MoviesWrapper />
      {/* </div> */}
    </div>
  );
}

export default Home;
