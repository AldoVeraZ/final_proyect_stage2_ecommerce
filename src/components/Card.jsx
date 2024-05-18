import React from "react";
import Counter from "./Counter";

function Card({ _id, name, imgUrl, category, brand, shortDesc, delivery }) {
  return (
    <div className="card__container">
      <img src={imgUrl} alt={shortDesc} />
      <div className="card__data">
        <h2>
          {name} <span>({brand})</span>
        </h2>
        <b>{category}</b>
        <p>{shortDesc}</p>
        {delivery ? <p>Envío sin cargo.</p> : undefined}
      </div>
      <Counter
        _id={_id}
        movieData={{
          name,
          imgUrl,
          category,
          brand,
        }}
      />
    </div>
  );
}

export default Card;
