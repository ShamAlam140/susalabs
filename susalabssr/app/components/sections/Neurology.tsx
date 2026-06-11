'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiDatabase, FiTrendingUp, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaBrain, FaClinicMedical, FaWaveSquare } from 'react-icons/fa';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const Neurology: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'technology' | 'applications'>('overview');

    const neuroConcepts = [
        {
            title: "Brain-Computer Interface",
            description: "Direct communication pathway between brain and external device",
            icon: <FaBrain className="text-3xl text-blue-400" />
        },
        {
            title: "Neural Electrodes",
            description: "High-density arrays for precise brain activity monitoring",
            icon: <FaWaveSquare className="text-3xl text-indigo-400" />
        },
        {
            title: "Signal Processing",
            description: "Advanced algorithms to decode neural patterns",
            icon: <FiActivity className="text-3xl text-sky-400" />
        }
    ];

    const neuroTechnologies = [
        {
            title: "EEG Arrays",
            description: "Non-invasive scalp electrodes for brain monitoring",
            icon: "🧠"
        },
        {
            title: "ECoG Grids",
            description: "Implanted electrodes for higher resolution signals",
            icon: "⏳"
        },
        {
            title: "fNIRS",
            description: "Functional near-infrared spectroscopy for hemodynamics",
            icon: "🔍"
        }
    ];

    const neuroApplications = [
        {
            title: "Medical Diagnosis",
            examples: [
                "Epilepsy prediction",
                "Neurodegenerative disease tracking",
                "Brain injury assessment"
            ],
            icon: "🏥"
        },
        {
            title: "Neurorehabilitation",
            examples: [
                "Stroke recovery",
                "Prosthetic control",
                "Spinal cord injury therapy"
            ],
            icon: "🩺"
        },
        {
            title: "Cognitive Research",
            examples: [
                "Brain mapping",
                "Consciousness studies",
                "Memory formation analysis"
            ],
            icon: "🔬"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
            {/* Floating Particles Background */}
            <FloatingOrbs
                className="absolute inset-0 overflow-hidden"
                orbClassName="absolute rounded-full bg-blue-500 opacity-10"
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
                        <span className="text-white bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            Neural Interface Technology
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
                    >
                        Advanced electrode systems and algorithms for understanding and interfacing with the human brain
                    </motion.p>
                </div>

                {/* Content Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-800 rounded-full p-1">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'technology', label: 'Technology' },
                            { id: 'applications', label: 'Applications' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as 'overview' | 'technology' | 'applications')}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
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
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">
                                        The Future of Neurology
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                    Neural interface technology is revolutionizing our understanding of the brain and enabling direct communication between the nervous system and computers. Our systems combine advanced electrode arrays with machine learning to decode and interpret neural signals.
                                </p>
                                <div className="space-y-6">
                                    {neuroConcepts.map((concept, i) => (
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
                                <div className="relative w-full h-96 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl border border-blue-500/30 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <FaBrain className="text-6xl text-blue-300 mx-auto mb-4" />
                                            <p className="text-gray-300">Neural Interface Architecture</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'technology' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {neuroTechnologies.map((tech, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gray-800/50 rounded-xl p-6 border border-indigo-500/20 text-center"
                                >
                                    <div className="text-5xl mb-4">{tech.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                                    <p className="text-gray-300">{tech.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'applications' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {neuroApplications.map((app, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                                >
                                    <div className="text-4xl mb-4">{app.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 text-center">{app.title}</h3>
                                    <ul className="space-y-2">
                                        {app.examples.map((example, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-indigo-400">•</div>
                                                <span className="text-gray-300 text-sm">{example}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* Research Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gray-800/50 rounded-2xl p-8 border border-blue-500/30"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                                    Clinical Research
                                </span>
                            </h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Current breakthroughs in neural interface technology:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FiDatabase className="text-xl text-blue-400 mr-3 mt-1" />
                                    <span className="text-gray-300">96% accuracy in movement intention decoding</span>
                                </li>
                                <li className="flex items-start">
                                    <FiTrendingUp className="text-xl text-indigo-400 mr-3 mt-1" />
                                    <span className="text-gray-300">4x faster rehabilitation for stroke patients</span>
                                </li>
                                <li className="flex items-start">
                                    <FaClinicMedical className="text-xl text-sky-400 mr-3 mt-1" />
                                    <span className="text-gray-300">Early seizure detection with 30-minute advance warning</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl p-8 h-full border border-blue-500/20 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-5xl mb-6">🧪</div>
                                <h3 className="text-xl font-bold mb-2">Neurotechnology Lab</h3>
                                <p className="text-gray-400 max-w-md mx-auto">
                                    Our team is pioneering next-generation brain-computer interfaces with 12+ clinical trials underway.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-20"
                >
                    <div className="inline-block bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-8 rounded-2xl border border-blue-500/30 max-w-4xl">
                        <h3 className="text-2xl font-bold mb-4 text-white">Interested in Neural Interfaces?</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Contact our neurotechnology research team to learn more about clinical trials and collaborations.
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
                                <FiPhone className="text-2xl text-indigo-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Call Us</h4>
                                    <a href="tel:+14788884158" className="text-gray-300 hover:text-indigo-300 transition-colors">
                                        +14788884158
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiMapPin className="text-2xl text-sky-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Research Facilities</h4>
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

export default Neurology;
