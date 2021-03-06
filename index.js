const express = require('express');
const app = express();
const port = 3000;

const { movies, getMovies } = require('./movies.js');

app.get('/', (req, res) => {
  res.send('Hello world!');
});

// GET /api/movies
app.get('/movies', (req, res) => {
  res.send(getMovies(movies));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});