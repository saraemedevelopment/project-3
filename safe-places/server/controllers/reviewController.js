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

 /* List all elements from #{model} */
 reviewGet: (req, res, next) => {
  Review.find()
    .then(list => res.json(list))
    .catch(e => res.json(e));
},


    reviewPost: (req, res, next) => {
      const obj_data = {
        text: req.body.text,
        rating: req.body.rating
      };
      const obj = new Review(obj_data);
      obj.save()
      Place.findByIdAndUpdate(req.params.id, { $push: { "reviews": obj } })
        .then(o => res.json(o))
        .catch(e => res.json(e))
      }
}