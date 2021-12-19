import "./App.css";
import Footer from "./components/Footer";
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

  const incrementQuantity = (index) => {
    let newProductList = [...productsList];
    newProductList[index].quantity++;
    setProductsList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productsList];
    if (newProductList[index].quantity !== 0) {
      newProductList[index].quantity--;
      setProductsList(newProductList);
    }
  };

  const grandTotal = () => {
    let sum = 0;
    sum = productsList.reduce((product) => {
      return sum + product.quantity
    })
  }

  console.log(grandTotal())

  return (
    <>
      <Navbar />
      <ProductList
        productList={productsList}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <Footer />
    </>
  );
}

export default App;
