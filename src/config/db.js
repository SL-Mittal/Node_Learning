const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB is already connected");
      return;
    }
    await mongoose.connect("mongodb://localhost/mydatabase");
    console.log("MongoDB connected");
  } catch (err) {
    console.log("errr", err);
  }
};

module.exports = connectDB;
