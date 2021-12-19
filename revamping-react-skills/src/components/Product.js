import React from "react";

function Product(props) {
  return (
    <>
      <div className="cart-item">
        <pre className="text-lg ml-5">Name: {props.products.name}</pre>
        <pre className="text-lg ml-5">Price: {props.products.price}</pre>
        <pre className="text-lg ml-5">
          Total Amount: {props.products.price * props.products.quantity}
        </pre>

        <div>
          <button
            className="ml-5 mt-5 px-3 py-1 border border-red-500 rounded-md hover:bg-red-600"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <pre className="inline-flex mx-2">
            Quantity: {props.products.quantity}
          </pre>
          <button
            className="mt-5 px-3 py-1 border border-green-500 rounded-md hover:bg-green-600"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
