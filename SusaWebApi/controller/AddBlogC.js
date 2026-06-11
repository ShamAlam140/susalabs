const AddBlog = require('../Model/AddBlog');

// Create operation
exports.createBlog = async (req, res) => {
    try {
        console.log('🚀 Blog creation request received');
        console.log('📝 Request body keys:', Object.keys(req.body));
        console.log('📁 File info:', req.file ? 'File present' : 'No file');
        console.log('🔐 Auth header:', req.headers.authorization ? 'Present' : 'Missing');

        // Get image URL from Cloudinary upload (handled by multer)
        const imageUrl = req.file?.path;

        // Validate content size before saving
        const { blogDescription, blogTitle, authorName, category, dateTime, keywords, metaDescription, canonicalUrl } = req.body;
        
        console.log('📊 Field validation:');
        console.log('  - authorName:', authorName ? `Present (${Buffer.byteLength(authorName, 'utf8')} bytes)` : 'Missing');
        console.log('  - blogTitle:', blogTitle ? `Present (${Buffer.byteLength(blogTitle, 'utf8')} bytes)` : 'Missing');
        console.log('  - blogDescription:', blogDescription ? `Present (${blogDescription.length} chars, ${(Buffer.byteLength(blogDescription, 'utf8') / (1024 * 1024)).toFixed(2)} MB)` : 'Missing');
        console.log('  - category:', category ? `Present (${Buffer.byteLength(category, 'utf8')} bytes)` : 'Missing');
        console.log('  - imageUrl:', imageUrl ? 'Present' : 'Missing');
        
        // Calculate total payload size
        let totalSize = 0;
        if (authorName) totalSize += Buffer.byteLength(authorName, 'utf8');
        if (blogTitle) totalSize += Buffer.byteLength(blogTitle, 'utf8');
        if (blogDescription) totalSize += Buffer.byteLength(blogDescription, 'utf8');
        if (category) totalSize += Buffer.byteLength(category, 'utf8');
        if (req.body.dateTime) totalSize += Buffer.byteLength(req.body.dateTime, 'utf8');
        
        console.log('📦 Total payload size:', (totalSize / (1024 * 1024)).toFixed(2), 'MB');
        console.log('📏 Individual field sizes:');
        console.log(`   - Author: ${authorName ? (Buffer.byteLength(authorName, 'utf8') / 1024).toFixed(2) : 0} KB`);
        console.log(`   - Title: ${blogTitle ? (Buffer.byteLength(blogTitle, 'utf8') / 1024).toFixed(2) : 0} KB`);
        console.log(`   - Content: ${blogDescription ? (Buffer.byteLength(blogDescription, 'utf8') / (1024 * 1024)).toFixed(2) : 0} MB`);
        console.log(`   - Category: ${category ? (Buffer.byteLength(category, 'utf8') / 1024).toFixed(2) : 0} KB`);

        // Check required fields
        if (!authorName || !blogTitle || !blogDescription || !category) {
            return res.status(400).json({ 
                error: 'Missing required fields',
                missing: {
                    authorName: !authorName,
                    blogTitle: !blogTitle,
                    blogDescription: !blogDescription,
                    category: !category
                }
            });
        }
        
        // Check if blogDescription exceeds safe size (15MB to match schema)
        const maxContentSize = 15 * 1024 * 1024; // 15MB
        if (blogDescription && Buffer.byteLength(blogDescription, 'utf8') > maxContentSize) {
            console.log('❌ Content too large:', Buffer.byteLength(blogDescription, 'utf8'), 'bytes');
            return res.status(400).json({ 
                error: 'Blog content is too large. Maximum size allowed is 15MB.' 
            });
        }

        // Additional validation
        if (!imageUrl) {
            console.log('❌ No image file uploaded');
            return res.status(400).json({ error: 'Blog image is required' });
        }

        console.log('✅ All validations passed, creating blog...');

        // Construct blog payload
        const newBlog = new AddBlog({
            authorName: authorName.trim(),
            blogDescription: blogDescription.trim(),
            blogTitle: blogTitle.trim(),
            category: category.trim(),
            keywords: keywords ? keywords.trim() : "",
            metaDescription: metaDescription ? metaDescription.trim() : "",
            canonicalUrl: canonicalUrl ? canonicalUrl.trim() : "",
            dateTime: dateTime || new Date(),
            file: imageUrl,
        });

        console.log('💾 Saving blog to database...');
        const savedBlog = await newBlog.save();
        console.log('✅ Blog saved successfully with ID:', savedBlog._id);
        
        res.status(201).json(savedBlog);
    } catch (error) {
        console.error('❌ Create Blog Error:', error);
        console.error('Error stack:', error.stack);
        
        // Handle specific MongoDB errors
        if (error.name === 'ValidationError') {
            console.log('📋 Validation error details:', error.errors);
            return res.status(400).json({ 
                error: 'Validation failed', 
                details: Object.values(error.errors).map(err => err.message)
            });
        }
        
        if (error.code === 'ERR_OUT_OF_RANGE' || error.message.includes('BSON')) {
            return res.status(400).json({ 
                error: 'Blog content is too large for database storage. Please reduce the content size.' 
            });
        }

        res.status(500).json({ error: error.message });
    }
};


