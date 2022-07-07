const express = require('express');
const isExist = require('../middlewares/isExist');
const router = express.Router();
const {
  getAllBooks,
  createBook,
  getSingleBook,
  editBook,
  deleteBook,
} = require('../controllers/booksControllers');

router.route('/').get(getAllBooks);
router.route('/').post(createBook);
router.route('/:id').get(getSingleBook);
router.route('/:id').put(editBook);
router.route('/:id').delete(deleteBook);

module.exports = router;
