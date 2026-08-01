import React, { useContext } from 'react'
import Context from '../Lec-04/Context'

const A = () => {
  let data = useContext(Context)
  console.log(data,"data");
  return (
    <div>
        <h2> {data} </h2>  
    </div>
  )
}

export default A
