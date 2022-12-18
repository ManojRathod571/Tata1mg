const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connection = require("./config/db");
const userRoute = require("./features/auth/auth.route");
const productRoute = require("./features/products/product.route");
const cartRoute = require("./features/cart/cart.route");
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to the Tata 1MG");
});

app.use("/auth", userRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);

app.listen(process.env.PORT, async () => {
  try {
    await connection();
    console.log("Connected to database");
  } catch (error) {
    console.log("connection failed to database", error);
  }
  console.log(`Listning on the server ${process.env.PORT}`);
});
