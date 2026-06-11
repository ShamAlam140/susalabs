// sss sfd models/AddBlogModel.js
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  
    authorName: {
        type: String,
        required: true,
        trim: true,
        maxlength: [100, 'Author name cannot exceed 100 characters']
    },
    blogDescription: {
        type: String,
        required: true,
        maxlength: [5242880, 'Blog description cannot exceed 5MB'] // Reduced to 5MB since images are in Cloudinary
    },
    blogTitle: {
        type: String,
        required: true,
        trim: true,
        maxlength: [200, 'Blog title cannot exceed 200 characters']
    },
    category: {
        type: String,
        required: true,
        trim: true,
        index: true, // Optimized for category filtering
        maxlength: [50, 'Category cannot exceed 50 characters']
    },
    dateTime: {
        type: Date,
        required: true,
        default: Date.now,
        index: true // Optimized for chronological sorting
    },
    file: {
        type: String,
        required: true
    },
    keywords: {
        type: String,
        trim: true,
        maxlength: [500, 'Keywords cannot exceed 500 characters']
    },
    metaDescription: {
        type: String,
        trim: true,
        maxlength: [300, 'Meta description cannot exceed 300 characters']
    },
    canonicalUrl: {
        type: String,
        trim: true
    }
  });

  // Text index for high-performance searching on titles and keywords
  blogSchema.index({ blogTitle: 'text', keywords: 'text' });
  // Compound index for category + date if ever needed
  blogSchema.index({ category: 1, dateTime: -1 });
  





const AddBlog = mongoose.model("AddBlog", blogSchema);

module.exports =AddBlog;
