import React from "react";
import Counter from "./Counter";

function CartItem({ id, movieData, quantity }) {
  console.log("Brand:", movieData.brand);
  return (
    <div className="cart-item__container">
      <h2>
        {movieData.name}
        <span>({movieData.brand})</span>
      </h2>
      <p>{movieData.category}</p>
      <Counter id={id} movieData={movieData} initialValue={quantity} />
    </div>
  );
}

export default CartItem;
