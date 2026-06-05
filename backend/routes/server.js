const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require('./routes/auth');
const authMiddleware = require("../middleware/authMiddleware");
const enrollmentRoutes = require("./enrollment");
const adminRoutes = require("./admin");

app.use("/api/auth", authRoutes);
app.use("/api", enrollmentRoutes);
app.use("/api/admin", adminRoutes);

// Protected route
app.get("/api/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to dashboard",
    user: req.user,
  });
});

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });
