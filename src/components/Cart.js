import React, { useContext } from "react";
import { ProductsContext } from "./Router";
import formatter from "./Formatter";
var uniqid = require("uniqid");

const Cart = () => {
  const { items, add, remove, subtract, total } = useContext(ProductsContext);

  if (items !== null) {
    const cart = items.filter((item) => item.amount >= 1);

    return (
      <div class="cont-checkout">
        {cart.map((singleItems) => {
          return (
            <div className="cont-checkout-items" key={uniqid()}>
              <div>
                <p>Title:{singleItems.title}</p>
                <p>Amount:{singleItems.amount}</p>
                <p>Price:{formatter(singleItems.price)}</p>
                <img src={singleItems.src} alt={singleItems.title} />
              </div>
              <div className="checkout-btn">
                <button onClick={() => add(singleItems)}>+</button>
                <button onClick={() => subtract(singleItems)}>-</button>
                <button onClick={() => remove(singleItems)}>Remove </button>
              </div>
            </div>
          );
        })}
        <div>
          <h1>Total:{total}</h1>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Cart;
