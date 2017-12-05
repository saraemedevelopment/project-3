const router = require('express').Router();
const indexController = require('../controllers/indexController');
const auth = require('./auth');
// const users = require('./users');
// const place = require('./place');
// const favourite = require('./favourite');
// const review = require('./review');

router.get('/', indexController.index);


router.use('/auth', auth);
// router.use('/user', users);
// router.use('/place', place);
// router.use('/favourite', favourite);
// router.use('/review', review);




module.exports = router;
