const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  createBook,
  createReview,
} = require('../controllers/booksControllers');

// import * as bookController from '../controllers/bookController.js';

// Middleware
// router.use('/:id', bookController.findBookMiddleware);

router.route('/').get(getAllBooks);
router.route('/').post(createBook);
// router.route('/').post(createReview);

module.exports = router;
