import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "./Router";

const NavBar = () => {
  const { items, total } = useContext(ProductsContext);
  const amount = () => {
    if (items !== null) {
      return items.reduce((acc, product) => acc + +product.amount, 0);
    } else {
      return 0;
    }
  };

  return (
    <div className="navBar">
      <Link className="nav-items" to="/">
        Home
      </Link>
      <Link className="nav-items" to="/Shopping">
        Shop
      </Link>
      <Link className="nav-items" to="/Checkout">
        Checkout{" "}
      </Link>
      <div className="nav-count">
        <p>Total Items:{amount()}</p>
        <p>Total Amount:{total}</p>
      </div>
    </div>
  );
};

export default NavBar;
