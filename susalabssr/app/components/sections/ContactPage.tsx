'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiSend } from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://susaweb-backend.el.r.appspot.com'}/ContactForm/contactform`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await res.json();
            console.log(result);
            alert('Message sent successfully! Our team will respond within 24 hours.');

        } catch (err) {
            console.error(err);
            alert('Something went wrong. Please try again.');
        }
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
                            Meet the Experts Behind SusaLabs&apos; AI and Software Innovations
                        </span>
                    </h2>
                    <h3 className=" mb-4">
                        <span className="text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Get to know the dedicated team at SusaLabs driving advancements in AI, app development, and medical technology solutions.
                        </span>
                    </h3>
                    <motion.div
                        className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </motion.div>

                {/* Contact Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 mb-8">
                            <div className="flex items-center mb-4">
                                <FiMapPin className="text-2xl text-blue-300 mr-3" />
                                <h2 className="text-2xl font-bold">US Office</h2>
                            </div>
                            <address className="not-italic text-gray-300 space-y-2">
                                <p>625 Union Hill Rd</p>
                                <p>Alpharetta, GA 30004</p>
                                <p>USA</p>
                            </address>

                            <div className="mt-6 h-64 rounded-xl overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.016086858528!2d-84.2269221!3d34.131464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59db525c429a3%3A0x1bc7b8953c277e80!2sSusaLabs!5e0!3m2!1sen!2sus!4v1710280426559!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg"
                                ></iframe>
                            </div>

                            <motion.a
                                href="https://www.google.com/maps/place/SusaLabs/@34.131464,-84.2269221,17z/data=!3m1!4b1!4m6!3m5!1s0x88f59db525c429a3:0x1bc7b8953c277e80!8m2!3d34.131464!4d-84.2269221!16s%2Fg%2F11p5ht_xc_?entry=ttu"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                className="mt-4 text-blue-300 hover:text-blue-400 flex items-center"
                            >
                                View larger map →
                            </motion.a>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                            <h3 className="text-xl font-bold mb-4">Direct Contacts</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <FiPhone className="text-blue-300 mr-3" />
                                    <a href="tel:+14788884458" className="hover:text-blue-300 transition-colors">
                                        +1 (478) 888-4458
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <FiMail className="text-blue-300 mr-3" />
                                    <a href="mailto:contact@susalabs.com" className="hover:text-blue-300 transition-colors">
                                        contact@susalabs.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
                    >
                        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                            >
                                <FiSend className="mr-2" />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
