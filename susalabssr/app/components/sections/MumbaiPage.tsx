'use client';

import type React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiCode,
    FiUsers,
    FiTrendingUp,
    FiSettings,
    FiCloud,
    FiCpu,
    FiDatabase,
    FiMonitor,
    FiShield,
    FiZap,
} from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const MumbaiPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'services' | 'locations' | 'expertise'>('services');

    // Services Data
    const services = [
        {
            title: 'AI Application Development',
            description: 'Machine learning, predictive analytics, chatbots',
            icon: <FiCpu className="text-3xl text-amber-400" />,
            features: ['Machine Learning', 'Predictive Analytics', 'Chatbots', 'Smart Automation'],
        },
        {
            title: 'Custom Software Development',
            description: 'Web platforms, mobile apps, automation tools',
            icon: <FiCode className="text-3xl text-green-400" />,
            features: ['Web Platforms', 'Mobile Apps', 'Automation Tools', 'Custom Solutions'],
        },
        {
            title: 'CRM Solutions',
            description: 'Lead management, customer retention, pipeline automation',
            icon: <FiUsers className="text-3xl text-blue-400" />,
            features: ['Lead Management', 'Customer Retention', 'Pipeline Automation', 'Sales Analytics'],
        },
        {
            title: 'SaaS Product Development',
            description: 'Secure, multi-tenant SaaS systems with subscription models',
            icon: <FiCloud className="text-3xl text-purple-400" />,
            features: ['Multi-tenant SaaS', 'Subscription Models', 'Secure Systems', 'Scalable Architecture'],
        },
        {
            title: 'ERP Systems',
            description: 'Finance, HR, inventory, operations—all in one intelligent dashboard',
            icon: <FiSettings className="text-3xl text-red-400" />,
            features: ['Finance Management', 'HR Systems', 'Inventory Control', 'Operations Dashboard'],
        },
    ];

    // Mumbai Areas Data
    const mumbaiAreas = ['Andheri', 'BKC', 'Navi Mumbai', 'Thane', 'Lower Parel', 'Goregaon', 'Vikhroli', 'Powai'];

    // Expertise Areas
    const expertise = [
        {
            title: 'AI & Machine Learning',
            description: 'Smart automation and predictive analytics',
            icon: <FiZap className="text-2xl text-amber-400" />,
        },
        {
            title: 'Cloud Architecture',
            description: 'Scalable, secure cloud-native applications',
            icon: <FiCloud className="text-2xl text-purple-400" />,
        },
        {
            title: 'Database Design',
            description: 'Optimized data structures for performance',
            icon: <FiDatabase className="text-2xl text-green-400" />,
        },
        {
            title: 'UI/UX Design',
            description: 'User-centered design for better engagement',
            icon: <FiMonitor className="text-2xl text-blue-400" />,
        },
        {
            title: 'Security',
            description: 'Enterprise-grade security implementations',
            icon: <FiShield className="text-2xl text-red-400" />,
        },
        {
            title: 'Performance',
            description: 'High-performance, scalable solutions',
            icon: <FiTrendingUp className="text-2xl text-orange-400" />,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900 text-white relative overflow-hidden">
            {/* Floating Particles Background - Using FloatingOrbs */}
            <FloatingOrbs
                className="absolute inset-0 overflow-hidden"
                orbClassName="absolute rounded-full bg-green-500 opacity-20"
            />

            {/* Modern Mesh Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-teal-500/10 to-emerald-500/10 backdrop-blur-3xl"></div>

            <div className="relative z-10 container mx-auto px-6 py-24">
                {/* Hero Section */}
                <div className="text-center mb-20 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-teal-600/10 rounded-3xl backdrop-blur-sm border border-white/10 -m-8"></div>
                    <div className="relative z-10 p-8">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold mb-6 text-white"
                        >
                            Software development company in Mumbai
                        </motion.h1>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-8"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl md:text-2xl max-w-4xl mx-auto text-white mb-8"
                        >
                            Transforming Mumbai&apos;s Enterprises with AI, CRM, ERP & Custom Software Solutions for Smart, Scalable Growth
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-lg max-w-5xl mx-auto text-white"
                        >
                            We bring intelligent digital transformation to Mumbai&apos;s fast-paced business environment. As a top software
                            development company in Mumbai, we specialize in AI applications, custom software, CRM systems, SaaS platforms, and ERP services tailored to the unique needs of financial institutions, startups, media
                            companies, and enterprise brands. Whether you&apos;re in Lower Parel, BKC, or Andheri—our solutions are built
                            for scale, speed, and long-term success.
                        </motion.p>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative mb-16"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-3xl backdrop-blur-xl border border-white/10"></div>
                    <div className="relative z-10 p-8">
                        <h2 className="text-4xl font-bold text-center mb-12 text-white">🔹 Why Mumbai Brands Trust SUSA Labs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {[
                                {
                                    title: 'AI-Powered Software',
                                    desc: 'To drive smarter decisions in banking, fintech, and media',
                                    icon: '💹',
                                },
                                {
                                    title: 'Custom Software Development',
                                    desc: 'That fits your workflow, not the other way around',
                                    icon: '🛠',
                                },
                                {
                                    title: 'CRM & ERP Solutions',
                                    desc: 'For managing leads, logistics, teams, and operations',
                                    icon: '💼',
                                },
                                {
                                    title: 'SaaS Development',
                                    desc: 'From idea to launch with real-time scalability',
                                    icon: '☁️',
                                },
                                {
                                    title: 'Mumbai-Based Team',
                                    desc: 'Available for consultation and collaboration',
                                    icon: '📍',
                                },
                            ].map((item, i) => (
                                <motion.div key={i} whileHover={{ scale: 1.05, y: -5 }} className="group relative">
                                    <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center h-full hover:bg-white/10 transition-all duration-300 group-hover:shadow-indigo-500/20">
                                        <div className="text-4xl mb-4">{item.icon}</div>
                                        <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                                        <p className="text-white text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Content Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-white/10 backdrop-blur-lg rounded-full p-2 border border-white/20">
                        {[
                            { id: 'services', label: 'Our Key Services', icon: '🔧' },
                            { id: 'locations', label: 'Mumbai Areas', icon: '📍' },
                            { id: 'expertise', label: 'Our Expertise', icon: '⭐' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as 'services' | 'locations' | 'expertise')}
                                className={`px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-2xl shadow-green-500/25 scale-105'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <span>{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="max-w-7xl mx-auto">
                    {activeTab === 'services' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold text-center mb-12">
                                <span className="text-white">🔧 Our Key Services in Mumbai</span>
                            </h2>
                            {services.map((service, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                                        }`}
                                >
                                    <div className={`${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                        <div className="flex items-center mb-4">
                                            {service.icon}
                                            <h3 className="text-2xl font-bold ml-4 text-white">{service.title}</h3>
                                        </div>
                                        <p className="text-white mb-6 leading-relaxed">{service.description}</p>
                                        <div className="grid grid-cols-2 gap-3">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center">
                                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                                                    <span className="text-sm text-white">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={`${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                        <motion.div whileHover={{ scale: 1.02, rotateY: 5 }} className="group relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-teal-600/30 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl"></div>
                                            <div className="relative z-10 p-8 h-80 flex flex-col items-center justify-center text-center">
                                                <motion.div
                                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                                    className="text-8xl mb-6 filter drop-shadow-2xl"
                                                >
                                                    {service.icon}
                                                </motion.div>
                                                <h4 className="text-xl font-bold text-white mb-2">Service Visualization</h4>
                                                <p className="text-gray-300 text-sm">Interactive & Modern</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'locations' && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <h2 className="text-3xl font-bold text-center mb-12">
                                <span className="text-white">📍 Areas We Serve in Mumbai</span>
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {mumbaiAreas.map((area, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group relative"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl"></div>
                                        <div className="relative z-10 p-6 text-center">
                                            <div className="text-3xl mb-3">🏙️</div>
                                            <h3 className="text-lg font-bold text-white">{area}</h3>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'expertise' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {expertise.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="mb-4">{skill.icon}</div>
                                    <h3 className="text-lg font-bold mb-2 text-white">{skill.title}</h3>
                                    <p className="text-white text-sm">{skill.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* Additional Content Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 mb-16"
                >
                    <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 p-8 rounded-2xl border border-green-500/30">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            <span className="text-white bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                                The most trusted name in software development
                            </span>
                        </h2>
                        <div className="max-w-5xl mx-auto text-center">
                            <p className="text-lg text-white mb-6 leading-relaxed">
                                SUSALabs is a trusted <strong>software development company in Mumbai</strong>, delivering intelligent
                                digital solutions that help businesses stay ahead in a competitive market. Our team
                                specializes in building advanced <strong>ERP systems</strong>, scalable <strong>SaaS applications</strong>, and tailored
                                <strong> CRM software</strong> that streamline workflows and boost productivity. From designing AI chatbot solutions
                                to creating custom AI computer software, we integrate the latest technologies to empower enterprises with automation, speed, and accuracy. Whether
                                you&apos;re a startup or an established business in Mumbai, SUSALabs ensures you get
                                future-ready solutions that drive growth and innovation.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-20"
                >
                    <div className="inline-block bg-gradient-to-r from-green-600/20 to-teal-600/20 p-8 rounded-2xl border border-green-500/30 max-w-4xl">
                        <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Mumbai Business?</h2>
                        <p className="text-white mb-6 max-w-2xl mx-auto">
                            Let&apos;s build intelligent software solutions that drive growth, efficiency, and innovation for your
                            Mumbai-based business.
                        </p>
                        <p className="text-lg text-white mb-8">
                            From Andheri to BKC, Navi Mumbai to Thane—we&apos;re here to help you succeed.
                        </p>

                        {/* Contact Information */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
                            <div className="flex items-start">
                                <FiMail className="text-2xl text-green-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1 text-white">Email Us</h4>
                                    <a href="mailto:contact@susalabs.com" className="text-white hover:text-green-300 transition-colors">
                                        contact@susalabs.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FiPhone className="text-2xl text-teal-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1 text-white">Call Us</h4>
                                    <a href="tel:+918595591496" className="text-white hover:text-teal-300 transition-colors">
                                        +91 8595591496
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FiMapPin className="text-2xl text-emerald-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1 text-white">Visit Us</h4>
                                    <p className="text-white text-sm">
                                        Magnum Tower 1, 8th Floor, Golf Course Ext Rd, Sector 58, Gurugram, Haryana 122011
                                        <br />
                                        <span className="text-blue-200">(Gurugram Headquarters Office)</span>
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

export default MumbaiPage;