// Read operation - Get all blogs with pagination and size optimization
exports.getAllBlogs = async (req, res) => {
    try {
        console.log('🔍 Getting all blogs request received');
        console.log('📊 Database connection status:', require('mongoose').connection.readyState);
        
        // Get pagination parameters
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 6; // Default to 6 blogs per page to match frontend
        const skip = (page - 1) * limit;
        
        console.log('📄 Pagination params:', { page, limit, skip });
        
        // Get total count for pagination info
        const totalBlogs = await AddBlog.countDocuments();
        
        // Fetch blogs with pagination - EXCLUDE blogDescription for faster loading
        const blogs = await AddBlog.find()
            .select('authorName blogTitle category dateTime file keywords metaDescription canonicalUrl _id') // Exclude blogDescription completely
            .sort({ _id: -1 })
            .skip(skip)
            .limit(limit);
        
        // Convert to plain objects for response
        const optimizedBlogs = blogs.map(blog => blog.toObject());
        
        console.log('✅ Successfully fetched', blogs.length, 'blogs (page', page, 'of', Math.ceil(totalBlogs / limit), ')');
        
        // Check response size
        const responseData = {
            blogs: optimizedBlogs,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(totalBlogs / limit),
                totalBlogs,
                hasNextPage: page < Math.ceil(totalBlogs / limit),
                hasPrevPage: page > 1
            }
        };
        
        const totalSize = JSON.stringify(responseData).length;
        console.log('📦 Response payload size:', (totalSize / (1024 * 1024)).toFixed(2), 'MB');
        
        res.status(200).json(responseData);
    } catch (error) {
        console.error('❌ Get All Blogs Error:', error);
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        
        // Handle specific MongoDB/BSON errors
        if (error.name === 'MongoError' || error.message.includes('BSON')) {
            return res.status(500).json({ 
                error: 'Database error: Response too large or BSON serialization failed',
                details: 'Try implementing pagination or reducing blog content size'
            });
        }
        
        res.status(500).json({ 
            error: 'Failed to fetch blogs',
            details: error.message 
        });
    }
};

