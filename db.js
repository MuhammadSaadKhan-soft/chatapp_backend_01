require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI|| "mongodb+srv://saadhussaini678:sO15whJ41BLP1DAw@cluster0.airjee5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



const connectToMongo = async () => {
  try {
      await mongoose.connect(uri); 
      console.log("Connected to MongoDB successfully");
      
  } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = connectToMongo;
