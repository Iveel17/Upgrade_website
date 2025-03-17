const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public')); // Serve static files like CSS

const coursesRoute = require('./routes/dynamic/courses');
const aboutRoute = require('./routes/public/about');

app.use('/courses', coursesRoute);
app.use('/about', aboutRoute);

app.get("/", (req, res) => {
    console.log("Hello")
    res.render("home")
})

app.listen(PORT);