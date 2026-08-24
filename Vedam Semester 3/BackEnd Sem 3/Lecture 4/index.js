// RestAPI Example

let express = require("express")
let app = express()
let cors = require("cors")
let products = [
    {
        id: 1,
        name: "iPhone 15",
        category: "mobile",
        price: 69999,
        stock: 10
    },
    {
        id: 2,
        name: "Galaxy S24",
        category: "mobile",
        price: 64999,
        stock: 8
    },
    {
        id: 3,
        name: "MacBook Air",
        category: "laptop",
        price: 99999,
        stock: 5
    },
    {
        id: 4,
        name: "Dell XPS 14",
        category: "laptop",
        price: 89999,
        stock: 7
    },
    {
        id: 5,
        name: "AirPods Pro",
        category: "headphones",
        price: 24999,
        stock: 15
    },
    {
        id: 6,
        name: "Sony XM5",
        category: "headphones",
        price: 29999,
        stock: 12
    }
]

app.get('/',(req,res)=>{
   res.send(products)
})
app.get('/product/:id',(req,res)=>{
   let {id}=req.params
   let data=products.find((a)=>{
      return a.id===Number(id)
   })
   console.log(data,"product")

   if(!data){
      return res.status(404).json({
         msg:"Product not founddddddddd"
      })
   }

   res.status(200).json({
      msg:data
   })

})
app.get('/search',(req,res)=>{
   let {category}=req.query
   let data=products.filter((a)=>{
      return a.category==category
   })
   console.log(data,"hehe")
   if(data.length==0){
      return res.status(404).json({
         msg:"Category not founddddddddd"
      })
   }
   res.status(200).json({
      msg:data
   })

})

app.post('/product', (req, res) => {
    console.log(req.body)
    let obj = {
        id: products.length + 1,
        ...req.body
    }
    console.log(obj)
    products.push(obj)
    res.status(201).json({
        msg: "Product added",
        data: obj
    })

})

app.listen(3000,()=>{
   console.log("server.....")
})