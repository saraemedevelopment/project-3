const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CATEGORIES = require('./Place-Cat');

const placeSchema = new Schema({

  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review', required: false }],

  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  url: {
    type: String,
    enum: CATEGORIES,
    required: false,
  },

  trustLevel:{
    type: Number
  },

  lat: Number,
  lng: Number,

  address: {
    type: String,
    required: false
  },

  cp: {
    type: Number,
    required: false
  },

  city: {
    type: String,
    required: false
  },

  upload: String,

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

// userSchema.index({
//   location: '2dsphere'
// });

module.exports = mongoose.model('Place', placeSchema);
