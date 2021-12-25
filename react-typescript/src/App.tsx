import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import React, { useState } from "react";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";

function App() {
  const [age, setAge] = useState(20);
  const [name, setName] = useState({
    first: "Durwankur",
    last: "Naik",
  });

  const changePersonality = () => {
    setName({
      first: "Capt.",
      last: "JackSparrow",
    });
    setAge(29);
  };

  return (
    <>
      This is a typescript-react project
      <Greet name="Durwankur" isLoggedIn={false} />
      <hr />
      <Person name={name} age={age} />
      <button onClick={changePersonality}>Change personality</button>

      <Status status="fetched" />
        <Oscar>
          <Heading>Oscar goes to Dicaprio</Heading>
        </Oscar>
          
    </>
  );
}

export default App;
