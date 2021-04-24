const Car = require('../models/car');

module.exports = {
  index,
  new: newCar,
  create
};

function newCar(req, res) {
    res.render('cars/new');
}

function create(req, res) {
    req.body.origin = !!req.body.origin;


    if(req.body.carCylinder) {
        req.body.cast = req.body.carCylinder.replace(/\s*, \s*/g, ',')
        req.body.cast = req.body.carCylinder.split(',');
    }
    for(let key in req.body) {
        if(req.body[key] === '') delete req.body[key];
    }
    Car.create(req.body, function(err, flight) {
        if(err) return res.redirect('/cars/new');
        res.redirect('/cars');
    });
}

function index(req, res) {
    Car.find({}, function(err,cars) {
        res.render('cars/index', { cars });
    });
}






