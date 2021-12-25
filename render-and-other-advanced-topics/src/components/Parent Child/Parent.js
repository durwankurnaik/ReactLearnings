import React, { useState } from "react";

export const Parent = () => {
  const [count, setCount] = useState(0);

  console.log("Parent component rendered")

  return (
    <div>
      <h2>Clicked {count} times</h2>
      <button onClick={() => setCount((pCount) => pCount + 1)}>
        Increment by 1
      </button>
      <button onClick={() => setCount((pCount) => pCount + 5)}>
        Increment by 5
      </button>
      <button onClick={() => setCount((pCount) => pCount + 10)}>
        Increment by 10
      </button>
    </div>
  );
};
