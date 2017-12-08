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


    placeIdGet:('/:id', checkIDParam, (req, res) => {
      Place.findById(req.params.id)
    .populate('reviews')
        .then(o => res.json(o))
        .catch(e => res.json(e));

    }),


    // placeIdGet: (req, res, next) => {
    //   let contador = 0;
    //   let sumrating = 0;
    //   Place.findById(req.params.id)
    //     .then(result1 => {
    //       Review.find({
    //           to: result1._id
    //         })
    //         .then(result2 => {
    //           console.log("RESULT", result2);
    //           result2.forEach(e => {
    //             console.log("LONGITUD", result2.length);
    //             console.log("RATING INDIVIDUAL", e.rating);
    //
    //             sumrating += e.rating;
    //             console.log("SUMA", sumrating);
    //             contador = sumrating / result2.length;
    //             console.log("CONTADOR", contador);
    //             result1.trustLevel = contador;
    //
    //           });
    //         })
    //         .then(list => res.json(list))
    //         .catch(e => res.json(e));
    //     });
    // },

    placePost: (req, res, next) => {
      const obj_data = {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        // trustLevel: req.body.trustLevel,
        // latitude: req.body.latitude,
        // longitude: req.body.longitude,
        // pic_path: `/uploads/${req.file.filename}`,
        // pic_name: req.file.originalname
      };
      const obj = new Place(obj_data);
      obj.save()
        .then(o => res.json(o))
        .catch(e => res.json(e));
    }

  };
