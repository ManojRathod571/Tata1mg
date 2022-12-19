const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    image: String,
    name: String,
    price1: Number,
    price2: Number,
    off: Number,
    quantity: Number,
    category: String,
    tablet: String,
    ingredients: String,
    company: String,
    testInclude: String,
    rating: [{ user_name: String, user_image: String, stars: Number }],
    reviews: [
      {
        user_name: String,
        title: String,
        liked: [{ user_name: String, user_image: String }],
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
let Product=mongoose.model("product", productSchema);
module.exports = {Product} 

