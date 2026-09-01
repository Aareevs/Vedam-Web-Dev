const express = require("express");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

const User = require("./db");

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
    .connect("mongodb://127.0.0.1:27017/db")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });
// Test API
app.get("/", (req, res) => {
    res.json({
        message: "Backend connected successfully!"
    });
});

// Signup API
app.post("/signUp", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;


        // Check if all fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email and password are required"
            });
        }

        // Check if user already exists
        const findData = await User.findOne({ email });

        if (findData) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Create user
        const userInfo = new User({
            name: name,
            email: email,
            password: hashedPassword,
            role: role || "user" // Default role is "user" if not provided
        });

        // Save user
        await userInfo.save();

        return res.status(201).json({
            message: "Signup successful"
        });

    } catch (error) {
        console.log("Signup error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

app.post("/login", async (req, res) => {
    let { email, password } = req.body;

    let findData = await User.findOne({ email });

    if (!findData) {
        return res.send("User not found");
    }

    let valid = await bcryptjs.compare(password, findData.password);

    if (!valid) {
        return res.send("nahi ho raha kya.....");
    }
    let token = jwt.sign({ email:findData.email,role:findData.role }, "secretkey", {});
    console.log(token, "token");

    res.send({ message: "Login successful", token });
});


// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});