import React, { useContext } from "react";
import DisplayItems from "./Display/DisplayItems";
import { ProductsContext } from "./Router";

const Main = () => {
  const { items } = useContext(ProductsContext);

  if (items) {
    return (
      <div className="cont-main">
        <h1 className="title">Machua Peru</h1>
        <DisplayItems
          products={items.filter((item) => item.featured === true)}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Main;
