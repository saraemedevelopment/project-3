
const router = require('express').Router();
const ReviewController = require('../controllers/reviewController');


router.post('/', ReviewController.reviewPost);


module.exports = router;
