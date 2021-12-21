import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({ firstName: "", lastName: "" });

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl">Clicked {count} times</h2>
      <button
        className="mt-5 py-1 px-3 border-2"
        onClick={() => setCount((previousCount) => previousCount + 1)}
      >
        Increment counter
      </button>
      <div>
        <input
          className="border-2"
          value={name.firstName}
          onChange={(event) => setName({ ...name, firstName: event.target.value })}
          type="text"
          placeholder="First Name"
        />
        <input
          className="border-2"
          value={name.lastName}
          onChange={(event) => setName({ ...name, lastName: event.target.value })}
          type="text"
          placeholder="Last Name"
        />
        <h2>Full name: {name.firstName} {name.lastName}</h2>
      </div>
    </div>
  );
}

export default Counter;
