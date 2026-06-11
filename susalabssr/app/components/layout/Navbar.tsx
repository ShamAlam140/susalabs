'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiUser } from 'react-icons/fi';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
                if (isMobile) {
                    setIsOpen(false);
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobile]);

    const toggleDropdown = (item: string) => {
        setOpenDropdown(openDropdown === item ? null : item);
    };

    const closeAll = () => {
        setIsOpen(false);
        setOpenDropdown(null);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        {
            name: 'Solutions',
            subItems: [
                { name: 'AI Integration', path: '/solutions/ai', icon: '🤖' },
                { name: 'Blockchain', path: '/solutions/blockchain', icon: '⛓️' },
                { name: 'IoT Systems', path: '/solutions/iot', icon: '🌐' },
                { name: 'Quantum Computing', path: '/solutions/quantum', icon: '⚛️' },
                { name: 'ERP', path: '/solutions/erp', icon: '🏢' },
                { name: 'CRM Software', path: '/solutions/crm', icon: '🤝' },
                { name: 'App Development', path: '/solutions/app-development', icon: '📱' },
                { name: 'Software Development', path: '/solutions/software-development', icon: '💻' },
            ],
        },
        {
            name: 'Research',
            subItems: [
                { name: 'Generative AI', path: '/generativeAi', icon: '🧠' },
                { name: 'Genetics: RNA Based Cancer Treatment', path: '/genetics', icon: '🧬' },
                { name: 'Neurology: Electrode Human Brain Plus Detection', path: '/neurology', icon: '⚡' },
                { name: 'Motion Detection: For Real-time Gaming Applications', path: '/motion-detection', icon: '🎯' },
            ],
        },
        {
            name: 'Careers',
            subItems: [
                { name: 'Open Positions', path: '/careers', icon: '💼' },
                { name: 'Internships', path: '/careers', icon: '🎓' },
            ],
        },
        { name: 'Contact', path: '/contact-us' },
        { name: 'Offices', path: '/office-pages' },
        { name: 'Industries Solution', path: '/product' },
        { name: 'Blog', path: '/public-blog' },
    ];

    return (
        <header
            ref={navbarRef}
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white shadow-2xl h-16'
                    : 'bg-white backdrop-blur-sm h-20'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo with advanced animation */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center"
                    >
                        <Link href="/" className="flex items-center" onClick={closeAll}>
                            <img
                                src="/images/logo.jpeg"
                                alt="Susalabs logo"
                                className="h-10 mr-2"
                            />
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                            >
                                Susa<span className="text-indigo-600">Labs</span>
                            </motion.span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1 h-full">
                        {navItems.map((item) => (
                            <div key={item.name} className="relative h-full flex items-center">
                                {item.subItems ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(item.name)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    toggleDropdown(item.name);
                                                }
                                            }}
                                            onMouseEnter={() => !isMobile && setOpenDropdown(item.name)}
                                            tabIndex={0}
                                            aria-expanded={openDropdown === item.name}
                                            aria-haspopup="true"
                                            className="flex items-center px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors font-medium group relative h-full"
                                        >
                                            {item.name}
                                            <FiChevronDown
                                                className={`ml-1 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''
                                                    }`}
                                            />
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                        </button>

                                        <AnimatePresence>
                                            {openDropdown === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 20 }}
                                                    transition={{
                                                        duration: 0.2,
                                                        type: 'spring',
                                                        stiffness: 300,
                                                        damping: 20,
                                                    }}
                                                    className="absolute left-0 top-full mt-0 w-64 rounded-xl shadow-2xl bg-white border border-gray-100 py-2 z-50"
                                                    onMouseLeave={() => !isMobile && setOpenDropdown(null)}
                                                >
                                                    {item.subItems.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.path}
                                                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200 group"
                                                            onClick={closeAll}
                                                        >
                                                            <span className="mr-3 text-lg">{subItem.icon}</span>
                                                            <div>
                                                                <div>{subItem.name}</div>
                                                                <div className="text-xs text-gray-500 group-hover:text-indigo-500">
                                                                    {subItem.path.split('/')[1]}
                                                                </div>
                                                            </div>
                                                            <motion.span
                                                                className="ml-auto h-1 w-1 rounded-full bg-indigo-600 opacity-0"
                                                                whileHover={{ opacity: 1, scale: 6 }}
                                                                transition={{ duration: 0.2 }}
                                                            />
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <Link
                                        href={item.path}
                                        className="relative px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors font-medium group h-full flex items-center"
                                        onClick={closeAll}
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right side icons */}
                    <div className="flex items-center space-x-3 sm:space-x-4">
                        {/* User profile with status indicator */}
                        <motion.div whileHover={{ scale: 1.05 }} className="relative hidden sm:block">
                            <Link
                                href="/login"
                                className="p-1 rounded-full hover:bg-white transition-colors"
                                aria-label="User profile"
                                onClick={closeAll}
                            >
                                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white relative">
                                    <FiUser size={16} />
                                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full border border-white"></span>
                                </div>
                            </Link>
                            <motion.span
                                className="absolute inset-0 border-2 border-transparent rounded-full pointer-events-none"
                                whileHover={{ borderColor: 'rgba(99, 102, 241, 0.3)' }}
                            />
                        </motion.div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => {
                                setIsOpen(!isOpen);
                                if (isOpen) {
                                    setOpenDropdown(null);
                                }
                            }}
                            className="lg:hidden p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                                duration: 0.3,
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                            }}
                            className="lg:hidden overflow-hidden absolute left-0 right-0 bg-white shadow-lg"
                            style={{ top: scrolled ? '4rem' : '5rem' }}
                        >
                            <div className="pt-2 pb-4 space-y-1">
                                {navItems.map((item) => (
                                    <div key={item.name} className="border-b border-gray-100 last:border-0">
                                        {item.subItems ? (
                                            <>
                                                <button
                                                    onClick={() => toggleDropdown(item.name)}
                                                    className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                                                >
                                                    <span>{item.name}</span>
                                                    <FiChevronDown
                                                        className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''
                                                            }`}
                                                    />
                                                </button>
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{
                                                        opacity: openDropdown === item.name ? 1 : 0,
                                                        height: openDropdown === item.name ? 'auto' : 0,
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                    className="pl-6 overflow-hidden"
                                                >
                                                    {item.subItems.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.path}
                                                            className="flex items-center px-4 py-3 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-lg text-sm transition-colors"
                                                            onClick={closeAll}
                                                        >
                                                            <span className="mr-3 text-lg">{subItem.icon}</span>
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.path}
                                                className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                                                onClick={closeAll}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                {/* Mobile Login */}
                                <div className="border-b border-gray-100 sm:hidden">
                                    <Link
                                        href="/login"
                                        className="flex items-center px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                                        onClick={closeAll}
                                    >
                                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white relative mr-3">
                                            <FiUser size={12} />
                                        </div>
                                        Login / Account
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
