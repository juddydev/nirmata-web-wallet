const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: Object,
    required: true
  },
  originalAddress: {
    type: String,
    required: true,
    unique: true
  },
  mnemonic: {
    type: Object,
    required: true
  },
  privateKey: {
    type: Object,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Wallet', walletSchema);