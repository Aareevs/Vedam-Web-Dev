let express = require('express')    // Explanation: This is the main framework for building web applications in Node.js. It simplifies the process of handling HTTP requests and responses.
let mongoose = require('mongoose') // Explanation: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model your application data, making it easier to work with MongoDB.
let bcrypt = require('bcrypt') // Here, bcrypt is a library used for hashing passwords. It provides a way to securely store passwords by converting them into a hashed format, making it difficult for attackers to retrieve the original password even if they gain access to the database.
let cors = require('cors') // Here, cors allows our React frontend to communicate with our Express backend.
let app = express() // Here, we are creating an instance of the Express application. This instance will be used to define routes, middleware, and other configurations for our web server.

let User = require('./db.js') // Here, we are importing the User model from the db.js file. This model represents the structure of the user data in our MongoDB database and allows us to perform CRUD operations on the user collection.

// Middleware
app.use(cors()) // Here, we are allowing requests from our React frontend.
app.use(express.json()) // Here, we are using the express.json() middleware to parse incoming JSON requests. This allows us to access the data sent in the request body as a JavaScript object, making it easier to work with the data in our application.

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/db").then(()=>{ // Here, we are connecting to a MongoDB database using Mongoose. The connection string specifies the location of the database (in this case, a local MongoDB instance running on the default port 27017) and the name of the database ("db"). The .then() method is used to handle the successful connection, and we log a message to the console indicating that the database connection was successful.
    console.log("db....")
})


// app.post('/', async(req,res)=>{
//     let {name,email,password}=req.body

//     let UserData = new User({
//         name, email, password
//     })
//     await UserData.save()
//     res.send("Done")
// })


app.post('/signUp', async(req, res) => { // Here, we are defining a POST route for the '/signUp' endpoint. This route will handle user registration requests. The async keyword indicates that this function will perform asynchronous operations, allowing us to use await for handling promises.

    let { name, email, password } = req.body; // Here, we are destructuring the name, email, and password properties from the request body. This allows us to easily access the user-provided data sent in the registration request.

    let findData = await User.findOne({ email }) // Here, we are using the User model to search for an existing user in the database with the provided email. The findOne() method returns the first document that matches the specified condition (in this case, the email). The await keyword is used to wait for the database query to complete before proceeding to the next line of code.

    console.log(findData,"HEHEHE") // Here, we are logging the result of the findOne() query to the console. If a user with the specified email is found, findData will contain the user document; otherwise, it will be null. This log helps us debug and verify whether the user already exists in the database.

    if(findData){ // Here, we are checking if findData is truthy, which means that a user with the specified email already exists in the database. If this condition is true, we proceed to send a response indicating that the user already exists.

        return res.send("User already exists") // Here, we are sending a response back to the client indicating that the user already exists. The return statement ensures that the function exits at this point, preventing any further code execution for this request.

    }else{

        let UpdateddP = await bcrypt.hash(password, 10) // Here, we are using bcrypt to hash the user's password before storing it in the database. The hash() method takes two arguments: the plain text password and the number of salt rounds (in this case, 10). The salt rounds determine the complexity of the hashing process, making it more secure. The await keyword is used to wait for the hashing operation to complete before proceeding to the next line of code.

        console.log(UpdateddP,"dekhoooo"); // Here, we are logging the hashed password to the console for debugging purposes. This allows us to verify that the password has been successfully hashed before storing it in the database.

        let userInfo = new User({ // Here, we are creating a new instance of the User model with the provided name, email, and hashed password. This instance represents a new user document that will be saved to the database.
            name,
            email,
            password: UpdateddP
        })

        await userInfo.save() // Here, we are saving the new user document to the database using the save() method. The await keyword is used to wait for the save operation to complete before proceeding to the next line of code. This ensures that the user is successfully stored in the database before sending a response back to the client.

        res.send("User created successfully")
    }
});


app.post('/login', async(req, res)=>{ // Here, we are defining a POST route for the '/login' endpoint. This route will handle login requests.

    let {email, password} = req.body // Here, we are getting the email and password sent from the React frontend.

    let findData = await User.findOne({email}) // Here, we are searching MongoDB for a user with the provided email.

    console.log(findData, "HEHE"); // Here, we are printing the user data in the terminal for debugging.

    if(!findData){ // Here, we are checking if no user was found with the provided email.
        return res.status(401).send("User not found")
    }

    let validP = await bcrypt.compare(password, findData.password) // Here, bcrypt compares the plain-text password entered by the user with the hashed password stored in MongoDB.

    if(!validP){ // Here, we are checking if the password entered by the user is incorrect.
        return res.status(401).send("Wrong password")
    }

    res.send("DONE!") // Here, we are sending a successful response back to the frontend.
})


app.listen(3000,()=>{ // Here, we are starting the Express server on port 3000.
   console.log("server......");
   
})


// What I did here in this Lecture 2 Folder was I made a signup and login page using React and connected it to a backend made using Express and MongoDB. 
// The backend handles user registration and login requests, securely storing passwords using bcrypt for hashing. The frontend communicates with the backend through HTTP requests, allowing users to create accounts and log in.
// Since Login and Signup also worked with POST in thunder client, I used fetch to send POST requests from the React frontend to the Express backend. The backend processes these requests, interacts with the MongoDB database, and sends appropriate responses back to the frontend.