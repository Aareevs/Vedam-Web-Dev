import React, { useEffect, useState } from 'react'

const useEffectDemo = () => {
  const [count, setCount] = useState(0)
  let [apiData, SetApiData] = useState([])
  console.log(apiData, "apiDATAPAIAPI")

  useEffect(() => {
    // console.log("hello")
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        SetApiData(data.products)
      })
  }, [count])

  return (
    <div>
      {/* <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>click</button> */}

      {apiData.map((a) => {
        return (
          <>
            <h2>{a.id}</h2>
            <h2>{a.title}</h2>
          </>
        )
      })}
    </div>
  )
}

export default useEffectDemo
