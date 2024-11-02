const mongoose = require('mongoose');

const LeagueSchema = new mongoose.Schema({
  name: String,
  country: String,
  type: String,  // e.g., major, minor, national
  icon: String,  // URL to icon image
  description: String,
  // Add more fields as needed
});

module.exports = mongoose.model('League', LeagueSchema);