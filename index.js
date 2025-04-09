const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('🚀 Hello Batch 4 from Express.js! Modified and ready to push.');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});