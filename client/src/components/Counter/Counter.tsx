import React, { useState } from "react";
import "./index.scss";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="product-cart">
      <div className="product-cart__left">
        <button
          className="product-cart__symbol product-cart__minus"
          onClick={decrement}
          disabled={counter === 0}
        >
          -
        </button>
        <div className="product-cart__symbol product-cart__number">
          {counter}
        </div>
        <button
          className="product-cart__symbol product-cart__plus"
          onClick={increment}
        >
          +
        </button>
      </div>
      <button className="product-cart__button" onClick={() => {}}>
        Add to cart
      </button>
    </div>
  );
}

export default Counter;
