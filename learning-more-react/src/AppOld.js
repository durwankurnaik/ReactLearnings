import { useRef, useEffect, useState } from "react";
import PortalDemo from "./components/PortalDemo";

function App() {
  const ref = useRef();
  const clickRef = useRef();

  useEffect(() => {
    ref.current.focus();
    clickRef.current.click();
  }, []);

  const [toShow, setToShow] = useState(false);

  return (
    <>
      {/* <div className="text-center mt-10">
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={userName}
            onChange={updateUserName}
            id="username"
            className="border-2"
          /> */}

      {/* Now the above input tag has two-way data binding same as Vue does by using v-model directive */}

      {/* </form>
      </div> */}

      <div className="text-center">
        <input className="border mt-5" type="text" ref={ref} />
        <button
          ref={clickRef}
          onClick={() => console.log(`I have been clicked`)}
        >
          Click me
        </button>

        <button
          className="block mx-auto mt-5 border-2 bg-gray-300 py-1 px-3"
          onClick={() => setToShow(!toShow)}
        >
          Toggle portalled content
        </button>
        {toShow && <PortalDemo />}
      </div>
    </>
  );
}

export default App;
