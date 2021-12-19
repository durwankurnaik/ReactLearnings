import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import React, { useState } from "react";

function App() {
  const [productsList, setProductsList] = useState([
    {
      price: 999,
      name: "I phone 10s max",
      quantity: 0,
    },
    {
      price: 1999,
      name: "Macbook Pro 2021",
      quantity: 0,
    },
    {
      price: 499,
      name: "Ipad max",
      quantity: 0,
    },
    {
      price: 399,
      name: "Ipad mini",
      quantity: 0,
    },
  ]);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productsList];
    let newTotalAmount = totalAmount;

    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;

    setProductsList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productsList];
    let newTotalAmount = totalAmount;

    newProductList[index].quantity > 0 && newProductList[index].quantity--;
    newTotalAmount -= newProductList[index].price;

    setProductsList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const clearCart = () => {
    let newProductList = [...productsList];

    newProductList.map((product) => {
      return (product.quantity = 0);
    });
    setProductsList(newProductList);
    setTotalAmount(0);
  };

  return (
    <>
      <Navbar />
      <ProductList
        productList={productsList}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        totalAmount={totalAmount}
        clearCart={clearCart}
      />
    </>
  );
}

export default App;
