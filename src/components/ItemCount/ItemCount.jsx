import React from "react";

import "./ItemCount.css";

const ItemCount = ({ initial, product, onAdd, Counter, SetCounter }) => {
  const CountUp = () => {
    if (Counter < product.stock) {
      SetCounter(Counter + 1);
    }
  };

  const CountDown = () => {
    if (Counter > 1) {
      SetCounter(Counter - 1);
    }
  };

  return (
    <div className="ItemCount">
      <div className="ItemButtons">
        <button onClick={CountUp}>+</button>
        <p>Cant:{Counter}</p>
        <button onClick={CountDown}>-</button>
      </div>

      <div className="AddToCart">
        <button
          onClick={() => {
            onAdd(product, Counter);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
