import React from 'react'
import { useState } from 'react'
import UseEffectDemo from './useEffectDemo'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>{count}</h2> 
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button> 
      
      <UseEffectDemo />
    </div>
  )
}

export default App


