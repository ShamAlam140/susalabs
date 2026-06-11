'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiCode, FiCpu, FiSmartphone, FiUsers, FiDatabase,
    FiCloud, FiLayers, FiShield, FiGlobe, FiTarget,
    FiZap, FiAward, FiTrendingUp, FiLink, FiMonitor
} from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

/* ─── FAQ Data ─── */
const faqList = [
    {
        question: "How much does it cost to hire a software development company?",
        answer: "Software development costs vary by scope, complexity, and team location. At SusaLabs — a software development company in India — typical project ranges are: MVPs from $15,000–$40,000, mid-scale platforms from $40,000–$120,000, and enterprise software from $100,000+. Our offshore India team offers 40–60% cost advantage over US/UK rates. Contact us for a free estimate within 48 hours."
    },
    {
        question: "What makes SusaLabs a custom software development company?",
        answer: "We build every solution from scratch, tailored to your exact business workflows, user needs, and technical environment. We don't use cookie-cutter templates or off-the-shelf frameworks where custom logic is needed. As a custom software development company, we invest heavily in discovery — understanding your processes before writing a single line of code."
    },
    {
        question: "Are you an AI software development company?",
        answer: "Yes. AI software development is one of our core specialisations. We build GPT-powered chatbots, ML recommendation systems, computer vision APIs, generative AI applications, and LLM-integrated enterprise platforms. We work with OpenAI, Anthropic Claude, Google Gemini, LangChain, and custom open-source models — making us a genuine AI software development company, not just a software company that adds AI as an afterthought."
    },
    {
        question: "Why choose a software development company in India?",
        answer: "India offers the world's largest pool of English-speaking software engineers at 40–60% lower cost than the US or UK. As a software development company in India with a US presence (Alpharetta, GA), SusaLabs combines offshore cost efficiency with Western project management standards, timezone overlap, and a proven track record of on-time, on-budget delivery for US and UK clients."
    },
    {
        question: "How long does custom software development take?",
        answer: "A simple MVP takes 8–12 weeks. A mid-complexity web or mobile application takes 3–5 months. Enterprise software platforms with multiple integrations typically take 5–9 months. SusaLabs uses 2-week agile sprints with bi-weekly demos — you see working software from week two, not just at the end of the project."
    },
    {
        question: "Do you build CRM and ERP software?",
        answer: "Yes. CRM software development and ERP software development are two of our core service lines. We build custom CRM platforms for sales, marketing, and customer service teams — including industry-specific CRM for financial services and healthcare. Our ERP solutions cover finance, supply chain, HR, and inventory — all built as modular, cloud-native systems."
    },
    {
        question: "What industries does SusaLabs serve?",
        answer: "We serve Healthcare & MedTech, Financial Services & Fintech, Insurance, E-commerce & Retail, Logistics & Supply Chain, Legal Tech, EdTech, Real Estate, SaaS companies, and professional services firms. We have compliance frameworks and domain expertise for regulated industries — HIPAA for healthcare, SOC 2 and PCI-DSS for fintech, and GDPR for European clients."
    },
    {
        question: "Can you integrate AI into my existing software?",
        answer: "Absolutely. AI integration into existing products is a major part of our AI software development company service. We add AI layers to existing web apps, mobile apps, CRMs, and ERPs — building chatbot interfaces, recommendation engines, document intelligence modules, and predictive analytics dashboards that connect to your current systems via robust REST or GraphQL APIs."
    },
    {
        question: "Do you offer post-launch software maintenance?",
        answer: "Yes. We offer ongoing software maintenance packages that include bug fixes, security patches, performance optimisation, feature additions, cloud infrastructure monitoring, and model retraining for AI products. Monthly maintenance packages start at $1,500/month and are tailored to your product's complexity and uptime requirements."
    },
    {
        question: "How is SusaLabs different from other software development companies?",
        answer: "Three things: (1) We are a US-India hybrid — Alpharetta, GA office for project management and client relationships; Gurugram, India for engineering execution. (2) We are an AI-native software development company — AI is not an add-on, it's built into our engineering culture. (3) We focus obsessively on measurable outcomes — every project includes clear KPIs, analytics dashboards, and post-launch performance reviews."
    }
];

