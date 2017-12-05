const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const favouriteSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: Schema.Types.ObjectId, ref: 'Place', required: true },
  }, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Favourite', favouriteSchema);
