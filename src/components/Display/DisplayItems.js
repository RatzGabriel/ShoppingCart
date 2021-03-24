import React, { useContext } from "react";
import { ProductsContext } from "../Router";
import formatter from "../Formatter";

var uniqid = require("uniqid");
const DisplayItems = ({ products }) => {
  const { add } = useContext(ProductsContext);
  if (products) {
    return (
      <div className="cont-items">
        {products.map((item) => (
          <div key={uniqid()}>
            <h2>{item.title}</h2>
            <img src={item.src} alt="test" />
            <p>{formatter(item.price)}</p>
            <button
              onClick={() => {
                add(item);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Test</div>;
  }
};

export default DisplayItems;
