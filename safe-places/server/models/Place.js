const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CATEGORIES = require('./Place-Cat');

const placeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  category: {
    type: String,
    enum: CATEGORIES,
    required: false,
  },

  address: {
    type: String,
    required: false
  },

  cp: {
    type: Number,
    required: false
  },

  city:{
    type: String,
    required: false
  },

  photo: String,

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Place', placeSchema);
