'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiWifi, FiCpu, FiCloud, FiActivity, FiPhone, FiMail, FiMapPin, FiShield, FiTrendingUp, FiSettings, FiMonitor } from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const IotPage: React.FC = () => {
    const [activeSection, setActiveSection] = useState<'solutions' | 'process' | 'integration'>('solutions');

    const techStack = {
        embedded: ['C/C++', 'Arduino', 'ESP-IDF'],
        cloud: ['AWS IoT Core', 'Azure IoT Hub', 'Google Cloud IoT', 'Kubernetes'],
        frontend: ['React.js', 'Angular', 'Vue', 'Ionic', 'React Native'],
        backend: ['Node.js', 'Spring Boot', '.NET Core', 'Python Flask'],
        data: ['PostgreSQL', 'MongoDB', 'InfluxDB', 'TensorFlow', 'PyTorch'],
        saas: ['Microservices', 'DevSecOps', 'CI/CD', 'Kubernetes'],
        crm: ['Salesforce', 'HubSpot', 'Dynamics', 'Custom CRM solutions']
    };

    const iotSolutions = [
        {
            title: "IoT Consulting & Strategy",
            description: "We guide you through a proven process starting with feasibility, use-case prioritization, and architecture planning for a high-ROI IoT deployment.",
            icon: <FiActivity className="text-3xl text-cyan-400" />
        },
        {
            title: "Hardware & Firmware Development",
            description: "Our embedded engineers design and develop firmware for sensors, gateways, and edge devices using platforms like Arduino, Raspberry Pi, ESP32, and custom boards.",
            icon: <FiCpu className="text-3xl text-blue-400" />
        },
        {
            title: "Cloud & Backend Infrastructure",
            description: "We build scalable cloud backends using AWS IoT, Azure IoT Hub, or Google Cloud IoT—supporting real-time ingestion, device management, and microservices architecture.",
            icon: <FiCloud className="text-3xl text-purple-400" />
        },
        {
            title: "Mobile & Web Applications",
            description: "Our team delivers companion mobile and web interfaces for device control, analytics, and remote monitoring—across Android, iOS, and desktop platforms.",
            icon: <FiMonitor className="text-3xl text-green-400" />
        },
        {
            title: "Smart Dashboards & Analytics",
            description: "Get interactive dashboards for visualization, alerts, departure detection, and predictive analytics using data science, ML, and custom APIs.",
            icon: <FiTrendingUp className="text-3xl text-yellow-400" />
        },
        {
            title: "Integration & CRM Software Development",
            description: "Our CRM software development expertise allows you to connect sensor data with customer operations—upselling, service requests, and automated customer workflows.",
            icon: <FiSettings className="text-3xl text-red-400" />
        },
        {
            title: "SaaS IoT Platforms",
            description: "As a trusted SaaS development company, we architect IoT platforms with multi-tenancy, tenant isolation, subscription billing, and white-label deployment.",
            icon: <FiWifi className="text-3xl text-indigo-400" />
        },
        {
            title: "Support, Maintenance & Scaling",
            description: "Post-launch, we provide remote device updates, analytics fine-tuning, user training, and DevOps-managed scaling support.",
            icon: <FiShield className="text-3xl text-orange-400" />
        }
    ];

    const processSteps = [
        {
            title: "Discovery & Workshop",
            description: "Validate use cases, define device & connectivity needs, and plan budget & timelines."
        },
        {
            title: "Prototype / PoC",
            description: "Build a working IoT demo or MVP with one device, cloud backend, and user interface."
        },
        {
            title: "Full Development",
            description: "Implement end-to-end solution: hardware, cloud, dash, mobile apps, CRM integration."
        },
        {
            title: "Deployment & Support",
            description: "Launch pilot, onboard device light, monitor analytics, and offer ongoing enhancements."
        }
    ];

    const integrationSystems = [
        "ERP platforms for supply chain visibility",
        "AI analytics for anomaly detection and predictions",
        "CRM software development to trigger customer events or service workflows",
        "Automation tools (Zapier, Power Automate) for workflow orchestration"
    ];

    const valueMetrics = [
        { metric: "Up to 50%", description: "reduction in downtime with predictive maintenance" },
        { metric: "30%", description: "cost savings in energy & utilities" },
        { metric: "20%", description: "faster customer service with CRM-triggered support alerts" },
        { metric: "Real-time", description: "dashboards empowering operational visibility and efficiency" }
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
                        className="text-4xl md:text-6xl font-bold mb-6 text-white"
                    >
                        IoT & SaaS Development Services
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
                        className="text-lg md:text-xl max-w-4xl mx-auto text-white leading-relaxed"
                    >
                        SusaLabs is a top SaaS development company with deep domain expertise that bridges the digital world with a connected physical world through smart and reliable IoT platforms.
                    </motion.p>
                </div>

                {/* Why Choose SusaLabs Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        Why Choose SusaLabs as Your IoT & SaaS Development Partner?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "End-to-end Delivery",
                                description: "From concept to deployment, we support every phase—platform design, firmware, cloud, analytics, and mobile."
                            },
                            {
                                title: "Cross-industry Expertise",
                                description: "Industrial IoT, Smart Buildings, Healthcare IoT, Retail, Logistics, Agriculture, and more."
                            },
                            {
                                title: "Built for Scale",
                                description: "Our architecture supports multi-tenant SaaS models, high data throughput, and real-time dashboards."
                            },
                            {
                                title: "CRM Integration Ready",
                                description: "We offer CRM software development services that integrate IoT insights into your sales, support, and customer journey systems."
                            },
                            {
                                title: "Security & Compliance",
                                description: "Threat modeling, device authentication, encryption, and regulatory adherence (HIPAA, GDPR, ISO)."
                            },
                            {
                                title: "24/7 Support",
                                description: "SLA-based maintenance, continual optimization, and expert technical support around the clock."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                            >
                                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                                <p className="text-white">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Value Delivered Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        Value Delivered — Real Metrics
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {valueMetrics.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-500/30 text-center"
                            >
                                <div className="text-3xl font-bold text-cyan-400 mb-2">{item.metric}</div>
                                <p className="text-white text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Content Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-800 rounded-full p-1">
                        {[
                            { id: 'solutions', label: 'Our Solutions Stack' },
                            { id: 'process', label: 'Delivery Process' },
                            { id: 'integration', label: 'System Integration' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveSection(tab.id as 'solutions' | 'process' | 'integration')}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeSection === tab.id
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dynamic Content */}
                <div className="max-w-6xl mx-auto">
                    {activeSection === 'solutions' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-center mb-12 text-white">🧠 Our IoT Solutions Stack</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {iotSolutions.map((solution, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                                    >
                                        <div className="flex items-start">
                                            <div className="mr-4 mt-1">
                                                {solution.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-3 text-white">{solution.title}</h3>
                                                <p className="text-white leading-relaxed">{solution.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeSection === 'process' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Delivery Process</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {processSteps.map((step, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                                    >
                                        <div className="flex items-center mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                                {i + 1}
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                        </div>
                                        <p className="text-white leading-relaxed">{step.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeSection === 'integration' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-center mb-12 text-white">Integrate IoT with Other Systems</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {integrationSystems.map((system, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 5 }}
                                        className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 flex items-center"
                                    >
                                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4"></div>
                                        <p className="text-white">{system}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/30">
                                <h3 className="text-2xl font-bold mb-6 text-white text-center">Modern Tech Stack & Approach</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {Object.entries(techStack).map(([category, technologies], i) => (
                                        <div key={i} className="bg-gray-800/30 rounded-lg p-4">
                                            <h4 className="font-bold text-cyan-400 mb-2 capitalize">{category.replace('_', ' & ')}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {technologies.map((tech, idx) => (
                                                    <span key={idx} className="text-xs bg-gray-700 text-white px-2 py-1 rounded">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Why Partner Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 mb-12"
                >
                    <h2 className="text-3xl font-bold text-center mb-8 text-white">Why Partner With SusaLabs?</h2>
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Experienced ERP, CRM & SaaS development company with strong IoT capabilities",
                                "Industry-specific knowledge across verticals",
                                "Agile, transparent, and rapid deployment process",
                                "Security-first mindset, with data encryption and compliance best practices"
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gray-800/30 rounded-lg p-4 flex items-center"
                                >
                                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                                    <p className="text-white text-sm">{point}</p>
                                </motion.div>
                            ))}
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
                    <div className="inline-block bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-500/30 max-w-4xl">
                        <h3 className="text-2xl font-bold mb-4 text-white">Ready to connect your world?</h3>
                        <p className="text-white mb-6 max-w-2xl mx-auto">
                            Our IoT specialists can design and implement custom solutions for your specific needs.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
                            <div className="flex items-start">
                                <FiMail className="text-2xl text-cyan-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1 text-white">Email Us</h4>
                                    <a href="mailto:contact@susalabs.com" className="text-white hover:text-cyan-300 transition-colors">
                                        contact@susalabs.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiPhone className="text-2xl text-blue-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1 text-white">Call Us</h4>
                                    <a href="tel:+14788884158" className="text-white hover:text-blue-300 transition-colors">
                                        +14788884158
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiMapPin className="text-2xl text-sky-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1 text-white">Visit Us</h4>
                                    <p className="text-white">
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

export default IotPage;