// Read operation - Get all blogs with full content (for backward compatibility)
exports.getAllBlogsWithContent = async (req, res) => {
    try {
        console.log('🔍 Getting all blogs with content request received');
        console.log('📊 Database connection status:', require('mongoose').connection.readyState);
        
        // Get pagination parameters with smaller default limit for full content
        const page = parseInt(req.query.page) || 1;
        const limit = Math.min(parseInt(req.query.limit) || 5, 5); // Max 5 blogs with full content
        const skip = (page - 1) * limit;
        
        console.log('📄 Pagination params (with content):', { page, limit, skip });
        
        // Get total count for pagination info
        const totalBlogs = await AddBlog.countDocuments();
        
        // Fetch blogs with pagination including full content
        const blogs = await AddBlog.find()
            .sort({ _id: -1 })
            .skip(skip)
            .limit(limit);
        
        console.log('✅ Successfully fetched', blogs.length, 'blogs with content (page', page, 'of', Math.ceil(totalBlogs / limit), ')');
        
        // Check response size
        const responseData = {
            blogs,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(totalBlogs / limit),
                totalBlogs,
                hasNextPage: page < Math.ceil(totalBlogs / limit),
                hasPrevPage: page > 1
            }
        };
        
        const totalSize = JSON.stringify(responseData).length;
        console.log('📦 Response payload size (with content):', (totalSize / (1024 * 1024)).toFixed(2), 'MB');
        
        if (totalSize > 15 * 1024 * 1024) { // 15MB limit
            console.log('⚠️ Large response detected, reducing to 3 blogs per page');
            // If still too large, fetch fewer blogs
            const smallerBlogs = await AddBlog.find()
                .sort({ _id: -1 })
                .skip(skip)
                .limit(3);
            
            const smallerResponseData = {
                blogs: smallerBlogs,
                pagination: {
                    currentPage: page,
                    totalPages: Math.ceil(totalBlogs / 3),
                    totalBlogs,
                    hasNextPage: page < Math.ceil(totalBlogs / 3),
                    hasPrevPage: page > 1
                }
            };
            
            return res.status(200).json(smallerResponseData);
        }
        
        res.status(200).json(responseData);
    } catch (error) {
        console.error('❌ Get All Blogs With Content Error:', error);
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        
        // Handle specific MongoDB/BSON errors
        if (error.name === 'MongoError' || error.message.includes('BSON')) {
            return res.status(500).json({ 
                error: 'Database error: Response too large or BSON serialization failed',
                details: 'Try using pagination with smaller page sizes'
            });
        }
        
        res.status(500).json({ 
            error: 'Failed to fetch blogs with content',
            details: error.message 
        });
    }
};


// Read operation - Get blog by ID
// exports.getBlogById = async (req, res) => {
//     try {
//         const blog = await AddBlog.findById(req.params.id);
//         if (!blog) {
//             return res.status(404).json({ message: 'Blog not found' });
//         }
//         res.status(200).json(blog);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// Update operation
exports.updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = { ...req.body };

        // If a new featured image is uploaded through multer
        if (req.file) {
            console.log('🔄 Updating featured image for blog:', id);
            updateData.file = req.file.path; // New Cloudinary URL
        }

        const updatedBlog = await AddBlog.findByIdAndUpdate(id, updateData, { new: true });
        
        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        console.log('✅ Blog updated successfully:', id);
        res.status(200).json(updatedBlog);
    } catch (error) {
        console.error('❌ Update Blog Error:', error.message);
        res.status(500).json({ error: error.message });
    }
};

// Delete operation
exports.deleteBlog = async (req, res) => {
    try {
        const deletedBlog = await AddBlog.findByIdAndDelete(req.params._id);
        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


  
 // GET /Blog/blog/:id
exports.getBlogById = async (req, res) => {
    try {
      const { _id } = req.params;
  
      const blog = await AddBlog.findById(_id);
  
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      res.status(200).json(blog);
    } catch (error) {
      console.error("🔥 Error in getBlogById:", error.message);
      res.status(500).json({ error: 'Failed to fetch blog', details: error.message });
    }
  };

  // New controller to handle inline image uploads for the editor
  exports.uploadInlineImage = async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No image file uploaded' });
      }
      
      // req.file.path contains the Cloudinary secure URL thanks to multer-storage-cloudinary
      console.log('✅ Inline image uploaded to Cloudinary:', req.file.path);
      
      res.status(200).json({ 
        url: req.file.path,
        message: 'Image uploaded successfully' 
      });
    } catch (error) {
      console.error("🔥 Error in uploadInlineImage:", error.message);
      res.status(500).json({ error: 'Failed to upload image', details: error.message });
    }
  };