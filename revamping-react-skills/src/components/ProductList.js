import React from "react";
import Product from "./Product";

function ProductList(props) {
  return (
    <>
      <div className="text-3xl text-center mt-8">FlorangeCart</div>
      <div className="w-3/4 grid grid-cols-3 gap-8 mt-8 mx-auto">
        {props.productList.map((products, idx) => {
          return (
            <Product
              products={products}
              key={idx}
              incrementQuantity={props.incrementQuantity}
              decrementQuantity={props.decrementQuantity}
              index={idx}
            />
          );
        })}
      </div>

      <div className="w-3/4 mx-auto my-10 flex justify-between">
        <div className="text-xl">Amount Payable: {props.totalAmount}</div>
        <div className="space-x-2">
          <button
            className="border border-red-500 hover:bg-red-500 py-1 px-3 rounded-md"
            onClick={props.clearCart}
          >
            Clear cart
          </button>
          <button className="border-2 border-green-500 hover:bg-green-500 py-1 px-3 rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductList;
