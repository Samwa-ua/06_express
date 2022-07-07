const books = require('../books.json');

const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

const createBook = (req, res) => {
  const { title } = req.body;
  const newBook = {
    id: books.length + 1,
    title: title,
    reviews: [],
  };
  books.push(newBook);
  if (!title) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide title value' });
  }
  res.status(201).json({ success: true, books });
};

module.exports = {
  getAllBooks,
  createBook,
};
