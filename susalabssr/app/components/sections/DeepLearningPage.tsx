'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiLayers, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const DeepLearningPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'models' | 'applications'>('overview');

    const dlConcepts = [
        {
            title: "Neural Networks",
            description: "Interconnected layers of nodes that mimic biological neurons",
            icon: <FiLayers className="text-3xl text-purple-400" />
        },
        {
            title: "Backpropagation",
            description: "Algorithm for training networks by adjusting weights based on error",
            icon: <FiLayers className="text-3xl text-blue-400" />
        },
        {
            title: "Feature Learning",
            description: "Automatic discovery of representations from raw data",
            icon: <FiCode className="text-3xl text-amber-400" />
        }
    ];

    const dlModels = [
        {
            title: "CNNs",
            description: "Convolutional Neural Networks for image processing",
            features: [
                "Hierarchical pattern recognition",
                "Translation invariance",
                "Pooling layers for dimensionality reduction"
            ],
            icon: <FiCpu className="text-4xl text-blue-300" />
        },
        {
            title: "RNNs",
            description: "Recurrent Neural Networks for sequential data",
            features: [
                "Memory of previous inputs",
                "Time-series analysis",
                "Natural language processing"
            ],
            icon: <FiLayers className="text-4xl text-purple-300" />
        },
        {
            title: "Transformers",
            description: "Attention-based models for context understanding",
            features: [
                "Self-attention mechanisms",
                "Parallel processing",
                "State-of-the-art NLP performance"
            ],
            icon: <FiCode className="text-4xl text-amber-300" />
        }
    ];

    const dlApplications = [
        {
            title: "Computer Vision",
            examples: [
                "Object detection",
                "Facial recognition",
                "Medical imaging analysis",
                "Autonomous vehicles"
            ],
            icon: "👁️"
        },
        {
            title: "Natural Language Processing",
            examples: [
                "Machine translation",
                "Sentiment analysis",
                "Chatbots",
                "Text generation"
            ],
            icon: "💬"
        },
        {
            title: "Generative Models",
            examples: [
                "Image synthesis",
                "Style transfer",
                "Music generation",
                "Drug discovery"
            ],
            icon: "🎨"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white">
            {/* Floating Particles Background */}
            <FloatingOrbs
                className="absolute inset-0 overflow-hidden"
                orbClassName="absolute rounded-full bg-indigo-500 opacity-10"
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
                        <span className="text-white bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                            Deep Learning
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
                        Harnessing multi-layered neural networks to solve complex problems beyond traditional machine learning
                    </motion.p>
                </div>

                {/* Content Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-800 rounded-full p-1">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'models', label: 'Models' },
                            { id: 'applications', label: 'Applications' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as 'overview' | 'models' | 'applications')}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-lg'
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
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                                        The Power of Deep Learning
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                    Deep learning models automatically learn hierarchical representations of data through multiple processing layers. These models excel at identifying complex patterns in unstructured data like images, sound, and text, achieving state-of-the-art results across many domains.
                                </p>
                                <div className="space-y-6">
                                    {dlConcepts.map((concept, i) => (
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
                                <div className="relative w-full h-96 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl border border-indigo-500/30 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <FiCpu className="text-6xl text-indigo-300 mx-auto mb-4" />
                                            <p className="text-gray-300">Deep Neural Network Architecture</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'models' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {dlModels.map((model, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                                >
                                    <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full">
                                        {model.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-center">{model.title}</h3>
                                    <p className="text-gray-400 text-center mb-4">{model.description}</p>
                                    <ul className="space-y-2 mt-4">
                                        {model.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-indigo-400">•</div>
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'applications' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-800/50 rounded-2xl p-8 border border-purple-500/20"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                    Industry Applications
                                </span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {dlApplications.map((app, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-gray-700/20 p-6 rounded-xl border border-indigo-500/20"
                                    >
                                        <div className="text-4xl mb-4">{app.icon}</div>
                                        <h3 className="text-xl font-bold mb-4 text-indigo-300">{app.title}</h3>
                                        <ul className="space-y-2">
                                            {app.examples.map((example, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-purple-400">•</div>
                                                    <span className="text-gray-300">{example}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
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
                    <div className="inline-block bg-gradient-to-r from-indigo-600/20 to-purple-600/20 p-8 rounded-2xl border border-indigo-500/30 max-w-4xl">
                        <h3 className="text-2xl font-bold mb-4 text-white">Ready to implement deep learning?</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Our deep learning specialists can help you develop custom neural network solutions for your specific challenges.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
                            <div className="flex items-start">
                                <FiMail className="text-2xl text-indigo-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Email Us</h4>
                                    <a href="mailto:contact@susalabs.com" className="text-gray-300 hover:text-indigo-300 transition-colors">
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
                                <FiMapPin className="text-2xl text-pink-400 mr-4 mt-1" />
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

export default DeepLearningPage;
