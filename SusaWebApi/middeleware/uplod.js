// middleware/upload.js
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../cloudnary'); // aapka cloudinary config file

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'blogs',
    allowed_formats: ['jpg', 'jpeg', 'png'],
  },
});

const upload = multer({ 
  storage: storage,
  limits: {
    fieldSize: 15 * 1024 * 1024, // 15MB for field values (matching BSON limit)
    fileSize: 10 * 1024 * 1024,  // 10MB for file uploads
    fields: 20,                   // Maximum number of non-file fields
    files: 5                      // Maximum number of file fields
  },
  fileFilter: (req, file, cb) => {
    // Allow only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

module.exports = upload;
