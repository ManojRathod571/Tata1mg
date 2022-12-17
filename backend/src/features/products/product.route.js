const express = require("express");
const { find } = require("./product.model");
const ProductModel = require("./product.model");
const { adminValidation } = require("../middleware/adminValidation");

module.exports = productRoute = express.Router();

productRoute.get("/", async (req, res) => {
  const { category, q, limit, page, sort, off, firstletter } = req.query;
  if (category && sort) {
    if (sort == "asc") {
      let temp = await Product.find({ category: category })
        .sort({ price1: 1 })
        .limit(limit);
      return res.send(temp);
    } else if (sort == "desc") {
      let temp = await Product.find({ category: category })
        .sort({ price1: -1 })
        .limit(limit);
      return res.send(temp);
    }
  } else if (category && firstletter) {
    let temp = firstletter;
    let product = await Product.find({
      category: category,
      name: { $regex: "^" + temp, $options: "i" },
    }).limit();
    res.send(product);
  } else if (category && off) {
    if (off == "desc") {
      let discount = await Product.find({ category: category }).sort({
        off: -1,
      });
      res.send(discount);
    } else {
      const [min, max] = off.split(",").map(Number);
      let temp = await Product.find({
        category: category,
        $and: [{ off: { $gte: min } }, { off: { $lt: max } }],
      })
        .sort({ off: 1 })
        .limit(limit);
      res.send(temp);
    }
  } else if (category) {
    let product = await ProductModel.find({ category: category })
      .limit(limit)
      .skip((page - 1) * limit);
    res.send(product);
  } else if (q) {
    let query = new RegExp(q, "i");
    let searches = await ProductModel.find({ name: query });
    console.log(searches);
    res.send(searches);
  } else if (firstletter) {
    let temp = firstletter;
    let product = await Product.find({
      name: { $regex: "^" + temp, $options: "i" },
    }).limit();
    res.send(product);
  } else {
    let AllProduct = await Product.find();
    res.send(AllProduct);
  }
});

productRoute.get("/allproduct",adminValidation, async(req, res) => {
      
  try {
    
    let AllProduct=await Product.find()
    res.send(AllProduct);
  } catch (error) {}
});
