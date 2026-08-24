// let express = require('express')
// let app = express()
// app.get("/",(req,res)=>{      // Here "/" is the route and the callback function is called when the route is hit
//     res.send("heyy") 
// })
// app.get('/new/:id',(req,res)=>{
//     let {id} = req.params
//     res.send(id)
// })
// app.listen(3000,()=>{
//     console.log("server.....")
// })

let express = require('express')
let app = express()
app.get("/search",(req,res)=>{
    console.log(req.query, "hehe")

    res.send("hehe")
})
app.listen(3000,()=>{
    console.log("server.....")
})