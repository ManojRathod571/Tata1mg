const mongoose = require("mongoose");

module.exports = connection = async () => {
  return await mongoose.connect(process.env.MONGO_URL);
};
