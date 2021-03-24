import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Main from "./Main";
import Shopping from "./Shopping";
import formatter from "./Formatter";
import Cart from "./Cart";

const ProductsContext = createContext();

const Router = () => {
  const [items, setItems] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const data = fetch("http://localhost:8000/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  const add = (item) => {
    const copyItems = [...items];
    copyItems[item.id].amount += 1;
    setItems(copyItems);
  };

  const subtract = (item) => {
    const copyItems = [...items];
    copyItems[item.id].amount -= 1;
    setItems(copyItems);
  };

  const remove = (item) => {
    const copyItems = [...items];
    copyItems[item.id].amount = 0;
    setItems(copyItems);
  };
  useEffect(() => {
    if (items !== null) {
      const price = items.reduce((acc, product) => {
        let itemPrice = 0;
        for (let i = 0; i < +product.amount; i++) {
          itemPrice += +product.price;
        }
        return acc + itemPrice;
      }, 0);

      setTotal(formatter(price));
    }
  }, [items]);

  return (
    <BrowserRouter>
      <ProductsContext.Provider
        value={{ items, setItems, add, remove, subtract, total }}
      >
        <div>
          <NavBar />
        </div>
        <Switch>
          <Route path="/Shopping" component={Shopping}></Route>
          <Route path="/Checkout" component={Cart}></Route>
          <Route path="/" component={Main}></Route>
        </Switch>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
};

export { ProductsContext };
export default Router;
