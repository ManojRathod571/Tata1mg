const express = require("express");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("./auth.model");

module.exports = userRoute = express.Router();

userRoute.post("/signup", async (req, res) => {
  const { email, password, name, age, address, pincode, gender } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (user) {
      res.send("User already exits, Please try login");
    } else {
      bcrypt.hash(password, 10, async (err, hashedPassword) => {
        await userModel.create({
          email,
          password: hashedPassword,
          name,
          age,
          address,
          pincode,
          gender,
        });
        res.status(200).send("Sign up successfully");
      });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(404).send({ err: "Sign up failed" });
  }
});

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send("Please Signup first");
    } else {
      let match = await bcrypt.compare(password, user.password);
      if (match) {
        let token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
        return res.status(200).send({ token });
      } else {
        return res.status(404).send("invalid Password");
      }
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});
