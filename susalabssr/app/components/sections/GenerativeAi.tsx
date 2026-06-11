'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiLayers, FiImage, FiCode, FiDatabase, FiTrendingUp, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

interface GenerativeAIProps {
    primaryColor?: string;
    secondaryColor?: string;
    contactEmail?: string;
    contactPhone?: string;
    companyAddress?: string;
}

const GenerativeAi: React.FC<GenerativeAIProps> = ({
    primaryColor = 'indigo',
    secondaryColor = 'purple',
    contactEmail = 'contact@susalabs.com',
    contactPhone = '+14788884158',
    companyAddress = 'Magnum Tower 1, 8th Floor, Golf Course Ext Rd, Sector 58, Gurugram, Haryana 122011'
}) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'models' | 'applications'>('overview');

    // Color mapping for Tailwind classes
    const colorMap = {
        indigo: {
            from: 'from-indigo-400',
            to: 'to-indigo-600',
            bgFrom: 'from-indigo-900',
            bgVia: 'via-indigo-900',
            bgTo: 'to-gray-900',
            border: 'border-indigo-500',
            text: 'text-indigo-400'
        },
        purple: {
            from: 'from-purple-400',
            to: 'to-purple-600',
            bgFrom: 'from-purple-900',
            bgVia: 'via-purple-900',
            bgTo: 'to-gray-900',
            border: 'border-purple-500',
            text: 'text-purple-400'
        },
        blue: {
            from: 'from-blue-400',
            to: 'to-blue-600',
            bgFrom: 'from-blue-900',
            bgVia: 'via-blue-900',
            bgTo: 'to-gray-900',
            border: 'border-blue-500',
            text: 'text-blue-400'
        },
        teal: {
            from: 'from-teal-400',
            to: 'to-teal-600',
            bgFrom: 'from-teal-900',
            bgVia: 'via-teal-900',
            bgTo: 'to-gray-900',
            border: 'border-teal-500',
            text: 'text-teal-400'
        }
    };

    const colors = colorMap[primaryColor as keyof typeof colorMap] || colorMap.indigo;
    const secondaryColors = colorMap[secondaryColor as keyof typeof colorMap] || colorMap.purple;

    // Generative AI Data
    const genAIConcepts = [
        {
            title: "Creative Generation",
            description: "AI systems that produce novel content across modalities",
            icon: <FiLayers className={`text-3xl ${colors.text}`} />
        },
        {
            title: "Neural Synthesis",
            description: "Deep learning models that generate realistic outputs",
            icon: <FiCpu className={`text-3xl ${secondaryColors.text}`} />
        },
        {
            title: "Multimodal AI",
            description: "Models that understand and generate across text, image, and more",
            icon: <FiImage className="text-3xl text-violet-400" />
        }
    ];

    const genAIModels = [
        {
            title: "Diffusion Models",
            description: "State-of-the-art for image generation (DALL-E, Stable Diffusion)",
            icon: "🌄"
        },
        {
            title: "LLMs",
            description: "Large Language Models (GPT-4, Claude, Gemini)",
            icon: "📝"
        },
        {
            title: "GANs",
            description: "Generative Adversarial Networks for realistic synthesis",
            icon: "⚔️"
        }
    ];

    const genAIApplications = [
        {
            title: "Content Creation",
            examples: [
                "Automated copywriting",
                "AI-generated artwork",
                "Music composition",
                "Video synthesis"
            ],
            icon: "🎨"
        },
        {
            title: "Product Design",
            examples: [
                "3D model generation",
                "Architectural prototypes",
                "Fashion design",
                "Industrial concepts"
            ],
            icon: "🛠️"
        },
        {
            title: "Scientific Research",
            examples: [
                "Drug molecule generation",
                "Material discovery",
                "Hypothesis generation",
                "Simulation data augmentation"
            ],
            icon: "🔬"
        }
    ];


    return (
        <div className={`min-h-screen bg-gradient-to-br ${colors.bgFrom} ${colors.bgVia} ${colors.bgTo} text-white`}>
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
                        <span className={`text-white bg-clip-text bg-gradient-to-r ${colors.from} ${secondaryColors.to}`}>
                            Generative AI Solutions | SusaLabs
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className={`w-32 h-1 bg-gradient-to-r ${secondaryColors.to} ${colors.from} mx-auto mb-8`}
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
                    >
                        Explore{' '}
                        <Link
                            href="/"
                            className="inline-block bg-yellow-500 text-gray-900 px-1 rounded align-baseline no-underline"
                        >
                            SusaLabs
                        </Link>
                        &apos; cutting-edge generative{' '}
                        <Link
                            href="/solutions/ai"
                            className="inline-block bg-yellow-500 text-gray-900 px-1 rounded align-baseline no-underline"
                        >
                            AI technologies
                        </Link>
                        , offering innovative solutions in software development, app creation, and CRM systems for various industries.
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
                                    ? `bg-gradient-to-r ${secondaryColors.to} ${colors.from} text-white shadow-lg`
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Generative AI Content */}
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
                                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.from} to-violet-400`}>
                                        The Generative Revolution
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                    Generative AI is transforming creativity and problem-solving across industries. Our research focuses on developing models that can synthesize novel content - from text to images, 3D designs to molecular structures - while ensuring ethical deployment and responsible innovation.
                                </p>
                                <div className="space-y-6">
                                    {genAIConcepts.map((concept, i) => (
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
                                <div className={`relative w-full h-96 bg-gradient-to-br ${colors.from}/20 ${secondaryColors.to}/20 rounded-2xl border ${colors.border}/30 overflow-hidden`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <FiCode className={`text-6xl ${colors.text} mx-auto mb-4`} />
                                            <p className="text-gray-300">Generative AI Architecture</p>
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
                            {genAIModels.map((model, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className={`bg-gray-800/50 rounded-xl p-6 border ${secondaryColors.border}/20 text-center`}
                                >
                                    <div className="text-5xl mb-4">{model.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                                    <p className="text-gray-300">{model.description}</p>
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
                            {genAIApplications.map((application, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                                >
                                    <div className="text-4xl mb-4">{application.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 text-center">{application.title}</h3>
                                    <ul className="space-y-2">
                                        {application.examples.map((example, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className={`flex-shrink-0 w-5 h-5 mt-1 mr-3 ${secondaryColors.text}`}>•</div>
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
                    className="mt-20 bg-gray-800/50 rounded-2xl p-8 border border-gray-700"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.text} ${secondaryColors.text}`}>
                                    Our Research Focus
                                </span>
                            </h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                We&apos;re pushing boundaries in generative model development with a focus on:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FiTrendingUp className={`text-xl ${colors.text} mr-3 mt-1`} />
                                    <span className="text-gray-300">Novel architectures for controllable generation</span>
                                </li>
                                <li className="flex items-start">
                                    <FiDatabase className={`text-xl ${secondaryColors.text} mr-3 mt-1`} />
                                    <span className="text-gray-300">Multimodal foundation models</span>
                                </li>
                                <li className="flex items-start">
                                    <FiCpu className="text-xl text-violet-400 mr-3 mt-1" />
                                    <span className="text-gray-300">Efficient training techniques</span>
                                </li>
                                <li className="flex items-start">
                                    <FiLayers className={`text-xl ${colors.text} mr-3 mt-1`} />
                                    <span className="text-gray-300">Ethical AI generation frameworks</span>
                                </li>
                            </ul>
                        </div>
                        <div className={`bg-gradient-to-br ${colors.from}/40 ${secondaryColors.to}/40 rounded-xl p-8 h-full border ${colors.border}/20 flex items-center justify-center`}>
                            <div className="text-center">
                                <div className="text-5xl mb-6">🧠</div>
                                <h3 className="text-xl font-bold mb-2">Generative AI Lab</h3>
                                <p className="text-gray-400 max-w-md mx-auto">
                                    Our dedicated research team is exploring the frontiers of artificial creativity and synthesis.
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
                    <div className={`inline-block bg-gradient-to-r ${colors.from}/20 ${secondaryColors.to}/20 p-8 rounded-2xl border ${colors.border}/30 max-w-4xl`}>
                        <h3 className="text-2xl font-bold mb-4 text-white">Explore Generative AI With Us</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Whether you&apos;re looking for research collaboration, enterprise solutions,
                            or API access, we can help.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
                            <div className="flex items-start">
                                <FiMail className={`text-2xl ${colors.text} mr-4 mt-1`} />
                                <div>
                                    <h4 className="font-bold mb-1">Email Us</h4>
                                    <a href={`mailto:${contactEmail}`} className="text-gray-300 hover:text-indigo-300 transition-colors">
                                        {contactEmail}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiPhone className={`text-2xl ${secondaryColors.text} mr-4 mt-1`} />
                                <div>
                                    <h4 className="font-bold mb-1">Call Us</h4>
                                    <a href={`tel:${contactPhone.replace(/[^0-9+]/g, '')}`} className="text-gray-300 hover:text-purple-300 transition-colors">
                                        {contactPhone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiMapPin className="text-2xl text-violet-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Visit Us</h4>
                                    <p className="text-gray-300">
                                        {companyAddress}
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

export default GenerativeAi;
