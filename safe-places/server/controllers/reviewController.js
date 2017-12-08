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

    reviewPost: (req, res, next) => {
      const obj_data = {
        text: req.body.text,
        rating: req.body.rating
      };
      const obj = new Review(obj_data);
      obj.save()

      // PERO A CUAL PLACE PUSHEO?????//////////////////////
        .then( o => res.json(o))
        .catch(e => res.json(e));
        console.log(this.place.reviews);
    }

  };
