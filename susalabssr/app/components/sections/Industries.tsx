'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';


const Industries: React.FC = () => {
    const controls = useAnimation();

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100
            }
        }
    };

    const industries = [
        {
            title: "AUTOMOBILE INSURANCE",
            description: "Transform your auto insurance operations with our AI-powered risk assessment and claims processing solutions. We help insurers reduce fraud and improve customer experience through digital transformation.",
            icon: "🚗",
            color: "from-cyan-400 to-blue-500"
        },
        {
            title: "CLAIM SETTLEMENT PROCESS",
            description: "Our automated claim settlement platform reduces processing time by 70% while improving accuracy. Leverage blockchain technology for transparent and tamper-proof claim records.",
            icon: "💰",
            color: "from-purple-400 to-fuchsia-500"
        },
        {
            title: "BANKING SOLUTIONS",
            description: "Next-generation core banking solutions with open API architecture enable seamless integration with fintech ecosystems. Our platform supports real-time transactions and enhanced security protocols.",
            icon: "🏦",
            color: "from-emerald-400 to-teal-500"
        },
        {
            title: "INDUSTRIAL PROCESS PLATFORM",
            description: "Digitize your manufacturing operations with our Industry 4.0 solutions featuring IoT-enabled predictive maintenance and smart factory automation for improved efficiency.",
            icon: "🏭",
            color: "from-cyan-400 to-blue-500"
        },
        {
            title: "EDUCATION ERP SOLUTIONS",
            description: "Comprehensive education management systems that streamline administration, virtual learning, and student performance tracking with data analytics capabilities.",
            icon: "🎓",
            color: "from-purple-400 to-fuchsia-500"
        },
        {
            title: "HEALTH INSURANCE",
            description: "Our platforms, built with custom healthcare software development services and custom medical software development services, automate claim verification and pre-authorization, reducing insurance processing time and costs by up to 40%.",
            icon: "🩺",
            color: "from-emerald-400 to-teal-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden relative">
            {/* Floating Orbs */}
            <FloatingOrbs />

            {/* Glow effect */}
            <div className="absolute top-1/4 left-1/2 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl filter opacity-30"></div>

            <div className="relative z-10 container mx-auto px-6 py-20 md:py-32 flex flex-col items-center">
                {/* Animated Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-4">
                        <span className="text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Industry Solutions
                        </span>
                    </h2>
                    <motion.div
                        className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto"
                    >
                        Tailored digital solutions transforming industries through innovation and technology integration
                    </motion.p>
                </motion.div>

                {/* Industries Grid */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={container}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl"
                >
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-gray-700/50"
                        >
                            <motion.div
                                animate={controls}
                                variants={{
                                    hover: { scale: 1.1 },
                                    initial: { scale: 1 }
                                }}
                                className={`text-5xl md:text-6xl mb-6 bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}
                            >
                                {industry.icon}
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-4 text-white">
                                {industry.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {industry.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Content Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-24 text-center max-w-4xl"
                >
                    <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Why Choose SUSA Labs?
                    </h2>

                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        SUSA Labs is a custom software development company known for building AI-powered CRM systems and tailored tech solutions that drive growth. As a trusted software development company in India and an established software development company in USA, we deliver high-performance applications designed for startups and enterprises alike. Our expert computer software developers combine technical precision with business insight to create intelligent, scalable solutions. Recognized as a best software development company, we offer a full range of software development services — from web and mobile apps to automated workflows. We also specialize in custom healthcare software development services and custom medical software development services, crafting secure, regulation-compliant platforms for the healthcare industry. Every line of code we write aligns with your business goals, whether it&apos;s building from scratch or integrating AI into your existing systems.
                    </p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
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

export default Industries;
