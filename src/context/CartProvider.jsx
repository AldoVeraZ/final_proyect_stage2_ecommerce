import React, { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [moviescartList, setMoviescartList] = useState([]);

  const addMovie = (data) => setMoviescartList([...moviescartList, data]);

  const removeMovie = (id) =>
    setMoviescartList(moviescartList.filter((movie) => movie.id !== id));
  /* cuando no sea igual ,va a dejar todos los objetos que coincidan con ese id */

  return (
    <CartContext.Provider
      value={{
        moviescartList,
        addMovie,
        removeMovie,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
