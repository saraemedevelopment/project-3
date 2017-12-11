
const router = require('express').Router();
const ReviewController = require('../controllers/reviewController');


router.get('/', ReviewController.reviewGet);
router.post('/:id', ReviewController.reviewPost);


module.exports = router;
