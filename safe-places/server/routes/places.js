
const router = require('express').Router();
const PlaceController = require('../controllers/placeController');

router.get('/', PlaceController.placesGet);
router.get('/:id', PlaceController.placeIdGet);
router.post('/', PlaceController.placePost);


module.exports = router;
