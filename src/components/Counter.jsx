import React, { useContext, useState } from "react";
import Text from "./Text";
import Button from "./Button";
import { CartContext } from "../context/CartContext";

const INITIAL_STATE = 0;

export default function Counter({ id }) {
  const [count, setCount] = useState(INITIAL_STATE);
  const { addMovie, removeMovie } = useContext(CartContext);

  const decrement = () => {
    if (count > 0) setCount(count - 1);
    removeMovie(id);
  };
  const increment = () => {
    setCount(count + 1);
    addMovie({
      id,
      quantity: count + 1,
    });
  };

  return (
    <>
      <div className="counter__container">
        <Button
          label="Resta"
          className="counter__btn"
          action={decrement}
          disabled={count === 0}
        />
        <Text
          renderAs="p"
          content={count}
          componentsProps={{ className: "counter__count-text" }}
        />
        <Button label="Suma" className="counter__btn" action={increment} />
      </div>
    </>
  );
}