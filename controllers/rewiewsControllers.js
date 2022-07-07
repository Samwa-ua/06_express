const books = require('../books.json');

const getAllRewiews = (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === Number(id));
  if (!book) {
    return res
      .status(404)
      .json({ success: false, msg: `no rewiew with id ${id}` });
  }
  res.status(200).json(book.reviews);
};

const addReview = (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === Number(id));
  if (!book) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide review value' });
  }
  const reviewText = req.body;
  const newReview = { id: book.reviews.length + 2, comment: reviewText };
  book.reviews.push(newReview);

  res.status(201).json({ success: true, book });
};

const deleteReview = (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === Number(id));
  if (!book) {
    return res
      .status(404)
      .json({ success: false, msg: `no review with id ${id}` });
  }
  books.filter((book) => book.reviews.id !== Number(req.params.id));
  return res
    .status(200)
    .json({ success: true, msg: `Review with id ${id} deleted` });
};

module.exports = {
  getAllRewiews,
  addReview,
  deleteReview,
};
