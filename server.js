const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the portfolio website from the public folder.
app.use(express.static(path.join(__dirname, 'public')));

// Open the resume website at the root URL.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cv.html'));
});

app.listen(PORT, () => {
  console.log(`Portfolio website running at http://localhost:${PORT}`);
});
