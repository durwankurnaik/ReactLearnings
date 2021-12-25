import React, { useState } from "react";

const initState = {
  fname: "Durwankur",
  lname: "Naik",
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);
  console.log("ObjectUseState rendered")

  const changePerson = () => {
    setPerson({
      fname: "Capt",
      lname: "JackSparrow",
    });
  };

  return (
    <div>
      <button onClick={changePerson}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
};
