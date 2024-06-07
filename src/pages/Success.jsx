import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

function Success() {
  const { resetCart } = useContext(CartContext);

  useEffect(() => {
    resetCart();
  }, [resetCart]);

  return (
    <div className="vertical-padding">
      <h2>Felicitaciones tu pago està listo!! </h2>
      <p>Nos pondremos en contacto para coordinar el envío..</p>
    </div>
  );
}

export default Success;
