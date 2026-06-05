const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// ENROLL STUDENT
router.post("/enroll", async (req, res) => {
  try {
    const { name, email, phone, className } = req.body;

    const student = new Student({
      name,
      email,
      phone,
      className
    });

    await student.save();

    res.status(201).json({
      message: "Enrollment successful"
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL STUDENTS (ADMIN LIST)
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });

    res.json(students);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;