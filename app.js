const express = require('express');
const booksRouter = require('./routes/books');
const reviewRoutes = require('./routes/rewiews');
const notFound = require('./middlewares/not-found');

const app = express();
const port = 5000;

app.use(express.json());
app.use('/api/books', booksRouter);
app.use('/api/books/', reviewRoutes);

app.use(notFound);

app.listen(port, () => console.log(`Server started on port ${port}...`));
