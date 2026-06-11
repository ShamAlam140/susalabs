'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiZap, FiTrendingUp, FiTarget, FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const QuantumPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'capabilities' | 'solutions'>('overview');

    const quantumConcepts = [
        {
            title: "Qubit Technology",
            description: "Quantum bits that exist in superposition of states",
            icon: <FiCpu className="text-3xl text-purple-400" />
        },
        {
            title: "Quantum Entanglement",
            description: "Instantaneous correlation between particles",
            icon: <FiZap className="text-3xl text-indigo-400" />
        },
        {
            title: "Quantum Supremacy",
            description: "Solving problems beyond classical computers' reach",
            icon: <FiTrendingUp className="text-3xl text-violet-400" />
        }
    ];

    const quantumCapabilities = [
        {
            title: "Exponential Speedup",
            description: "Solve certain problems millions of times faster",
            icon: "⚡"
        },
        {
            title: "Molecular Simulation",
            description: "Accurate modeling of quantum systems",
            icon: "🔬"
        },
        {
            title: "Unbreakable Encryption",
            description: "Quantum-resistant cryptographic systems",
            icon: "🔐"
        }
    ];

    const quantumSolutions = [
        {
            title: "Pharmaceuticals",
            examples: [
                "Drug discovery acceleration",
                "Protein folding simulation",
                "Personalized medicine"
            ],
            icon: "💊"
        },
        {
            title: "Financial Services",
            examples: [
                "Portfolio optimization",
                "Fraud detection",
                "Risk analysis"
            ],
            icon: "💰"
        },
        {
            title: "Climate Science",
            examples: [
                "Carbon capture modeling",
                "Renewable energy optimization",
                "Climate pattern prediction"
            ],
            icon: "🌍"
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
                        <span className="text-white bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">
                            Quantum Computing Solutions
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
                    >
                        Harnessing quantum mechanics to revolutionize computation and solve previously intractable problems
                    </motion.p>
                </div>

                {/* Content Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-800 rounded-full p-1">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'capabilities', label: 'Capabilities' },
                            { id: 'solutions', label: 'Solutions' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as 'overview' | 'capabilities' | 'solutions')}
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

                {/* Quantum Content */}
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
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                                        The Quantum Advantage
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                    Quantum computing leverages quantum mechanical phenomena like superposition and entanglement to perform calculations at speeds unimaginable with classical computers. Our quantum solutions bridge the gap between theoretical physics and practical applications.
                                </p>
                                <div className="space-y-6">
                                    {quantumConcepts.map((concept, i) => (
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
                                <div className="relative w-full h-96 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-2xl border border-purple-500/30 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <FiTarget className="text-6xl text-violet-300 mx-auto mb-4" />
                                            <p className="text-gray-300">Quantum Processing Unit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'capabilities' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {quantumCapabilities.map((capability, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20 text-center"
                                >
                                    <div className="text-5xl mb-4">{capability.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                                    <p className="text-gray-300">{capability.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'solutions' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {quantumSolutions.map((solution, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                                >
                                    <div className="text-4xl mb-4">{solution.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 text-center">{solution.title}</h3>
                                    <ul className="space-y-2">
                                        {solution.examples.map((example, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-purple-400">•</div>
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
                    <div className="inline-block bg-gradient-to-r from-purple-600/20 to-indigo-600/20 p-8 rounded-2xl border border-purple-500/30 max-w-4xl">
                        <h3 className="text-2xl font-bold mb-4 text-white">Ready to explore the quantum frontier?</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Our quantum computing experts can help you prepare for the next computing revolution.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
                            <div className="flex items-start">
                                <FiMail className="text-2xl text-violet-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Email Us</h4>
                                    <a href="mailto:contact@susalabs.com" className="text-gray-300 hover:text-violet-300 transition-colors">
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
                                <FiMapPin className="text-2xl text-indigo-400 mr-4 mt-1" />
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

export default QuantumPage;
