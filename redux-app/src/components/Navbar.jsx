import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const amount = useSelector(state => state.amount)
  
  return (
    <div className="flex justify-between py-4 px-6 text-xl bg-gray-300">
      <div className="flex">
        <a href="/">Redux</a>
        <ul className="flex ml-6 space-x-3">
          <li>
            <a className="hover:text-blue-600" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-blue-600" href="/">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-blue-600" href="/">
              Contribute
            </a>
          </li>
        </ul>
      </div>
      <div>Your balance: {amount}</div>
    </div>
  );
}

export default Navbar;
