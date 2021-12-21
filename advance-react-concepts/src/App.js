import React from "react";
import ReducerCounter from "./components/ReducerCounter";
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

      <ReducerCounter />
    </div>
  );
}

export default App;
