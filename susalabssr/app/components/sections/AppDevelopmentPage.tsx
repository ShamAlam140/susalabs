'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiSmartphone, FiTablet, FiCode, FiLayers, FiShield,
    FiTrendingUp, FiZap, FiGlobe, FiMonitor, FiTarget,
    FiAward, FiCpu
} from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

/* ─── FAQ Data (Fix 7) ─── */
const faqList = [
    {
        question: "How much does mobile app development cost?",
        answer: "Mobile app development at SusaLabs ranges from $10,000 for a simple single-platform app to $50,000+ for a complex enterprise mobile platform. Cost depends on platform (Android/iOS/both), features, design complexity, and integrations. We offer free discovery calls to provide accurate estimates tailored to your requirements."
    },
    {
        question: "How long does mobile app development take?",
        answer: "A basic mobile app takes 6–10 weeks. A mid-complexity app with custom UI and API integrations takes 3–5 months. Enterprise-grade mobile platforms typically take 5–9 months. SusaLabs follows agile sprints with bi-weekly demos so you see real progress from week one."
    },
    {
        question: "What is React Native mobile app development?",
        answer: "React Native is a JavaScript framework by Meta that lets developers build one codebase that runs natively on both Android and iOS. React Native mobile app development is ideal for startups and businesses that want to launch on both platforms quickly and cost-efficiently — without sacrificing native performance."
    },
    {
        question: "Do you build native mobile apps?",
        answer: "Yes. We specialize in native mobile app development for both platforms — Swift and SwiftUI for iOS, and Kotlin with Jetpack Compose for Android. Native development is recommended for apps requiring maximum performance, complex animations, advanced device hardware access, or AR/VR features."
    },
    {
        question: "Are you a mobile app development company in India?",
        answer: "Yes. SusaLabs is a mobile app development company in India with offices in Gurugram, Haryana — one of India's leading tech hubs. We also have a US headquarters in Alpharetta, GA. This dual presence gives clients the cost advantage of Indian offshore development with US-standard project management."
    },
    {
        question: "Can you build mobile app development for Android only?",
        answer: "Absolutely. We offer dedicated Android mobile app development services using Kotlin, Java, and Jetpack Compose — optimized for the Google Play Store and the full Android device ecosystem. We can also start with Android and expand to iOS in a Phase 2 release."
    },
    {
        question: "What is custom mobile app development?",
        answer: "Custom mobile app development means we build your app from scratch, tailored to your specific business processes, users, and technology stack — no off-the-shelf templates. Every UI, every feature, every integration is designed for your exact requirements. This is ideal for businesses with unique workflows, compliance needs, or competitive differentiation goals."
    },
    {
        question: "What platforms do you build mobile apps for?",
        answer: "We develop mobile apps for Android (Google Play Store), iOS (Apple App Store), and cross-platform (Android + iOS simultaneously). We work with React Native, Flutter, Swift, and Kotlin — choosing the right approach based on your budget, timeline, and performance requirements."
    },
    {
        question: "Do you provide post-launch app maintenance?",
        answer: "Yes. We offer ongoing mobile app maintenance services including OS version updates, bug fixes, performance monitoring, App Store compliance updates, and feature enhancements post-launch. Monthly maintenance packages start at $1,500/month and include priority support SLA."
    },
    {
        question: "What makes SusaLabs different from other app development companies?",
        answer: "Three things: (1) Dual US + India offices — combining Western project management with offshore cost efficiency. (2) We deliver a working prototype within 2–3 weeks of kickoff. (3) We specialize in both native mobile app development and cross-platform React Native/Flutter development — giving you the right solution, not the easiest one."
    }
];

