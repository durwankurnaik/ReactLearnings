import React from "react";
import ComponentA from "./components/ComponentA";
import { UserProvider } from "./components/userContext";
// import ClickCounter from "./components/ClickCounter";
// import Counter from "./components/Counter";
// import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <React.Fragment>
      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />

      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* <ClickCounter />
      <HoverCounter />
      <User render={() => "Durwankur"} /> */}

      <UserProvider value="Durwankur">
        <ComponentA />
      </UserProvider>
    </React.Fragment>
  );
}

export default App;
