const mongoose = require("mongoose");
require("dotenv").config();


const connectDB = async () => {
    try {
      await mongoose.connect('mongodb+srv://slimwafa88:linalouji@cluster0.hghynuh.mongodb.net/ecom', {
        useNewUrlParser: true,
        useUnifiedTopology: true 
      });
      console.log('Connected to the database');
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  };
  
  module.exports = connectDB;