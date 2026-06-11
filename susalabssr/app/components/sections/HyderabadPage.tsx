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

const HyderabadPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'services' | 'locations' | 'expertise'>('services');

    // Services Data
    const services = [
        {
            title: 'AI App Development in Hyderabad',
            description:
                'Force AI to automate processes, enhance customer experience, and drive business intelligence. Our AI apps are designed to scale with your business.',
            icon: <FiCpu className="text-3xl text-blue-400" />,
            features: ['Machine Learning Models', 'Predictive Analytics', 'Process Automation', 'Business Intelligence'],
        },
        {
            title: 'Custom Software Development',
            description:
                "We build robust, scalable, and tailor-made custom software solutions for startups, MSMEs, and enterprises across Hyderabad's growing tech ecosystem.",
            icon: <FiCode className="text-3xl text-green-400" />,
            features: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'API Development'],
        },
        {
            title: 'CRM Development in Hyderabad',
            description:
                'Transform how you manage leads, sales, and customer interactions. Our CRM software solutions are built to align with your sales goals and support teams.',
            icon: <FiUsers className="text-3xl text-purple-400" />,
            features: ['Lead Management', 'Sales Pipeline', 'Customer Analytics', 'Support Integration'],
        },
        {
            title: 'SaaS Application Development',
            description:
                'Launch your next big product with our full-cycle SaaS development services—from UI/UX to backend architecture and cloud deployment.',
            icon: <FiCloud className="text-3xl text-cyan-400" />,
            features: ['Full-cycle Development', 'UI/UX Design', 'Backend Architecture', 'Cloud Deployment'],
        },
        {
            title: 'ERP Services',
            description:
                'Integrate your business processes with intelligent ERP systems that manage resources, logistics, inventory, HR, and more—all in one place.',
            icon: <FiSettings className="text-3xl text-orange-400" />,
            features: ['Resource Management', 'Logistics Integration', 'Inventory Control', 'HR Management'],
        },
    ];

    // Hyderabad Locations Data
    const locations = [
        {
            city: 'HITEC City',
            focus: 'Startups, IT firms, and innovation labs',
            icon: '🏢',
            specialties: ['Startup Solutions', 'Innovation Labs', 'IT Consulting'],
        },
        {
            city: 'Madhapur & Gachibowli',
            focus: 'Fintech, SaaS, and consulting firms',
            icon: '💰',
            specialties: ['Fintech Solutions', 'SaaS Platforms', 'Consulting Tools'],
        },
        {
            city: 'Begumpet & Banjara Hills',
            focus: 'Healthcare, education, and retail businesses',
            icon: '🏥',
            specialties: ['Healthcare Systems', 'EdTech Solutions', 'Retail Management'],
        },
        {
            city: 'Kukatpally & Secunderabad',
            focus: 'Manufacturing, real estate, and logistics',
            icon: '🏭',
            specialties: ['Manufacturing ERP', 'PropTech', 'Logistics Solutions'],
        },
    ];

    // Expertise Areas
    const expertise = [
        {
            title: 'AI & Machine Learning',
            description: 'Smart automation and predictive power for your workflows',
            icon: <FiZap className="text-2xl text-blue-400" />,
        },
        {
            title: 'Cloud Architecture',
            description: 'Scalable, secure cloud-native applications',
            icon: <FiCloud className="text-2xl text-cyan-400" />,
        },
        {
            title: 'Database Design',
            description: 'Optimized data structures for performance',
            icon: <FiDatabase className="text-2xl text-green-400" />,
        },
        {
            title: 'UI/UX Design',
            description: 'User-centered design for better engagement',
            icon: <FiMonitor className="text-2xl text-purple-400" />,
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900 text-white relative overflow-hidden">
            {/* Floating Particles Background - Using FloatingOrbs */}
            <FloatingOrbs
                className="absolute inset-0 overflow-hidden"
                orbClassName="absolute rounded-full bg-purple-500 opacity-20"
            />

            {/* Modern Mesh Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-3xl"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>

            <div className="relative z-10 container mx-auto px-6 py-24">
                {/* Hero Section */}
                <div className="text-center mb-20 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl backdrop-blur-sm border border-white/10 -m-8"></div>
                    <div className="relative z-10 p-8">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold mb-6 text-white"
                        >
                            Software development company in Hyderabad
                        </motion.h1>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl md:text-2xl max-w-4xl mx-auto text-white mb-8"
                        >
                            Power Up Hyderabad&apos;s Businesses with AI, Custom Software, CRM, SaaS & ERP Solutions for Scalable Growth
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-lg max-w-5xl mx-auto text-white"
                        >
                            Hyderabad&apos;s trusted partner for intelligent software solutions. We specialize in AI-powered applications, custom software development, CRM solutions, SaaS platforms, and ERP services tailored to meet the dynamic demands of businesses in Hyderabad. From HITEC City to Banjara Hills, whether you&apos;re a tech startup, enterprise, or manufacturing firm—our cutting-edge solutions help you grow, automate, and lead with confidence.
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
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl backdrop-blur-xl border border-white/10"></div>
                    <div className="relative z-10 p-8">
                        <h2 className="text-4xl font-bold text-center mb-12 text-white">
                            🔹 Why Hyderabad Businesses Trust SUSA Labs
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {[
                                {
                                    title: 'AI-Driven Development',
                                    desc: 'We insert artificial intelligence into your workflows for smart automation and predictive power.',
                                    icon: '🤖',
                                },
                                {
                                    title: 'Custom Software Built for You',
                                    desc: 'Every line of code is written with your business goals in mind.',
                                    icon: '⚡',
                                },
                                {
                                    title: 'CRM & ERP Experts in Hyderabad',
                                    desc: 'Streamline processes, increase efficiency, and improve customer attention.',
                                    icon: '🎯',
                                },
                                {
                                    title: 'SaaS Product Development',
                                    desc: 'Build, launch, and scale secure SaaS solutions—faster.',
                                    icon: '🚀',
                                },
                                {
                                    title: 'Local Support, Global Standards',
                                    desc: 'Serving Hyderabad companies with world-class tech and real-time collaboration.',
                                    icon: '🌟',
                                },
                            ].map((item, i) => (
                                <motion.div key={i} whileHover={{ scale: 1.05, y: -5 }} className="group relative">
                                    <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center h-full hover:bg-white/10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
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
                            { id: 'services', label: 'Our Core Services', icon: '🛠️' },
                            { id: 'locations', label: 'Client Served Locally', icon: '📍' },
                            { id: 'expertise', label: 'Our Expertise', icon: '⭐' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as 'services' | 'locations' | 'expertise')}
                                className={`px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/25 scale-105'
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
                                <span className="text-white">Our Core Software Services in Hyderabad</span>
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
                                            <h3 className="text-2xl font-bold ml-4">{service.title}</h3>
                                        </div>
                                        <p className="text-white mb-6 leading-relaxed">{service.description}</p>
                                        <div className="grid grid-cols-2 gap-3">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center">
                                                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                                    <span className="text-sm text-white">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={`${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                        <motion.div whileHover={{ scale: 1.02, rotateY: 5 }} className="group relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl"></div>
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
                                <span className="text-white">Proudly Serving the Business Hubs of Hyderabad</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {locations.map((location, i) => (
                                    <motion.div key={i} whileHover={{ scale: 1.03, y: -8 }} className="group relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl"></div>
                                        <div className="relative z-10 p-8">
                                            <div className="flex items-center mb-6">
                                                <div className="text-4xl mr-4 p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-white/10">
                                                    {location.icon}
                                                </div>
                                                <h3 className="text-2xl font-bold text-white">{location.city}</h3>
                                            </div>
                                            <p className="text-gray-300 mb-6 text-lg">{location.focus}</p>
                                            <div className="space-y-3">
                                                {location.specialties.map((specialty, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                                                    >
                                                        <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-4 shadow-lg shadow-cyan-400/50"></div>
                                                        <span className="text-gray-200 font-medium">{specialty}</span>
                                                    </div>
                                                ))}
                                            </div>
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
                                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center"
                                >
                                    <div className="mb-4">{skill.icon}</div>
                                    <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
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
                    <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            <span className="text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                The most trusted name in software development
                            </span>
                        </h2>
                        <div className="max-w-5xl mx-auto text-center">
                            <p className="text-lg text-white mb-6 leading-relaxed">
                                SUSALabs is a trusted <strong>software development company in Hyderabad</strong>, delivering intelligent
                                digital solutions that help businesses stay ahead in a competitive market. Our team
                                specializes in building advanced <strong>ERP systems</strong>, scalable <strong>SaaS applications</strong>, and tailored
                                <strong> CRM software</strong> that streamline workflows and boost productivity. From designing AI chatbot solutions
                                to creating custom AI computer software, we integrate the latest technologies to empower enterprises with automation, speed, and accuracy. Whether
                                you&apos;re a startup or an established business in Hyderabad, SUSALabs ensures you get
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
                    <div className="inline-block bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-500/30 max-w-4xl">
                        <h2 className="text-3xl font-bold mb-4">Let&apos;s Build Hyderabad&apos;s Next Digital Success Story</h2>
                        <p className="text-white mb-6 max-w-2xl mx-auto">
                            With deep expertise and local insight, SUSA Labs delivers tech that transforms. As a top-tier software
                            development company in Hyderabad, we work closely with clients to deliver solutions that are smart,
                            scalable, and secure.
                        </p>
                        <p className="text-lg text-blue-300 mb-8 text-white">
                            Ready to transform your business with cutting-edge technology? Let&apos;s discuss your project today.
                        </p>

                        {/* Contact Information */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
                            <div className="flex items-start">
                                <FiMail className="text-2xl text-blue-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Email Us</h4>
                                    <a href="mailto:contact@susalabs.com" className="text-white hover:text-blue-300 transition-colors">
                                        contact@susalabs.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FiPhone className="text-2xl text-cyan-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Call Us</h4>
                                    <a href="tel:+918595591496" className="text-white hover:text-cyan-300 transition-colors">
                                        +91 8595591496
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FiMapPin className="text-2xl text-purple-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Visit Us</h4>
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

export default HyderabadPage;
