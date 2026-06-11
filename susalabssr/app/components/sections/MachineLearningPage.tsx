'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCpu, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const MachineLearningPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'applications' | 'techniques'>('overview');

    const mlConcepts = [
        {
            title: "Supervised Learning",
            description: "Algorithms learn from labeled training data to make predictions",
            icon: <FiDatabase className="text-3xl text-blue-400" />
        },
        {
            title: "Unsupervised Learning",
            description: "Finds hidden patterns in unlabeled data through clustering",
            icon: <FiCode className="text-3xl text-purple-400" />
        },
        {
            title: "Neural Networks",
            description: "Inspired by human brain for complex pattern recognition",
            icon: <FiCpu className="text-3xl text-amber-400" />
        }
    ];

    const mlApplications = [
        {
            title: "Predictive Analytics",
            description: "Forecasting future trends based on historical data",
            details: [
                "Demand forecasting for retail",
                "Predictive maintenance for manufacturing",
                "Risk assessment in financial services"
            ]
        },
        {
            title: "Computer Vision",
            description: "Image and video recognition for various industries",
            details: [
                "Quality control in production lines",
                "Medical image analysis",
                "Autonomous vehicle navigation"
            ]
        },
        {
            title: "Natural Language Processing",
            description: "Enabling machines to understand human language",
            details: [
                "Sentiment analysis for customer feedback",
                "Chatbots and virtual assistants",
                "Document classification and summarization"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
            {/* Floating Particles Background */}
            <FloatingOrbs
                className="absolute inset-0 overflow-hidden"
                orbClassName="absolute rounded-full bg-purple-500 opacity-10"
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
                        <span className="text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Machine Learning
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
                    >
                        Transforming industries through intelligent algorithms and data-driven decision making
                    </motion.p>
                </div>

                {/* Content Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-800 rounded-full p-1">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'applications', label: 'Applications' },
                            { id: 'techniques', label: 'Techniques' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as 'overview' | 'applications' | 'techniques')}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg'
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
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                        What is Machine Learning?
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                    Machine learning is a subset of artificial intelligence that enables systems to automatically learn and improve from experience without being explicitly programmed. Our ML solutions leverage vast amounts of data to identify patterns, make decisions, and predict outcomes with increasing accuracy over time.
                                </p>
                                <div className="space-y-6">
                                    {mlConcepts.map((concept, i) => (
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
                                <div className="relative w-full h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <FiCpu className="text-6xl text-blue-300 mx-auto mb-4" />
                                            <p className="text-gray-300">Machine Learning Process Visualization</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'applications' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {mlApplications.map((app, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700"
                                >
                                    <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                                        <div className="text-center">
                                            <FiCpu className="text-4xl text-blue-300 mx-auto mb-2" />
                                            <p className="text-gray-300">{app.title} Image</p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                                        <p className="text-gray-400 mb-4">{app.description}</p>
                                        <div className="space-y-2">
                                            {app.details.map((detail, idx) => (
                                                <div key={idx} className="flex items-start">
                                                    <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-blue-400">•</div>
                                                    <span className="text-gray-300 text-sm">{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'techniques' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-800/50 rounded-2xl p-8 border border-purple-500/20"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                    Advanced ML Techniques
                                </span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Deep Learning</h3>
                                    <p className="text-gray-300 mb-6">
                                        Our deep learning solutions utilize neural networks with multiple layers to model complex patterns in large datasets. We implement:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-blue-400">•</div>
                                            <span className="text-gray-300">Convolutional Neural Networks (CNNs) for image analysis</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-blue-400">•</div>
                                            <span className="text-gray-300">Recurrent Neural Networks (RNNs) for sequential data</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-blue-400">•</div>
                                            <span className="text-gray-300">Transformers for natural language processing</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-purple-300">Ensemble Methods</h3>
                                    <p className="text-gray-300 mb-6">
                                        We combine multiple models to improve predictive performance and robustness:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-purple-400">•</div>
                                            <span className="text-gray-300">Random Forests for classification and regression</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-purple-400">•</div>
                                            <span className="text-gray-300">Gradient Boosting Machines (XGBoost, LightGBM)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-purple-400">•</div>
                                            <span className="text-gray-300">Stacking models for optimal performance</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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
                    <div className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30 max-w-4xl">
                        <h3 className="text-2xl font-bold mb-4 text-white">Ready to explore machine learning solutions?</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Contact our experts to discuss how we can implement ML solutions tailored to your business needs.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
                            <div className="flex items-start">
                                <FiMail className="text-2xl text-blue-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Email Us</h4>
                                    <a href="mailto:contact@susalabs.com" className="text-gray-300 hover:text-blue-300 transition-colors">
                                        contact@susalabs.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiPhone className="text-2xl text-purple-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Call Us</h4>
                                    <a href="tel:+14788884158" className="text-gray-300 hover:text-purple-300 transition-colors">
                                        +14788884158
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiMapPin className="text-2xl text-amber-400 mr-4 mt-1" />
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

export default MachineLearningPage;
