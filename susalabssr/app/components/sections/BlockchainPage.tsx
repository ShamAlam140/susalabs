'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLink, FiLock, FiDatabase, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const BlockchainPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'use-cases'>('overview');

    const bcConcepts = [
        {
            title: "Decentralization",
            description: "Eliminating single points of control or failure",
            icon: <FiLink className="text-3xl text-emerald-400" />
        },
        {
            title: "Immutability",
            description: "Tamper-proof record of all transactions",
            icon: <FiLock className="text-3xl text-teal-400" />
        },
        {
            title: "Consensus",
            description: "Agreement protocols validating transactions",
            icon: <FiDatabase className="text-3xl text-green-400" />
        }
    ];

    const bcFeatures = [
        {
            title: "Smart Contracts",
            description: "Self-executing agreements with predefined rules",
            icon: "📜"
        },
        {
            title: "Tokenization",
            description: "Digital representation of real-world assets",
            icon: "🪙"
        },
        {
            title: "Cryptography",
            description: "Advanced encryption securing all transactions",
            icon: "🔐"
        }
    ];

    const bcUseCases = [
        {
            title: "Finance",
            examples: [
                "Cross-border payments",
                "Decentralized finance (DeFi)",
                "Asset tokenization"
            ],
            icon: "💰"
        },
        {
            title: "Supply Chain",
            examples: [
                "Provenance tracking",
                "Inventory management",
                "Anti-counterfeiting"
            ],
            icon: "🚚"
        },
        {
            title: "Identity",
            examples: [
                "Digital IDs",
                "Credential verification",
                "Self-sovereign identity"
            ],
            icon: "🆔"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 text-white">
            {/* Floating Particles Background */}
            <FloatingOrbs
                className="absolute inset-0 overflow-hidden"
                orbClassName="absolute rounded-full bg-teal-500 opacity-10"
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
                        <span className="text-white bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                            Blockchain Development Services
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-32 h-1 bg-gradient-to-r from-teal-500 to-green-500 mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
                    >
                        Decentralized, tamper-proof ledgers enabling trustless transactions and smart contract automation
                    </motion.p>
                </div>

                {/* Content Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-800 rounded-full p-1">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'features', label: 'Features' },
                            { id: 'use-cases', label: 'Use Cases' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as 'overview' | 'features' | 'use-cases')}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-teal-600 to-emerald-500 text-white shadow-lg'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="max-w-6xl mx-auto">
                    {activeTab === 'overview' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                                        Trustless Systems
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                    Blockchain creates distributed ledgers that enable secure, transparent transactions without centralized authorities. Our solutions leverage this technology to build verifiable, permanent records for financial, legal, and logistical applications.
                                </p>
                                <div className="space-y-6">
                                    {bcConcepts.map((concept, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700"
                                        >
                                            <div className="mr-4">
                                                {concept.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">{concept.title}</h3>
                                                <p className="text-gray-400">{concept.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative w-full h-96 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-2xl border border-emerald-500/30 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <FiLink className="text-6xl text-emerald-300 mx-auto mb-4" />
                                            <p className="text-gray-300">Blockchain Network Architecture</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'features' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {bcFeatures.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gray-800/50 rounded-xl p-6 border border-teal-500/20 text-center"
                                >
                                    <div className="text-5xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-300">{feature.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'use-cases' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {bcUseCases.map((useCase, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                                >
                                    <div className="text-4xl mb-4">{useCase.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 text-center">{useCase.title}</h3>
                                    <ul className="space-y-2">
                                        {useCase.examples.map((example, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-emerald-400">•</div>
                                                <span className="text-gray-300 text-sm">{example}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-20"
                >
                    <div className="inline-block bg-gradient-to-r from-emerald-600/20 to-teal-600/20 p-8 rounded-2xl border border-emerald-500/30 max-w-4xl">
                        <h3 className="text-2xl font-bold mb-4 text-white">Ready to implement blockchain?</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Our blockchain architects can design decentralized solutions tailored to your business needs.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
                            <div className="flex items-start">
                                <FiMail className="text-2xl text-emerald-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Email Us</h4>
                                    <a href="mailto:contact@susalabs.com" className="text-gray-300 hover:text-emerald-300 transition-colors">
                                        contact@susalabs.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiPhone className="text-2xl text-teal-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Call Us</h4>
                                    <a href="tel:+14788884158" className="text-gray-300 hover:text-teal-300 transition-colors">
                                        +14788884158
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiMapPin className="text-2xl text-green-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Visit Us</h4>
                                    <p className="text-gray-300">
                                        Magnum Tower 1, 8th Floor, Golf Course Ext Rd, Sector 58, Gurugram, Haryana 122011.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BlockchainPage;
