'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Pre-computed orb configurations to avoid hydration mismatch
// These deterministic values ensure server and client render the same output
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

interface FloatingOrbsProps {
    className?: string;
    orbClassName?: string;
}

const FloatingOrbs: React.FC<FloatingOrbsProps> = ({
    className = "absolute inset-0 overflow-hidden pointer-events-none",
    orbClassName = "absolute rounded-full bg-white/5 backdrop-blur-sm"
}) => {
    return (
        <div className={className}>
            {ORB_CONFIGS.map((orb, i) => (
                <motion.div
                    key={i}
                    className={orbClassName}
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

export default FloatingOrbs;
