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
            role: role || "user"
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

// Login API
app.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;

        // Check if all fields are provided
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // Find user
        let findData = await User.findOne({ email });

        if (!findData) {
            return res.status(404).send("User not found");
        }

        // Compare password
        let valid = await bcryptjs.compare(password, findData.password);

        if (!valid) {
            return res.status(401).send("Invalid email or password");
        }

        // Create JWT token
        let token = jwt.sign(
            {
                email: findData.email,
                role: findData.role
            },
            "secretkey",
            {
                expiresIn: "1h"
            }
        );

        console.log(token, "token");

        res.send({
            message: "Login successful",
            token
        });

    } catch (error) {
        console.log("Login error:", error);

        res.status(500).send("Internal server error");
    }
});

// Authentication middleware
let auth = (req, res, next) => {
    try {
        let authHeader = req.headers.authorization;

        console.log(authHeader, "authorization header");

        if (!authHeader) {
            return res.status(401).send("Token not found");
        }

        // Get token from Authorization header
        let token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).send("Token not found");
        }

        // Verify token
        let decoded = jwt.verify(token, "secretkey");

        console.log(decoded, "decoded");

        req.user = decoded;

        next();

    } catch (error) {
        console.log("JWT error:", error.message);

        return res.status(401).send("Invalid token");
    }
};

// Role check middleware
let roleCheck = (role) => {
    return (req, res, next) => {

        if (req.user.role !== role) {
            return res.status(403).send("Who the hell are you?");
        }

        // console.log(req.user, "isko dekkho");

        next();
    };
};

// Protected API
app.get("/api", auth, (req, res) => {

    console.log(req.user);

    res.send({
        message: "api is working",
        user: req.user
    });

});

// Admin API
app.get("/admin", auth, roleCheck("admin"), (req, res) => {

    console.log(req.user);

    res.send({
        message: "Admin API is working",
        user: req.user
    });

});

// Start server
app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});