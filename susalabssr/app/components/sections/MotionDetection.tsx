'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiTarget, FiVideo, FiClock } from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const MotionDetection: React.FC = () => {
    const features = [
        {
            title: "Real-time Swing Analysis",
            description: "Frame-by-frame motion tracking for perfecting technique",
            icon: <FiActivity className="text-3xl text-blue-400" />
        },
        {
            title: "Precision Targeting",
            description: "Ball trajectory prediction with millimeter accuracy",
            icon: <FiTarget className="text-3xl text-green-400" />
        },
        {
            title: "Instant Replay",
            description: "360° playback of key moments for performance review",
            icon: <FiVideo className="text-3xl text-purple-400" />
        },
        {
            title: "Latency-free Processing",
            description: "Sub-10ms response time for real-time feedback",
            icon: <FiClock className="text-3xl text-amber-400" />
        }
    ];

    const sportsApplications = [
        {
            sport: "Golf",
            benefits: [
                "Swing plane detection",
                "Club head speed measurement",
                "Putting stroke analysis"
            ],
            icon: "🏌️"
        },
        {
            sport: "Cricket",
            benefits: [
                "Bowling action analysis",
                "Bat swing path tracking",
                "Ball spin rate calculation"
            ],
            icon: "🏏"
        },
        {
            sport: "Badminton",
            benefits: [
                "Smash velocity measurement",
                "Footwork pattern tracking",
                "Shuttlecock trajectory prediction"
            ],
            icon: "🏸"
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
                        <span className="text-white bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                            Motion Detection
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
                    >
                        Advanced real-time motion tracking for sports performance enhancement
                    </motion.p>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                                    Sports Motion Intelligence
                                </span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                Our proprietary motion detection technology captures and analyzes every movement with sub-millimeter precision, providing athletes and coaches with actionable insights to elevate performance.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {features.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
                                    >
                                        <div className="flex items-start">
                                            <div className="mr-4">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                                <p className="text-gray-400">{feature.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative w-full h-96 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-2xl border border-blue-500/30 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <FiTarget className="text-6xl text-blue-300 mx-auto mb-4" />
                                        <p className="text-gray-300">Motion Tracking Visualization</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sports Applications */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                Sports Applications
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {sportsApplications.map((app, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                                >
                                    <div className="text-4xl mb-4 text-center">{app.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 text-center">{app.sport}</h3>
                                    <ul className="space-y-2">
                                        {app.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-blue-400">•</div>
                                                <span className="text-gray-300 text-sm">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technical Specs */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-2xl border border-blue-500/30 p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">Technical Specifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-300 mb-2">240</div>
                                <p className="text-gray-300">Frames Per Second</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-cyan-300 mb-2">0.1mm</div>
                                <p className="text-gray-300">Tracking Accuracy</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-teal-300 mb-2">8ms</div>
                                <p className="text-gray-300">Processing Latency</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default MotionDetection;
