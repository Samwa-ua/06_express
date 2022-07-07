const express = require('express');
const booksRouter = require('./routes/books');
const notFound = require('./middlewares/not-found');
const isExist = require('./middlewares/isExist');
const app = express();
const port = 5000;

app.use(express.json());
app.use('/api/books', booksRouter);

app.use(notFound);

app.listen(port, () => console.log(`Server started on port ${port}...`));
