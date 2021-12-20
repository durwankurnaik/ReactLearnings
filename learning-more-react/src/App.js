import React from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <React.Fragment>
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />

      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />

      {/* <ClickCounter />
      <HoverCounter />
      <User render={() => "Durwankur"} /> */}
    </React.Fragment>
  );
}

export default App;
