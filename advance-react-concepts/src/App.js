import React from "react";
import DocTitle from "./DocTitle";
// import UsingRefs from "./components/UsingRefs";
// import Counter3 from "./Counter3";
// import Counter2 from "./components/Counter2";
// import ReducerCounter from "./components/ReducerCounter";
// import CompA from "./components/CompA";
// import HookTimer from "./components/HookTimer";

export const UserContext = React.createContext();

function App() {
  return (
    <div className="text-center mt-5 text-3xl">
      {/* <HookTimer /> */}
      {/* <UserContext.Provider value="Durwankur">
        <CompA />
      </UserContext.Provider> */}

      {/* <ReducerCounter /> */}
      {/* <Counter2 /> */}

      {/* <Counter3 /> */}

      {/* <UsingRefs /> */}

      <DocTitle />
    </div>
  );
}

export default App;
