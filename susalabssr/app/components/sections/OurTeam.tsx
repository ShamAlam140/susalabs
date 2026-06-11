'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCopy, FiMail } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

// Type Definitions for Team Member
interface TeamMember {
    name: string;
    role: string;
    experience: string;
    description: string;
    expertise: string[];
    image: string;
    alt: string;
}

const OurTeam: React.FC = () => {
    const [isCopied, setIsCopied] = useState(false);

    const teamMembers: TeamMember[] = [
        {
            name: "Sunil Mudgal",
            role: "CTO & Co-Founder",
            experience: "15+ Years",
            description:
                "Expert in complex technical solution development, business strategy, and entrepreneurship. Strong track record in building diversified businesses, formulating strategies, and leading teams across global markets.",
            expertise: ["Technical Architecture", "Product Management", "Investment Strategy"],
            image: "/images/team/sunilsir.jpeg",
            alt: "CTO & Co-Founder of susalabs",
        },
        {
            name: "Gautam Gianchandi",
            role: "CEO & Co-Founder",
            experience: "33+ Years",
            description:
                "Seasoned professional with extensive European market experience across telecommunications, IT, finance, and electronics. Specializes in international business development and operations.",
            expertise: ["International Expansion", "Financial Strategy", "Procurement"],
            image: "/images/team/gautamsir.jpeg",
            alt: "CEO & Co-Founder of susalabs",
        },
        {
            name: "King Koduru",
            role: "Education Director",
            experience: "28+ Years",
            description:
                "US-based entrepreneur with focus on education technology. Passionate about creating social impact through innovative learning solutions and community development.",
            expertise: ["EdTech Solutions", "Community Building", "Social Impact"],
            image: "/images/team/kingsir.jpeg",
            alt: "Education Director of suslabs",
        },
        {
            name: "Arti Radhwani",
            role: "Business Strategist",
            experience: "22+ Years",
            description:
                "Over 22 years of industry experience with expertise across Senior Stakeholders Management, Market Research, Business Consulting, Strategy Formulation, and Business Development. Core strength lies in excellent client management & execution of complex projects.",
            expertise: ["Client Management", "Business Strategy", "Market Research"],
            image: "/images/team/arti.jpeg",
            alt: "Business Strategist of susalabs",
        },
        {
            name: "Vinit Arora",
            role: "Business Development Director",
            experience: "15+ Years",
            description:
                "Over 15 Years of experience in Business Development strategically design, plan, and execute company's national and global initiatives. Established respected business relations between executive teams and board members.",
            expertise: ["Global Expansion", "Strategic Planning", "Executive Relations"],
            image: "/images/team/vinit.jpeg",
            alt: "Business Development Director",
        },
    ];

    const handleEmailClick = () => {
        try {
            // Attempt to open mailto link
            window.location.href = "mailto:contact@susalabs.com?subject=Contact%20Request&body=Hello%20Susa%20Labs%20Team,";
        } catch (error) {
            console.error("Failed to open mailto link:", error);
        }
    };

    const handleCopyEmail = () => {
        navigator.clipboard
            .writeText("contact@susalabs.com")
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            })
            .catch((error) => {
                console.error("Failed to copy email:", error);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white relative overflow-hidden">

            <FloatingOrbs className="inset-0 overflow-hidden pointer-events-none -z-10 fixed" orbClassName="absolute rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-sm" />
            <div className="absolute top-1/4 left-1/2 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl filter opacity-30 -translate-x-1/2"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl filter opacity-30"></div>

            <div className="relative z-10 container mx-auto px-6 py-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-5xl md:text-7xl font-bold mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Our Team
                        </span>
                    </motion.h2>
                    <motion.div
                        className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.p
                        className="text-xl max-w-3xl mx-auto mt-6 text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Meet the Experts Behind{' '}
                        <Link
                            href="/"
                            className="inline-block text-white hover:text-yellow-500 transition-colors duration-300"
                        >
                            SusaLabs
                        </Link>
                        &apos; AI and{' '}
                        <Link
                            href="/generativeAi"
                            className="inline-block text-white hover:text-yellow-500 transition-colors duration-300"
                        >
                            AI
                        </Link>{' '}
                        and{' '}
                        <Link
                            href="/solutions/quantum"
                            className="inline-block text-white hover:text-yellow-500 transition-colors duration-300"
                        >
                            software innovations
                        </Link>.
                    </motion.p>

                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/30 transition-all duration-300"
                        >
                            {/* Profile Image */}
                            <div className="h-64 bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center overflow-hidden">
                                <motion.div
                                    className="w-36 h-36 rounded-full overflow-hidden"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Image
                                        src={member.image}
                                        alt={member.alt}
                                        width={144}
                                        height={144}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </motion.div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                                            {member.name}
                                        </h3>
                                        <p className="text-blue-300 font-medium">{member.role}</p>
                                    </div>
                                    <motion.span
                                        className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {member.experience}
                                    </motion.span>
                                </div>

                                <p className="text-gray-300 mb-4 leading-relaxed">{member.description}</p>

                                <div className="mt-6">
                                    <h4 className="text-sm font-semibold text-gray-400 mb-2">AREAS OF EXPERTISE</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {member.expertise.map((skill, i) => (
                                            <motion.span
                                                key={i}
                                                className="px-3 py-1 bg-gray-900/50 text-gray-300 rounded-full text-xs font-medium"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <motion.button
                            onClick={handleEmailClick}
                            whileHover={{
                                scale: 1.05,
                                background: 'linear-gradient(to right, #7c3aed, #3b82f6)',
                                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                        >
                            <FiMail size={20} />
                            Contact Our Team
                        </motion.button>

                        <motion.button
                            onClick={handleCopyEmail}
                            whileHover={{
                                scale: 1.05,
                                background: 'linear-gradient(to right, #6b7280, #9ca3af)',
                                boxShadow: '0 0 20px rgba(107, 114, 128, 0.5)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-full font-medium text-base shadow-md transition-all flex items-center justify-center gap-2 ${isCopied ? 'bg-green-600' : 'bg-gray-600'
                                }`}
                        >
                            <FiCopy size={18} />
                            {isCopied ? 'Email Copied!' : 'Copy Email'}
                        </motion.button>
                    </div>
                    <p className="text-gray-400 mt-4">
                        Email us at: <span className="text-cyan-300">contact@susalabs.com</span>
                    </p>
                    <p className="text-gray-500 mt-2 text-sm">
                        If the email button doesn&apos;t work, copy the email address or open your email client manually.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default OurTeam;
