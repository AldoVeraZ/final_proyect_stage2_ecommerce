// En el archivo Home.jsx del Proyecto 2

import React from "react";
import ProductsWrapper from "../components/ProductsWrapper";

function Home() {
  return (
    <div>
      {/* Contenedor principal para las tarjetas, con padding */}
      {/* <div className="horizontal-padding vertical-padding"> */}
      <ProductsWrapper />
      {/* </div> */}
    </div>
  );
}

export default Home;
