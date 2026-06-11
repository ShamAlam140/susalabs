'use client';

import React from 'react';
import {
    FaLinkedin, FaFacebook,
    FaPhone, FaEnvelope, FaMapMarkerAlt,
    FaRegClock, FaChartLine, FaCode, FaLink,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer: React.FC = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <footer className="bg-gradient-to-b from-gray-50 to-white text-gray-800 pt-20 pb-12 border-t border-gray-200">
            <div className="container mx-auto px-6">
                {/* Footer Text for SEO - Demoted from H2/H1 to Paragraph */}
                <p className="text-xl font-medium text-gray-600 text-center mb-12 max-w-4xl mx-auto">
                    SusaLabs offers CRM services, AI app development, and custom software solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Services Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-lg font-semibold mb-6 text-gray-900 uppercase tracking-wider flex items-center"
                        >
                            <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-2"></span>
                            End-to-End Product Engineering Services
                        </motion.h2>
                        <ul className="space-y-3">
                            {[
                                { name: "Healthcare Software Development", icon: <FaChartLine className="text-blue-500" /> },
                                { name: "Finance Software Solutions", icon: <FaChartLine className="text-blue-500" /> },
                                { name: "Digital Claim Processing", icon: <FaRegClock className="text-blue-500" /> },
                                { name: "Education Technology Services", icon: <FaChartLine className="text-blue-500" /> },
                                { name: "Custom Software Development Services for Startups", icon: <FaCode className="text-blue-500" /> },
                                { name: "Custom Enterprise Software Solutions for Businesses", icon: <FaCode className="text-blue-500" /> },
                                { name: "Cloud Computing Solutions", icon: <FaCode className="text-blue-500" /> }
                            ].map((service) => (
                                <motion.li
                                    key={service.name}
                                    variants={itemVariants}
                                    className="group flex items-start hover:text-blue-600 transition-colors cursor-pointer text-gray-600"
                                >
                                    <div className="flex items-center">
                                        <span className="mr-3 group-hover:scale-110 transition-transform">
                                            {service.icon}
                                        </span>
                                        <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
                                            {service.name}
                                        </span>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Technologies Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-lg font-semibold mb-6 text-gray-900 uppercase tracking-wider flex items-center"
                        >
                            <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-2"></span>
                            Scalable SaaS & Cloud Solutions
                        </motion.h2>
                        <ul className="space-y-3">
                            {/* New item for OpenAI trends */}
                            <motion.li
                                variants={itemVariants}
                                className="group flex items-start hover:text-blue-600 transition-colors cursor-pointer text-gray-600"
                            >
                                <a
                                    href="https://openai.com/research/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center group-hover:text-blue-600"
                                >
                                    <span className="mr-3 group-hover:scale-110 transition-transform">📈</span>
                                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
                                        AI trends via OpenAI
                                    </span>
                                </a>
                            </motion.li>

                            {/* Existing items */}
                            {[
                                { name: "AI & Machine Learning", icon: "🤖" },
                                { name: "IoT Solutions", icon: "🌐" },
                                { name: "Blockchain Development", icon: "⛓️" },
                                { name: "DevOps & CI/CD", icon: "🔄" },
                                { name: "Full Stack Development", icon: "💻" },
                                { name: "React & Node.js", icon: "⚛️" },
                                { name: "Python & Django", icon: "🐍" }
                            ].map((tech) => (
                                <motion.li
                                    key={tech.name}
                                    variants={itemVariants}
                                    className="group flex items-start hover:text-blue-600 transition-colors cursor-pointer text-gray-600"
                                >
                                    <div className="flex items-center">
                                        <span className="mr-3 group-hover:scale-110 transition-transform">
                                            {tech.icon}
                                        </span>
                                        <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
                                            {tech.name}
                                        </span>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Quick Links Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-lg font-semibold mb-6 text-gray-900 uppercase tracking-wider flex items-center"
                        >
                            <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-2"></span>
                            Offshore Development Teams You Can Trust
                        </motion.h2>
                        <ul className="space-y-3">
                            {[
                                { name: "Our Team", icon: <FaLink className="text-blue-500" />, link: "/our-team" },
                                { name: "Careers", icon: <FaLink className="text-blue-500" />, link: "/careers" },
                                { name: "Privacy Policy", icon: <FaLink className="text-blue-500" />, link: "/privacy-policy" },
                                { name: "Cookie Policy", icon: <FaLink className="text-blue-500" />, link: "/cookies-policy" },
                                { name: "Build Scalable Custom Applications for SMEs", icon: <FaLink className="text-blue-500" />, link: "/product" }
                            ].map((link) => (
                                <motion.li
                                    key={link.name}
                                    variants={itemVariants}
                                    className="group flex items-start hover:text-blue-600 transition-colors cursor-pointer text-gray-600"
                                >
                                    <Link href={link.link} className="flex items-center">
                                        <span className="mr-3 group-hover:rotate-12 transition-transform">
                                            {link.icon}
                                        </span>
                                        <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
                                            {link.name}
                                        </span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-lg font-semibold mb-6 text-gray-900 uppercase tracking-wider flex items-center"
                        >
                            <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-2"></span>
                            Why Choose SusaLabs for Your Next Tech Project?
                        </motion.h2>
                        <motion.div
                            variants={containerVariants}
                            className="space-y-4"
                        >
                            <motion.div
                                variants={itemVariants}
                                className="flex items-start gap-3 group"
                            >
                                <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full group-hover:from-blue-200 group-hover:to-blue-100 transition-all shadow-sm">
                                    <FaEnvelope className="text-blue-600 text-sm" />
                                </div>
                                <p className="hover:text-blue-600 transition-colors cursor-pointer text-gray-600 mt-2">
                                    contact@susalabs.com
                                </p>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="flex items-start gap-3 group"
                            >
                                <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full group-hover:from-blue-200 group-hover:to-blue-100 transition-all shadow-sm">
                                    <FaPhone className="text-blue-600 text-sm" />
                                </div>
                                <p className="hover:text-blue-600 transition-colors cursor-pointer text-gray-600 mt-2">
                                    +1 (478) 888-4458
                                </p>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="flex items-start gap-3 group"
                            >
                                <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full group-hover:from-blue-200 group-hover:to-blue-100 transition-all shadow-sm">
                                    <FaMapMarkerAlt className="text-blue-600 text-sm" />
                                </div>
                                <p className="text-gray-600 mt-2">
                                    625 Union Hill Rd, Alpharetta, GA 30004
                                </p>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="flex space-x-4 mt-6"
                            >
                                {[
                                    {
                                        icon: <FaLinkedin />,
                                        color: "from-blue-100 to-blue-50",
                                        hover: "from-blue-200 to-blue-100",
                                        text: "text-blue-700",
                                        link: "https://www.linkedin.com/company/susalabs"
                                    },
                                    {
                                        icon: <FaFacebook />,
                                        color: "from-blue-100 to-blue-50",
                                        hover: "from-blue-200 to-blue-100",
                                        text: "text-blue-600",
                                        link: "https://www.facebook.com/profile.php?id=61575717664111"
                                    },
                                    {
                                        icon: <FaInstagram />,
                                        color: "from-pink-100 to-yellow-50",
                                        hover: "from-pink-200 to-yellow-100",
                                        text: "text-pink-600",
                                        link: "https://www.instagram.com/susa_labs/"
                                    },
                                    {
                                        icon: <FaTwitter />,
                                        color: "from-gray-100 to-gray-50",
                                        hover: "from-gray-200 to-gray-100",
                                        text: "text-gray-800",
                                        link: "https://x.com/susa_labs"
                                    }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`bg-gradient-to-br ${social.color} hover:${social.hover} ${social.text} p-3 rounded-full transition-all text-lg shadow-sm hover:shadow-md`}
                                        whileHover={{ y: -3 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Additional H3 Sections */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-md font-semibold mb-4 text-gray-900">Affordable Custom Software Development Company</h3>
                        <p className="text-gray-600 text-sm">
                            SusaLabs offers cost-effective custom software development services tailored for startups and SMEs, ensuring high-quality solutions without breaking the bank.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold mb-4 text-gray-900">End-to-End Custom Software Product Development</h3>
                        <p className="text-gray-600 text-sm">
                            From ideation to deployment, SusaLabs provides comprehensive software development services to bring your vision to life with scalable and robust solutions.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold mb-4 text-gray-900">SusaLabs Software Services</h3>
                        <p className="text-gray-600 text-sm">
                            Partner with SusaLabs for innovative software services in healthcare, finance, education, and more, designed to drive business growth and efficiency.
                        </p>
                    </div>
                </div>

                {/* Copyright Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-200 mt-16 pt-8 text-center text-gray-500"
                >
                    <p>© {new Date().getFullYear()} SUSALABS. All Rights Reserved.</p>
                    <p className="mt-2 text-sm">Innovating the future of technology solutions</p>
                    <div className="mt-4 flex justify-center space-x-6">
                        <Link href="/privacy-policy" className="text-gray-400 hover:text-gray-500 text-sm">Privacy Policy</Link>
                        <span>•</span>
                        <Link href="/product" className="text-gray-400 hover:text-gray-500 text-sm">Product</Link>
                        <span>•</span>
                        <Link href="/cookies-policy" className="text-gray-400 hover:text-gray-500 text-sm">Cookie Policy</Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
