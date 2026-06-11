'use client';

import { useState, useEffect } from 'react';
import { FiSearch, FiTrash2, FiChevronLeft, FiChevronRight, FiFilter, FiImage, FiX } from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-toastify';

interface Blog {
    _id: string;
    authorName: string;
    blogTitle: string;
    blogDescription: string;
    category: string;
    dateTime: string;
    file: string;
}

export default function ViewBlogPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const itemsPerPage = 5;

    // Fetch blogs from API
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'https://susalabs.onrender.com'}/Blog/Allblog`);
                // API returns { blogs: [...], pagination: {...} } or direct array
                const blogsData = response.data.blogs || response.data;
                const blogsArray = Array.isArray(blogsData) ? blogsData : [];
                setBlogs(blogsArray);
                setFilteredBlogs(blogsArray);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                toast.error('Failed to fetch blogs');
                setBlogs([]);
                setFilteredBlogs([]);
                setIsLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    // Apply search and filter
    useEffect(() => {
        let result = blogs;

        if (searchTerm) {
            result = result.filter(blog =>
                blog.blogTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                blog.authorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                blog.blogDescription.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory !== 'all') {
            result = result.filter(blog => blog.category === selectedCategory);
        }

        setFilteredBlogs(result);
        setCurrentPage(1);
    }, [searchTerm, selectedCategory, blogs]);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

    // Get unique categories
    const categories = ['all', ...new Set(blogs.map(blog => blog.category))];

    // Handle delete
    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            try {
                const authData = localStorage.getItem('authData');
                const token = authData ? JSON.parse(authData).token : null;

                if (!token) {
                    toast.error('User not authenticated');
                    return;
                }

                await axios.delete(`${process.env.NEXT_PUBLIC_API_URL || 'https://susalabs.onrender.com'}/Blog/delete/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setBlogs(blogs.filter(blog => blog._id !== id));
                toast.success('Blog deleted successfully');
            } catch (error) {
                console.error('Error deleting blog:', error);
                toast.error('Failed to delete blog');
            }
        }
    };

    // Format date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Handle image preview
    const handleImagePreview = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            {/* Image Preview Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative bg-white p-4 rounded-lg max-w-4xl max-h-screen">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            <FiX className="h-6 w-6" />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Blog preview"
                            className="max-w-full max-h-[80vh] object-contain"
                        />
                    </div>
                </div>
            )}

            <h1 className="text-2xl font-bold text-gray-800 mb-6">View Blogs</h1>

            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="relative w-full md:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiSearch className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiFilter className="text-gray-400" />
                        </div>
                        <select
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Blog Table */}
            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                </div>
            ) : (
                <>
                    {blogs.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-gray-500 text-lg mb-4">No blogs have been posted yet</div>
                            <div className="text-gray-400">When blogs are posted, they will appear here</div>
                        </div>
                    ) : (
                        <>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {currentBlogs.length > 0 ? (
                                            currentBlogs.map(blog => (
                                                <tr key={blog._id} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {blog.file ? (
                                                            <button
                                                                onClick={() => handleImagePreview(blog.file)}
                                                                className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-100 hover:bg-gray-200"
                                                            >
                                                                <img
                                                                    src={blog.file}
                                                                    alt="Blog thumbnail"
                                                                    className="w-8 h-8 object-cover rounded"
                                                                />
                                                            </button>
                                                        ) : (
                                                            <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center">
                                                                <FiImage className="text-gray-400" />
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="font-medium text-gray-900">{blog.blogTitle}</div>
                                                        <div className="text-sm text-gray-500 line-clamp-1">{blog.blogDescription?.replace(/<[^>]*>/g, '') || ''}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {blog.authorName}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                                                            {blog.category}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {formatDate(blog.dateTime)}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex space-x-2">
                                                            <button
                                                                onClick={() => handleDelete(blog._id)}
                                                                className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                                                                title="Delete"
                                                            >
                                                                <FiTrash2 className="h-5 w-5" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                                                    No blogs match your search criteria
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            {filteredBlogs.length > itemsPerPage && (
                                <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
                                    <div className="text-sm text-gray-700">
                                        Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
                                        <span className="font-medium">
                                            {Math.min(indexOfLastItem, filteredBlogs.length)}
                                        </span>{' '}
                                        of <span className="font-medium">{filteredBlogs.length}</span> results
                                    </div>
                                    <div className="flex space-x-1">
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                            disabled={currentPage === 1}
                                            className={`p-2 rounded-md ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                            aria-label="Previous page"
                                        >
                                            <FiChevronLeft className="h-5 w-5" />
                                        </button>
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                            <button
                                                key={page}
                                                onClick={() => setCurrentPage(page)}
                                                className={`px-3 py-1 rounded-md ${currentPage === page ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                            >
                                                {page}
                                            </button>
                                        ))}
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                            disabled={currentPage === totalPages}
                                            className={`p-2 rounded-md ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                            aria-label="Next page"
                                        >
                                            <FiChevronRight className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
}
