import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementNum, decrementNum } from "./store/actions/index";

function App() {
  const count = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-center mt-10">
        <h2 className="text-3xl">Welcome to Redux App</h2>
        <div className="mt-5">
          <button
            onClick={() => dispatch(decrementNum())}
            className="border-2 bg-gray-300 px-4 py-1"
          >
            -
          </button>
          <input
            disabled
            className="text-center w-24 border-2 border-gray-300 py-1"
            type="text"
            value={count}
          />
          <button
            onClick={() => dispatch(incrementNum())}
            className="border-2 bg-gray-300 px-4 py-1"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
