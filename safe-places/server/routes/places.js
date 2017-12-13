
const router = require('express').Router();
const PlaceController = require('../controllers/placeController');
const upload = require('../configs/multer');

router.post('/', upload.single('file'), PlaceController.placePost);
router.get('/', PlaceController.placesGet);
router.get('/:id', PlaceController.placeIdGet);
router.get('/cat/:url', PlaceController.placeCatGet);



module.exports = router;
