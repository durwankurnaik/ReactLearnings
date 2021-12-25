import React, { useState, useMemo } from "react";

function Counter3() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  // useMemo is used to optimize our code by rendering only those components whose dependencies are getting changed.
  const isEven = useMemo(() => {
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <>
      <div>
        <button
          className="border-2 bg-gray-400 my-2 px-3 py-1"
          onClick={incrementOne}
        >
          Count one - {counterOne}
        </button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button
          className="border-2 bg-gray-400 my-2 px-3 py-1"
          onClick={incrementTwo}
        >
          Count two - {counterTwo}
        </button>
      </div>
    </>
  );
}

export default Counter3;
