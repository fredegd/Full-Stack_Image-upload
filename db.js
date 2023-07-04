const mongoose = require("mongoose")
mongoose.connect(process.env.CONNECTION_STRING)
        .then(()=>console.log("Successfully Connected to DB"))
        .catch((err)=>console.error("Error connecting to DB", err));

const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
        cloud_name: 'dqkzytqee', 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET,
        secure: true 
      });