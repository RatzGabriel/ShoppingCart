import React, { useContext } from "react";
import DisplayItems from "./Display/DisplayItems";
import { ProductsContext } from "./Router";

const Shopping = () => {
  const { items } = useContext(ProductsContext);
  if (items) {
    return (
      <div>
        <DisplayItems products={items} />
      </div>
    );
  } else {
    return null;
  }
};

export default Shopping;
