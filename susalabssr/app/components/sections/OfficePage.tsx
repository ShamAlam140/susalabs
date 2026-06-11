'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiExternalLink, FiCopy } from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const OfficesPage: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const offices = [
        {
            location: "US OFFICE",
            address: "625 Union Hill Rd, Alpharetta, GA 30004, USA",
            email: "contact@susalabs.com",
            phone: "+1 (478) 888-4458",
            coordinates: "34.0754° N, 84.2941° W",
            mapUrl: "https://www.google.com/maps/place/SusaLabs/@34.131464,-84.229497,17z/data=!3m1!4b1!4m6!3m5!1s0x88f59db525c429a3:0x1bc7b8953c277e80!8m2!3d34.131464!4d-84.2269221!16s%2Fg%2F11p5ht_xc_?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            location: "INDIA OFFICE (Gurugram)",
            address: "DLF CORPORATE GREENS Southern Peripheral Rd, Sector 74A, Gurugram, Haryana 122004",
            email: "contact@susalabs.com",
            phone: "+91 8595591496",
            coordinates: "28.4595° N, 77.0266° E",
            mapUrl: "https://maps.app.goo.gl/vwt4TJoF4QLhMNzDA"
        },
        {
            location: "DUBAI OFFICE",
            address: "Standard Chartered Tower, Level 5, Emaar Square, Downtown Dubai, UAE",
            email: "contact@susalabs.com",
            phone: "+97 1556390061",
            coordinates: "25.2048° N, 55.2708° E",
            mapUrl: "https://www.google.com/maps/search/susalabs+dubai+office/@25.0830692,55.1411069,13.73z?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            location: "INDIA OFFICE (Golf Course)",
            address: "Magnum Tower 1, 8th Floor, Golf Course Ext Rd, Sector 58, Gurugram, Haryana 122011",
            email: "contact@susalabs.com",
            phone: "+91 8595591496",
            coordinates: "28.4029° N, 77.0582° E",
            mapUrl: "https://maps.app.goo.gl/Govyhzhfnjngce1F9"
        }
    ];

    const copyEmail = () => {
        navigator.clipboard.writeText('contact@susalabs.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
            <FloatingOrbs className="inset-0 overflow-hidden pointer-events-none -z-10" orbClassName="absolute rounded-full bg-white opacity-20 backdrop-blur-sm" />
            <div className="absolute top-1/4 left-1/2 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl filter opacity-30 -translate-x-1/2"></div>

            <div className="relative z-10 container mx-auto px-6 py-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-4">
                        <span className="text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Our Global Offices
                        </span>
                    </h2>
                    <motion.div
                        className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <p className="text-xl max-w-3xl mx-auto mt-6 text-gray-300">
                        Connect with us at any of our worldwide locations
                    </p>
                </motion.div>

                {/* Offices Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {offices.map((office, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700"
                        >
                            {/* Office Header */}
                            <div className="bg-gradient-to-r from-purple-600/40 to-blue-500/40 p-6">
                                <div className="flex items-center">
                                    <FiMapPin className="text-2xl text-blue-300 mr-3" />
                                    <h3 className="text-xl font-bold">{office.location}</h3>
                                </div>
                                <p className="text-xs text-gray-300 mt-1">{office.coordinates}</p>
                            </div>

                            {/* Office Details */}
                            <div className="p-6">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 mb-1">ADDRESS</h4>
                                        <p className="text-gray-300">{office.address}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 mb-1">EMAIL</h4>
                                        <div className="flex items-center text-gray-300">
                                            <FiMail className="mr-2 text-blue-300" />
                                            <button
                                                onClick={copyEmail}
                                                className="hover:text-blue-300 transition-colors flex items-center"
                                            >
                                                {office.email}
                                                <FiCopy className="ml-2 text-sm" />
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 mb-1">PHONE</h4>
                                        <div className="flex items-center text-gray-300">
                                            <FiPhone className="mr-2 text-blue-300" />
                                            <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-blue-300 transition-colors">
                                                {office.phone}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* View Map Button */}
                                <motion.a
                                    href={office.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-6 w-full py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-sm transition-colors flex items-center justify-center"
                                >
                                    <FiMapPin className="mr-2" />
                                    View on Map
                                    <FiExternalLink className="ml-2 text-xs" />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30">
                        <h3 className="text-xl font-bold mb-4 text-white">Can&apos;t visit our offices?</h3>
                        <p className="text-gray-300 mb-6">
                            Our virtual doors are always open for consultations. If the virtual meeting or schedule button doesn&apos;t work, feel free to copy our email and send us your preferred time and a direct meeting link — our team will respond within 24 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                            >
                                Schedule Virtual Meeting
                            </motion.button>
                            <motion.button
                                onClick={copyEmail}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                            >
                                <FiCopy className="mr-2" />
                                {copied ? 'Copied!' : 'Copy Email'}
                            </motion.button>
                        </div>
                        {copied && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="mt-4 text-green-400"
                            >
                                Email address copied to clipboard!
                            </motion.p>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default OfficesPage;
