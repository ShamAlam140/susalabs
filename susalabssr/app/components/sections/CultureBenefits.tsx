'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiHeart, FiDollarSign, FiAward, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const CultureBenefitsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'culture' | 'benefits'>('culture');

    // Culture Data
    const cultureValues = [
        {
            title: "Collaborative Spirit",
            description: "We believe in teamwork that transcends departments and hierarchies",
            icon: <FiUsers className="text-3xl text-teal-400" />
        },
        {
            title: "Continuous Growth",
            description: "Regular learning opportunities and career development programs",
            icon: <FiAward className="text-3xl text-amber-400" />
        },
        {
            title: "Work-Life Harmony",
            description: "Flexible arrangements to support your personal and professional life",
            icon: <FiHeart className="text-3xl text-rose-400" />
        }
    ];

    const workEnvironment = [
        {
            title: "Open Workspace",
            description: "Modern offices designed for collaboration and focus",
            icon: "🏢"
        },
        {
            title: "Remote Options",
            description: "Hybrid work models for better flexibility",
            icon: "🏡"
        },
        {
            title: "Cutting-Edge Tech",
            description: "Access to latest tools and technologies",
            icon: "💻"
        }
    ];

    // Benefits Data
    const financialBenefits = [
        {
            title: "Competitive Salaries",
            description: "Industry-leading compensation reviewed annually",
            icon: <FiDollarSign className="text-3xl text-green-400" />
        },
        {
            title: "Timely Bonuses",
            description: "Performance-based incentives paid quarterly",
            icon: "💰"
        },
        {
            title: "Retirement Plans",
            description: "401(k) with company matching up to 6%",
            icon: "🛡️"
        }
    ];

    const healthBenefits = [
        {
            title: "Comprehensive Insurance",
            items: [
                "Medical (including dependents)",
                "Dental and vision coverage",
                "Life and disability insurance"
            ],
            icon: "🏥"
        },
        {
            title: "Wellness Programs",
            items: [
                "Gym membership reimbursement",
                "Mental health support",
                "Annual health checkups"
            ],
            icon: "🧘"
        },
        {
            title: "Generous Leave Policy",
            items: [
                "Unlimited PTO",
                "Paid parental leave",
                "Bereavement and sick days"
            ],
            icon: "🌴"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white">
            {/* Floating Particles Background */}
            <FloatingOrbs
                className="absolute inset-0 overflow-hidden"
                orbClassName="absolute rounded-full bg-emerald-500 opacity-10"
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
                        <span className="text-white bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                            Culture & Benefits
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-32 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
                    >
                        Building an environment where talent thrives, supported by comprehensive benefits
                    </motion.p>
                </div>

                {/* Content Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-800 rounded-full p-1">
                        {[
                            { id: 'culture', label: 'Our Culture' },
                            { id: 'benefits', label: 'Employee Benefits' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as 'culture' | 'benefits')}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                                        ? 'bg-gradient-to-r from-teal-600 to-emerald-500 text-white shadow-lg'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto">
                    {activeTab === 'culture' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                                            Our Values
                                        </span>
                                    </h2>
                                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                        At SusaLabs, we&apos;ve built a culture that fosters innovation, respect, and personal growth.
                                        Our values guide every decision and interaction, creating an environment where exceptional
                                        people can do their best work.
                                    </p>
                                    <div className="space-y-6">
                                        {cultureValues.map((value, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ x: 5 }}
                                                className="flex items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700"
                                            >
                                                <div className="mr-4">
                                                    {value.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                                    <p className="text-gray-400">{value.description}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="relative w-full h-full bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-2xl border border-emerald-500/30 overflow-hidden p-8">
                                        <h3 className="text-2xl font-bold mb-6 text-center">Work Environment</h3>
                                        <div className="grid grid-cols-1 gap-6">
                                            {workEnvironment.map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ scale: 1.03 }}
                                                    className="bg-gray-800/50 rounded-xl p-6 text-center border border-teal-500/20"
                                                >
                                                    <div className="text-4xl mb-3">{item.icon}</div>
                                                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                                                    <p className="text-gray-300 text-sm">{item.description}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800/50 rounded-2xl p-8 border border-emerald-500/30">
                                <h3 className="text-2xl font-bold mb-6 text-center">Employee Experience</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-gray-900/50 p-6 rounded-xl border border-gray-700"
                                    >
                                        <div className="text-5xl mb-4">🎯</div>
                                        <h4 className="text-xl font-bold mb-3">Clear Growth Paths</h4>
                                        <p className="text-gray-300">
                                            Biannual career development discussions and personalized growth plans for every team member.
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-gray-900/50 p-6 rounded-xl border border-gray-700"
                                    >
                                        <div className="text-5xl mb-4">🌐</div>
                                        <h4 className="text-xl font-bold mb-3">Global Perspective</h4>
                                        <p className="text-gray-300">
                                            Regular knowledge-sharing sessions and opportunities for international collaboration.
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-gray-900/50 p-6 rounded-xl border border-gray-700"
                                    >
                                        <div className="text-5xl mb-4">🎉</div>
                                        <h4 className="text-xl font-bold mb-3">Vibrant Community</h4>
                                        <p className="text-gray-300">
                                            Team retreats, hackathons, and social events that build lasting connections.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'benefits' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                                            Financial Rewards
                                        </span>
                                    </h2>
                                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                        We believe in recognizing and rewarding talent. Our compensation packages are designed
                                        to attract top performers and show our appreciation for their contributions.
                                    </p>
                                    <div className="space-y-6">
                                        {financialBenefits.map((benefit, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ x: 5 }}
                                                className="flex items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700"
                                            >
                                                <div className="mr-4">
                                                    {typeof benefit.icon === 'string' ? (
                                                        <span className="text-3xl">{benefit.icon}</span>
                                                    ) : (
                                                        benefit.icon
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                                    <p className="text-gray-400">{benefit.description}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                                            Health & Wellness
                                        </span>
                                    </h2>
                                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                        Your wellbeing is our priority. We offer comprehensive benefits to ensure you and your
                                        family are protected and can thrive both personally and professionally.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {healthBenefits.map((benefit, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ y: -5 }}
                                                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                                            >
                                                <div className="text-4xl mb-3">{benefit.icon}</div>
                                                <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                                                <ul className="space-y-2">
                                                    {benefit.items.map((item, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <div className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-emerald-400">•</div>
                                                            <span className="text-gray-300 text-sm">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800/50 rounded-2xl p-8 border border-emerald-500/30">
                                <h3 className="text-2xl font-bold mb-6 text-center">Additional Perks</h3>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    {[
                                        { icon: "🍱", title: "Meal Allowance", desc: "Daily meal credits" },
                                        { icon: "🚆", title: "Commuter Benefits", desc: "Transportation subsidies" },
                                        { icon: "👶", title: "Childcare", desc: "On-site daycare support" },
                                        { icon: "📚", title: "Learning Budget", desc: "$2,000 annual training allowance" }
                                    ].map((perk, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-gray-900/50 p-4 rounded-lg text-center"
                                        >
                                            <div className="text-3xl mb-2">{perk.icon}</div>
                                            <h4 className="font-bold mb-1">{perk.title}</h4>
                                            <p className="text-gray-300 text-xs">{perk.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-20"
                >
                    <div className="inline-block bg-gradient-to-r from-teal-600/20 to-emerald-600/20 p-8 rounded-2xl border border-teal-500/30 max-w-4xl">
                        <h3 className="text-2xl font-bold mb-4 text-white">Join Our Team</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            We&apos;re always looking for talented individuals who share our values and vision.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
                            <div className="flex items-start">
                                <FiMail className="text-2xl text-teal-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Careers Email</h4>
                                    <a href="mailto:careers@susalab.com" className="text-gray-300 hover:text-teal-300 transition-colors">
                                        careers@susalabs.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiPhone className="text-2xl text-emerald-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">HR Contact</h4>
                                    <a href="tel:+14788884158" className="text-gray-300 hover:text-emerald-300 transition-colors">
                                        +14788884158 (Ext. 101)
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiMapPin className="text-2xl text-green-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Office Location</h4>
                                    <p className="text-gray-300">
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

export default CultureBenefitsPage;
