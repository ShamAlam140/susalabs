'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const Partner: React.FC = () => {
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

    const partners = [
        {
            name: "Partnered PCU",
            description: "Our strategic partnership with PCU delivers innovative solutions across multiple industries.",
            category: "Strategic Partner",
            color: "from-cyan-400 to-blue-500"
        },
        {
            name: "ITI",
            description: "Collaborating with ITI to bring cutting-edge technology solutions to the telecommunications sector.",
            category: "Government Partner",
            color: "from-purple-400 to-fuchsia-500"
        },
        {
            name: "REIL",
            description: "Joint initiatives with Rajasthan Electronics & Instruments Ltd for renewable energy solutions.",
            category: "Energy Partner",
            color: "from-emerald-400 to-teal-500"
        },
        {
            name: "Railtel",
            description: "Digital transformation partner for Railtel's nationwide network infrastructure.",
            category: "Telecom Partner",
            color: "from-cyan-400 to-blue-500"
        },
        {
            name: "CEL",
            description: "Technology solutions provider for Central Electronics Limited's advanced projects.",
            category: "Technology Partner",
            color: "from-purple-400 to-fuchsia-500"
        },
        {
            name: "Braithwait Kolkata",
            description: "Industrial automation and engineering solutions for Braithwait & Co.",
            category: "Manufacturing Partner",
            color: "from-emerald-400 to-teal-500"
        }
    ];

    const keyClients = [
        {
            name: "Indian Army",
            category: "Defense",
            color: "from-red-400 to-orange-500"
        },
        {
            name: "Defence Ministry",
            category: "Government",
            color: "from-blue-400 to-indigo-500"
        },
        {
            name: "TRAI",
            category: "Regulatory",
            color: "from-green-400 to-emerald-500"
        },
        {
            name: "Google",
            category: "Technology",
            color: "from-yellow-400 to-amber-500"
        },
        {
            name: "Singapore Embassy",
            category: "Diplomatic",
            color: "from-purple-400 to-fuchsia-500"
        },
        {
            name: "OMCI Oil & Gas",
            category: "Energy",
            color: "from-cyan-400 to-blue-500"
        },
        {
            name: "Nepal Telecom",
            category: "Telecom",
            color: "from-red-400 to-pink-500"
        },
        {
            name: "US Congress Library",
            category: "Government",
            color: "from-indigo-400 to-violet-500"
        },
        {
            name: "Constitution Club of INDIA",
            category: "Government",
            color: "from-amber-400 to-yellow-500"
        },
        {
            name: "AFMS, DGAFMS",
            category: "Defense",
            color: "from-blue-400 to-cyan-500"
        },
        {
            name: "SM GROUP",
            category: "Corporate",
            color: "from-green-400 to-teal-500"
        },
        {
            name: "SAR Group",
            category: "Corporate",
            color: "from-purple-400 to-pink-500"
        },
        {
            name: "GSMA",
            category: "Global System for Mobile Communications",
            color: "from-blue-400 to-indigo-500"
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
                            Our Partners
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
                        Strategic collaborations with industry leaders and government organizations
                    </motion.p>
                </motion.div>

                {/* Partners Grid */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={container}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl mb-24"
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-gray-700/50"
                        >
                            <motion.div
                                animate={controls}
                                variants={{
                                    hover: { scale: 1.1 },
                                    initial: { scale: 1 }
                                }}
                                className={`text-4xl font-bold mb-4 bg-gradient-to-r ${partner.color} bg-clip-text text-transparent`}
                            >
                                {partner.name}
                            </motion.div>
                            <div className="text-sm font-semibold mb-4 text-gray-400">
                                {partner.category}
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                {partner.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Key Clients Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="w-full max-w-6xl"
                >
                    <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        Key Clients
                    </h2>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={container}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                        {keyClients.map((client, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ scale: 1.05 }}
                                className={`bg-gradient-to-br ${client.color} rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all`}
                            >
                                <div className="text-xl font-bold text-white">
                                    {client.name}
                                </div>
                                <div className="text-xs font-medium text-white/80 mt-2">
                                    {client.category}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Additional Content Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-24 text-center max-w-4xl"
                >
                    <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Trusted By The Best
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Our solutions power critical operations for government agencies, defense organizations, and leading corporations worldwide. We take pride in delivering excellence to our distinguished clients.
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

export default Partner;
