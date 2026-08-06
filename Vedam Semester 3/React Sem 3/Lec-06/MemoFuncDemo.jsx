import React, { useCallback, useEffect, useState } from 'react'
import Child from './Child'

const MemoFuncDemo = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState('')

  useEffect(() => {
    const obj = {
      id: 1,
      name: 'Aareev'
    }
    localStorage.setItem("Key", JSON.stringify(obj))
    let data = localStorage.getItem("Key")
    console.log(data, "data")


    // let [count, setCount] = useState(0)
    // let data = useMemo(()=>{
    //     let res = 0
    //     for(let i = 0; i<1000000000; i++){
    //         res+=i;
    //     }
    //     return res;
    // }, [])

    // let demo = ()=>{
    //     console.log("mai hu mahan")
    // }

    // let fun = useCallback(demo,[])
        localStorage.setItem('Key', JSON.stringify(obj))
    const savedData = localStorage.getItem('Key')
    setData(savedData ?? '')
  }, [])

  const fun = useCallback(() => {
    console.log('mai hu mahan')
  }, [])
  return (
    <div>
        <h3>res:{data}</h3>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        {/* <input type="text" /> */}
        <Child fun={fun} />
    </div>
  )
}

export default MemoFuncDemo
