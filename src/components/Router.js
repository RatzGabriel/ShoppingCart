import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Main from "./Main";
import Shopping from "./Shopping";
import formatter from "./Formatter";
import Cart from "./Cart";

const ProductsContext = createContext();

const data = [
  {
    title: "Item 1",
    src: "/images/1.jpg",
    src2: "/images/2.jpg",
    src3: "/images/3.jpg",
    src4: "/images/4.jpg",
    price: "999",
    featured: true,
    id: 0,
    amount: 0,
  },
  {
    title: "Item 2",
    src: "/images/2.jpg",
    src2: "/images/2.jpg",
    price: "999",
    featured: true,
    id: 1,
    amount: 0,
  },
  {
    title: "Item 3",
    src: "/images/3.jpg",
    src2: "/images/2.jpg",
    price: "999",
    featured: true,
    id: 2,
    amount: 0,
  },
  {
    title: "Item 3",
    src: "/images/4.jpg",
    src2: "/images/2.jpg",
    price: "999",
    featured: false,
    id: 3,
    amount: 0,
  },
  {
    title: "Item 4",
    src: "/images/4.jpg",
    src2: "/images/2.jpg",
    price: "999",
    featured: false,
    id: 4,
    amount: 0,
  },
  {
    title: "Item 5",
    src: "/images/4.jpg",
    src2: "/images/2.jpg",
    price: "999",
    featured: false,
    id: 5,
    amount: 0,
  },
  {
    title: "Item 6",
    src: "/images/4.jpg",
    src2: "/images/2.jpg",
    price: "999",
    featured: false,
    id: 6,
    amount: 0,
  },
  {
    title: "Item 7",
    src: "/images/4.jpg",
    src2: "/images/2.jpg",
    price: "999",
    featured: false,
    id: 7,
    amount: 0,
  },
  {
    title: "Item 8",
    src: "/images/4.jpg",
    src2: "/images/2.jpg",
    price: "999",
    featured: false,
    id: 8,
    amount: 0,
  },
  {
    title: "Item 9",
    src: "/images/4.jpg",
    src2: "/images/2.jpg",
    price: "999",
    featured: false,
    id: 9,
    amount: 0,
  },
  {
    title: "Item 10",
    src: "/images/4.jpg",
    src2: "/images/2.jpg",
    price: "999",
    featured: false,
    id: 10,
    amount: 0,
  },
  {
    title: "Item 11",
    src: "/images/4.jpg",
    src2: "/images/2.jpg",
    price: "999",
    featured: false,
    id: 11,
    amount: 0,
  },
];

const Router = () => {
  const [items, setItems] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // const data = fetch("data/db.json")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setItems(data);
    //   });
    setItems(data);
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
