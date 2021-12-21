import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReducerCounter() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      Clicked {count} times
      <div>
        <button
          onClick={() => dispatch('decrement')}
          className="border-2 mt-5 bg-gray-300 py-1 px-3"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch('reset')}
          className="border-2 mt-5 bg-gray-300 py-1 px-3"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch('increment')}
          className="border-2 mt-5 bg-gray-300 py-1 px-3"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default ReducerCounter;
