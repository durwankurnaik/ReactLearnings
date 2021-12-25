import React, { useEffect, useState } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";

function DocTitle() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = `Clicked ${count} times`
  // }, [count]);

  useDocumentTitle(count);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase counter</button>
    </>
  );
}

export default DocTitle;
