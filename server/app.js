const express = require('express');
const os = require("os");
const app = express();

const PORT = process.env.PORT || 4001;

app.use(express.static('dist'));

app.get('/api/:id', (req, res) => {
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});