const AppDevelopmentPage: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    /* ─── Fix 5: Why Choose SusaLabs Cards ─── */
    const whyChooseUs = [
        {
            title: "Native & Cross-Platform Expertise",
            description: "Our developers are experts in both native mobile app development (Swift for iOS, Kotlin/Java for Android) and cross-platform frameworks including React Native and Flutter. We choose the right stack for your business goals: native for performance-critical apps, React Native mobile app development for faster time-to-market, or Flutter for a single codebase that runs everywhere.",
            stack: "Swift, Kotlin, React Native, Flutter, Dart",
            icon: <FiCode className="text-2xl text-green-400" />
        },
        {
            title: "End-to-End Development Delivery",
            description: "From wireframes to the App Store, we own the full lifecycle of your mobile app development project. Our process covers discovery, UX research, UI design, Android and iOS development, QA testing, deployment, and post-launch support — all under one roof. No handoffs, no gaps, no surprises.",
            stack: "Our 6-step development mobile app process is built for on-time delivery",
            icon: <FiTarget className="text-2xl text-blue-400" />
        },
        {
            title: "Custom Mobile App Development",
            description: "Every app we build is a custom mobile app development project — no templates, no shortcuts. We architect solutions tailored to your users, your data, and your business workflows. Whether it's a patient-facing healthcare app, a fintech transaction platform, or a logistics tracking system, we build it from the ground up.",
            stack: "Custom = competitive advantage",
            icon: <FiLayers className="text-2xl text-purple-400" />
        },
        {
            title: "Android & iOS App Development",
            description: "We build robust mobile app development for Android and iOS simultaneously — ensuring feature parity, consistent UX, and platform-native performance. Our Android mobile app development team works with the latest Jetpack Compose and Material 3 standards; our iOS team leverages SwiftUI and Apple's Human Interface Guidelines.",
            stack: "Result: apps that feel right on every device",
            icon: <FiSmartphone className="text-2xl text-orange-400" />
        },
        {
            title: "Mobile App Development Company in India",
            description: "SusaLabs operates a dedicated mobile app development team from Gurugram, India — one of India's top tech hubs. As a trusted mobile app development company in India with a US headquarters, we give you access to senior mobile engineers at 40–60% lower cost than US/UK rates, with zero compromise on quality, communication, or timezone overlap.",
            stack: "Flexible models: Fixed-price | Time & Materials | Dedicated Team",
            icon: <FiGlobe className="text-2xl text-cyan-400" />
        }
    ];

    /* ─── Fix 6: Core Services (7 Solutions) ─── */
    const appServices = [
        {
            title: "Android Mobile App Development Services",
            description: "We design and develop high-performance Android applications using Kotlin, Java, Jetpack Compose, and Material Design 3. Our Android mobile app development team delivers apps that are fast, secure, and optimized for the full Android device ecosystem — from smartphones to tablets and foldables.",
            useCases: "eCommerce apps, on-demand platforms, enterprise productivity tools, healthcare patient apps, logistics tracking",
            techStack: "Kotlin | Jetpack Compose | Retrofit | Firebase | Room DB | Android Studio",
            icon: <FiSmartphone className="text-3xl text-green-400" />,
            tags: ["Android App Development", "Google Play Store", "Kotlin", "Jetpack Compose"]
        },
        {
            title: "iOS Mobile App Development Services",
            description: "We build polished, high-converting iOS apps using Swift and SwiftUI — designed to meet Apple's strict App Store guidelines and Human Interface standards. From iPhone-first apps to iPad and Apple Watch extensions, our iOS mobile app development team delivers the premium experience Apple users expect.",
            useCases: "SaaS mobile apps, consumer apps, B2B enterprise tools, healthcare and telemedicine apps",
            techStack: "Swift | SwiftUI | Xcode | Core Data | CloudKit | Apple Sign-In",
            icon: <FiTablet className="text-3xl text-blue-400" />,
            tags: ["iOS App Development", "App Store", "Swift", "SwiftUI"]
        },
        {
            title: "Mobile App Development React Native — Cross-Platform Apps",
            description: "React Native mobile app development lets you build one codebase that runs natively on both Android and iOS — cutting development time by up to 40% without sacrificing performance or UX. SusaLabs is a specialized React Native mobile app development company with 50+ apps delivered.",
            useCases: "MVP apps for startups, consumer marketplaces, social platforms, retail apps, dashboard-heavy enterprise apps",
            techStack: "React Native | Expo | TypeScript | Redux | React Navigation | Node.js backend",
            icon: <FiCode className="text-3xl text-purple-400" />,
            tags: ["React Native", "Cross-Platform", "iOS & Android", "Expo"]
        },
        {
            title: "Native Mobile App Development Services",
            description: "For apps where performance is non-negotiable — gaming, AR/VR, real-time video, complex animations, or device-hardware-intensive features — native mobile app development is the right choice. SusaLabs builds fully native Android (Kotlin) and iOS (Swift) applications that leverage 100% of each platform's capabilities.",
            useCases: "Real-time trading apps, AR navigation, high-frame-rate gaming, medical imaging, biometric authentication tools",
            techStack: "Kotlin (Android) | Swift (iOS) | Metal API | ARKit | CoreML | Bluetooth/NFC",
            icon: <FiCpu className="text-3xl text-red-400" />,
            tags: ["Native App Development", "Performance-First", "ARKit", "CoreML"]
        },
        {
            title: "Custom Mobile App Development for Startups & Enterprises",
            description: "Our custom mobile app development service is built for businesses that need something unique — not a template, not a clone. We work directly with your product team to design, architect, and build a mobile app that solves your exact problem, integrates with your systems, and scales with your growth.",
            useCases: "Healthcare, Fintech, Logistics, EdTech, Real Estate, Insurance, Retail",
            techStack: "Fully tailored to your requirements — native, React Native, or Flutter",
            icon: <FiLayers className="text-3xl text-orange-400" />,
            tags: ["Custom App Development", "Bespoke Mobile App", "Startup App Development"]
        },
        {
            title: "Flutter Mobile App Development Services",
            description: "Flutter is Google's open-source UI toolkit that enables beautiful, fast mobile apps from a single codebase — for Android, iOS, web, and desktop. SusaLabs' Flutter developers build pixel-perfect apps with smooth 60fps animations, native device access, and rapid iteration cycles.",
            useCases: "Startups needing fast MVP delivery, apps with complex custom UI, brands that need consistent design across platforms",
            techStack: "Flutter | Dart | Firebase | Riverpod | Flutter Bloc | REST APIs",
            icon: <FiZap className="text-3xl text-cyan-400" />,
            tags: ["Flutter Development", "Dart", "Cross-Platform", "Firebase"]
        },
        {
            title: "Industry-Specific Mobile App Development",
            description: "SusaLabs builds mobile apps with deep domain knowledge across regulated and complex industries. We understand compliance, data security, and user expectations specific to your vertical.",
            useCases: "",
            techStack: "",
            icon: <FiShield className="text-3xl text-yellow-400" />,
            tags: ["HIPAA App", "Fintech Mobile App", "Logistics App", "eCommerce App", "EdTech App"],
            industries: [
                "Healthcare: HIPAA-compliant patient apps, EHR integrations, telemedicine platforms, medical imaging viewers",
                "Fintech: Secure payment apps, trading platforms, insurance portals, KYC/AML mobile tools",
                "Logistics: Real-time tracking apps, driver apps, warehouse management, route optimization",
                "eCommerce: Shopping apps, loyalty platforms, AR try-on, personalized recommendation engines",
                "EdTech: Learning management apps, live class platforms, quiz and assessment tools"
            ]
        }
    ];

    /* ─── Fix 11: Performance Metrics ─── */
    const metrics = [
        {
            value: "50+",
            label: "Mobile Apps Delivered",
            supportingText: "Across Android, iOS, and cross-platform — SusaLabs has shipped 50+ mobile applications since 2020 for clients in healthcare, fintech, logistics, retail, and education."
        },
        {
            value: "99.9%",
            label: "Crash-Free Session Rate",
            supportingText: "Our mobile app development process includes rigorous QA, automated testing, and production monitoring — delivering apps that perform reliably at scale."
        },
        {
            value: "40%",
            label: "Average Development Time Saved",
            supportingText: "React Native and Flutter mobile app development reduces build time by up to 40% vs maintaining separate Android and iOS codebases — without sacrificing native performance."
        },
        {
            value: "2 Weeks",
            label: "Time to Working Prototype",
            supportingText: "We deliver a functional mobile app prototype within 2 weeks of project kickoff — so you validate your concept and get stakeholder buy-in before full development begins."
        },
        {
            value: "4.8★",
            label: "Average App Store Rating",
            supportingText: "Apps built by SusaLabs average a 4.8-star rating across Google Play and the Apple App Store — a direct result of our user-centered UI/UX design approach."
        },
        {
            value: "3",
            label: "Global Delivery Offices",
            supportingText: "US (Alpharetta, GA) and India (Gurugram) — the best of nearshore project management and offshore mobile app development cost efficiency."
        }
    ];

    /* ─── Process Steps ─── */
    const processSteps = [
        { title: "Discovery & Planning", description: "Define goals, key features, target platforms, integrations, and tech stack.", color: "from-green-500 to-emerald-500" },
        { title: "Design & Prototyping", description: "Wireframes, UI/UX mockups, and user journey mapping.", color: "from-teal-500 to-cyan-500" },
        { title: "Agile Development", description: "Iterative builds, weekly demos, and transparent communication.", color: "from-blue-500 to-indigo-500" },
        { title: "Testing & QA", description: "Manual, automated, and cross-device testing for bugs, UX, and performance.", color: "from-indigo-500 to-purple-500" },
        { title: "Launch", description: "Deployment on Play Store, App Store, or private enterprise distribution.", color: "from-purple-500 to-pink-500" },
        { title: "Maintenance & Growth", description: "App store optimization, feature additions, and growth analytics.", color: "from-pink-500 to-rose-500" }
    ];

    /* ─── Technologies ─── */
    const technologies = [
        { category: "Languages", items: ["Swift", "Kotlin", "Java", "Dart", "JavaScript", "TypeScript"] },
        { category: "Frameworks", items: ["Flutter", "React Native", "Android SDK", "iOS SDK", "Expo"] },
        { category: "Cloud Services", items: ["AWS Mobile Hub", "Firebase", "Azure App Services", "Google Cloud"] },
        { category: "Databases", items: ["SQLite", "Realm", "Firebase", "PostgreSQL", "MongoDB", "Room DB"] },
        { category: "Tools", items: ["Xcode", "Android Studio", "VS Code", "Figma", "Zeplin"] },
        { category: "APIs", items: ["REST", "GraphQL", "Payment Gateways", "Maps", "Auth", "Push Notifications"] }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white">
            {/* Floating Particles Background - Render only on client to avoid SSR bailout */}
            {mounted && (
                <FloatingOrbs
                    className="absolute inset-0 overflow-hidden"
                    orbClassName="absolute rounded-full bg-green-500 opacity-10"
                />
            )}

            <div className="relative z-10 container mx-auto px-6 py-24">
                {/* ═══ Fix 3: Hero Section — H1 + Subtitle ═══ */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        Mobile App Development Services
                    </h1>

                    <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-8" />

                    <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white leading-relaxed">
                        Build high-performance mobile apps for Android and iOS with SusaLabs — India&apos;s trusted mobile app development company. From native mobile app development to React Native and Flutter, we deliver custom mobile app development solutions that scale.
                    </p>
                </div>

                {/* ═══ Fix 4: Intro / Hero Paragraph ═══ */}
                <div className="mb-16">
                    <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-2xl p-8 border border-green-500/30 backdrop-blur-sm text-left">
                        <p className="text-lg leading-relaxed text-white mb-6">
                            In today&apos;s mobile-first world, your app is your business. At SusaLabs, we specialize in end-to-end mobile app development for Android and iOS — helping startups, SMEs, and enterprises launch high-impact apps that users love and businesses rely on.
                        </p>
                        <p className="text-lg leading-relaxed text-white mb-6">
                            Our mobile app development services cover the full product lifecycle: from ideation and UI/UX design to development, QA, App Store launch, and ongoing maintenance. Whether you need native mobile app development for peak performance, or a React Native mobile app development solution for cross-platform efficiency, SusaLabs has the expertise to deliver.
                        </p>
                        <p className="text-lg leading-relaxed text-white">
                            We are a custom mobile app development company with offices in Alpharetta, GA (USA) and Gurugram, India — giving clients the advantage of Western project management combined with cost-efficient offshore development. Our mobile app development for Android and iOS has served clients across healthcare, fintech, logistics, and e-commerce — with a 99.9% crash-free delivery record.
                        </p>
                    </div>
                </div>

                {/* ═══ Fix 5: Why Businesses Trust SusaLabs ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                        Why Businesses Trust SusaLabs for Mobile App Development
                    </h2>
                    <p className="text-center text-white/80 mb-12 text-lg">
                        We don&apos;t just build apps — we build mobile businesses.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseUs.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 group hover:border-green-500/50 transition-all duration-300"
                            >
                                <div className="mb-4 flex items-center">
                                    <div className="mr-4">{item.icon}</div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                                <p className="text-green-400/80 text-xs font-medium italic">{item.stack}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ═══ Fix 6: Core Services — All visible for SSR ═══ */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        Our Mobile App Development Services
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {appServices.map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
                            >
                                <div className="flex items-start mb-6">
                                    <div className="mr-4 p-3 bg-gray-700/50 rounded-lg">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                                {/* Industry-specific list */}
                                {service.industries && (
                                    <ul className="mb-4 space-y-2">
                                        {service.industries.map((ind, idx) => (
                                            <li key={idx} className="text-gray-400 text-sm flex items-start">
                                                <span className="text-green-400 mr-2">•</span>
                                                {ind}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {service.useCases && (
                                    <p className="text-sm text-gray-400 mb-2">
                                        <span className="text-green-400 font-semibold">Use cases:</span> {service.useCases}
                                    </p>
                                )}
                                {service.techStack && (
                                    <p className="text-sm text-gray-400 mb-4">
                                        <span className="text-teal-400 font-semibold">Tech stack:</span> {service.techStack}
                                    </p>
                                )}
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ═══ Technologies Section ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">Technologies We Use</h2>
                    <p className="text-center text-white mb-8 max-w-3xl mx-auto">
                        Our mobile app developers are experts in the latest frameworks, languages, and tools.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                            >
                                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tech.items.map((item, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ═══ Process Section ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">Our App Development Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                            >
                                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.color}`}></div>
                                <div className="flex items-center mb-4">
                                    <div className={`w-10 h-10 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm mr-4`}>
                                        {i + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                                </div>
                                <p className="text-gray-300">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ═══ Fix 11: Performance Metrics ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        Performance & Impact Metrics
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {metrics.map((metric, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 text-center"
                            >
                                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-2">
                                    {metric.value}
                                </div>
                                <h4 className="text-white font-bold mb-3">{metric.label}</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">{metric.supportingText}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ═══ Integration Section ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-2xl p-8 border border-green-500/30 backdrop-blur-sm">
                        <h2 className="text-3xl font-bold text-center mb-8 text-white">Integrated With CRM, ERP & Your Business Ecosystem</h2>
                        <p className="text-center text-white mb-8 max-w-4xl mx-auto">
                            Your app shouldn&apos;t work in isolation. That&apos;s why we integrate mobile solutions with:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {[
                                "CRM systems for lead management and user behavior tracking",
                                "ERP software for order processing, inventory, and operations",
                                "Marketing tools for user notifications, analytics, and engagement",
                                "IoT devices, wearables, payment gateways, and GPS systems"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start bg-white/5 rounded-lg p-4">
                                    <div className="w-3 h-3 bg-teal-400 rounded-full mr-3 mt-2"></div>
                                    <span className="text-white">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-white">
                            Whether you&apos;re a SaaS business, healthcare startup, or enterprise — we ensure your mobile applications work seamlessly with your existing tech.
                        </p>
                    </div>
                </motion.div>

                {/* ═══ Fix 7: FAQ Section ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="mb-16 max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-center mb-10 text-white">
                        Frequently Asked Questions — Mobile App Development
                    </h2>
                    <div className="space-y-4">
                        {faqList.map((faq, i) => (
                            <div
                                key={i}
                                className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                                    className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                                >
                                    <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                                    <span className="text-green-400 text-2xl leading-none">
                                        {openFaqIndex === i ? '−' : '+'}
                                    </span>
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openFaqIndex === i ? 'auto' : 0,
                                        opacity: openFaqIndex === i ? 1 : 0
                                    }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-5">
                                        <p className="text-gray-300 text-base leading-relaxed">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ═══ Fix 12: Final CTA Section ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 p-8 rounded-2xl border border-green-500/30 backdrop-blur-sm max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                            Ready to Build Your Mobile App? Let&apos;s Talk.
                        </h2>
                        <p className="text-white mb-4 max-w-4xl mx-auto text-lg leading-relaxed">
                            Whether you&apos;re a startup with a bold app idea or an enterprise looking to modernize your mobile presence — SusaLabs has the mobile app development expertise, the team, and the track record to make it happen.
                        </p>
                        <p className="text-white mb-4 max-w-4xl mx-auto text-lg leading-relaxed">
                            Schedule a free 30-minute discovery call with our mobile architects. We&apos;ll review your requirements, suggest the right stack (native, React Native, or Flutter), and give you a rough project scope — at no cost, no commitment.
                        </p>
                        <p className="text-white mb-8 max-w-4xl mx-auto text-lg leading-relaxed">
                            From android mobile app development and iOS native apps to cross-platform React Native and Flutter solutions, we deliver custom mobile apps on time and within budget.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                            <a
                                href="/contact-us"
                                className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all w-full md:w-auto text-center"
                            >
                                Get a Free App Development Quote
                            </a>
                            <a
                                href="/product"
                                className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 border border-white/20 transition-all w-full md:w-auto text-center"
                            >
                                View Our Mobile App Portfolio
                            </a>
                            <a
                                href="/contact-us"
                                className="px-8 py-4 bg-transparent text-green-400 font-bold rounded-full hover:bg-green-900/30 border border-green-500/50 transition-all w-full md:w-auto text-center flex items-center justify-center gap-2"
                            >
                                Talk to a Mobile App Expert <span>→</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ═══ Fix 9: JSON-LD Schema Markup ═══ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": ["Organization", "LocalBusiness"],
                                "name": "SusaLabs",
                                "url": "https://susalabs.com",
                                "logo": "https://susalabs.com/images/logo.jpeg",
                                "description": "SusaLabs is a custom mobile app development company specializing in Android, iOS, React Native & Flutter apps for startups and enterprises.",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "625 Union Hill Rd",
                                    "addressLocality": "Alpharetta",
                                    "addressRegion": "GA",
                                    "postalCode": "30004",
                                    "addressCountry": "US"
                                },
                                "telephone": "+14788884458",
                                "email": "contact@susalabs.com",
                                "sameAs": ["https://www.linkedin.com/company/susalabs"],
                                "areaServed": ["US", "UK", "IN"],
                                "priceRange": "$$"
                            },
                            {
                                "@type": "Service",
                                "name": "Mobile App Development Services",
                                "serviceType": "Mobile App Development",
                                "provider": { "@type": "Organization", "name": "SusaLabs" },
                                "description": "Custom Android & iOS mobile app development services. Includes native, React Native, Flutter & cross-platform solutions",
                                "areaServed": "Worldwide",
                                "url": "https://susalabs.com/solutions/app-development",
                                "hasOfferCatalog": {
                                    "@type": "OfferCatalog",
                                    "name": "Mobile App Development Services",
                                    "itemListElement": [
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Android App Development" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "iOS App Development" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "React Native App Development" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flutter App Development" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Mobile App Development" } }
                                    ]
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": faqList.map(f => ({
                                    "@type": "Question",
                                    "name": f.question,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": f.answer
                                    }
                                }))
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://susalabs.com" },
                                    { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://susalabs.com/solutions" },
                                    { "@type": "ListItem", "position": 3, "name": "App Development", "item": "https://susalabs.com/solutions/app-development" }
                                ]
                            }
                        ]
                    })
                }}
            />
        </div>
    );
};

export default AppDevelopmentPage;
