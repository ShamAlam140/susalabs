'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const Project: React.FC = () => {
    const [activeProblem, setActiveProblem] = useState(0);

    const problems = [
        {
            title: "Legacy System Modernization",
            description: "Outdated IT infrastructure causing security vulnerabilities, high maintenance costs, and inability to integrate with modern technologies. Many enterprises struggle with technical debt from old systems.",
            solution: [
                "Cloud-native transformation with microservices architecture",
                "Automated migration tools for seamless transition",
                "Hybrid cloud solutions for gradual modernization",
                "Containerization and orchestration with Kubernetes",
                "Continuous integration/continuous deployment (CI/CD) pipelines"
            ]
        },
        {
            title: "Cybersecurity Threats",
            description: "Increasing sophistication of cyber attacks, ransomware, and data breaches. Compliance with evolving data protection regulations adds complexity to security management.",
            solution: [
                "Zero Trust security architecture implementation",
                "AI-powered threat detection and response systems",
                "Automated compliance monitoring and reporting",
                "Employee cybersecurity awareness training programs",
                "Blockchain-based identity and access management"
            ]
        },
        {
            title: "AI Integration Challenges",
            description: "Difficulty in implementing AI solutions at scale due to data silos, lack of skilled personnel, and unclear ROI. Many AI projects fail to move from pilot to production.",
            solution: [
                "End-to-end AI platform with pre-built industry models",
                "Automated data pipeline creation and management",
                "Explainable AI for better decision-making transparency",
                "Edge AI solutions for real-time processing",
                "AI-as-a-Service offerings for quick deployment"
            ],
        },
        {
            title: "Cloud Cost Optimization",
            description: "Uncontrolled cloud spending due to over-provisioning, idle resources, and lack of visibility. Many organizations experience 'cloud cost shock' after migration.",
            solution: [
                "Automated cloud resource right-sizing tools",
                "AI-driven cost prediction and optimization",
                "Multi-cloud management platform for cost comparison",
                "Serverless architecture adoption",
                "FinOps implementation for cloud financial management"
            ]
        },
        {
            title: "Digital Talent Shortage",
            description: "Difficulty in finding and retaining skilled IT professionals, especially in emerging technologies. High turnover rates in tech positions.",
            solution: [
                "Upskilling/reskilling programs with VR-based training",
                "AI-powered talent matching platforms",
                "Automated code generation tools to boost productivity",
                "Global talent cloud platforms for remote teams",
                "Gamified learning and certification programs"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden relative">
            {/* Floating Orbs */}
            <FloatingOrbs className="absolute inset-0 overflow-hidden pointer-events-none z-0" />

            {/* Glow Effect */}
            <div className="absolute top-1/4 left-1/2 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl filter opacity-30 z-0"></div>

            <div className="relative z-10 container mx-auto px-6 py-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-4">
                        <span className="text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Custom Software Development & AI Solutions for Healthcare
                        </span>
                    </h2>

                    <motion.div
                        className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-lg text-gray-300 mt-6 max-w-5xl mx-auto leading-relaxed text-center"
                    >
                        We address today&apos;s most pressing technology challenges by delivering innovative AI solutions, custom app development, advanced CRM systems, and scalable enterprise-grade applications. <br /><br />
                        As the best software development company, SusaLabs builds future-ready platforms that empower businesses across industries like healthcare, finance, and energy. <br /><br />
                        Our expertise also includes custom healthcare software development services and custom medical software development services, ensuring HIPAA-compliant, secure, and intelligent solutions for hospitals, clinics, and healthtech startups. <br /><br />
                        Whether you&apos;re looking to streamline operations or enhance patient care through technology, we develop software that truly makes an impact.
                    </motion.div>
                </motion.div>

                {/* Problem Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {problems.map((_, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveProblem(index)}
                            className={`relative px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all ${activeProblem === index
                                ? 'bg-white text-gray-900 shadow-lg'
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            Challenge {index + 1}
                            {activeProblem === index && (
                                <motion.div
                                    layoutId="activePill"
                                    className="absolute inset-0 rounded-full border-2 border-white/30"
                                    initial={false}
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Problem-Solution Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Problem Card */}
                    <motion.div
                        key={`problem-${activeProblem}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-4">
                                <span className="text-xl font-bold">!</span>
                            </div>
                            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                                {problems[activeProblem].title}
                            </h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            {problems[activeProblem].description}
                        </p>
                    </motion.div>

                    {/* Solution Card */}
                    <motion.div
                        key={`solution-${activeProblem}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                                <span className="text-xl font-bold">✓</span>
                            </div>
                            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                Our Strategic Approach
                            </h2>
                        </div>
                        <ul className="space-y-3">
                            {problems[activeProblem].solution.map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-blue-400">•</div>
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Tech Stack Showcase */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 mb-16"
                >
                    <h2 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                        Our Technology Ecosystem
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {['AI/ML', 'Blockchain', 'Cloud Native', 'IoT', 'DevSecOps', 'AR/VR', 'Quantum Computing', '5G Edge'].map((tech, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-gray-800/50 p-4 rounded-xl border border-gray-700"
                            >
                                <div className="text-2xl mb-2">
                                    {['🤖', '⛓️', '☁️', '🌐', '🛡️', '👓', '⚛️', '📶'][i]}
                                </div>
                                <h3 className="font-medium">{tech}</h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
                >
                    <div className="text-sm text-gray-400 mb-2">Scroll Down</div>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
};

export default Project;
