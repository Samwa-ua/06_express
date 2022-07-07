const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  createBook,
  getSingleBook,
  editBook,
} = require('../controllers/booksControllers');

router.route('/').get(getAllBooks);
router.route('/').post(createBook);
router.route('/:id').get(getSingleBook);
router.route('/:id').put(editBook);

module.exports = router;
