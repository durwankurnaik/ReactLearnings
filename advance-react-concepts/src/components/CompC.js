import React, { useContext } from "react";
import { UserContext } from "../App";

function CompC() {
  const name = useContext(UserContext);

  return (
    <div>
      <div>Component C</div>
      User Context value {name}
    </div>
  );
}

export default CompC;
