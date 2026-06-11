'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import {
    FiArrowLeft,
    FiCalendar,
    FiClock,
    FiFacebook,
    FiLinkedin,
    FiInstagram,
    FiTwitter,
    FiCopy,
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import axios from 'axios';
import DOMPurify from 'dompurify';
import Image from 'next/image';

interface BlogPost {
    _id: string;
    authorName: string;
    blogDescription: string;
    blogTitle: string;
    category: string;
    dateTime: string;
    file: string;
    readTime?: string;
    slug?: string;
}

interface ViewBlogDetailsProps {
    initialBlog?: BlogPost | null;
}

const ViewBlogDetails: React.FC<ViewBlogDetailsProps> = ({ initialBlog }) => {
    const params = useParams();
    const searchParams = useSearchParams();
    const blogTitle = params?.blogTitle as string;
    const _id = searchParams?.get('id');
    const router = useRouter();
    const [blog, setBlog] = useState<BlogPost | null>(() => initialBlog || null);
    const [loading, setLoading] = useState(!initialBlog);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch if we don't have blog data OR if blogDescription is missing (server passes metadata only)
        const needsFetch = !blog || !blog.blogDescription;
        if (!needsFetch) return;

        const fetchBlogData = async () => {
            setLoading(true);
            try {
                if (!_id && !blogTitle) {
                    setError('No blog identifier provided');
                    return;
                }

                let blogData: BlogPost | null = null;

                if (_id) {
                    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'https://susaweb-backend.el.r.appspot.com'}/Blog/blog/${_id}`);
                    blogData = response.data;
                } else if (blogTitle) {
                    const allBlogsResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'https://susaweb-backend.el.r.appspot.com'}/Blog/Allblog`);
                    blogData = allBlogsResponse.data.blogs?.find(
                        (b: BlogPost) =>
                            b.blogTitle
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-')
                                .replace(/(^-|-$)/g, '') === blogTitle
                    );
                }

                if (!blogData) {
                    throw new Error('Blog not found');
                }

                setBlog({
                    ...blogData,
                    readTime: calculateReadTime(blogData.blogDescription),
                });
            } catch (err) {
                setError('Failed to load blog post');
                console.error('Error fetching blog:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogData();
    }, [_id, blogTitle, blog]); // Added blog to check if description is missing

    // ... existing helper functions ...

    // State for sanitized content to solve Hydration Mismatch
    const [sanitizedContent, setSanitizedContent] = useState<string>(blog?.blogDescription || '');

    useEffect(() => {
        if (!blog?.blogDescription) return;

        // On the client, after mounting, we sanitize the content
        // This ensures the first render matches the server exactly (raw HTML)
        // and then it's cleaned up for security.
        DOMPurify.removeAllHooks();
        DOMPurify.addHook('afterSanitizeAttributes', (node) => {
            if (node.tagName === 'IMG') {
                node.setAttribute('loading', 'lazy');
            }
            if (node.tagName === 'A') {
                node.setAttribute('target', '_blank');
                node.setAttribute('rel', 'noopener noreferrer');
            }
        });

        const clean = DOMPurify.sanitize(blog.blogDescription);
        setSanitizedContent(clean);
    }, [blog?.blogDescription]);

    const calculateReadTime = (text: string): string => {
        const wordsPerMinute = 200;
        const wordCount = text?.split(/\s+/).length || 0;
        const minutes = Math.ceil(wordCount / wordsPerMinute);
        return `${minutes} min read`;
    };

    const formatDate = (dateString: string): string => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleSocialRedirect = (platform: string) => {
        if (!blog || typeof window === 'undefined') return;

        const shareText = `Check out this blog: ${blog.blogTitle}`;
        const currentUrl = window.location.href;
        const encodedUrl = encodeURIComponent(currentUrl);

        switch (platform) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodedUrl}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank');
                break;
            case 'instagram':
                window.open('https://www.instagram.com', '_blank');
                break;
            default:
                break;
        }
    };

    const copyToClipboard = () => {
        if (typeof window === 'undefined') return;
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    };

    const formattedContentStyles = `
    .formatted-content {
      line-height: 1.6;
      font-size: 1rem;
      color: #374151;
      word-break: break-word;
      overflow-wrap: break-word;
    }
    .formatted-content p {
      margin-bottom: 1em;
    }
    .formatted-content img,
    .formatted-content p img,
    .formatted-content span img,
    .formatted-content div img {
      display: block !important;
      margin-left: auto !important;
      margin-right: auto !important;
      height: auto !important;
      max-width: 100% !important;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .formatted-content figure {
      display: table;
      margin: 1.25rem auto;
      text-align: center;
    }
    .formatted-content figcaption {
      margin-top: 0.5rem;
      color: #6b7280;
      font-size: 0.9rem;
    }
    .formatted-content img[style*="float"],
    .formatted-content figure[style*="float"] {
      float: none !important;
      margin: 1rem auto !important;
    }
    .formatted-content .align-center,
    .formatted-content .text-center {
      text-align: center !important;
    }
    .formatted-content .align-center img,
    .formatted-content .text-center img {
      margin-left: auto !important;
      margin-right: auto !important;
    }
    @media (max-width: 768px) {
      .formatted-content img {
        max-width: 100%;
      }
    }
  `;

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse text-lg">Loading blog post...</div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-500 text-lg">{error || 'Blog post not found'}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
            <style>{formattedContentStyles}</style>

            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="container mx-auto px-3 xs:px-4 sm:px-6 pt-6 xs:pt-8"
            >
                <button
                    onClick={() => router.back()}
                    className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium group text-sm xs:text-base"
                >
                    <motion.span whileHover={{ x: -5 }} className="flex items-center">
                        <FiArrowLeft className="mr-1 xs:mr-2 transition-transform group-hover:-translate-x-1" size={16} />
                        <span className="hidden xs:inline">Back to Blogs</span>
                        <span className="xs:hidden">Back</span>
                    </motion.span>
                </button>
            </motion.div>

            <div className="container mx-auto px-3 xs:px-4 sm:px-6 py-6 xs:py-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8"
                >
                    {/* Sidebar for social media */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hidden lg:flex flex-col items-center gap-6 sticky top-8 h-min"
                    >
                        <button
                            onClick={() => handleSocialRedirect('facebook')}
                            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <FiFacebook size={20} />
                        </button>
                        <button
                            onClick={() => handleSocialRedirect('twitter')}
                            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-sky-50 hover:text-sky-500"
                        >
                            <FiTwitter size={20} />
                        </button>
                        <button
                            onClick={() => handleSocialRedirect('linkedin')}
                            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-blue-50 hover:text-blue-700"
                        >
                            <FiLinkedin size={20} />
                        </button>
                        <button
                            onClick={() => handleSocialRedirect('instagram')}
                            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white"
                        >
                            <FiInstagram size={20} />
                        </button>
                        <button
                            onClick={copyToClipboard}
                            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-indigo-50 hover:text-indigo-600"
                        >
                            <FiCopy size={20} />
                        </button>
                    </motion.div>

                    {/* Blog Content */}
                    <div className="flex-1">
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden"
                        >
                            {/* Featured Image */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="relative aspect-video w-full overflow-hidden"
                            >
                                <Image
                                    src={blog.file || 'https://source.unsplash.com/random/1200x600/?technology,blog'}
                                    alt={blog.blogTitle}
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                />
                            </motion.div>

                            {/* Blog Content */}
                            <div className="p-4 xs:p-6 sm:p-8 md:p-10">
                                {/* Category and Date */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-wrap items-center gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-5 sm:mb-6 text-xs xs:text-sm"
                                >
                                    <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold animate-pulse">
                                        {blog.category}
                                    </span>
                                    <span className="flex items-center text-gray-500">
                                        <FiCalendar className="mr-1" size={14} />
                                        {formatDate(blog.dateTime)}
                                    </span>
                                    <span className="flex items-center text-gray-500">
                                        <FiClock className="mr-1" size={14} />
                                        {blog.readTime || '5 min read'}
                                    </span>
                                </motion.div>

                                {/* Title */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 xs:mb-5 sm:mb-6 leading-tight"
                                >
                                    {blog.blogTitle}
                                </motion.h1>

                                {/* Author */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex items-center mb-6 xs:mb-8 sm:mb-10"
                                >
                                    <div className="flex-shrink-0 mr-3 xs:mr-4">
                                        <div className="h-10 w-10 xs:h-12 xs:w-12 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-700 font-semibold text-lg xs:text-xl">
                                            {blog.authorName.charAt(0)}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-medium text-sm xs:text-base">{blog.authorName}</p>
                                        <p className="text-gray-500 text-xs xs:text-sm">Author</p>
                                    </div>
                                </motion.div>

                                {/* Blog Content */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="formatted-content"
                                    dangerouslySetInnerHTML={{
                                        __html: sanitizedContent
                                    }}
                                />

                                {/* Share Section */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="mt-8 xs:mt-10 sm:mt-12 pt-4 xs:pt-5 sm:pt-6 border-t border-gray-200"
                                >
                                    <h3 className="text-base xs:text-lg font-semibold text-gray-900 mb-3 xs:mb-4">Share this article</h3>
                                    <div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4">
                                        <button
                                            onClick={() => handleSocialRedirect('facebook')}
                                            className="flex items-center px-3 xs:px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-xs xs:text-sm"
                                        >
                                            <FiFacebook className="mr-1 xs:mr-2" size={16} />
                                            <span className="hidden xs:inline">Facebook</span>
                                            <span className="xs:hidden">FB</span>
                                        </button>
                                        <button
                                            onClick={() => handleSocialRedirect('linkedin')}
                                            className="flex items-center px-3 xs:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs xs:text-sm"
                                        >
                                            <FiLinkedin className="mr-1 xs:mr-2" size={16} />
                                            <span className="hidden xs:inline">LinkedIn</span>
                                            <span className="xs:hidden">LI</span>
                                        </button>
                                        <button
                                            onClick={() => handleSocialRedirect('instagram')}
                                            className="flex items-center px-3 xs:px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity text-xs xs:text-sm"
                                        >
                                            <FiInstagram className="mr-1 xs:mr-2" size={16} />
                                            <span className="hidden xs:inline">Instagram</span>
                                            <span className="xs:hidden">IG</span>
                                        </button>
                                        <button
                                            onClick={() => handleSocialRedirect('twitter')}
                                            className="flex items-center px-3 xs:px-4 py-2 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition-colors text-xs xs:text-sm"
                                        >
                                            <FiTwitter className="mr-1 xs:mr-2" size={16} />
                                            <span className="hidden xs:inline">Twitter</span>
                                            <span className="xs:hidden">TW</span>
                                        </button>
                                        <button
                                            onClick={copyToClipboard}
                                            className="flex items-center px-3 xs:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-xs xs:text-sm"
                                        >
                                            <FiCopy className="mr-1 xs:mr-2" size={16} />
                                            <span className="hidden xs:inline">Copy Link</span>
                                            <span className="xs:hidden">Copy</span>
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.article>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ViewBlogDetails;
