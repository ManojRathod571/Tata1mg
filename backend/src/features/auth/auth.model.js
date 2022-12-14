const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, required: true },
    pincode: { type: String },
    password: { type: String, required: true },
    role: { type: String, enum: ["Admin", "Guest"] },
    address: { type: String },
    age: { type: Number },
    gender: { type: String, enum: ["Male", "Female", "other"] },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = UserModel = mongoose.model("user", userSchema);
