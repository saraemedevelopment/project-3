
const router = require('express').Router();
const ReviewController = require('../controllers/reviewController');


router.get('/', ReviewController.reviewGet);
router.post('/:id', ReviewController.reviewPost);
// AQUI EL ID ME CHIRRIA PERO EN POSTAMAN FUNCIONA BIEN

module.exports = router;
