'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const TECH_TOPICS = [
    {
        id: 1,
        title: "MACHINE LEARNING",
        description: "Machine learning is the scientific study of algorithms that enable computers to learn patterns from data without explicit programming.",
        color: "from-cyan-400 to-blue-500",
        icon: "🧠",
        route: "machine-learning"
    },
    {
        id: 2,
        title: "DEEP LEARNING",
        description: "Multi-layered neural networks that mimic human brain functions to solve complex problems with unstructured data.",
        color: "from-purple-400 to-fuchsia-500",
        icon: "⚡",
        route: "deep-learning"
    },
    {
        id: 3,
        title: "DIGITAL TRANSFORMATION",
        description: "Revolutionizing business processes through cutting-edge digital technologies for competitive advantage.",
        color: "from-amber-400 to-orange-500",
        icon: "🌐",
        route: "digital-transformation"
    },
    {
        id: 4,
        title: "BLOCKCHAIN",
        description: "Decentralized, tamper-proof ledgers enabling trustless transactions and smart contract automation.",
        color: "from-emerald-400 to-teal-500",
        icon: "⛓️",
        route: "solutions/blockchain"
    },
    {
        id: 5,
        title: "AI INNOVATION",
        description: "Creating intelligent systems that can perceive, learn, reason, and assist human decision-making.",
        color: "from-rose-400 to-pink-500",
        icon: "🤖",
        route: "solutions/ai"
    }
];

// Pre-computed orb configurations to avoid hydration mismatch
const ORB_CONFIGS = [
    { initialX: 50, initialY: 33, animateX: 120, animateY: 80, scale: 0.35, duration: 25, width: 250, height: 200 },
    { initialX: -30, initialY: -45, animateX: -100, animateY: 150, scale: 0.28, duration: 30, width: 180, height: 220 },
    { initialX: 80, initialY: 20, animateX: 180, animateY: -60, scale: 0.42, duration: 22, width: 320, height: 280 },
    { initialX: -60, initialY: 70, animateX: -140, animateY: 120, scale: 0.25, duration: 35, width: 200, height: 160 },
    { initialX: 40, initialY: -80, animateX: 90, animateY: -180, scale: 0.38, duration: 28, width: 280, height: 300 },
    { initialX: -20, initialY: 50, animateX: -80, animateY: 100, scale: 0.32, duration: 32, width: 220, height: 180 },
    { initialX: 70, initialY: -30, animateX: 160, animateY: -80, scale: 0.45, duration: 26, width: 350, height: 320 },
    { initialX: -50, initialY: 25, animateX: -120, animateY: 60, scale: 0.3, duration: 38, width: 190, height: 210 },
    { initialX: 25, initialY: 60, animateX: 70, animateY: 140, scale: 0.4, duration: 24, width: 260, height: 240 },
    { initialX: -70, initialY: -20, animateX: -150, animateY: -50, scale: 0.35, duration: 33, width: 230, height: 190 },
    { initialX: 55, initialY: -55, animateX: 130, animateY: -120, scale: 0.28, duration: 29, width: 175, height: 200 },
    { initialX: -40, initialY: 40, animateX: -90, animateY: 90, scale: 0.42, duration: 27, width: 300, height: 260 },
    { initialX: 35, initialY: 15, animateX: 80, animateY: 40, scale: 0.33, duration: 36, width: 210, height: 175 },
    { initialX: -25, initialY: -60, animateX: -60, animateY: -130, scale: 0.38, duration: 31, width: 245, height: 230 },
    { initialX: 60, initialY: 45, animateX: 140, animateY: 100, scale: 0.3, duration: 34, width: 195, height: 185 },
];

const FloatingOrbs = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {ORB_CONFIGS.map((orb, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white/5 backdrop-blur-sm"
                    initial={{
                        x: orb.initialX,
                        y: orb.initialY,
                        scale: orb.scale,
                    }}
                    animate={{
                        x: [null, orb.animateX],
                        y: [null, orb.animateY],
                        transition: {
                            duration: orb.duration,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'linear'
                        },
                    }}
                    style={{
                        width: `${orb.width}px`,
                        height: `${orb.height}px`,
                    }}
                />
            ))}
        </div>
    );
};


