const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResetPinSchema = new Schema(
  {
    pin: {
      type: String,
      maxlength: 6,
      minLength: 6,
    },
    email: {
      type: String,
      maxlength: 50,
      required: true,
    },
    addedAt: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = {
  ResetPinSchema: mongoose.model("pin", ResetPinSchema),
};
