const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  },
  {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('User', userSchema);
