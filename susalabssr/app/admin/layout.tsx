'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    FiMenu,
    FiX,
    FiLogOut,
    FiFileText,
    FiPlus,
    FiMail,
    FiBriefcase,
    FiUser,
    FiChevronLeft,
    FiMessageSquare,
    FiPackage
} from 'react-icons/fi';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const pathname = usePathname();
    const router = useRouter();

    // Check authentication
    useEffect(() => {
        const authData = localStorage.getItem('authData');
        if (authData) {
            const parsedAuth = JSON.parse(authData);
            const now = new Date().getTime();

            if (parsedAuth.expiry && now > parsedAuth.expiry) {
                // Token expired
                localStorage.clear();
                setIsAuthenticated(false);
                router.push('/login');
            } else if (parsedAuth.token) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
                router.push('/login');
            }
        } else {
            setIsAuthenticated(false);
            router.push('/login');
        }
    }, [router]);

    // Close mobile sidebar when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileSidebarOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const toggleMobileSidebar = () => setMobileSidebarOpen(!mobileSidebarOpen);

    // Check if current route matches
    const isActive = (path: string) => pathname === path;

    const handleLogout = async () => {
        try {
            const authData = JSON.parse(localStorage.getItem('authData') || '{}');
            const token = authData?.token;

            await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://susaweb-backend.el.r.appspot.com'}/Admin/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });

            localStorage.clear();
            router.push('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    // Show loading while checking auth
    if (isAuthenticated === null) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
            </div>
        );
    }

    // Redirect if not authenticated
    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className={`flex h-screen bg-white ${sidebarOpen ? 'lg:pl-64' : 'lg:pl-20'}`}>
            {/* Mobile sidebar backdrop */}
            {mobileSidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
                    onClick={toggleMobileSidebar}
                ></div>
            )}

            {/* Sidebar - Fixed height on mobile */}
            <aside
                className={`fixed z-30 w-64 h-full bg-gradient-to-b from-indigo-800 to-indigo-900 text-white transition-all duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0
          ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:fixed lg:inset-y-0 lg:left-0`}
            >
                <div className="flex flex-col h-full">
                    {/* Sidebar header */}
                    <div className="flex items-center justify-between p-4 border-b border-indigo-700">
                        <span className="text-xl font-bold">Susalabs</span>
                        <button
                            onClick={toggleSidebar}
                            className="hidden lg:block text-white hover:text-indigo-200 transition-colors"
                            aria-label="Toggle sidebar"
                        >
                            <FiChevronLeft size={20} className={`transition-transform duration-300 ${sidebarOpen ? 'rotate-0' : 'rotate-180'}`} />
                        </button>
                        <button
                            onClick={toggleMobileSidebar}
                            className="lg:hidden text-white hover:text-indigo-200 transition-colors"
                            aria-label="Close sidebar"
                        >
                            <FiX size={20} />
                        </button>
                    </div>

                    {/* Sidebar content with scroll if needed */}
                    <nav className="flex-1 overflow-y-auto">
                        <ul className="space-y-2 p-4">

                            <li>
                                <Link
                                    href="/admin/add-blog"
                                    className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/admin/add-blog') ? 'bg-indigo-700 shadow-md' : 'hover:bg-indigo-700/80'}`}
                                >
                                    <FiPlus className="mr-3 flex-shrink-0" />
                                    <span className={`whitespace-nowrap ${!sidebarOpen && 'lg:hidden'}`}>Add Blog</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/view-blog"
                                    className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/admin/view-blog') ? 'bg-indigo-700 shadow-md' : 'hover:bg-indigo-700/80'}`}
                                >
                                    <FiFileText className="mr-3 flex-shrink-0" />
                                    <span className={`whitespace-nowrap ${!sidebarOpen && 'lg:hidden'}`}>View Blog</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/contactformdata"
                                    className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/admin/contactformdata') ? 'bg-indigo-700 shadow-md' : 'hover:bg-indigo-700/80'}`}
                                >
                                    <FiMail className="mr-3 flex-shrink-0" />
                                    <span className={`whitespace-nowrap ${!sidebarOpen && 'lg:hidden'}`}>Contact Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/careers"
                                    className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/admin/careers') ? 'bg-indigo-700 shadow-md' : 'hover:bg-indigo-700/80'}`}
                                >
                                    <FiBriefcase className="mr-3 flex-shrink-0" />
                                    <span className={`whitespace-nowrap ${!sidebarOpen && 'lg:hidden'}`}>Careers</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/demo-request"
                                    className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/admin/demo-request') ? 'bg-indigo-700 shadow-md' : 'hover:bg-indigo-700/80'}`}
                                >
                                    <FiBriefcase className="mr-3 flex-shrink-0" />
                                    <span className={`whitespace-nowrap ${!sidebarOpen && 'lg:hidden'}`}>Demo Request</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/Add-product"
                                    className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/admin/Add-product') ? 'bg-indigo-700 shadow-md' : 'hover:bg-indigo-700/80'}`}
                                >
                                    <FiPackage className="mr-3 flex-shrink-0" />
                                    <span className={`whitespace-nowrap ${!sidebarOpen && 'lg:hidden'}`}>Add Product</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/Chat-User"
                                    className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/admin/Chat-User') ? 'bg-indigo-700 shadow-md' : 'hover:bg-indigo-700/80'}`}
                                >
                                    <FiMessageSquare className="mr-3 flex-shrink-0" />
                                    <span className={`whitespace-nowrap ${!sidebarOpen && 'lg:hidden'}`}>Chat User</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Sidebar footer */}
                    <div className="p-4 border-t border-indigo-700">
                        <button className="flex items-center w-full p-3 rounded-lg hover:bg-indigo-700 transition-colors" onClick={handleLogout}>
                            <FiLogOut className="mr-3 flex-shrink-0" />
                            <span className={`whitespace-nowrap ${!sidebarOpen && 'lg:hidden'}`}>Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Navbar */}
                <header className="bg-white shadow-sm z-10">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                            <button
                                onClick={toggleMobileSidebar}
                                className="lg:hidden text-gray-600 hover:text-gray-900 mr-4"
                                aria-label="Open sidebar"
                            >
                                <FiMenu size={20} />
                            </button>
                            <button
                                onClick={toggleSidebar}
                                className="hidden lg:block text-gray-600 hover:text-gray-900 mr-4"
                                aria-label="Toggle sidebar"
                            >
                                <FiMenu size={20} />
                            </button>
                            <h1 className="text-xl font-semibold text-gray-800 capitalize">
                                {pathname?.split('/').pop()?.replace('-', ' ') || 'Dashboard'}
                            </h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <FiUser className="text-indigo-600" />
                                </div>
                                <span className="ml-2 text-sm font-medium text-gray-700">Admin</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
