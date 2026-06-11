'use client';

import type React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiUser, FiClock, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface BlogPost {
    _id: string;
    authorName: string;
    blogDescription?: string;
    blogTitle: string;
    category: string;
    dateTime: string;
    file: string;
    readTime?: string;
}

interface PaginationInfo {
    currentPage: number;
    totalPages: number;
    totalBlogs: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

interface BlogResponse {
    blogs: BlogPost[];
    pagination: PaginationInfo;
}

const PublicBlog: React.FC = () => {
    const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [paginationInfo, setPaginationInfo] = useState<PaginationInfo | null>(null);
    const [navigating, setNavigating] = useState<boolean>(false);
    const [navigatingTitle, setNavigatingTitle] = useState<string>('');
    const router = useRouter();

    const totalPages = paginationInfo?.totalPages || 1;
    const currentBlogs = allBlogs;

    useEffect(() => {
        const checkIfMobile = () => {
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth < 768);
            }
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const fetchBlogs = useCallback(async (page: number = 1): Promise<void> => {
        try {
            setLoading(true);

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://susalabs.onrender.com'}/Blog/Allblog?page=${page}&limit=6`);
            const data: BlogResponse = await response.json();

            const blogsWithReadTime = data.blogs.map((blog: BlogPost) => ({
                ...blog,
                readTime: '2 min read',
            }));

            setAllBlogs(blogsWithReadTime);
            setPaginationInfo(data.pagination);
        } catch (error) {
            console.error('Error fetching blogs:', error);
            setAllBlogs([]);
            setPaginationInfo(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBlogs(currentPage);
    }, [fetchBlogs, currentPage]);

    const formatDate = (dateString: string): string => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const getCategoryColor = (category: string): string => {
        const colors: Record<string, string> = {
            Technology: 'bg-blue-100 text-blue-700',
            Business: 'bg-green-100 text-green-700',
            Lifestyle: 'bg-purple-100 text-purple-700',
            default: 'bg-gray-100 text-gray-700',
        };
        return colors[category] || colors.default;
    };

    const handleBlogClick = (blog: BlogPost) => {
        setNavigating(true);
        setNavigatingTitle(blog.blogTitle);
        const slug = blog.blogTitle
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        router.push(`/blog/${slug}?id=${blog._id}`);
    };

    const handlePageChange = (page: number): void => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const LazyImage: React.FC<{ src: string; alt: string; className: string }> = ({ src, alt, className }) => {
        return (
            <div className={`${className} relative`}>
                <Image
                    src={src || '/placeholder.svg'}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                />
            </div>
        );
    };

    const SkeletonCard = () => (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
            <div className="aspect-video bg-gray-200" />
            <div className="p-4 sm:p-6">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-3 sm:mb-4" />
                <div className="h-5 sm:h-6 bg-gray-200 rounded w-3/4 mb-3 sm:mb-4" />
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-full mb-2" />
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-5/6" />
            </div>
        </div>
    );

    const PaginationControls = () => (
        <div className="flex justify-center items-center space-x-2 mt-8 sm:mt-12">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <FiChevronLeft className="mr-1" size={16} />
                Previous
            </button>

            <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${currentPage === page
                            ? 'bg-indigo-600 text-white'
                            : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-100'
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                Next
                <FiChevronRight className="ml-1" size={16} />
            </button>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Loading Overlay */}
            {navigating && (
                <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
                    <div className="relative">
                        {/* Animated Spinner */}
                        <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                    </div>
                    <p className="mt-6 text-lg font-medium text-gray-700">Loading article...</p>
                    <p className="mt-2 text-sm text-indigo-600 max-w-xs text-center line-clamp-2">{navigatingTitle}</p>
                </div>
            )}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 text-gray-900"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                            Insights & Stories
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Explore the latest trends, insights,{' '}
                        <Link
                            href="/solutions/iot"
                            className="inline-block bg-yellow-500 text-gray-900 px-1 rounded align-baseline no-underline"
                        >
                            IoT
                        </Link>{' '}
                        and{' '}
                        <Link
                            href="/solutions/ai"
                            className="inline-block bg-yellow-500 text-gray-900 px-1 rounded align-baseline no-underline"
                        >
                            AI innovations
                        </Link>{' '}
                        from our community of experts
                    </motion.p>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {[...Array(6)].map((_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                    </div>
                ) : (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                        >
                            {currentBlogs.map((blog) => (
                                <motion.div
                                    key={blog._id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    whileHover={{
                                        y: isMobile ? 0 : -8,
                                        boxShadow: isMobile ? 'none' : '0 10px 20px rgba(0, 0, 0, 0.1)',
                                    }}
                                    className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm sm:shadow-md transition-all duration-300 cursor-pointer"
                                    onClick={() => handleBlogClick(blog)}
                                >
                                    <div className="relative aspect-video w-full overflow-hidden">
                                        <LazyImage
                                            src={blog.file || 'https://source.unsplash.com/random/600x400/?technology,blog'}
                                            alt={blog.blogTitle}
                                            className="w-full h-full"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-900/60 to-transparent" />
                                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                                            <span
                                                className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${getCategoryColor(blog.category)}`}
                                            >
                                                {blog.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4 sm:p-6">
                                        <div className="flex justify-between items-center mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500">
                                            <span className="flex items-center">
                                                <FiUser className="mr-1" size={12} />
                                                {blog.authorName}
                                            </span>
                                            <span className="flex items-center">
                                                <FiCalendar className="mr-1" size={12} />
                                                {formatDate(blog.dateTime)}
                                            </span>
                                        </div>

                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 hover:text-indigo-600 transition-colors">
                                            {blog.blogTitle}
                                        </h3>

                                        <div className="flex justify-between items-center border-t border-gray-100 pt-3 sm:pt-4">
                                            <span className="text-xs sm:text-sm text-gray-500 flex items-center">
                                                <FiClock className="mr-1" size={12} />
                                                {blog.readTime}
                                            </span>

                                            <motion.button
                                                whileHover={{ x: 5 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleBlogClick(blog);
                                                }}
                                                className="text-indigo-600 hover:text-indigo-800 text-xs sm:text-sm font-semibold flex items-center"
                                            >
                                                Read Full Article
                                                <FiArrowRight className="ml-1" />
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {totalPages > 1 && <PaginationControls />}
                    </>
                )}

                {!loading && allBlogs.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No blogs found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PublicBlog;
