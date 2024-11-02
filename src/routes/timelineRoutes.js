const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // TODO: apply the timeline logic here (stick timeline thing)
    res.send('we\'ll have the timeline here');
});

router.get('/hi', (req, res) => {
    res.send('hi lol');
});
module.exports = router;