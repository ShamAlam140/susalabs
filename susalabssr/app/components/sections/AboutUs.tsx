'use client';

import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const AboutPage = () => {
    const controls = useAnimation();

    const companyInfo = {
        title: "WE MAKE INDUSTRIES MORE INTELLIGENT WITH AI SOFTWARE",
        description: "At SusaLabs, we make industries more intelligent with cutting-edge AI and next-gen technology. As a global custom software development company, we build future-ready digital solutions that help businesses automate, scale, and grow. Whether you're looking for a trusted software development company in India or an experienced software development company in USA, our team delivers tailored results. Our skilled computer software developers create solutions across Telecom, Energy, Finance, Education, Retail, and Healthcare. Recognized as a best software development company, we offer full-cycle digital development solutions — from ideation to deployment. We also specialize in custom healthcare software development services and custom medical software development services, building secure, regulation-compliant platforms for hospitals, clinics, and health startups. At SusaLabs, we turn powerful ideas into intelligent, AI-driven reality — one solution at a time.",
        icon: "",
        color: "from-cyan-400 to-blue-500"
    };

    // Create structured description with line breaks for better UI display
    const descriptionWithLink = (
        <>
            At SusaLabs, we make industries more intelligent with{" "}
            <Link
                href="/solutions/ai"
                className="text-white hover:text-yellow-500 px-2 py-1 bg-yellow-600/20 rounded"
            >
                cutting-edge AI and next-gen technology
            </Link>
            . <br /><br />
            As a global custom software development company, we build future-ready digital solutions that help businesses automate, scale, and grow. <br /><br />
            Whether you&apos;re looking for a trusted software development company in India or USA, our skilled computer software developers create solutions across Telecom, Energy, Finance, Education, Retail, and Healthcare. <br /><br />
            At SusaLabs, we turn powerful ideas into intelligent, AI-driven reality — one solution at a time.
        </>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden relative">
            {/* Floating Orbs */}
            <FloatingOrbs className="inset-0 overflow-hidden pointer-events-none -z-10" orbClassName="absolute rounded-full bg-white opacity-20 backdrop-blur-sm" />

            {/* Glow Effect */}
            <div className="absolute top-1/4 left-1/2 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl filter opacity-30 z-0"></div>

            <div className="relative z-10 container mx-auto px-6 py-20 md:py-32 flex flex-col items-center">
                {/* Animated Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-4">
                        <span className="text-white bg-clip-text bg-gradient-to-r from-teal-400 to-green-500">
                            About Us
                        </span>
                    </h2>
                    <motion.div
                        className="w-32 h-1.5 bg-gradient-to-r from-teal-500 to-green-500 mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </motion.div>

                {/* Main Content */}
                <div className="w-full max-w-4xl">
                    {/* Content */}
                    <div className="relative mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center text-center"
                        >
                            <motion.div
                                animate={controls}
                                variants={{
                                    hover: { scale: 1.05 },
                                    initial: { scale: 1 }
                                }}
                                className={`text-7xl md:text-9xl mb-6 bg-gradient-to-r ${companyInfo.color} bg-clip-text text-transparent`}
                            >
                                {companyInfo.icon}
                            </motion.div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                {companyInfo.title}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                                {descriptionWithLink}
                            </p>
                        </motion.div>
                    </div>
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        <h3 className="text-2xl font-bold text-center">Custom CRM Development</h3>
                        <span>|</span>
                        <h3 className="text-2xl font-bold text-center">Integration with Existing Medical Systems</h3>
                    </div>

                    {/* Additional Company Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-12 mt-8"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-center">Our Expertise</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gray-800/50 p-6 rounded-xl">
                                <h4 className="text-xl font-semibold mb-3">Software Development</h4>
                                <p className="text-gray-300">Custom software solutions tailored to your business needs across various industries.</p>
                            </div>
                            <div className="bg-gray-800/50 p-6 rounded-xl">
                                <h4 className="text-xl font-semibold mb-3">AI & Automation</h4>
                                <p className="text-gray-300">Implementing intelligent systems to optimize your business processes.</p>
                            </div>
                            <div className="bg-gray-800/50 p-6 rounded-xl">
                                <h4 className="text-xl font-semibold mb-3">Consulting Services</h4>
                                <p className="text-gray-300">Expert guidance to help you navigate digital transformation.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
                >
                    <div className="text-sm text-gray-400 mb-2">Scroll Down</div>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </motion.div>

                {/* Visible SEO Hashtags */}
                <div className="mt-16 text-center text-lg text-gray-300">
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-full text-sm">
                            CustomSoftware
                        </span>
                        <span className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-full text-sm">
                            SoftwareDevelopment
                        </span>
                        <span className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-full text-sm">
                            TechSolutions
                        </span>
                        <span className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-full text-sm">
                            BespokeSoftware
                        </span>
                        <span className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-full text-sm">
                            CloudComputing
                        </span>
                        <span className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-full text-sm">
                            MobileAppDevelopment
                        </span>
                        <span className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-full text-sm">
                            DigitalTransformation
                        </span>
                        <span className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-full text-sm">
                            DevOps
                        </span>
                        <span className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-full text-sm">
                            HealthInnovation
                        </span>
                        <span className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-full text-sm">
                            PrecisionMedicine
                        </span>
                        <span className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-full text-sm">
                            WearableTech
                        </span>
                        <span className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-full text-sm">
                            Telemedicine
                        </span>
                        <span className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-full text-sm">
                            HealthcareIT
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
