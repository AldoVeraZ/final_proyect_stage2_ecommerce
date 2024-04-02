import React, { useState } from "react";
import Text from "./Text";
import Button from "./Button";

const INITIAL_STATE = 0;

export default function Counter() {
  const [count, setCount] = useState(INITIAL_STATE);

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const increment = () => setCount(count + 1);

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
