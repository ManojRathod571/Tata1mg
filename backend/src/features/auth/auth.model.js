const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true },
    pincode: { type: String },
    password: { type: String, required: true },
    role: { type: String},
    address: { type: String },
    phonenumber: { type: Number },
    gender: { type: String, enum: ["Male", "Female", "other"] },
  }
);

module.exports = UserModel = mongoose.model("user", userSchema);
