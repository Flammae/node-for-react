const mongoose = require("mongoose");

const SignatureSchema = new mongoose.Schema({
  guestSignature: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  message: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
});

module.exports = mongoose.model("Signature", SignatureSchema);
