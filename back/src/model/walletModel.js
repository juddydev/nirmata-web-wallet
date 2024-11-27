const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  originalAddress: {
    type: String,
    required: true,
    unique: true
  },
  customAddress: {
    type: String,
    required: true,
    unique: true
  },
  mnemonic: {
    type: String,
    required: true
  },
  privateKey: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Wallet', walletSchema);