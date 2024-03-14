// const cloudinary = require('cloudinary').v2;
import cloudinary from 'cloudinary';
// import cloudinary from 'cloudinary-react';
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.YOUR_CLOUD_NAME,
  api_key:process.env.YOUR_API_KEY,
  api_secret: process.env.YOUR_API_SECRET,
});

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: 'uploads', // You can customize the folder name where files will be stored.
//   },
// });

module.exports = { cloudinary };