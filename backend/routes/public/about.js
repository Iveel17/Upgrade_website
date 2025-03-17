const express = require('express');

const router = express.Router();

// GET /about
router.get('/', (req, res) => {
    res.send('This is the About section of the website.');
});

module.exports = router;