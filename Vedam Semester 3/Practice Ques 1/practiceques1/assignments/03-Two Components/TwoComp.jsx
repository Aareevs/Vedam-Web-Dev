import { useState } from "react";

function Display({ count }) {
  return <h2>{count}</h2>;
}

function Controls({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
    </div>
  );
}

export default function TwoComp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Display count={count} />
      <Controls setCount={setCount} />
    </>
  );
}