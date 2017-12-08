const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const reviewSchema = new Schema({
  // to: { type: Schema.Types.ObjectId, ref: 'Place', required: false },
  text : String,
  rating: {
    type: Number,
    required: true
  },
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Review', reviewSchema);
