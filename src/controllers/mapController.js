const League = require('../models/League');

exports.getLeagues = async (req, res) => {
  try {
    const leagues = await League.find();  // Fetch all leagues
    res.json(leagues);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};