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

const DelhiNCRPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'services' | 'locations' | 'expertise'>('services');

    // Services Data
    const services = [
        {
            title: 'AI App Development in NCR',
            description:
                'Predictive analytics to intelligent automation, we create AI-powered applications that help NCR businesses scale faster and smarter.',
            icon: <FiCpu className="text-3xl text-blue-400" />,
            features: [
                'Machine Learning Models',
                'Predictive Analytics',
                'Intelligent Automation',
                'Natural Language Processing',
            ],
        },
        {
            title: 'Custom Software Development',
            description:
                'Tailor-made digital tools built for businesses in Delhi, Noida, and Gurugram. Web apps, internal tools, or enterprise software.',
            icon: <FiCode className="text-3xl text-green-400" />,
            features: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'API Development'],
        },
        {
            title: 'CRM Software Solutions',
            description:
                'Our CRM development services help NCR brands manage leads, automate marketing, and improve customer engagement.',
            icon: <FiUsers className="text-3xl text-purple-400" />,
            features: ['Lead Management', 'Marketing Automation', 'Customer Analytics', 'Sales Pipeline'],
        },
        {
            title: 'SaaS Development Services',
            description:
                'Design, develop, and deploy scalable SaaS platforms across industries with secure, cloud-native architecture.',
            icon: <FiCloud className="text-3xl text-cyan-400" />,
            features: ['Multi-tenant Architecture', 'Subscription Management', 'API Integration', 'Cloud Deployment'],
        },
        {
            title: 'ERP Services',
            description:
                'Complete ERP development and integration for businesses in India NCR. Track resources, streamline workflows, boost efficiency.',
            icon: <FiSettings className="text-3xl text-orange-400" />,
            features: ['Resource Planning', 'Workflow Automation', 'Financial Management', 'Inventory Control'],
        },
    ];

    // NCR Locations Data
    const locations = [
        {
            city: 'Delhi',
            focus: 'Government projects, education institutions, and media',
            icon: '🏛️',
            specialties: ['Government Solutions', 'EdTech Platforms', 'Media Management Systems'],
        },
        {
            city: 'Noida',
            focus: 'IT companies, startups, and software product firms',
            icon: '💻',
            specialties: ['Startup Solutions', 'Product Development', 'Tech Consulting'],
        },
        {
            city: 'Gurugram',
            focus: 'Fintech, real estate, and multinational corporations',
            icon: '🏢',
            specialties: ['Fintech Solutions', 'PropTech', 'Enterprise Systems'],
        },
        {
            city: 'Ghaziabad & Faridabad',
            focus: 'Manufacturing, logistics, and retail',
            icon: '🏭',
            specialties: ['Manufacturing ERP', 'Supply Chain', 'Retail Solutions'],
        },
    ];

    // Expertise Areas
    const expertise = [
        {
            title: 'AI & Machine Learning',
            description: 'Future-ready solutions using latest AI and cloud computing',
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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
            {/* Floating Particles Background - Using FloatingOrbs */}
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
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        <span className="text-white bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Software development company in NCR, India
                        </span>
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
                        Smart Software. Smarter Business. Right Here in NCR.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-lg max-w-5xl mx-auto text-white"
                    >
                        The most trusted name in software development across India NCR—covering Delhi, Noida, Gurugram, Ghaziabad,
                        and Faridabad. We are a results-driven team specializing in AI applications, custom software solutions, CRM
                        systems, SaaS platforms, and ERP services designed for local and global businesses.
                    </motion.p>
                </div>

                {/* Why Choose Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-500/30 mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-8">
                        <span className="text-white bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Why Businesses in India NCR Choose Us
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: 'Local Presence',
                                desc: 'We understand the NCR market—its pace, its scale, and its digital needs.',
                            },
                            { title: 'Future-Ready Solutions', desc: 'Our team uses the latest in AI and cloud computing.' },
                            { title: 'Custom Software Development', desc: "We don't do generic. We build what fits you." },
                            { title: 'CRM & ERP Experts', desc: 'Optimize your business processes from sales to finance.' },
                        ].map((item, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.05 }} className="text-center p-4">
                                <h3 className="font-bold text-white text-lg mb-2 text-blue-300">{item.title}</h3>
                                <p className="text-white text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Content Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-800 rounded-full p-1">
                        {[
                            { id: 'services', label: 'Our Services' },
                            { id: 'locations', label: 'NCR Locations' },
                            { id: 'expertise', label: 'Our Expertise' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as 'services' | 'locations' | 'expertise')}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                                    : 'text-white hover:text-white'
                                    }`}
                            >
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
                            <h3 className="text-3xl font-bold text-center mb-12">
                                <span className="text-white bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    Our Key Services in India NCR
                                </span>
                            </h3>
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
                                        <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl border border-blue-500/30 p-8 h-64 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-6xl mb-4">{service.icon}</div>
                                                <p className="text-white">Service Visualization</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'locations' && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <h2 className="text-3xl font-bold text-center mb-12">
                                <span className="text-white bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    Serving All NCR Locations
                                </span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {locations.map((location, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                                    >
                                        <div className="flex items-center mb-4">
                                            <span className="text-3xl mr-4">{location.icon}</span>
                                            <h3 className="text-xl font-bold">{location.city}</h3>
                                        </div>
                                        <p className="text-white mb-4">{location.focus}</p>
                                        <div className="space-y-2">
                                            {location.specialties.map((specialty, idx) => (
                                                <div key={idx} className="flex items-center">
                                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                                    <span className="text-sm text-white">{specialty}</span>
                                                </div>
                                            ))}
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
                    <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-500/30">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            <span className="text-white bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                The most trusted name in software development
                            </span>
                        </h2>
                        <div className="max-w-5xl mx-auto text-center">
                            <p className="text-lg text-white mb-6 leading-relaxed">
                                SUSALabs is a trusted <strong>software development company in NCR</strong>, delivering intelligent
                                digital solutions that help businesses stay ahead in a competitive market. Our team
                                specializes in building advanced <strong>ERP systems</strong>, scalable <strong>SaaS applications</strong>, and tailored
                                <strong> CRM software</strong> that streamline workflows and boost productivity. From designing AI chatbot solutions
                                to creating custom AI computer software, we integrate the latest technologies to empower enterprises with automation, speed, and accuracy. Whether
                                you&apos;re a startup or an established business in Delhi NCR, SUSALabs ensures you get
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
                        <h2 className="text-3xl font-bold mb-4">Let&apos;s Build Together</h2>
                        <p className="text-white mb-6 max-w-2xl mx-auto">
                            We&apos;re not just developers—we&apos;re problem solvers. As a leading software development company in India NCR,
                            we help businesses embrace digital transformation with AI-driven, scalable, and secure software.
                        </p>
                        <p className="text-lg text-blue-300 mb-8 text-white">
                            Looking for a CRM system in Noida? Need ERP development in Gurugram? Or want a custom AI app in Delhi?
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

export default DelhiNCRPage;
