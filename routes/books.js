const express = require('express');
const router = express.Router();
const { getAllBooks, getOneBook } = require('../controllers/booksControllers');

// import * as bookController from '../controllers/bookController.js';

// Middleware
// router.use('/:id', bookController.findBookMiddleware);

router.route('/').get(getAllBooks);

module.exports = router;
