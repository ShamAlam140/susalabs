'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiShield, FiLock, FiDatabase, FiGlobe, FiEye } from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const PolicyAndPrivacy: React.FC = () => {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        introduction: true,
        information: false,
        usage: false,
        security: false,
        thirdParty: false,
        changes: false
    });

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
            {/* Floating Particles Background */}
            <FloatingOrbs
                className="absolute inset-0 overflow-hidden"
                orbClassName="absolute rounded-full bg-pink-500 opacity-10"
            />

            <div className="relative z-10 container mx-auto px-6 py-24">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        <span className="text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                            Privacy Policy
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
                    >
                        Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                    </motion.p>
                </div>

                {/* Policy Content */}
                <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
                    {/* Section 1: Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="border-b border-gray-700"
                    >
                        <button
                            onClick={() => toggleSection('introduction')}
                            className="flex items-center justify-between w-full p-6 text-left"
                        >
                            <div className="flex items-center">
                                <FiShield className="text-2xl text-purple-400 mr-4" />
                                <h2 className="text-xl md:text-2xl font-bold">1. Introduction</h2>
                            </div>
                            {expandedSections.introduction ? (
                                <FiChevronUp className="text-xl text-gray-400" />
                            ) : (
                                <FiChevronDown className="text-xl text-gray-400" />
                            )}
                        </button>
                        {expandedSections.introduction && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0.3 }}
                                className="px-6 pb-6"
                            >
                                <p className="text-gray-300 mb-4">
                                    This Privacy Policy describes how our company (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares personal information when you use our website and services.
                                </p>
                                <p className="text-gray-300">
                                    We are committed to protecting your privacy and ensuring the security of your personal information. Please read this policy carefully to understand our practices.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Section 2: Information We Collect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="border-b border-gray-700"
                    >
                        <button
                            onClick={() => toggleSection('information')}
                            className="flex items-center justify-between w-full p-6 text-left"
                        >
                            <div className="flex items-center">
                                <FiDatabase className="text-2xl text-pink-400 mr-4" />
                                <h2 className="text-xl md:text-2xl font-bold">2. Information We Collect</h2>
                            </div>
                            {expandedSections.information ? (
                                <FiChevronUp className="text-xl text-gray-400" />
                            ) : (
                                <FiChevronDown className="text-xl text-gray-400" />
                            )}
                        </button>
                        {expandedSections.information && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0.3 }}
                                className="px-6 pb-6"
                            >
                                <p className="text-gray-300 mb-4">
                                    We may collect various types of information, including but not limited to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                    <li>Personal information (e.g., name, email address)</li>
                                    <li>Technical information (e.g., IP address, browser information)</li>
                                    <li>Cookies and tracking technologies</li>
                                    <li>Usage data about how you interact with our services</li>
                                </ul>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Section 3: How We Use Your Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="border-b border-gray-700"
                    >
                        <button
                            onClick={() => toggleSection('usage')}
                            className="flex items-center justify-between w-full p-6 text-left"
                        >
                            <div className="flex items-center">
                                <FiEye className="text-2xl text-fuchsia-400 mr-4" />
                                <h2 className="text-xl md:text-2xl font-bold">3. How We Use Your Information</h2>
                            </div>
                            {expandedSections.usage ? (
                                <FiChevronUp className="text-xl text-gray-400" />
                            ) : (
                                <FiChevronDown className="text-xl text-gray-400" />
                            )}
                        </button>
                        {expandedSections.usage && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0.3 }}
                                className="px-6 pb-6"
                            >
                                <p className="text-gray-300 mb-4">
                                    We may use your information for purposes such as:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                    <li>Providing and improving our services</li>
                                    <li>Communicating with you about updates or offers</li>
                                    <li>Personalizing your experience with our services</li>
                                    <li>Analyzing usage patterns to enhance functionality</li>
                                    <li>Legal compliance and protection of our rights</li>
                                </ul>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Section 4: Data Security */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="border-b border-gray-700"
                    >
                        <button
                            onClick={() => toggleSection('security')}
                            className="flex items-center justify-between w-full p-6 text-left"
                        >
                            <div className="flex items-center">
                                <FiLock className="text-2xl text-rose-400 mr-4" />
                                <h2 className="text-xl md:text-2xl font-bold">4. Data Security</h2>
                            </div>
                            {expandedSections.security ? (
                                <FiChevronUp className="text-xl text-gray-400" />
                            ) : (
                                <FiChevronDown className="text-xl text-gray-400" />
                            )}
                        </button>
                        {expandedSections.security && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0.3 }}
                                className="px-6 pb-6"
                            >
                                <p className="text-gray-300 mb-4">
                                    We take measures to protect your data, but no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.
                                </p>
                                <p className="text-gray-300">
                                    We implement appropriate technical and organizational measures to maintain the safety of your personal data, including encryption, access controls, and regular security assessments.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Section 5: Third-Party Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="border-b border-gray-700"
                    >
                        <button
                            onClick={() => toggleSection('thirdParty')}
                            className="flex items-center justify-between w-full p-6 text-left"
                        >
                            <div className="flex items-center">
                                <FiGlobe className="text-2xl text-indigo-400 mr-4" />
                                <h2 className="text-xl md:text-2xl font-bold">5. Third-Party Links</h2>
                            </div>
                            {expandedSections.thirdParty ? (
                                <FiChevronUp className="text-xl text-gray-400" />
                            ) : (
                                <FiChevronDown className="text-xl text-gray-400" />
                            )}
                        </button>
                        {expandedSections.thirdParty && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0.3 }}
                                className="px-6 pb-6"
                            >
                                <p className="text-gray-300 mb-4">
                                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites, and we encourage you to review their privacy policies.
                                </p>
                                <p className="text-gray-300">
                                    These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Section 6: Changes to this Privacy Policy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <button
                            onClick={() => toggleSection('changes')}
                            className="flex items-center justify-between w-full p-6 text-left"
                        >
                            <div className="flex items-center">
                                <FiShield className="text-2xl text-purple-400 mr-4" />
                                <h2 className="text-xl md:text-2xl font-bold">6. Changes to this Privacy Policy</h2>
                            </div>
                            {expandedSections.changes ? (
                                <FiChevronUp className="text-xl text-gray-400" />
                            ) : (
                                <FiChevronDown className="text-xl text-gray-400" />
                            )}
                        </button>
                        {expandedSections.changes && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0.3 }}
                                className="px-6 pb-6"
                            >
                                <p className="text-gray-300 mb-4">
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with a new effective date.
                                </p>
                                <p className="text-gray-300">
                                    We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting the personal information we collect.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Contact/Footer Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-20"
                >
                    <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30 max-w-4xl">
                        <h3 className="text-2xl font-bold mb-4 text-white">Have questions about our privacy policy?</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Contact us for more information about how we protect your data.
                        </p>
                        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg">
                            Contact Our Privacy Team
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PolicyAndPrivacy;
