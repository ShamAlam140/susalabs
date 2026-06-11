'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCloud, FiSmartphone, FiServer, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const DigitalTransformationPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'technologies' | 'benefits'>('overview');

    const dtConcepts = [
        {
            title: "Cloud Computing",
            description: "Scalable infrastructure enabling flexible business operations",
            icon: <FiCloud className="text-3xl text-amber-400" />
        },
        {
            title: "IoT Integration",
            description: "Connecting physical devices to digital ecosystems",
            icon: <FiSmartphone className="text-3xl text-blue-400" />
        },
        {
            title: "Data Analytics",
            description: "Extracting insights from business data streams",
            icon: <FiServer className="text-3xl text-purple-400" />
        }
    ];

    const dtTechnologies = [
        {
            title: "Cloud Platforms",
            examples: [
                "AWS/Azure/GCP migration",
                "Serverless architectures",
                "Hybrid cloud solutions"
            ],
            icon: "☁️"
        },
        {
            title: "Automation",
            examples: [
                "RPA implementation",
                "Workflow optimization",
                "AI-powered automation"
            ],
            icon: "🤖"
        },
        {
            title: "Customer Experience",
            examples: [
                "Omnichannel platforms",
                "Personalization engines",
                "Digital self-service"
            ],
            icon: "💎"
        }
    ];

    const dtBenefits = [
        {
            title: "Operational Efficiency",
            description: "30-50% reduction in process costs through automation",
            icon: "⚡"
        },
        {
            title: "Revenue Growth",
            description: "20-40% increase in customer lifetime value",
            icon: "📈"
        },
        {
            title: "Innovation Speed",
            description: "2-3x faster time-to-market for new products",
            icon: "🚀"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 text-white">
            {/* Floating Particles Background */}
            <FloatingOrbs
                className="absolute inset-0 overflow-hidden"
                orbClassName="absolute rounded-full bg-amber-500 opacity-10"
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
                        <span className="text-white bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                            Digital Transformation
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
                    >
                        Revolutionizing business processes through cutting-edge digital technologies for competitive advantage
                    </motion.p>
                </div>

                {/* Content Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-800 rounded-full p-1">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'technologies', label: 'Technologies' },
                            { id: 'benefits', label: 'Benefits' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as 'overview' | 'technologies' | 'benefits')}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg'
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
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                                        The Digital Revolution
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                    Digital transformation integrates digital technology into all business areas, fundamentally changing operations and value delivery. We help organizations embrace cloud, AI, and IoT to enhance customer experiences and operational efficiency.
                                </p>
                                <div className="space-y-6">
                                    {dtConcepts.map((concept, i) => (
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
                                <div className="relative w-full h-96 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-2xl border border-amber-500/30 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <FiCloud className="text-6xl text-amber-300 mx-auto mb-4" />
                                            <p className="text-gray-300">Digital Ecosystem Architecture</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'technologies' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {dtTechnologies.map((tech, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                                >
                                    <div className="text-4xl mb-4">{tech.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 text-center">{tech.title}</h3>
                                    <ul className="space-y-2">
                                        {tech.examples.map((example, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-amber-400">•</div>
                                                <span className="text-gray-300 text-sm">{example}</span>
                                            </li>
                                        ))}
                                    </ul>
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
                            {dtBenefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/20 text-center"
                                >
                                    <div className="text-5xl mb-4">{benefit.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-gray-300">{benefit.description}</p>
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
                    <div className="inline-block bg-gradient-to-r from-amber-600/20 to-orange-600/20 p-8 rounded-2xl border border-amber-500/30 max-w-4xl">
                        <h3 className="text-2xl font-bold mb-4 text-white">Ready to transform your business?</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Our digital transformation experts can guide your organization through the modernization journey.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
                            <div className="flex items-start">
                                <FiMail className="text-2xl text-amber-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Email Us</h4>
                                    <a href="mailto:contact@susalabs.com" className="text-gray-300 hover:text-amber-300 transition-colors">
                                        contact@susalabs.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiPhone className="text-2xl text-orange-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Call Us</h4>
                                    <a href="tel:+14788884158" className="text-gray-300 hover:text-orange-300 transition-colors">
                                        +14788884158
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiMapPin className="text-2xl text-red-400 mr-4 mt-1" />
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

export default DigitalTransformationPage;
