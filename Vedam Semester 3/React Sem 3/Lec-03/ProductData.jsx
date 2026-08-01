import React from 'react'
import { useParams } from 'react-router-dom';

const ProductData = () => {
  let{id}= useParams()
   console.log(id,"id");
   

    const products = [
        {
          id: 1,
          name: "iPhone 16",
          price: 80000,
        },
        {
          id: 2,
          name: "Samsung S26",
          price: 70000,
        },
        {
          id: 3,
          name: "OnePlus 14",
          price: 50000,
        },
      ];

   let data=   products.find((a)=>{
    console.log(a.id,"test");
    
    return a.id==id

      })
      console.log(data,"data");

  return (
    <div>{data.name}</div>
  )
}

export default ProductData