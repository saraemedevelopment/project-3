// import { log } from 'util';

const express = require('express');
const Place = require('../models/Place');
const Review = require('../models/Review');


const checkIDParam = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      message: 'Specified id is not valid'
    });
  }
  next();
};

const mongoose = require('mongoose');


module.exports = {


  placesGet: (req, res, next) => {
    Place.find()
      .then(list => res.json(list))
      .catch(e => res.json(e));
  },


  placeIdGet: ('/:id', checkIDParam, (req, res) => {
    let resultado;
    let average = 0;
    let sum = 0;
    let number = 0;
    Place.findById(req.params.id)
      .populate("reviews")
      .then(result1 => {
        result1.reviews.forEach(e => {
             sum += e.rating;
            number++;
           average = sum / number;
           result1.trustLevel = average;
                    })
          res.json(result1)
      })
      .catch(e => res.json(e));
  }),

  placeCatGet: ('/cat/:url', checkIDParam, (req, res) => {
    Place.find({
        url: req.params.url
      })
      .populate("reviews")
      .then(o => res.json(o))
      .catch(e => res.json(e));
  }),

  placePost: (req, res, next) => {
    console.log(req.body)
    const obj_data = {
      name: req.body.name,
      description: req.body.description,
      url: req.body.url,
      // trustLevel: req.body.trustLevel,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      upload: `/uploads/${req.file.filename}`,
      // specs: JSON.parse(req.body.specs) || []
      // pic_path: `/uploads/${req.file.filename}`,
      // pic_name: req.file.originalname
    };

    console.log('ENTRAAAAAA')
    const obj = new Place(obj_data);
    console.log(obj_data)
    console.log(obj)
    obj.save()
      .then(o => res.json(o))
      .catch(e => res.json(e));
  }

};