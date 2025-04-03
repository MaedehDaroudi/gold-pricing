const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, World!');
});

// یک روت دیگر
router.get('/about', (req, res) => {
    res.send('About us');
});

module.exports = router;
