require('dotenv').config();
// lib/mongoose.js
const mongoose = require('mongoose');

let isConnected = false;

const connectToMongo = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error", err);
  }
};

module.exports = connectToMongo;

