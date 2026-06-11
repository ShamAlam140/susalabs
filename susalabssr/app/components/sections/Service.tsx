'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const Service: React.FC = () => {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            title: "Digital Marketing",
            description: "Susa Labs offers comprehensive digital marketing services including SEO, SMO, content marketing, and social media management to enhance your online presence.",
            features: [
                "Search Engine Optimization (SEO)",
                "Social Media Optimization (SMO)",
                "Content Writing & Marketing",
                "On-page & Off-page SEO",
                "Social Media Management",
                "PPC Campaign Management"
            ],
            icon: "📈",
            stats: [
                { value: "50-200%", label: "Traffic increase" },
                { value: "1-3mo", label: "Visible results" }
            ],
            color: "from-red-400 to-pink-500"
        },
        {
            title: "Customer Relationship & Program Management",
            description: "Managed service offering complete project management including scope management, planning, execution, quality assurance, and user acceptance.",
            features: [
                "Scope management",
                "Project planning & execution",
                "Quality assurance",
                "User acceptance testing",
                "Stakeholder management",
                "Risk management"
            ],
            icon: "🤝",
            stats: [
                { value: "95%+", label: "Project success rate" },
                { value: "30%", label: "Efficiency gain" }
            ],
            color: "from-indigo-400 to-violet-500"
        },
        {
            title: "Process Development",
            description: "We analyze your business operations to identify technology gaps and automation opportunities, creating foolproof documentation to enhance productivity and satisfaction.",
            features: [
                "Comprehensive process audits",
                "Automation opportunity mapping",
                "Workflow optimization",
                "Documentation & implementation"
            ],
            icon: "📊",
            stats: [
                { value: "40-70%", label: "Process efficiency gain" },
                { value: "3-6mo", label: "Typical ROI period" }
            ],
            color: "from-cyan-400 to-blue-500"
        },
        {
            title: "Smart Engineering",
            description: "Our expert engineering team solves complex challenges across cloud computing, DevOps, security, and full-stack development to build robust solutions.",
            features: [
                "Cloud-native architecture",
                "CI/CD pipeline setup",
                "End-to-end encryption",
                "Cross-platform development"
            ],
            icon: "⚙️",
            stats: [
                { value: "100+", label: "Systems deployed" },
                { value: "99.9%", label: "Uptime SLA" }
            ],
            color: "from-purple-400 to-fuchsia-500"
        },
        {
            title: "Software Solutions",
            description: "We partner with organizations to augment development capacity and build custom systems addressing unique challenges.",
            features: [
                "CTO/CIO advisory",
                "Legacy system modernization",
                "Custom application development",
                "Technical team augmentation"
            ],
            icon: "💻",
            stats: [
                { value: "2-4x", label: "Development speed" },
                { value: "50%", label: "Cost reduction" }
            ],
            color: "from-amber-400 to-orange-500"
        },
        {
            title: "Advanced Technology",
            description: "Leveraging cutting-edge technologies like AI/ML, blockchain, and big data frameworks to build future-proof solutions.",
            features: [
                "Predictive analytics",
                "IoT integration",
                "Blockchain solutions",
                "Big data processing"
            ],
            icon: "🚀",
            stats: [
                { value: "PB", label: "Data processed" },
                { value: "10ms", label: "Real-time response" }
            ],
            color: "from-emerald-400 to-teal-500"
        }
    ];

    const techStack = [
        // Programming Languages
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "JavaScript", icon: "📜" },
        { name: "TypeScript", icon: "🟦" },
        { name: "C++", icon: "➕" },
        { name: "C#", icon: "♯" },
        { name: "Go", icon: "🐹" },
        { name: "Rust", icon: "🦀" },
        { name: "Kotlin", icon: "🅚" },
        { name: "Swift", icon: "🐦" },
        { name: "PHP", icon: "🐘" },
        { name: "Ruby", icon: "💎" },

        // Frontend Technologies
        { name: "HTML", icon: "🅷" },
        { name: "CSS", icon: "🅲" },
        { name: "React", icon: "⚛️" },
        { name: "Angular", icon: "🅰️" },
        { name: "Vue.js", icon: "🖖" },
        { name: "Svelte", icon: "💨" },
        { name: "Next.js", icon: "⏭️" },
        { name: "Nuxt.js", icon: "🖖" },
        { name: "Tailwind", icon: "🍃" },
        { name: "Bootstrap", icon: "🅱" },

        // Backend Technologies
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚂" },
        { name: "Django", icon: "🐍" },
        { name: "Flask", icon: "🍶" },
        { name: "Spring", icon: "🌱" },
        { name: "Laravel", icon: "🪄" },
        { name: "Ruby on Rails", icon: "🛤️" },
        { name: "ASP.NET", icon: "🔷" },

        // Databases
        { name: "MySQL", icon: "🐬" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "🔴" },
        { name: "Oracle", icon: "🏛️" },
        { name: "SQL Server", icon: "🗃️" },
        { name: "Firebase", icon: "🔥" },
        { name: "DynamoDB", icon: "⚡" },

        // Cloud & DevOps
        { name: "AWS", icon: "☁️" },
        { name: "Azure", icon: "🔷" },
        { name: "GCP", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚓" },
        { name: "Terraform", icon: "🏗️" },
        { name: "Ansible", icon: "🔄" },
        { name: "Jenkins", icon: "🤖" },
        { name: "GitLab CI", icon: "🦊" },
        { name: "GitHub Actions", icon: "🐙" },

        // Mobile
        { name: "React Native", icon: "📱" },
        { name: "Flutter", icon: "🦋" },
        { name: "Android", icon: "🤖" },
        { name: "iOS", icon: "🍏" },

        // AI/ML
        { name: "TensorFlow", icon: "🧠" },
        { name: "PyTorch", icon: "🔥" },
        { name: "Keras", icon: "🤖" },
        { name: "OpenCV", icon: "👁️" },
        { name: "NLTK", icon: "💬" },

        // Blockchain
        { name: "Solidity", icon: "⛓️" },
        { name: "Ethereum", icon: "Ξ" },
        { name: "Hyperledger", icon: "🔗" },

        // Other
        { name: "GraphQL", icon: "📊" },
        { name: "REST API", icon: "🌐" },
        { name: "WebSocket", icon: "🔌" },
        { name: "WebRTC", icon: "🎥" },
        { name: "Electron", icon: "⚡" },
        { name: "WebAssembly", icon: "🖥️" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
            <FloatingOrbs className="absolute inset-0 overflow-hidden pointer-events-none -z-10" />
            <div className="absolute top-1/4 left-1/2 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl filter opacity-30 -translate-x-1/2"></div>

            <div className="relative z-10 container mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-4">
                        <span className="text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Our Services
                        </span>
                    </h2>
                    <motion.div
                        className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />

                    <p className="text-xl max-w-3xl mx-auto mt-6 text-gray-300">
                        <span>Comprehensive</span>{' '}
                        <Link
                            href="/solutions/ai"
                            className="inline-block text-white hover:text-yellow-500 transition-colors duration-300"
                        >
                            AI‑powered technology solutions
                        </Link>,{' '}
                        <span>including app development,</span>{' '}
                        <Link
                            href="/product"
                            className="inline-block text-white hover:text-yellow-500 transition-colors duration-300"
                        >
                            CRM systems
                        </Link>,{' '}
                        <span>and</span>{' '}
                        <Link
                            href="/"
                            className="inline-block text-white hover:text-yellow-500 transition-colors duration-300"
                        >
                            custom software development
                        </Link>,{' '}
                        <span>tailored to transform and streamline your business operations.</span>
                    </p>


                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {services.map((service, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveService(index)}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeService === index
                                ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            <span className="mr-2">{service.icon}</span>
                            {service.title}
                        </motion.button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`service-${activeService}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20"
                        >
                            <div className="flex items-start mb-6">
                                <motion.div
                                    className={`text-5xl mr-4 bg-gradient-to-r ${services[activeService].color} bg-clip-text text-transparent`}
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {services[activeService].icon}
                                </motion.div>
                                <div>
                                    <h2 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${services[activeService].color}`}>
                                        {services[activeService].title}
                                    </h2>
                                    <p className="text-gray-300 mt-2 leading-relaxed">
                                        {services[activeService].description}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {services[activeService].stats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-gray-900/50 p-4 rounded-lg"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="text-2xl font-bold text-blue-300">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-400 mb-4">Key Features</h3>
                            <ul className="space-y-3">
                                {services[activeService].features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-blue-400">•</div>
                                        <span className="text-gray-300">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 h-full"
                        >
                            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                Technology Stack
                            </h3>
                            <div className="grid grid-cols-4 gap-4">
                                {techStack.map((tech, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="bg-gray-900/50 p-3 rounded-lg text-center text-sm flex items-center justify-center gap-2"
                                    >
                                        <span>{tech.icon}</span>
                                        <span>{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <motion.div
                        className="bg-gray-800/50 p-6 rounded-xl border border-blue-500/20"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3">
                            Unlock Powerful Custom Software Development Solutions For Your Business
                        </h3>
                    </motion.div>

                    <motion.div
                        className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3">
                            Custom Software That Grows With You – Learn How To Get Started Today
                        </h3>
                    </motion.div>

                    <motion.div
                        className="bg-gray-800/50 p-6 rounded-xl border border-pink-500/20"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3">
                            Unlock Artificial Intelligence Solutions And Software Development For Business Growth
                        </h3>
                    </motion.div>

                    <motion.div
                        className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3">
                            Accelerate Business Growth with AI Solutions Tailored for Enterprises
                        </h3>
                    </motion.div>

                    <motion.div
                        className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3">
                            Accelerate Business Growth with AI Solutions Tailored for Enterprises
                        </h3>
                    </motion.div>


                    <motion.div
                        className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-4">
                            End-to-End Software Development Services
                        </h2>

                        <h2 className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-semibold mb-2">
                            CRM Development Services
                        </h2>
                        <p className="text-gray-300 mb-4">
                            We build custom CRM tools for better patient and client management.
                        </p>

                        <h2 className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-semibold mb-2">
                            Medical Software Solutions
                        </h2>
                        <p className="text-gray-300 mb-4">
                            Our medical solutions use AI to optimize diagnostics and data workflows.
                        </p>

                        <h2 className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-semibold mb-2">
                            AI Integration & Automation
                        </h2>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Service;
