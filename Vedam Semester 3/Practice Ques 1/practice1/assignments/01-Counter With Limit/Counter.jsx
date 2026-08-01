import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Counter with Limit</h2>
      <h3>Count: {count}</h3>

      <button onClick={increase} disabled={count === 10}>
        + Increase
      </button>

      <button onClick={decrease} disabled={count === 0}>
        - Decrease
      </button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;