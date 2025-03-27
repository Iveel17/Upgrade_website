const express = require('express');
const path = require('path');  // Import path module
const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');

// ✅ Fix the path to views
app.set('views', path.join(__dirname, '../views')); 

// ✅ Fix the path to serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, '../public')));

// Routes
const coursesRoute = require('./routes/dynamic/courses');
const aboutRoute = require('../views/about');  // FIXED

app.use('/courses', coursesRoute);
app.use('/about', aboutRoute);

app.get("/", (req, res) => {
    console.log("Hello");
    res.render("home");  // ✅ Now it should find home.ejs
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
