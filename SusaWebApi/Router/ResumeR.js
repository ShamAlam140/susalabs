const express = require('express');
const router = express.Router();
const authMiddleware = require('../middeleware/Admin');
const uploadPdf = require('../middeleware/resume');
const {
    createResume,
    getAllResumes,
   
    deleteResume
} = require('../controller/ResumeC'); // Adjust the path as per your file structure

// Route to create a new resume entry
router.post('/resume', uploadPdf.single('resume'),  createResume);


// Route to get all resume entries
router.get('/resume-get',authMiddleware, getAllResumes);



// Route to delete a resume entry
router.delete('/Dresume/:_id',authMiddleware, deleteResume);

module.exports = router;
