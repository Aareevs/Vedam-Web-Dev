import React from 'react'
import { useState } from 'react';

const App = () => {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState("red");
  let [height, setHeight] = useState("100vh");
  return (

    <div style={{backgroundColor:color, height:height}}>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default App