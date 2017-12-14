
const router = require('express').Router();
const PlaceController = require('../controllers/placeController');

router.post('/', PlaceController.placePost);
router.get('/', PlaceController.placesGet);
router.get('/:id', PlaceController.placeIdGet);
router.get('/cat/:url', PlaceController.placeCatGet);



module.exports = router;
