import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  value: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { firstCounter: state.firstCounter - action.value };
    case "reset":
      return { firstCounter: initialState.firstCounter };
    default:
      return { firstCounter: state.firstCounter };
  }
};

function Counter2() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Clicked {count.firstCounter} times
      <div>
        <button
          onClick={() => dispatch({ type: "decrement", value: 5 })}
          className="border-2 mt-5 bg-gray-300 py-1 px-3"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="border-2 mt-5 bg-gray-300 py-1 px-3"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: "increment", value: 5 })}
          className="border-2 mt-5 bg-gray-300 py-1 px-3"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter2;
