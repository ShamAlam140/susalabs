'use client';

import type React from 'react';

import { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { FiSearch, FiChevronLeft, FiChevronRight, FiX, FiUser, FiMail, FiPhone } from 'react-icons/fi';

type Product = {
    _id: string;
    title: string;
    link: string;
    description: string;
    image: string;
};

const PRODUCTS_PER_PAGE = 6;
const CACHE_KEY = 'cached_products';
const CACHE_TIMESTAMP_KEY = 'products_cache_timestamp';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

interface ProductShowcaseProps {
    initialProducts?: Product[];
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ initialProducts = [] }) => {
    const [allProducts, setAllProducts] = useState<Product[]>(initialProducts);
    const [loading, setLoading] = useState(initialProducts.length === 0);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
    });
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    // Check if cache is valid
    const isCacheValid = (): boolean => {
        if (typeof window === 'undefined') return false;
        const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
        if (!timestamp) return false;

        const cacheTime = Number.parseInt(timestamp);
        const now = Date.now();
        return now - cacheTime < CACHE_DURATION;
    };

    // Get cached products
    const getCachedProducts = (): Product[] | null => {
        if (typeof window === 'undefined') return null;
        try {
            const cached = localStorage.getItem(CACHE_KEY);
            return cached ? JSON.parse(cached) : null;
        } catch (error) {
            console.error('Error reading cache:', error);
            return null;
        }
    };

    // Cache products
    const cacheProducts = (products: Product[]): void => {
        if (typeof window === 'undefined') return;
        try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(products));
            localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
        } catch (error) {
            console.error('Error caching products:', error);
        }
    };

    // Fetch products with caching
    const fetchProducts = useCallback(async (): Promise<void> => {
        try {
            setLoading(true);
            setError(null);

            // Check cache first
            if (isCacheValid()) {
                const cachedProducts = getCachedProducts();
                if (cachedProducts) {
                    setAllProducts(cachedProducts);
                    setLoading(false);
                    return;
                }
            }

            // Fetch from API if cache is invalid or empty
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'https://susaweb-backend.el.r.appspot.com'}/project/getAll`);
            setAllProducts(data);
            cacheProducts(data);
        } catch (err) {
            setError('Failed to load projects. Please try again.');
            console.error('Fetch error:', err);
            // Try to use cached data even if expired
            const cachedProducts = getCachedProducts();
            if (cachedProducts) {
                setAllProducts(cachedProducts);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (initialProducts.length > 0) return;
        fetchProducts();
    }, [fetchProducts, initialProducts]);

    // Filter products
    const filteredProducts = useMemo(() => {
        return allProducts.filter((product) => {
            // Handle potentially missing fields from API
            const title = product.title || '';
            const description = product.description || '';

            // Filter out invalid products that don&apos;t have a title
            if (!title) return false;

            return (
                title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
    }, [allProducts, searchTerm]);

    // Pagination
    const { currentProducts, totalPages } = useMemo(() => {
        const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
        const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
        const paginatedProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
        const pages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

        return {
            currentProducts: paginatedProducts,
            totalPages: pages,
        };
    }, [filteredProducts, currentPage]);

    const paginate = (page: number) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPage(page);
    };

    const openModal = (product: Product) => {
        setSelectedProduct(product);
        setShowModal(true);
        setSubmissionStatus('idle');
        setFormData({ name: '', email: '', contact: '' });
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmissionStatus('submitting');

        try {
            const payload = {
                ...formData,
                projectTitle: selectedProduct?.title,
                projectUrl: selectedProduct?.link,
            };

            await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'https://susaweb-backend.el.r.appspot.com'}/user/register`, payload);
            setSubmissionStatus('success');
        } catch (err) {
            console.error('Submission error:', err);
            setSubmissionStatus('error');
        }
    };



    // Skeleton loader
    if (loading) {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="h-12 bg-gray-200 rounded-full w-1/3 mb-6 mx-auto animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded-full w-1/2 mb-12 mx-auto animate-pulse"></div>
                    <div className="h-12 bg-gray-200 rounded-full w-full max-w-md mx-auto animate-pulse"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
                            <div className="h-40 bg-gray-200 animate-pulse"></div>
                            <div className="p-4">
                                <div className="h-5 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                                <div className="h-3 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                                <div className="h-3 bg-gray-200 rounded w-5/6 mb-4 animate-pulse"></div>
                                <div className="h-8 bg-gray-200 rounded-lg w-2/3 animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center min-h-screen">
                <div className="text-center p-8 max-w-md bg-white rounded-2xl shadow-lg">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FiX className="text-red-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Error Loading Projects</h3>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        Refresh Page
                    </button>
                </div>
            </motion.div>
        );
    }

    return (
        <LayoutGroup>
            <div className="container mx-auto px-0 sm:px-4 py-12 pt-20">
                {/* Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center mb-16 px-4 sm:px-0"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Discover{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                            Innovative Projects
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Explore our curated collection of cutting-edge solutions and creative works
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto px-4 sm:px-0">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FiSearch className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search projects..."
                                className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Results Info */}
                <motion.div
                    layout
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 px-4 sm:px-6"
                >
                    <div className="text-gray-600">
                        Showing <span className="font-medium text-gray-900">{currentProducts.length}</span> of{' '}
                        <span className="font-medium text-gray-900">{filteredProducts.length}</span> projects
                    </div>

                    {filteredProducts.length > PRODUCTS_PER_PAGE && (
                        <div className="flex items-center gap-2">
                            <select
                                value={currentPage}
                                onChange={(e) => paginate(Number(e.target.value))}
                                className="bg-white border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        Page {i + 1}
                                    </option>
                                ))}
                            </select>
                            <span className="text-gray-600">of {totalPages}</span>
                        </div>
                    )}
                </motion.div>

                {/* Projects Grid */}
                {filteredProducts.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16 bg-gray-50 rounded-xl mx-4 sm:mx-6"
                    >
                        <div className="max-w-md mx-auto">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiSearch className="text-gray-400 text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No projects found</h3>
                            <p className="text-gray-600 mb-6">
                                {searchTerm ? 'Try adjusting your search' : 'No projects available at the moment'}
                            </p>
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                >
                                    Clear search
                                </button>
                            )}
                        </div>
                    </motion.div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 px-4 sm:px-6">
                            <AnimatePresence>
                                {currentProducts.map((product) => (
                                    <motion.div
                                        key={product._id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group h-92"
                                    >
                                        <div className="h-52 overflow-hidden relative">
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={product.image || '/placeholder.svg'}
                                                    alt={product.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        <div className="p-4 flex flex-col h-48">
                                            <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{product.title}</h3>
                                            <p className="text-sm text-gray-600">{product.description}</p>

                                            <div className="mt-6">
                                                <button
                                                    onClick={() => openModal(product)}
                                                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all shadow hover:shadow-md"
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <motion.div layout className="flex flex-wrap justify-center items-center gap-2 mt-6 px-4 sm:px-6">
                                <button
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1 text-sm ${currentPage === 1
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    <FiChevronLeft />
                                    Previous
                                </button>

                                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                    let pageNum;
                                    if (totalPages <= 5) {
                                        pageNum = i + 1;
                                    } else if (currentPage <= 3) {
                                        pageNum = i + 1;
                                    } else if (currentPage >= totalPages - 2) {
                                        pageNum = totalPages - 4 + i;
                                    } else {
                                        pageNum = currentPage - 2 + i;
                                    }

                                    return (
                                        <button
                                            key={pageNum}
                                            onClick={() => paginate(pageNum)}
                                            className={`px-3.5 py-1.5 rounded-lg text-sm ${currentPage === pageNum
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                })}

                                {totalPages > 5 && currentPage < totalPages - 2 && (
                                    <span className="px-2 py-1.5 text-gray-500 text-sm">...</span>
                                )}

                                {totalPages > 5 && currentPage < totalPages - 2 && (
                                    <button
                                        onClick={() => paginate(totalPages)}
                                        className="px-3.5 py-1.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm"
                                    >
                                        {totalPages}
                                    </button>
                                )}

                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1 text-sm ${currentPage === totalPages
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    Next
                                    <FiChevronRight />
                                </button>
                            </motion.div>
                        )}
                    </>
                )}

                {/* Registration Modal */}
                <AnimatePresence>
                    {showModal && selectedProduct && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                            onClick={closeModal}
                        >
                            <motion.div
                                initial={{ scale: 0.95, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.95, y: 20 }}
                                className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-gray-900">Register for Demo</h3>
                                        <button onClick={closeModal} className="text-gray-400 hover:text-gray-500">
                                            <FiX className="text-xl" />
                                        </button>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-medium text-gray-900 mb-1">{selectedProduct.title}</h4>
                                        <p className="text-sm text-gray-500">{selectedProduct.description}</p>
                                    </div>

                                    {submissionStatus === 'success' ? (
                                        <div className="text-center py-8">
                                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-green-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">Thank You!</h4>
                                            <p className="text-gray-600 mb-6">
                                                Your information has been submitted. Our team will contact you within 24 hours to schedule a
                                                demo.
                                            </p>
                                            <button
                                                onClick={closeModal}
                                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit}>
                                            <div className="space-y-4 mb-6">
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Full Name
                                                    </label>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                            <FiUser className="text-gray-400" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            required
                                                            className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Email Address
                                                    </label>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                            <FiMail className="text-gray-400" />
                                                        </div>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            required
                                                            className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Contact Number
                                                    </label>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                            <FiPhone className="text-gray-400" />
                                                        </div>
                                                        <input
                                                            type="tel"
                                                            id="contact"
                                                            name="contact"
                                                            required
                                                            className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
                                                            value={formData.contact}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {submissionStatus === 'error' && (
                                                <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                                                    Failed to submit. Please try again.
                                                </div>
                                            )}

                                            <div className="flex justify-end gap-3">
                                                <button
                                                    type="button"
                                                    onClick={closeModal}
                                                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                                                    disabled={submissionStatus === 'submitting'}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
                                                    disabled={submissionStatus === 'submitting'}
                                                >
                                                    {submissionStatus === 'submitting' ? (
                                                        <>
                                                            <svg
                                                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <circle
                                                                    className="opacity-25"
                                                                    cx="12"
                                                                    cy="12"
                                                                    r="10"
                                                                    stroke="currentColor"
                                                                    strokeWidth="4"
                                                                ></circle>
                                                                <path
                                                                    className="opacity-75"
                                                                    fill="currentColor"
                                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                ></path>
                                                            </svg>
                                                            Submitting...
                                                        </>
                                                    ) : (
                                                        'Submit Request'
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </LayoutGroup>
    );
};

export default ProductShowcase;
