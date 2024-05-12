import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getProducts } from "../util/api";

function ProductsWrapper() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data.products);
        // Asegurarse de que el spinner solo se desactive después de un breve retardo
        setTimeout(() => {
          setIsLoading(false);
        }, 1500); // Ajusta este tiempo según necesidades
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="spinner-container">
        {" "}
        {/* Usar el contenedor para centrar el spinner */}
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="card__wrapper">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsWrapper;
