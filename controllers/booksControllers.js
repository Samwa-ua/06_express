const e = require('express');
const books = require('../books.json');

const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

const getSingleBook = (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === Number(id));
  if (!book) {
    return res
      .status(404)
      .json({ success: false, msg: `no book with id ${id}` });
  }
  res.status(201).json({ success: true, book });
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

const editBook = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const book = books.find((book) => book.id === Number(id));
  if (!book) {
    return res
      .status(404)
      .json({ success: false, msg: `no book with id ${id}` });
  }
  const newTitle = books.map((book) => {
    if (book.id === Number(id)) {
      book.title = title;
    }
    return book;
  });
  res.status(200).json({ success: true, title: newTitle });
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === Number(id));
  if (!book) {
    return res
      .status(404)
      .json({ success: false, msg: `no book with id ${id}` });
  }
  books.filter((book) => book.id !== Number(req.params.id));
  return res
    .status(200)
    .json({ success: true, msg: `Book with id ${id} deleted` });
};

module.exports = {
  getAllBooks,
  createBook,
  getSingleBook,
  editBook,
  deleteBook,
};
