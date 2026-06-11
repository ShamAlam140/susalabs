'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const FAQPage: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How much do your IT services & solutions cost?",
            answer: "It all depends on the use cases of project & complexity. However, we have kept pricing aggressive to meet market demands and support young startups. After understanding your requirements, we'll provide a custom proposal including project scope, timeline, cost, and resource matrix."
        },
        {
            question: "Which technologies & areas is your company specialized in?",
            answer: "We specialize in simplifying business problems and providing solutions in the simplest way. Our core competencies include: AI/ML, IoT, Blockchain, DevOps, Backend/Frontend Development, and Mobile Apps. We have strong capacity in building tailored tech solutions."
        },
        {
            question: "What is your support system? How do you support customers?",
            answer: "We offer well-organized physical and virtual support during business hours with high customer satisfaction. Following our philosophy that 'customers come first,' we provide comprehensive after-sales support, solution warranties, and detailed process analysis before implementation."
        },
        {
            question: "What does Susatabs do?",
            answer: "We provide IT consulting, products, and services globally. Our team analyzes your business needs and delivers tailored IT recommendations to help you meet or exceed your business objectives."
        },
        {
            question: "What industries do you serve?",
            answer: "We serve diverse sectors including manufacturing, healthcare, finance, education, and retail. Our solutions are adaptable to various industry requirements and compliance standards."
        },
        {
            question: "What's your typical project timeline?",
            answer: "Project timelines vary based on complexity. Small projects may take 4-8 weeks, while enterprise solutions typically require 3-6 months. We provide detailed timelines after requirement analysis."
        }
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
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
                            Frequently Asked Questions
                        </span>
                    </h2>
                    <motion.div
                        className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <p className="text-xl max-w-3xl mx-auto mt-6 text-gray-300">
                        Find answers to common questions about our services and solutions
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
                        >
                            <motion.button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center"
                                whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
                            >
                                <h3 className="text-lg md:text-xl font-medium">{faq.question}</h3>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    className="ml-4 text-blue-300"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </motion.div>
                            </motion.button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pt-2 text-gray-300">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Support CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30 max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold mb-4 text-white">Still have questions?</h3>
                        <p className="text-gray-300 mb-6">Our team is ready to provide personalized answers and consultations</p>
                        <Link href="/contact-us">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                            >
                                Contact Support
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FAQPage;
