const express = require('express');
const router = express.Router();
const carsCtrl = require('../controllers/cars');

router.get('/', carsCtrl.index);
router.get('/new', carsCtrl.new);
router.post('/', carsCtrl.create);


module.exports = router;
