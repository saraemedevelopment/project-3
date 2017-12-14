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

  reviewGet: (req, res, next) => {
    Review.find()
      .then(list => res.json(list))
      .catch(e => res.json(e));
  },


  reviewPost: (req, res, next) => {
    new Review({
        text: req.body.text,
        rating: req.body.rating
      })
      .save()
      .then(newReview =>{
        console.log(req.params.id)
        Place.findByIdAndUpdate(req.params.id, {new:true},{
          $push: {
            "reviews": newReview._id
          }
        })
        .then(o => res.json(o))
      })

      .catch(e => res.json(e))
  }
}

// example

// ratingController.post('/new/:id/:meetingId', (req, res, next) => {
//   console.log('entro 1');
//   console.log(req.params.meeting);
//   const newRating = new Rating ({
//     author: req.body.userId,
//     genericLevel: parseInt(req.body.ratingObj.genericLevel),
//     punctualityLevel: parseInt(req.body.ratingObj.punctualityLevel),
//     skillsLevel: parseInt(req.body.ratingObj.skillsLevel),
//     comment: req.body.ratingObj.comment
//   });
//   newRating.save()
//   .then(rating => {
//     console.log('entro 2');
//     User.findByIdAndUpdate({"_id": req.params.id}, {$push: {rating: parseInt(req.body.ratingObj.genericLevel)}}, {new: true})
//       .then(() => {
//         Meeting.findByIdAndRemove({"_id": req.params.meetingId})
//           .then(meeting => {
//             console.log('entro 3');
//             res.status(200).json(meeting);
//           });
//       });

//   })

//   .catch(err => res.status(500).json({ message : 'Something went wrong'}));
// });