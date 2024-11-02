const express = require('express');
const router = express.Router();

//route to get all map data (league, teams, etc)
router.get('/', (req, res) => {
    // TODO: add logic to get map data (leaflet.js?)
    res.send('we\'ll have the map here');
});

router.get('/hi', (req, res) => {
    res.send('hi lol');
});
module.exports = router;