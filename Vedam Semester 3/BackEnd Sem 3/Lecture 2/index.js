// Ex 1

// let os = require('os') // -> this is a built-in module in node.js which gives the information about the operating system
// console.log(os.totalmem()/1024/1024/1024); // ->  this gives the total memory of the system in GB
// console.log(os.freemem()/1024/1024/1024); // ->  this gives the free memory of the system in GB
// console.log(os.cpus()); // ->  this gives the CPU information
// console.log(os.arch()); // ->  this gives the architecture of the system
// console.log(os.uptime()/3600); // ->  this gives the uptime of the system in hours


// Ex 2

// let http = require('http') // ->  this is a built-in module in node.js which allows us to create a web server
// let server = http.createServer((req, res)=>{ // -> this creates a server and takes a callback function which has two parameters req and res
//     res.write("HAI") // -> this writes the response to the client
//     console.log(req.url, "GOOGLE"); // -> this logs the url of the request to the console
//     res.end() // -> this ends the response
// })
// server.listen(3000,()=>{ // -> this makes the server listen on port 3000 and takes a callback function which is called when the server starts listening
//     console.log('Server is running on port 3000 bhaii'); // -> this logs the message to the console when the server starts listening
// })

// Ex 3

// let http = require('http') 
// let server = http.createServer((req, res)=>{ 
//     if(req.url == '/'){ 
//         res.end("hellooo") // this writes 'hellooo' to when you open localhost:3000 in the browser
//     }
//     else if(req.url == '/about'){ 
//         res.end("aboutt") // this writes 'aboutt' to when you open localhost:3000/about in the browser
//     }
//     else{
//         res.write("404 not found") // this writes '404 not found' to when you open any other url in the browser
//         res.end()
//     }
// })
// server.listen(3000,()=>{ 
//     console.log('Server is running on port 3000 bhaii');
// })


// Ex 4 - Creating server with Express

// let express = require('express') // -> this is a built-in module in node.js which allows us to create a web server
// let app = express() // -> this creates an instance of express

// app.use((req, res, next)=>{ // -> this is a middleware function which is called for every request to the server
//     console.log("hn")
//     next() // -> this calls the next middleware function in the stack
// })

// app.get('/', (req, res)=>{ // -> this creates a route for the root url and takes a callback function which has two parameters req and res
//     res.send("hellooo there im a very good person") // -> this sends the response to the client
// })
// app.listen(3000,()=>{ // -> this makes the server listen on port 3000 and takes a callback function which is called when the server starts listening
//     console.log('Server is runninnnn')
// })


// Ex 5 - POST on Thunderclient

// difference between app.get and app.post is that app.get is used to handle GET requests and app.post is used to handle POST requests. 
// Whereas GET requests are used to retrieve data from the server and POST requests are used to send data to the server.

let express= require('express')
let app = express()

//app.use is a middleware between the request and the response .. ITS MORE LIKE A GUARD B
app.use((req,res,next)=>{
  console.log("middleware run ho raha hai");
  next();
})
app.use((req,res,next)=>{
  console.log("middleware run ho raha hai");
  next();
})


app.get('/', (req,res)=>{
  res.send("hello server")
})

app.post('/', (req,res)=>{ // -> in thunderclient this is a POST request and in the browser this is a GET request
  res.send("hello server on post")
})
app.listen(3000,()=>{
  console.log("server firse daud raha hai....")
})