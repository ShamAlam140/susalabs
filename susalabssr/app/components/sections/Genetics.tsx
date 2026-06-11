'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiTarget, FiTrendingUp, FiShield, FiUsers, FiMail, FiPhone, FiClock } from 'react-icons/fi';
import { FaDna } from 'react-icons/fa';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const Genetics: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'mechanism' | 'benefits'>('overview');

    const treatmentConcepts = [
        {
            title: "RNA Interference",
            description: "Silencing cancer-causing genes using small RNA molecules",
            icon: <FaDna className="text-3xl text-emerald-400" />
        },
        {
            title: "mRNA Vaccines",
            description: "Training immune system to recognize cancer cells",
            icon: <FiActivity className="text-3xl text-green-400" />
        },
        {
            title: "Targeted Delivery",
            description: "Nanoparticles that specifically target tumor cells",
            icon: <FiTarget className="text-3xl text-teal-400" />
        }
    ];

    const treatmentMechanisms = [
        {
            title: "Gene Silencing",
            description: "Blocking oncogene expression with siRNA",
            icon: "🧬"
        },
        {
            title: "Immune Activation",
            description: "Stimulating anti-tumor immune response",
            icon: "🛡️"
        },
        {
            title: "Tumor Suppression",
            description: "Restoring p53 and other tumor suppressors",
            icon: "🔄"
        }
    ];

    const treatmentBenefits = [
        {
            title: "Precision",
            examples: [
                "Targets only cancer cells",
                "Minimal side effects",
                "Personalized therapy"
            ],
            icon: "🎯"
        },
        {
            title: "Efficacy",
            examples: [
                "Overcomes drug resistance",
                "Works on 'undruggable' targets",
                "Long-lasting effects"
            ],
            icon: "📈"
        },
        {
            title: "Versatility",
            examples: [
                "Treats multiple cancer types",
                "Combines with other therapies",
                "Adaptable to mutations"
            ],
            icon: "🔄"
        }
    ];

    const advantages = [
        {
            principle: "Precision",
            description: "Targets only cancer-specific biomarkers",
            icon: <FiTarget className="text-2xl text-emerald-300" />
        },
        {
            principle: "Safety",
            description: "Reduced toxicity compared to chemotherapy",
            icon: <FiShield className="text-2xl text-green-300" />
        },
        {
            principle: "Adaptability",
            description: "Quickly modified for new mutations",
            icon: <FiTrendingUp className="text-2xl text-teal-300" />
        },
        {
            principle: "Combination",
            description: "Works synergistically with other treatments",
            icon: <FiUsers className="text-2xl text-emerald-400" />
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white">
            {/* Floating Particles Background */}
            <FloatingOrbs
                className="absolute inset-0 overflow-hidden"
                orbClassName="absolute rounded-full bg-emerald-500 opacity-10"
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
                        <span className="text-white bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                            RNA-Based Cancer Therapy
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
                    >
                        Revolutionary treatments using RNA technology to precisely target and eliminate cancer cells
                    </motion.p>
                </div>

                {/* Content Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-800 rounded-full p-1">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'mechanism', label: 'Mechanism' },
                            { id: 'benefits', label: 'Benefits' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as 'overview' | 'mechanism' | 'benefits')}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Treatment Content */}
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
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                                        The Future of Oncology
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                    RNA-based therapies represent a paradigm shift in cancer treatment, offering unprecedented precision by targeting the genetic drivers of cancer while sparing healthy cells.
                                </p>
                                <div className="space-y-6">
                                    {treatmentConcepts.map((concept, i) => (
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
                                <div className="relative w-full h-96 bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-2xl border border-emerald-500/30 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <FaDna className="text-6xl text-emerald-300 mx-auto mb-4" />
                                            <p className="text-gray-300">RNA Therapy Mechanism</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'mechanism' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {treatmentMechanisms.map((mechanism, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gray-800/50 rounded-xl p-6 border border-green-500/20 text-center"
                                >
                                    <div className="text-5xl mb-4">{mechanism.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{mechanism.title}</h3>
                                    <p className="text-gray-300">{mechanism.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'benefits' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {treatmentBenefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                                >
                                    <div className="text-4xl mb-4">{benefit.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 text-center">{benefit.title}</h3>
                                    <ul className="space-y-2">
                                        {benefit.examples.map((example, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-green-400">•</div>
                                                <span className="text-gray-300 text-sm">{example}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* Current Breakthroughs Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-300">
                                Current Breakthroughs
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6" />
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Recent advancements in RNA-based cancer therapeutics
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gray-800/50 rounded-xl p-6 border border-emerald-500/20"
                        >
                            <div className="text-4xl mb-4">🧬</div>
                            <h3 className="text-xl font-bold mb-3">Personalized mRNA Vaccines</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Our latest clinical trials show 78% response rate in metastatic patients with tumor-specific neoantigen vaccines.
                            </p>
                            <div className="text-xs text-emerald-300 font-medium">
                                Phase 3 Trials Ongoing
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gray-800/50 rounded-xl p-6 border border-green-500/20"
                        >
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold mb-3">Rapid Treatment Development</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                New platform reduces therapy development time from months to weeks, crucial for aggressive cancers.
                            </p>
                            <div className="text-xs text-green-300 font-medium">
                                Patent Pending Technology
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gray-800/50 rounded-xl p-6 border border-teal-500/20"
                        >
                            <div className="text-4xl mb-4">🔄</div>
                            <h3 className="text-xl font-bold mb-3">Adaptive RNA Editing</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                CRISPR-based RNA editing shows promise in correcting cancer-driving mutations in real-time.
                            </p>
                            <div className="text-xs text-teal-300 font-medium">
                                Preclinical Success
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Advantages Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-12 border border-emerald-500/30"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-green-200">
                                Therapeutic Advantages
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-6" />
                        <p className="text-gray-300 max-w-3xl mx-auto">
                            Why RNA-based approaches are transforming cancer treatment
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {advantages.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700"
                            >
                                <div className="flex justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{item.principle}</h3>
                                <p className="text-gray-300 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-20"
                    id="contact"
                >
                    <div className="inline-block bg-gradient-to-r from-emerald-600/20 to-green-600/20 p-8 rounded-2xl border border-emerald-500/30 max-w-4xl">
                        <h3 className="text-2xl font-bold mb-4 text-white">Interested in RNA Therapeutics?</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Contact our oncology research team to learn more about clinical trials and collaborations.
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
                                <FiPhone className="text-2xl text-green-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Call Us</h4>
                                    <a href="tel:+14788884158" className="text-gray-300 hover:text-green-300 transition-colors">
                                        +14788884158
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiClock className="text-2xl text-teal-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Hours</h4>
                                    <p className="text-gray-300">
                                        Mon-Fri: 8AM-6PM EST<br />
                                        Sat: 9AM-2PM EST
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

export default Genetics;
