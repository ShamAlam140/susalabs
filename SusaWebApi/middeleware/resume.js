const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../cloudnary'); // Your cloudinary config

// Setting up Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'pdfs', // Folder for storing PDFs
    resource_type: 'raw', // Specify resource type for raw files like PDFs
    format: async (req, file) => 'pdf', // Ensuring the file is treated as a PDF
    public_id: (req, file) => Date.now() + '-' + file.originalname.split('.')[0], // Generate unique public ID
    access_mode: 'public', // **IMPORTANT** Set access mode to 'public' for raw files
  },
});

const uploadPdf = multer({ storage });

module.exports = uploadPdf;
