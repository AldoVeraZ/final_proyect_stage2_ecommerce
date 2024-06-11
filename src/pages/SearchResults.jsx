import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProducts } from "../util/api";
import Card from "../components/Card";

function SearchResults() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    setIsLoading(true);

    let searchQuery = query || "";

    getProducts(searchQuery)
      .then((data) => {
        if (data.products.length === 0) {
          setMessage("No se encontraron productos.");
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 3000); // Oculta el mensaje después de 3 segundos
        } else {
          setMessage("");
        }
        setProducts(data.products);
      })
      .catch((err) => {
        console.error(err);
        setMessage("Hubo un error al cargar los productos.");
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 3000); // Oculta el mensaje después de 3 segundos
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  if (isLoading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="card__wrapper vertical-padding">
      {showMessage && <p className="message">{message}</p>}
      {products.map((product) => (
        <Card key={product._id} {...product} />
      ))}
    </div>
  );
}

export default SearchResults;
