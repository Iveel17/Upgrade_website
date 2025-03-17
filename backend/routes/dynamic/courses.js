const express = require('express');
const router = express.Router();

// Sample course data (replace with DB later)
const courses = [
    { courseId: 1, name: "Math SAT", description: "Advanced math techniques for SAT." },
    { courseId: 2, name: "IELTS Writing", description: "Improve your writing for IELTS." },
    { courseId: 3, name: "Physics A-Level", description: "Master physics for A-Levels." }
];

// GET all courses
router.get("/", (req, res) => {
    res.render("courses", { courses });
});
  
// GET a specific course by ID
router.get("/:courseId", (req, res) => {
    const course = courses.find(course => course.courseId === parseInt(req.params.courseId));
    if (!course) return res.status(404).send("Course not found.");
    res.render("courseDetails", { course });
});

module.exports = router;