'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GiCookie } from 'react-icons/gi';
import { FiCheck, FiX } from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const CookiesPolicy: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'what' | 'why' | 'marketing' | 'thirdparty'>('what');
    const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const cookieTypes = [
        {
            name: "Essential Cookies",
            description: "Necessary for the website to function properly",
            mandatory: true
        },
        {
            name: "Performance Cookies",
            description: "Help us understand how visitors interact with our website",
            mandatory: false
        },
        {
            name: "Functional Cookies",
            description: "Enable enhanced functionality and personalization",
            mandatory: false
        },
        {
            name: "Targeting Cookies",
            description: "Used to deliver relevant ads and track effectiveness",
            mandatory: false
        }
    ];

    const thirdPartyCookies = [
        {
            name: "Google Analytics",
            purpose: "Website analytics and performance measurement",
            link: "https://policies.google.com/privacy"
        },
        {
            name: "Facebook Pixel",
            purpose: "Ad targeting and conversion tracking",
            link: "https://www.facebook.com/policy.php"
        },
        {
            name: "LinkedIn Insight",
            purpose: "Ad performance and audience insights",
            link: "https://www.linkedin.com/legal/privacy-policy"
        },
        {
            name: "Twitter Conversion",
            purpose: "Tweet engagement and ad performance",
            link: "https://twitter.com/en/privacy"
        }
    ];

    const handleAcceptCookies = () => {
        setCookiesAccepted(true);
    };

    const handleRejectCookies = () => {
        setCookiesAccepted(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
            {/* Animated Particle Background */}
            <FloatingOrbs
                className="absolute inset-0 overflow-hidden"
                orbClassName="absolute rounded-full bg-blue-500 opacity-10"
            />

            <div className="relative z-10 container mx-auto px-4 py-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center justify-center bg-blue-900/30 rounded-full p-6 mb-6 border border-blue-500/20"
                    >
                        <GiCookie className="text-5xl text-blue-300" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100"
                    >
                        Cookies Policy
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"
                    />
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-gray-700/50"
                >
                    {/* Tabs */}
                    <div className="flex flex-wrap border-b border-gray-700">
                        {[
                            { id: 'what', label: 'What are cookies?' },
                            { id: 'why', label: 'Why we use them' },
                            { id: 'marketing', label: 'Marketing & Analytics' },
                            { id: 'thirdparty', label: 'Third Party Cookies' }
                        ].map((tab) => (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as 'what' | 'why' | 'marketing' | 'thirdparty')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-4 text-sm font-medium transition-all ${activeTab === tab.id
                                    ? 'text-white bg-gradient-to-r from-blue-600/30 to-blue-800/30 border-b-2 border-blue-400'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                    }`}
                            >
                                {tab.label}
                            </motion.button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-6 md:p-8">
                        {activeTab === 'what' && (
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6 text-blue-200">
                                    What are cookies?
                                </motion.h2>
                                <motion.p variants={itemVariants} className="text-gray-300 mb-6 leading-relaxed">
                                    Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to recognize your device and remember certain information about your visit.
                                </motion.p>

                                <motion.div variants={itemVariants} className="mb-8">
                                    <motion.h3 variants={itemVariants} className="text-lg font-semibold mb-4 text-blue-100">
                                        Types of cookies we use
                                    </motion.h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {cookieTypes.map((cookie, index) => (
                                            <motion.div
                                                key={index}
                                                variants={itemVariants}
                                                whileHover={{ y: -5 }}
                                                className={`p-4 rounded-lg border ${cookie.mandatory
                                                    ? 'border-blue-500/30 bg-blue-900/20'
                                                    : 'border-gray-700 bg-gray-800/30'
                                                    }`}
                                            >
                                                <div className="flex items-start">
                                                    <div className={`p-2 rounded-full mr-3 ${cookie.mandatory
                                                        ? 'bg-blue-500/20 text-blue-300'
                                                        : 'bg-gray-700/50 text-gray-400'
                                                        }`}>
                                                        <GiCookie />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-white">{cookie.name}</h4>
                                                        <p className="text-sm text-gray-400">{cookie.description}</p>
                                                        {cookie.mandatory && (
                                                            <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-blue-500/20 text-blue-200 rounded-full">
                                                                Required
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}

                        {activeTab === 'why' && (
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6 text-blue-200">
                                    Why we use cookies
                                </motion.h2>
                                <motion.p variants={itemVariants} className="text-gray-300 mb-6 leading-relaxed">
                                    Cookies help us provide you with a better experience on our website. They perform various functions that allow the website to work properly and help us understand how visitors interact with our content.
                                </motion.p>

                                <div className="space-y-4">
                                    {[
                                        {
                                            title: "Website Functionality",
                                            description: "Essential cookies make our website work correctly, enabling features like secure login and preferences."
                                        },
                                        {
                                            title: "Performance Optimization",
                                            description: "Analytics cookies help us understand how visitors use our site so we can improve it."
                                        },
                                        {
                                            title: "Personalization",
                                            description: "Functional cookies remember your preferences to provide a more personalized experience."
                                        },
                                        {
                                            title: "Marketing Effectiveness",
                                            description: "Advertising cookies help us deliver relevant content and measure campaign performance."
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            whileHover={{ x: 5 }}
                                            className="p-4 bg-gray-800/30 rounded-lg border border-gray-700"
                                        >
                                            <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                                            <p className="text-gray-400 text-sm">{item.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'marketing' && (
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6 text-blue-200">
                                    Marketing & Analytics Cookies
                                </motion.h2>
                                <motion.p variants={itemVariants} className="text-gray-300 mb-6 leading-relaxed">
                                    We use information collected from cookies to identify user behavior and to serve content and offers based on your profile, within legal boundaries.
                                </motion.p>

                                <div className="space-y-6">
                                    <motion.div
                                        variants={itemVariants}
                                        className="p-5 bg-blue-900/20 rounded-lg border border-blue-500/30"
                                    >
                                        <h3 className="font-semibold text-blue-200 mb-3">How we use this data</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-5 w-5 text-blue-400 mt-0.5 mr-2">•</div>
                                                <span className="text-gray-300">Track email open rates and content engagement</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-5 w-5 text-blue-400 mt-0.5 mr-2">•</div>
                                                <span className="text-gray-300">Understand user journeys across our websites</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-5 w-5 text-blue-400 mt-0.5 mr-2">•</div>
                                                <span className="text-gray-300">Combine data from different interactions to improve your experience</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-5 w-5 text-blue-400 mt-0.5 mr-2">•</div>
                                                <span className="text-gray-300">Measure effectiveness of our digital marketing</span>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'thirdparty' && (
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6 text-blue-200">
                                    Third Party Cookies
                                </motion.h2>
                                <motion.p variants={itemVariants} className="text-gray-300 mb-6 leading-relaxed">
                                    Some cookies we use are from third-party companies that provide web analytics and intelligence about our sites.
                                </motion.p>

                                <div className="space-y-4">
                                    {thirdPartyCookies.map((cookie, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.02 }}
                                            className="p-4 bg-gray-800/30 rounded-lg border border-gray-700"
                                        >
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-medium text-white">{cookie.name}</h3>
                                                    <p className="text-sm text-gray-400 mt-1">{cookie.purpose}</p>
                                                </div>
                                                <a
                                                    href={cookie.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-blue-400 hover:text-blue-300 hover:underline"
                                                >
                                                    View Policy
                                                </a>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Cookie Consent Banner */}
                {cookiesAccepted === null && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="fixed bottom-0 left-0 right-0 bg-gray-800 shadow-xl rounded-t-xl border-t border-gray-700 p-6 mx-4 md:mx-auto md:max-w-2xl z-50"
                    >
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="flex-1 mb-4 md:mb-0">
                                <h3 className="font-bold text-white mb-2">We value your privacy</h3>
                                <p className="text-sm text-gray-300">
                                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                                </p>
                            </div>
                            <div className="flex space-x-3">
                                <motion.button
                                    onClick={handleRejectCookies}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors flex items-center"
                                >
                                    <FiX className="mr-2" /> Reject All
                                </motion.button>
                                <motion.button
                                    onClick={handleAcceptCookies}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:from-blue-500 hover:to-blue-400 transition-colors flex items-center"
                                >
                                    <FiCheck className="mr-2" /> Accept All
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default CookiesPolicy;
