'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const MobileAppDevelopmentPage: React.FC = () => {
    const services = [
        {
            title: "Android App Development",
            description: "Native Android apps built with Kotlin and Java, optimized for performance and user experience across all Android devices.",
            icon: (
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
            ),
            bgColor: "bg-green-100"
        },
        {
            title: "iOS App Development",
            description: "Swift-based iOS applications designed for iPhone and iPad, following Apple's design guidelines and App Store requirements.",
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
            ),
            bgColor: "bg-blue-100"
        },
        {
            title: "Cross-Platform Development",
            description: "React Native and Flutter apps that work seamlessly across both Android and iOS platforms, reducing development time and costs.",
            icon: (
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
            ),
            bgColor: "bg-purple-100"
        },
        {
            title: "App Testing & QA",
            description: "Comprehensive testing services including functional, performance, security, and usability testing to ensure flawless app performance.",
            icon: (
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            bgColor: "bg-red-100"
        },
        {
            title: "UI/UX Design",
            description: "User-centered design approach creating intuitive interfaces that enhance user engagement and drive business results.",
            icon: (
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
            ),
            bgColor: "bg-yellow-100"
        },
        {
            title: "App Maintenance & Support",
            description: "Ongoing maintenance, updates, and support services to keep your mobile app running smoothly and up-to-date.",
            icon: (
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
            ),
            bgColor: "bg-indigo-100"
        }
    ];

    const technologies = ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Java', 'Xamarin', 'Node.js', 'Firebase', 'AWS', 'MongoDB', 'PostgreSQL', 'Docker'];

    const stats = [
        { value: "5+", label: "Years Experience", bgColor: "bg-blue-100", textColor: "text-blue-600" },
        { value: "100+", label: "Apps Delivered", bgColor: "bg-green-100", textColor: "text-green-600" },
        { value: "24/7", label: "Support", bgColor: "bg-purple-100", textColor: "text-purple-600" },
        { value: "99%", label: "Client Satisfaction", bgColor: "bg-red-100", textColor: "text-red-600" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Top Mobile App Development Company
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                            Transform your business ideas into powerful mobile applications. We specialize in creating
                            user-friendly, scalable, and secure Android & iOS apps tailored to your business goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact-us" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                                Start Your Project
                            </a>
                            <a href="/product" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                                View Portfolio
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
                    >
                        Our Mobile App Development Services
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-gray-50 p-8 rounded-xl"
                            >
                                <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
                    >
                        Technologies We Use
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {technologies.map((tech, i) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                            >
                                <p className="font-semibold text-gray-800">{tech}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
                    >
                        Why Choose SusaLabs for Mobile App Development?
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className={`w-20 h-20 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                                    <span className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{stat.label}</h3>
                                <p className="text-gray-600">
                                    {stat.label === "Years Experience" && "Proven track record in mobile app development"}
                                    {stat.label === "Apps Delivered" && "Successfully launched apps across various industries"}
                                    {stat.label === "Support" && "Round-the-clock technical support and maintenance"}
                                    {stat.label === "Client Satisfaction" && "High client satisfaction and retention rate"}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Build Your Mobile App?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Let&apos;s discuss your mobile app idea and turn it into a successful digital product.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <a href="/contact-us" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                                Get Free Consultation
                            </a>
                            <a href="/product" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                                View Our Work
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
                            <div className="flex items-start bg-blue-700/50 rounded-lg p-4">
                                <FiMail className="text-2xl text-white mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1 text-white">Email Us</h4>
                                    <a href="mailto:contact@susalabs.com" className="text-blue-100 hover:text-white transition-colors">
                                        contact@susalabs.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start bg-blue-700/50 rounded-lg p-4">
                                <FiPhone className="text-2xl text-white mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1 text-white">Call Us</h4>
                                    <a href="tel:+14788884158" className="text-blue-100 hover:text-white transition-colors">
                                        +14788884158
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start bg-blue-700/50 rounded-lg p-4">
                                <FiMapPin className="text-2xl text-white mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1 text-white">Visit Us</h4>
                                    <p className="text-blue-100 text-sm">
                                        Magnum Tower 1, Gurugram
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default MobileAppDevelopmentPage;
