import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="grid grid-cols-3 w-3/4 mx-auto">
      <div className="bg-gradient-to-bl from-gray-300 to-slate-200 rounded-md py-10 mt-10">
        <h2 className="text-3xl mb-3">Deposit/Withdraw money</h2>
        <button
          onClick={() => {
            withdrawMoney(100);
          }}
          className="border-2 bg-red-600 text-gray-200 rounded-md px-3 py-1 mx-3"
        >
          -
        </button>
        Update balance
        <button
          onClick={() => {
            depositMoney(100);
          }}
          className="border-2 bg-blue-600 text-gray-200 rounded-md px-3 py-1 mx-3"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Shop;
