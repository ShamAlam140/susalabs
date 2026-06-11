const express = require('express');
const multer = require('multer');
const router = express.Router();
const blogController = require('../controller/AddBlogC');
const authMiddleware = require('../middeleware/Admin');
const upload = require('../middeleware/uplod'); // multer + cloudinary


router.get('/Allblog', blogController.getAllBlogs);
router.get('/AllblogWithContent', blogController.getAllBlogsWithContent);

// Error handling middleware for multer
const handleMulterError = (err, req, res, next) => {
    console.log('🔍 Multer error handler triggered:', err?.message);
    if (err instanceof multer.MulterError) {
        console.log('📋 Multer error code:', err.code);
        if (err.code === 'LIMIT_FIELD_VALUE') {
            return res.status(400).json({ 
                error: 'Blog content is too large. Please reduce the content size to under 14MB.' 
            });
        }
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ 
                error: 'Image file is too large. Maximum size allowed is 10MB.' 
            });
        }
        return res.status(400).json({ error: err.message });
    }
    if (err) {
        console.log('❌ Non-multer error:', err.message);
        return res.status(400).json({ error: err.message });
    }
    next(err);
};

// Create a new blog with image
router.post('/Addblog', (req, res, next) => {
    upload.single('file')(req, res, (err) => {
        if (err) {
            console.log('🔍 Upload error:', err.message);
            if (err instanceof multer.MulterError) {
                console.log('📋 Multer error code:', err.code);
                if (err.code === 'LIMIT_FIELD_VALUE') {
                    return res.status(400).json({ 
                        error: 'Blog content is too large. Please reduce the content size to under 15MB.' 
                    });
                }
                if (err.code === 'LIMIT_FILE_SIZE') {
                    return res.status(400).json({ 
                        error: 'Image file is too large. Maximum size allowed is 10MB.' 
                    });
                }
                return res.status(400).json({ error: err.message });
            }
            return res.status(400).json({ error: err.message });
        }
        // If no upload error, proceed to auth middleware
        authMiddleware(req, res, next);
    });
}, blogController.createBlog);

// New route for uploading inline images from the blog editor
router.post('/upload-inline-image', authMiddleware, upload.single('file'), blogController.uploadInlineImage);


// Get all blogs (with and without auth)
router.get('/blog', authMiddleware, blogController.getAllBlogs);


// Get a single blog by ID
// router.get('/blog/:id', blogController.getBlogById);

// Update blog (with optional image update)
router.put('/blog/:id', authMiddleware, upload.single('file'), blogController.updateBlog);
router.get('/blog/:_id', blogController. getBlogById);


// Delete blog
router.delete('/delete/:_id',authMiddleware , blogController.deleteBlog);

module.exports = router;
