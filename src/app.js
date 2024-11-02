const express = require('express');
const app = express();

// Sample API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the Express API' });
});

// Fallback for all other routes (let React handle them)
app.get('*', (req, res) => {
  res.redirect('http://localhost:3000' + req.path);  // Redirect to React for frontend routes
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
