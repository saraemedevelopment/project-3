
const router = require('express').Router();
const PlaceController = require('../controllers/placeController');

router.get('/', PlaceController.placesGet);
router.get('/:id', PlaceController.placeIdGet);
router.get('/cat/:categoria', PlaceController.placeCatGet);

router.post('/', PlaceController.placePost);


module.exports = router;