const InteractivePill = ({ active, onClick, children, route }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
    route: string;
}) => {
    const router = useRouter();

    const handleClick = () => {
        onClick();
        router.push(`${route.startsWith('/') ? route : `/${route}`}`);
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className={`relative px-4 py-2 md:px-6 md:py-3 rounded-full font-medium text-xs md:text-base transition-all ${active
                ? 'bg-white text-gray-900 shadow-lg'
                : 'bg-white/10 text-white hover:bg-white/20'
                }`}
        >
            {children}
            {active && (
                <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
            )}
        </motion.button>
    );
};

const LandingPage = () => {
    const router = useRouter();
    const [activeTopic, setActiveTopic] = useState(0);
    const [autoRotate, setAutoRotate] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const controls = useAnimation();
    const intervalRef = useRef<number>(0);

    const currentTopic = TECH_TOPICS[activeTopic];

    useEffect(() => {
        // Check for mobile on client side
        setIsMobile(window.innerWidth < 640);
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (autoRotate) {
            intervalRef.current = window.setInterval(() => {
                setActiveTopic(prev => (prev + 1) % TECH_TOPICS.length);
            }, 5000);
        }
        return () => clearInterval(intervalRef.current);
    }, [autoRotate]);

    const handleTopicChange = (index: number) => {
        setActiveTopic(index);
        setAutoRotate(false);
        controls.start("hover");

        setTimeout(() => setAutoRotate(true), 10000);
    };

    const navigateToTopic = () => {
        router.push(`${currentTopic.route.startsWith('/') ? currentTopic.route : `/${currentTopic.route}`}`);
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden flex flex-col">
            <FloatingOrbs />

            <div className="absolute top-1/4 left-1/2 w-64 md:w-96 h-64 md:h-96 rounded-full bg-blue-500/20 blur-3xl filter opacity-30 -translate-x-1/2"></div>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 md:py-24 lg:py-32 w-full">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8 md:mb-16 text-center w-full"
                >
                    <p className="text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] text-gray-300 mb-3 mt-8 sm:mt-12">
                        Welcome to Susalabs
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                        <span>AI &amp; Software Development Company</span>
                    </h1>
                    <p className='text-xl'>Custom Software Development Company Powered by AI</p>
                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6">
                        SusaLabs offers custom software development, AI-driven medical diagnostics, and CRM services tailored for healthcare providers.
                    </p>

                    <motion.div
                        className="w-24 md:w-32 h-1 md:h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </motion.div>

                <div className="w-full max-w-4xl px-2 sm:px-4">
                    <motion.div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
                        {TECH_TOPICS.map((topic, index) => (
                            <InteractivePill
                                key={topic.id}
                                active={activeTopic === index}
                                onClick={() => handleTopicChange(index)}
                                route={topic.route}
                            >
                                <span className="mr-1 md:mr-2">{topic.icon}</span>
                                {isMobile ? topic.title.slice(0, 3) : topic.title}
                            </InteractivePill>
                        ))}
                    </motion.div>

                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 mb-12 md:mb-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTopic.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col items-center text-center"
                            >
                                <motion.div
                                    animate={controls}
                                    variants={{
                                        hover: { scale: 1.05 },
                                        initial: { scale: 1 }
                                    }}
                                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-9xl mb-4 md:mb-6 bg-gradient-to-r ${currentTopic.color} bg-clip-text text-transparent`}
                                >
                                    {currentTopic.icon}
                                </motion.div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 md:mb-4">
                                    {currentTopic.title}
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed">
                                    {currentTopic.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={navigateToTopic}
                            className={`px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r ${currentTopic.color} rounded-full font-bold text-sm md:text-lg shadow-lg hover:shadow-xl transition-all`}
                        >
                            Explore {currentTopic.title.split(' ')[0]}
                        </motion.button>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="hidden md:flex left-1/2 transform -translate-x-1/2 flex-col items-center"
                >
                    <h4 className="text-sm text-gray-400 mb-2">Scroll Down</h4>
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
            </div>
        </div>
    );
};

export default LandingPage;
