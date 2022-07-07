const express = require('express');
const router = express.Router();
const {
  getAllRewiews,
  addReview,
  deleteReview,
} = require('../controllers/rewiewsControllers');

router.route('/:id/reviews').get(getAllRewiews);
router.route('/:id/reviews').post(addReview);
router.route('/:id/reviews').delete(deleteReview);

module.exports = router;
