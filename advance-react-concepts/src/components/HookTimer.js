import React, { useState, useEffect } from "react";

function HookTimer() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="text-3xl text-center mt-5">{count}</div>;
}

export default HookTimer;
