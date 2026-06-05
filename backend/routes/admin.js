const express = require("express");
const router = express.Router();

const Admin = require("../models/Admin");
const User = require("../models/user");
const Student = require("../models/student");


// ============================
// ADMIN LOGIN
// ============================

router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne({ email, password });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid Admin Credentials"
      });
    }

    res.json({
      success: true,
      message: "Admin Login Successful"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }
});


// ============================
// GET ALL USERS
// ============================

router.get("/users", async (req, res) => {

  try {

    const users = await User.find();

    res.json(users);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching users"
    });

  }

});


// ============================
// GET ALL STUDENTS
// ============================

router.get("/students", async (req, res) => {

  try {

    const students = await Student.find();

    res.json(students);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching students"
    });

  }

});


module.exports = router;