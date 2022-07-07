const express = require('express');
const booksRouter = require('./routes/books');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/books">products</a>');
});
app.use('/api/books', booksRouter);

app.listen(port, () => console.log(`Server started on port ${port}...`));
