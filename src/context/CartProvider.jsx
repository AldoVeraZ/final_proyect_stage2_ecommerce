import React, { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [moviesCartList, setMoviesCartList] = useState([]);

  const addMovie = (data) => {
    const movieFinded = moviesCartList.find((movie) => movie.id === data.id);
    if (movieFinded) {
      setMoviesCartList(
        moviesCartList.map((movie) => (movie.id === data.id ? data : movie))
      );
    } else {
      setMoviesCartList([...moviesCartList, data]);
    }
  };

  const removeMovie = (id) => {
    /* vamos a buscar primero */
    const movieFinded = moviesCartList.find((movie) => movie.id === id);
    /* si se ecnotro algo */
    if (movieFinded?.quantity > 1) {
      console.log("Econtre la Movie");
      /* en el caso de que sume */
      setMoviesCartList(
        moviesCartList.map((movie) =>
          movie.id === id
            ? {
                ...movie,
                quantity: movie.quantity - 1,
              }
            : movie
        )
      );
    } else {
      /* si la cantidad 1 lo tenemos que restar y ya quiero que lo quite */
      setMoviesCartList(moviesCartList.filter((movie) => movie.id !== id));
      /* Cantidad -1 y si cantidad es 0 lo quito,  */
      /* quedate con todos los objetos con el filtrado, lo que tiene que coincidir y la condicion del callback es lo q tiene que quedar
      que filtre todas las peliculas cuyo id no coincidan con el que estamos enviando por parametro, va a dejar a todos los que no coinciden */
    }
  };

  return (
    <CartContext.Provider
      value={{
        moviesCartList,
        addMovie,
        removeMovie,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
