
const cloudinary = require('cloudinary');
const multer = require('multer');
const path = require('path');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './public/uploads/')
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}${path.extname(file.originalname)}`)
//   }
// });




const cloudinaryStorage = require('multer-storage-cloudinary');
const express = require('express');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const app = express();
 
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'folder-name',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(undefined, 'my-file-name');
  }
});

const upload   = multer({ storage });
 
const parser = multer({ storage: storage });
 
app.post('/upload', parser.array('images', 10), function (req, res) {
  console.log(req.files);
});

module.exports = upload;
