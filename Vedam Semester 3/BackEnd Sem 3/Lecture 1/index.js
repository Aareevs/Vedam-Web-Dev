// 1st Example AND REMEMBER~!!! ->> **Run node index.js in terminal to see the output**

// const fs = require('fs');

/*
Explanation:
- Uses Node's built-in `fs` module to read a file synchronously.
- `fs.readFileSync("index.txt")` returns a Buffer containing the file contents.
- `data.toString()` converts the Buffer to a UTF-8 string for printing.
- This is a simple demo; synchronous I/O blocks the event loop. For non-blocking
	behavior prefer `fs.readFile()` (async) or streaming APIs, and add error handling
	(try/catch or callbacks/promises) for robustness.
*/

// let data = fs.readFileSync("index.txt")
// console.log(data.toString(),"hehehe")

//  2nd Example

// const fs = require('fs');

//  console.log("1")

//  fs.writeFile("home.txt","gujju",()=>{
//      console.log("Fixkaru");
//  })

//  console.log("2")
//  console.log("A")
//  fs.unlink("home.txt",()=>{
//      console.log("File Deleted")
//  })


// 3rd Example
// Creating then deleteing Folder and file inside it

//  const fs=require('fs')
//  fs.mkdirSync("newFolder")
//  fs.writeFileSync("newFolder/index.html", "hola amigo")
//  fs.rmSync("newFolder",{recursive:true}) 