const SoftwareDevelopmentPage: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    /* ─── Why Choose SusaLabs ─── */
    const whyChooseUs = [
        {
            title: "Full-Stack Software Development Expertise",
            description: "Our engineers cover the complete technology spectrum — frontend (React, Angular, Vue.js), backend (Node.js, Python, Java, .NET), mobile (React Native, Flutter, Swift, Kotlin), databases (PostgreSQL, MongoDB, MySQL), cloud (AWS, Azure, GCP), and DevOps (CI/CD, Docker, Kubernetes). As a custom software development company, we assemble the exact stack your product needs — no unnecessary complexity, no technology lock-in.",
            tags: ["Full Stack", "React & Node.js", "Python & Java", "Cloud Native", "DevOps & CI/CD"],
            icon: <FiCode className="text-2xl text-indigo-400" />
        },
        {
            title: "AI-First Software Development",
            description: "We are not just a software development company — we are an AI software development company that builds intelligence into everything we engineer. From GPT-powered chatbots and ML recommendation engines to computer vision APIs and predictive analytics dashboards, our AI capabilities are embedded across all our software services. We work with OpenAI, Anthropic Claude, Google Gemini, LangChain, and open-source LLMs.",
            tags: ["GPT Integration", "ML Pipelines", "Computer Vision", "Predictive Analytics", "LLM Fine-Tuning"],
            icon: <FiCpu className="text-2xl text-violet-400" />
        },
        {
            title: "End-to-End Product Delivery",
            description: "From the first wireframe to production deployment — and everything after — we own the full software development lifecycle. Our process: Discovery & Requirements, UI/UX Design, Architecture, Agile Development (2-week sprints), QA & Testing, Deployment, and Ongoing Maintenance. One team, one point of accountability, zero handoff chaos.",
            tags: ["Discovery to Launch", "Agile Sprints", "QA & Testing", "CI/CD Deployment", "Post-Launch Support"],
            icon: <FiLayers className="text-2xl text-purple-400" />
        },
        {
            title: "Industry-Specific Software Solutions",
            description: "Generic software rarely fits unique business processes. As a custom software development company, we build purpose-built platforms for Healthcare (HIPAA-compliant), Finance & Fintech (SOC 2, PCI-DSS), Insurance, Logistics, E-commerce, Legal, Education, and Real Estate. We understand the compliance requirements, workflow nuances, and integration needs of each industry.",
            tags: ["Healthcare Tech", "Fintech Software", "Logistics Platforms", "Legal Tech", "EdTech"],
            icon: <FiTarget className="text-2xl text-blue-400" />
        },
        {
            title: "Affordable Offshore Software Development Teams",
            description: "SusaLabs is a leading software development company in India with a development hub in Gurugram, Haryana. Our offshore teams give you access to senior engineers — full-stack developers, AI specialists, DevOps engineers, and QA experts — at 40–60% lower cost than US or UK hiring rates, without sacrificing quality, communication, or delivery speed. Flexible models: fixed-price, time-and-material, or dedicated monthly team.",
            tags: ["Offshore Development", "India-Based Engineers", "40-60% Cost Saving", "Flexible Engagement"],
            icon: <FiGlobe className="text-2xl text-cyan-400" />
        }
    ];

    /* ─── Core Software Services ─── */
    const services = [
        {
            title: "Custom Software Development",
            description: "We design and build fully custom software solutions from scratch — tailored precisely to your business workflows, user needs, and technical environment. Our custom software development services cover web applications, SaaS platforms, internal tools, automation software, APIs, and data pipelines. Every solution is built with scalability, security, and maintainability at its core.",
            techNote: "Tech stack: React, Node.js, Python, Java, .NET, PostgreSQL, MongoDB, AWS, Azure.",
            tags: ["Custom Web Apps", "SaaS Development", "Internal Tools", "API Development", "Automation"],
            icon: <FiCode className="text-3xl text-indigo-400" />
        },
        {
            title: "AI Software Development",
            description: "As a specialist AI software development company, we build production-ready AI applications — from GPT-powered chatbots and document intelligence tools to ML-driven recommendation engines, computer vision systems, and full-stack LLM platforms. We integrate AI into new builds and existing products alike, using OpenAI, Anthropic, LangChain, HuggingFace, and custom-trained models.",
            useCases: "AI customer support bots, document processing, predictive analytics, AI code assistants, generative AI apps.",
            tags: ["GPT-4 Integration", "LangChain", "ML Pipelines", "Generative AI", "AI APIs"],
            icon: <FiCpu className="text-3xl text-violet-400" />
        },
        {
            title: "Mobile App Development",
            description: "We build high-performance mobile applications for Android, iOS, and cross-platform using React Native, Flutter, and native development where performance demands it. Our mobile software engineering includes on-device AI, offline functionality, push notifications, payment integrations, and deep-link architecture — built to App Store and Play Store standards.",
            useCases: "See our dedicated mobile app development services.",
            tags: ["Android", "iOS", "React Native", "Flutter", "On-Device AI", "App Store Launch"],
            icon: <FiSmartphone className="text-3xl text-purple-400" />
        },
        {
            title: "CRM Software Development",
            description: "We build and customise CRM software platforms that connect your sales, marketing, and customer service teams. From operational CRM systems and custom Salesforce extensions to fully bespoke CRM software for financial services, healthcare, and e-commerce — our CRM solutions are engineered around how your team actually works, not how a generic vendor assumes you work.",
            useCases: "Learn more about our CRM software development services.",
            tags: ["Custom CRM", "Salesforce Customisation", "Healthcare CRM", "Financial Services CRM", "CRM Integration"],
            icon: <FiUsers className="text-3xl text-blue-400" />
        },
        {
            title: "ERP Software Development",
            description: "We design and develop modular ERP systems that unify your finance, supply chain, HR, inventory, and operations in a single, connected platform. Whether you need a cloud-based ERP built from scratch, a legacy ERP modernisation, or custom ERP modules added to an existing system — our ERP software development team delivers scalable, secure, ROI-driven solutions.",
            useCases: "Explore our ERP development services.",
            tags: ["Custom ERP", "Cloud ERP", "ERP Integration", "Legacy ERP Modernisation", "ERP Modules"],
            icon: <FiDatabase className="text-3xl text-cyan-400" />
        },
        {
            title: "Cloud & DevOps Engineering",
            description: "We architect, migrate, and manage cloud infrastructure on AWS, Azure, and Google Cloud. Our DevOps engineering teams implement CI/CD pipelines, containerisation (Docker, Kubernetes), infrastructure-as-code (Terraform, Ansible), and monitoring dashboards — ensuring your software is always deployed faster, runs more reliably, and costs less to operate at scale.",
            tags: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "CI/CD", "Infrastructure as Code"],
            icon: <FiCloud className="text-3xl text-indigo-400" />
        },
        {
            title: "Enterprise Software Development",
            description: "Large organisations have complex requirements: legacy integrations, compliance mandates, multi-tenant architectures, and thousands of concurrent users. Our enterprise software development practice has delivered mission-critical platforms for healthcare networks, financial institutions, insurance companies, and global logistics firms. We bring the process maturity, security practices, and architectural expertise that enterprise projects demand.",
            tags: ["Enterprise Architecture", "Multi-Tenant SaaS", "Legacy Integration", "High-Scale Systems", "Compliance-Ready"],
            icon: <FiMonitor className="text-3xl text-violet-400" />
        },
        {
            title: "Software Consulting & Architecture",
            description: "Not every engagement starts with writing code. Our software consulting service helps you make the right technology decisions before a single line is written. We conduct technical audits of existing codebases, design scalable architecture blueprints, evaluate build-vs-buy decisions, assess AI readiness, and create detailed technical roadmaps for product teams and CTOs navigating complex software decisions.",
            tags: ["Technical Audit", "Architecture Design", "AI Readiness", "CTO Advisory", "Technology Roadmap"],
            icon: <FiShield className="text-3xl text-blue-400" />
        }
    ];

    /* ─── Performance Metrics ─── */
    const metrics = [
        {
            value: "50+",
            label: "Successful Software Products Delivered",
            supportingText: "Delivered across US, UK & India — from lean MVPs to full-scale enterprise platforms for regulated industries."
        },
        {
            value: "40–60%",
            label: "Cost Saving vs US/UK Rates",
            supportingText: "Clients using our India-based engineering team save 40–60% compared to equivalent US or UK hiring rates, with zero quality trade-off."
        },
        {
            value: "99.2%",
            label: "Average Crash-Free Rate",
            supportingText: "Across all mobile applications launched by SusaLabs — measured at 30 days post-launch using Firebase Crashlytics and Sentry."
        },
        {
            value: "2 Weeks",
            label: "Time to First Working Prototype",
            supportingText: "Every new project delivers a working, clickable prototype within the first two sprints — so you see software, not slide decks."
        }
    ];

    /* ─── Process Steps ─── */
    const processSteps = [
        { title: "Discovery & Requirements", description: "We map your business goals, user journeys, and technical requirements to define the exact architecture your software needs.", color: "from-indigo-500 to-violet-500" },
        { title: "UI/UX Design", description: "User-centred wireframes and high-fidelity prototypes — signed off by you before a line of code is written.", color: "from-violet-500 to-purple-500" },
        { title: "Agile Development", description: "2-week sprints with bi-weekly demos. You see working software from week two — not just at final handover.", color: "from-purple-500 to-blue-500" },
        { title: "QA & Testing", description: "Automated and manual testing across all modules, devices, and user roles — zero-defect deployments as the baseline.", color: "from-blue-500 to-cyan-500" },
        { title: "Deployment & Launch", description: "CI/CD pipelines, cloud infrastructure setup, and zero-downtime launch with full hypercare support.", color: "from-cyan-500 to-teal-500" },
        { title: "Post-Launch Support", description: "Ongoing maintenance, security patches, performance monitoring, AI model retraining, and feature additions.", color: "from-teal-500 to-indigo-500" }
    ];

    /* ─── Industries ─── */
    const industries = [
        { name: "Healthcare & MedTech", icon: "🏥" },
        { name: "Financial Services & Fintech", icon: "💰" },
        { name: "Insurance", icon: "📋" },
        { name: "E-commerce & Retail", icon: "🛒" },
        { name: "Logistics & Supply Chain", icon: "🚚" },
        { name: "Legal Tech", icon: "⚖️" },
        { name: "Education & EdTech", icon: "📚" },
        { name: "Real Estate", icon: "🏢" },
        { name: "SaaS Companies", icon: "☁️" },
        { name: "Professional Services", icon: "💼" }
    ];

    /* ─── Tech Stack ─── */
    const techStack = [
        { category: "Frontend", items: ["React", "Next.js", "Angular", "Vue.js", "TypeScript"] },
        { category: "Backend", items: ["Node.js", "Python", "Java", ".NET", "Go"] },
        { category: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
        { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"] },
        { category: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"] },
        { category: "AI/ML", items: ["OpenAI GPT", "LangChain", "TensorFlow", "HuggingFace", "Anthropic Claude"] }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 text-white">
            {/* Floating Orbs — client-only to avoid SSR bailout */}
            {mounted && (
                <FloatingOrbs
                    className="absolute inset-0 overflow-hidden"
                    orbClassName="absolute rounded-full bg-indigo-500 opacity-10"
                />
            )}

            <div className="relative z-10 container mx-auto px-6 py-24">

                {/* ═══ FIX 3: Hero — Single H1 ═══ */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                        Custom Software Development Services
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mb-8" />
                    <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 leading-relaxed font-medium">
                        From custom web and mobile applications to AI-powered platforms, CRM systems, ERP solutions, and cloud infrastructure — SusaLabs is the software development company that builds for scale, speed, and measurable business outcomes.
                    </p>
                </div>

                {/* ═══ FIX 4: Intro Paragraphs ═══ */}
                <div className="mb-16">
                    <div className="bg-gradient-to-r from-indigo-600/20 to-violet-600/20 rounded-2xl p-8 border border-indigo-500/30 backdrop-blur-sm text-left">
                        <p className="text-lg leading-relaxed text-white mb-6">
                            In today&apos;s technology-driven world, the software you build defines the business you become. At SusaLabs, we are a full-service software development company delivering custom software development, AI-powered applications, and enterprise-grade platforms for startups, SMEs, and global enterprises across the US, UK, and India.
                        </p>
                        <p className="text-lg leading-relaxed text-white mb-6">
                            As a trusted custom software development company, our team brings deep expertise across web development, mobile app development, artificial intelligence, machine learning, CRM software, ERP systems, and cloud infrastructure — engineering solutions that are built to perform, scale, and deliver real ROI from day one.
                        </p>
                        <p className="text-lg leading-relaxed text-white mb-6">
                            Whether you need a lean MVP built in 8 weeks, a complete enterprise software overhaul, or an AI software development company that can integrate cutting-edge machine learning into your existing products — SusaLabs has the engineers, the process, and the track record to deliver it.
                        </p>
                        <p className="text-lg leading-relaxed text-white">
                            Backed by offices in Alpharetta, Georgia (USA) and Gurugram, India — we combine Western project standards with the cost advantage of being a top software development company in India. Trusted by 50+ clients globally. Zero compromise on quality.
                        </p>
                    </div>
                </div>

                {/* ═══ FIX 5: Why Choose SusaLabs ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                        Why Choose SusaLabs as Your Software Development Company?
                    </h2>
                    <p className="text-center text-white/70 mb-12 text-lg">
                        We don&apos;t just write code — we engineer competitive advantage.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseUs.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 group hover:border-indigo-500/50 transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="mr-4 p-2 bg-indigo-900/50 rounded-lg">{item.icon}</div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ═══ FIX 6: Core Software Services ═══ */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                        Our Software Development Services
                    </h2>
                    <p className="text-center text-white/70 mb-12 text-lg max-w-3xl mx-auto">
                        End-to-end software engineering across every technology domain — delivered by specialists, not generalists.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
                            >
                                <div className="flex items-start mb-5">
                                    <div className="mr-4 p-3 bg-indigo-900/40 rounded-lg flex-shrink-0">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                </div>
                                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                                {service.techNote && (
                                    <p className="text-sm text-gray-400 mb-4">
                                        <span className="text-violet-400 font-semibold">Tech stack: </span>{service.techNote.replace('Tech stack: ', '')}
                                    </p>
                                )}
                                {service.useCases && (
                                    <p className="text-sm text-gray-400 mb-4">
                                        <span className="text-indigo-400 font-semibold">Use cases: </span>{service.useCases}
                                    </p>
                                )}
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ═══ Industries Section ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-4 text-white">
                        Industries We Serve
                    </h2>
                    <p className="text-center text-white/70 mb-10 max-w-2xl mx-auto">
                        Deep domain knowledge across regulated and complex industries — we know what your software needs to do, not just how to build it.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {industries.map((ind, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05, y: -3 }}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-indigo-500/50 text-center transition-all"
                            >
                                <div className="text-3xl mb-2">{ind.icon}</div>
                                <p className="text-white text-sm font-medium leading-tight">{ind.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ═══ Process Section ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-4 text-white">
                        Our Software Development Process
                    </h2>
                    <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
                        A structured, agile process that delivers working software fast — with full transparency at every step.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                            >
                                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${step.color}`} />
                                <div className="flex items-center mb-4 mt-1">
                                    <div className={`w-10 h-10 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0`}>
                                        {i + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ═══ Tech Stack Section ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-4 text-white">
                        Technology Stack We Build With
                    </h2>
                    <p className="text-center text-white/70 mb-10 max-w-2xl mx-auto">
                        Modern, proven technologies chosen for performance, scalability, and long-term maintainability.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -4 }}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                            >
                                <h3 className="text-lg font-bold text-white mb-4">{tech.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tech.items.map((item, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ═══ FIX 11: Performance Metrics ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        Real Results from Our Software Development Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {metrics.map((metric, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-br from-indigo-600/20 to-violet-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/30 text-center"
                            >
                                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 mb-2">
                                    {metric.value}
                                </div>
                                <h4 className="text-white font-bold mb-3 text-sm">{metric.label}</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">{metric.supportingText}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <a
                            href="/product"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 border border-white/20 transition-all"
                        >
                            View Case Studies <span>→</span>
                        </a>
                    </div>
                </motion.div>

                {/* ═══ FIX 7: FAQ Section ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mb-16 max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-center mb-10 text-white">
                        Frequently Asked Questions — Software Development Company
                    </h2>
                    <div className="space-y-4">
                        {faqList.map((faq, i) => (
                            <div
                                key={i}
                                className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                                    className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                                >
                                    <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                                    <span className="text-indigo-400 text-2xl leading-none flex-shrink-0">
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

                {/* ═══ FIX 12: Final CTA Section ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-indigo-600/20 to-violet-600/20 p-10 rounded-2xl border border-indigo-500/30 backdrop-blur-sm max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                            Ready to Build Your Software? Let&apos;s Talk.
                        </h2>
                        <p className="text-white/90 mb-4 max-w-4xl mx-auto text-lg leading-relaxed">
                            Whether you&apos;re a startup with a bold idea, a scale-up that needs to move faster, or an enterprise looking to modernise legacy systems with AI — SusaLabs is the software development company that makes it happen.
                        </p>
                        <p className="text-white/90 mb-4 max-w-4xl mx-auto text-lg leading-relaxed">
                            Schedule a free 30-minute discovery call with our software architects. We&apos;ll review your requirements, propose the right tech stack, and give you a clear project scope and cost estimate — at zero cost, zero commitment.
                        </p>
                        <p className="text-white/90 mb-8 max-w-4xl mx-auto text-lg leading-relaxed">
                            From custom software development and AI applications to mobile apps, CRM systems, and ERP platforms — we deliver production-ready software on time, within budget, and built to last.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <a
                                href="/contact-us"
                                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all w-full md:w-auto text-center"
                            >
                                Get a Free Software Quote
                            </a>
                            <a
                                href="/product"
                                className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 border border-white/20 transition-all w-full md:w-auto text-center"
                            >
                                View Our Portfolio
                            </a>
                            <a
                                href="/contact-us"
                                className="px-8 py-4 bg-transparent text-indigo-300 font-bold rounded-full hover:bg-indigo-900/30 border border-indigo-500/50 transition-all w-full md:w-auto text-center flex items-center justify-center gap-2"
                            >
                                Talk to a Software Expert <span>→</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ═══ FIX 9: JSON-LD Schema Markup ═══ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Organization",
                                "name": "SusaLabs",
                                "url": "https://susalabs.com",
                                "logo": "https://susalabs.com/images/logo.svg",
                                "description": "Software development company in India offering custom software development, AI software development, CRM, ERP, and mobile app solutions.",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "+1-478-888-4458",
                                    "contactType": "sales",
                                    "areaServed": ["US", "IN", "GB"]
                                },
                                "sameAs": [
                                    "https://www.linkedin.com/company/susalabs",
                                    "https://clutch.co/profile/susalabs"
                                ]
                            },
                            {
                                "@type": "Service",
                                "name": "Software Development Company",
                                "alternateName": [
                                    "Custom Software Development Company",
                                    "AI Software Development Company",
                                    "Software Development Company in India",
                                    "Custom Software Development Services"
                                ],
                                "provider": {
                                    "@type": "Organization",
                                    "name": "SusaLabs",
                                    "url": "https://susalabs.com"
                                },
                                "serviceType": "Software Development",
                                "areaServed": [
                                    { "@type": "Country", "name": "United States" },
                                    { "@type": "Country", "name": "India" },
                                    { "@type": "Country", "name": "United Kingdom" }
                                ],
                                "description": "End-to-end software development services — custom software, AI applications, mobile apps, CRM, ERP, and cloud engineering.",
                                "url": "https://susalabs.com/solutions/software-development",
                                "offers": {
                                    "@type": "Offer",
                                    "priceCurrency": "USD",
                                    "price": "15000",
                                    "description": "Starting price for MVP software development project"
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
                                    { "@type": "ListItem", "position": 3, "name": "Software Development Services", "item": "https://susalabs.com/solutions/software-development" }
                                ]
                            }
                        ]
                    })
                }}
            />
        </div>
    );
};

export default SoftwareDevelopmentPage;
