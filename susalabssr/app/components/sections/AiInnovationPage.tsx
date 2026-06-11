'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSmartphone, FiGlobe, FiCpu, FiZap, FiUsers, FiTrendingUp, FiShield, FiAward, FiTarget } from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const faqList = [
    {
        question: "How much does AI app development cost?",
        answer: "AI app development cost at SusaLabs ranges from $15,000 for a basic chatbot integration to $150,000+ for a full-stack enterprise AI platform. Cost depends on complexity, data requirements, model choice, and platform (Android/iOS/web). We offer free discovery calls to provide accurate estimates."
    },
    {
        question: "How long does it take to build an AI app?",
        answer: "A basic AI chatbot takes 4–6 weeks. A mid-complexity AI mobile app takes 3–4 months. Enterprise AI software platforms typically take 4–8 months. SusaLabs follows agile sprints with bi-weekly demos so you see progress from week one."
    },
    {
        question: "Which AI models do you use?",
        answer: "We work with OpenAI GPT-4, Anthropic Claude, Google Gemini, Meta Llama, and Mistral — selecting the best model for your use case. We also fine-tune open-source LLMs for privacy-first or on-premise deployments."
    },
    {
        question: "Can you build HIPAA-compliant AI apps?",
        answer: "Yes. SusaLabs has built multiple HIPAA-compliant healthcare AI applications including medical document processors, clinical chatbots, and patient management tools. We implement end-to-end encryption, audit logging, and BAA agreements."
    },
    {
        question: "Do you offer offshore AI development teams?",
        answer: "Yes. Our Gurugram, India team offers dedicated offshore AI developers at 40–60% lower cost than US/UK rates. Teams of 2–10 engineers available with flexible engagement models: fixed-price, T&M, or dedicated monthly retainer."
    },
    {
        question: "What platforms do you build AI apps for?",
        answer: "We develop AI apps for Android (Java/Kotlin/React Native), iOS (Swift/React Native/Flutter), Web (React/Next.js), and backend systems (Python/Node.js). Our cross-platform approach maximizes code reuse while maintaining native performance."
    },
    {
        question: "Can you integrate AI into my existing software?",
        answer: "Absolutely. We specialize in AI integration into existing products — adding chatbot layers to websites, embedding ML models into mobile apps, or building AI modules that plug into your current CRM, ERP, or data warehouse via APIs."
    },
    {
        question: "What industries does SusaLabs serve?",
        answer: "We serve Healthcare, Finance & Fintech, E-commerce & Retail, Logistics, Legal, Education (EdTech), Insurance, and Real Estate. We have dedicated AI solution templates and compliance frameworks for regulated industries."
    },
    {
        question: "Do you provide post-launch AI maintenance?",
        answer: "Yes. We offer ongoing model monitoring, retraining pipelines, performance optimization, and feature updates post-launch. Monthly AI maintenance packages start at $2,000/month and include model drift monitoring and accuracy reporting."
    },
    {
        question: "What makes SusaLabs different from other AI companies?",
        answer: "Three things: (1) We have both US (Alpharetta, GA) and India (Gurugram) offices — combining Western project management with offshore cost efficiency. (2) We deliver working prototypes within 2 weeks. (3) We focus on measurable ROI, not just technology."
    }
];

const AiAppDevelopmentPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'solutions' | 'process' | 'industries'>('solutions');
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const coreServices = [
        {
            title: "AI Chatbot & Conversational AI Development",
            description: "We design and develop intelligent AI chatbots for websites, mobile apps, WhatsApp, Slack, and enterprise platforms. Our conversational AI solutions use state-of-the-art NLP, intent recognition, and context memory to handle complex multi-turn conversations. Use cases include 24/7 customer support, lead qualification, appointment booking, order tracking, and internal HR automation.",
            icon: <FiUsers className="text-3xl text-pink-400" />,
            features: ["Natural Language Processing", "24/7 Support", "Lead Capture", "WhatsApp Bot"]
        },
        {
            title: "AI App Development for Android & iOS",
            description: "We build AI-powered mobile applications for both Android and iOS using React Native, Flutter, and native development where needed. Our AI mobile apps feature real-time inference, offline model execution, voice recognition, and personalized recommendation engines. We integrate on-device ML models (TensorFlow Lite, Core ML) for privacy-first AI experiences.",
            icon: <FiSmartphone className="text-3xl text-purple-400" />,
            features: ["Android & iOS", "React Native", "TensorFlow Lite", "On-device AI"]
        },
        {
            title: "AI Website Development & Intelligent Web Portals",
            description: "We build AI-powered web platforms that think and learn. Our intelligent web portals feature ML-driven product recommendation engines, real-time sentiment dashboards, smart search (semantic + vector), and predictive analytics modules embedded directly into the UI.",
            icon: <FiGlobe className="text-3xl text-blue-400" />,
            features: ["Next.js", "Semantic Search", "Recommendation Engine", "Smart Analytics"]
        },
        {
            title: "Custom AI Software Development Services",
            description: "Our custom AI software development covers the full spectrum — from building RAG (Retrieval-Augmented Generation) pipelines and LLM fine-tuning to deploying computer vision tools, OCR engines, and predictive analytics platforms. We develop custom AI APIs, data ingestion pipelines, and model-serving infrastructure that integrates with your existing tech stack.",
            icon: <FiCpu className="text-3xl text-cyan-400" />,
            features: ["RAG Pipelines", "LLM Fine-tuning", "OCR", "Predictive Analytics"]
        },
        {
            title: "AI-Powered CRM Integration & Workflow Automation",
            description: "We build AI automation layers on top of your existing CRM (Salesforce, HubSpot, Zoho) and ERP systems — enabling intelligent lead scoring, automated email sequences, document processing, and smart routing of customer requests. Reduce manual overhead by up to 70% with our AI workflow automation solutions.",
            icon: <FiShield className="text-3xl text-green-400" />,
            features: ["CRM Automation", "AI Workflow", "Document Processing", "Salesforce AI"]
        },
        {
            title: "Generative AI Development Services",
            description: "Harness the power of generative AI with SusaLabs. We build production-ready applications powered by GPT-4, Claude, Gemini, Llama, and Mistral. Our generative AI services include custom GPT wrappers, AI content generation pipelines, code generation assistants, image/video AI tools, and enterprise LLM deployments with RAG for accurate, hallucination-free outputs.",
            icon: <FiCpu className="text-3xl text-pink-400" />,
            features: ["GPT-4", "Claude API", "Generative AI", "LLM Integration"]
        },
        {
            title: "Healthcare AI App Development (HIPAA-Compliant)",
            description: "SusaLabs has deep experience building AI solutions for healthcare providers, hospitals, insurance companies, and medtech startups. Our healthcare AI apps include medical document processing (OCR + NLP), clinical decision support tools, patient-facing virtual assistants, and HIPAA-compliant data pipelines.",
            icon: <FiAward className="text-3xl text-blue-400" />,
            features: ["HIPAA-Compliant AI", "Medical OCR", "EHR Integration", "Clinical AI"]
        }
    ];

    const whyChooseUs = [
        {
            title: "Deep AI & Machine Learning Expertise",
            description: "Our engineers specialize in the full AI stack — from fine-tuning large language models (LLMs) and building RAG-based pipelines to deploying computer vision APIs and real-time NLP systems. We work with OpenAI, Anthropic Claude, Google Gemini, Hugging Face, LangChain, and more.",
            icon: <FiAward className="text-2xl text-yellow-400" />
        },
        {
            title: "End-to-End AI Product Delivery",
            description: "From ideation to App Store launch, we own the full lifecycle of your AI project. Our process includes discovery, data strategy, model selection, UI/UX design, development, testing, deployment, and ongoing support — all under one roof.",
            icon: <FiTarget className="text-2xl text-green-400" />
        },
        {
            title: "Cross-Platform AI Applications",
            description: "We build unified AI solutions that work seamlessly across Android, iOS, and web — powered by shared APIs, real-time sync, and platform-native UX. One codebase strategy where possible; native performance everywhere.",
            icon: <FiZap className="text-2xl text-blue-400" />
        },
        {
            title: "ROI-Focused AI Development",
            description: "Every AI solution we deliver comes with clear KPIs, analytics dashboards, and measurable performance metrics. We've helped clients achieve 40% faster claims processing, 90%+ document classification accuracy, and 50% reduction in customer response times.",
            icon: <FiTrendingUp className="text-2xl text-purple-400" />
        },
        {
            title: "Affordable Offshore AI Development Teams",
            description: "SusaLabs operates dedicated offshore AI development teams from Gurugram, India — giving you access to senior AI engineers at 40–60% lower cost than US/UK rates, with zero compromise on quality, communication, or timezone overlap.",
            icon: <FiGlobe className="text-2xl text-cyan-400" />
        }
    ];

    const platforms = [
        {
            platform: "Android & iOS",
            useCases: "AI chatbots, voice recognition, recommendation apps",
            icon: "📱"
        },
        {
            platform: "Web Applications",
            useCases: "Machine learning portals, analytics dashboards, chatbots",
            icon: "🌐"
        },
        {
            platform: "Backend Systems",
            useCases: "Data pipelines, NLP engines, document intelligence",
            icon: "⚙️"
        },
        {
            platform: "Integration APIs",
            useCases: "CRM, ERP, messaging APIs, IoT platforms",
            icon: "🔗"
        }
    ];

    const processSteps = [
        {
            step: "1",
            title: "Discovery & Strategy",
            description: "Technical audit, data review, ROI analysis and identify high-impact AI opportunities",
            color: "from-pink-500 to-rose-500"
        },
        {
            step: "2",
            title: "Proof of Concept (PoC)",
            description: "Develop a working prototype with your data and demonstrate value before full investment",
            color: "from-purple-500 to-indigo-500"
        },
        {
            step: "3",
            title: "Full Development & Integration",
            description: "Build scalable backend and front-end AI modules, connect seamlessly to mobile, ERP, or CRM, train data models and implement secure architectures",
            color: "from-blue-500 to-cyan-500"
        },
        {
            step: "4",
            title: "Deployment & Continuous Optimization",
            description: "Launch & monitor real-world use, provide training and support, iterate based on feedback and performance metrics",
            color: "from-cyan-500 to-teal-500"
        }
    ];

    const industries = [
        { name: "Healthcare & MedTech", icon: "🏥" },
        { name: "Finance & Insurance", icon: "💰" },
        { name: "Retail & E‑Commerce", icon: "🛒" },
        { name: "Telecom & Energy", icon: "⚡" },
        { name: "Education & EdTech", icon: "📚" }
    ];

    const metrics = [
        { 
            value: "40%", 
            label: "Faster Claims Processing",
            supportingText: "AI automation reduced document processing time by 40% for our insurance industry clients — saving 1,200+ staff-hours per month."
        },
        { 
            value: "90%+", 
            label: "Document Classification Accuracy",
            supportingText: "Our NLP-powered OCR systems achieve over 90% accuracy on unstructured medical and legal documents — outperforming manual review."
        },
        { 
            value: "50%", 
            label: "Reduction in Response Times",
            supportingText: "AI chatbots we've deployed handle 60–70% of customer queries autonomously, cutting average response time from 4 hours to under 2 minutes."
        },
        { 
            value: "2 Weeks", 
            label: "Time to Working Prototype",
            supportingText: "We deliver a functional AI proof-of-concept within 2 weeks of project kickoff — so you validate before you fully commit."
        },
        { 
            value: "50+", 
            label: "AI Projects Delivered",
            supportingText: "Across healthcare, finance, retail, and logistics — SusaLabs has shipped over 50 AI-powered products since 2020."
        },
        { 
            value: "3", 
            label: "Global Offices",
            supportingText: "US (Alpharetta, GA), India (Gurugram) — giving you the best of nearshore project management and offshore development cost."
        }
    ];

    const benefits = [
        "Accelerate Time-to-Value — Build proof of concept quickly and move to scale within weeks",
        "Cross-Platform Consistency — Android, iOS, and web all work from a shared backend",
        "Intelligent Automation — AI reduces manual effort and decision-making delay",
        "Enhanced Engagement — Empower users with chat-enabled, predictive, and voice-powered interfaces",
        "ROI Focused — Each project includes performance metrics, analytics dashboards, and technical KPIs"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-gray-900 text-white">
            {/* Floating Particles Background - Render only on client to avoid SSR bailout */}
            {mounted && (
                <FloatingOrbs
                    className="absolute inset-0 overflow-hidden"
                    orbClassName="absolute rounded-full bg-pink-500 opacity-10"
                />
            )}

            <div className="relative z-10 container mx-auto px-6 py-24">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        AI development services
                    </h1>
                    
                    <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-8" />
                    
                    <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white">
                        Transform your business with intelligent AI software development. We build scalable, production-ready AI applications — from conversational chatbots to full-stack ML platforms.
                    </p>
                </div>

                {/* Introduction Card - Plain HTML for reliable SSR */}
                <div className="mb-16">
                    <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl p-8 border border-pink-500/30 backdrop-blur-sm text-left">
                        <p className="text-lg leading-relaxed text-white mb-6">
                            In today's AI-first world, businesses that move fast win. At SusaLabs, we specialize in end-to-end AI app development for Android, iOS, and web — helping startups, SMEs, and enterprises automate workflows, launch AI chatbots, and build custom AI software solutions that deliver real ROI.
                        </p>
                        <p className="text-lg leading-relaxed text-white mb-6">
                            Our AI software development team brings deep expertise in machine learning, natural language processing (NLP), large language models (LLMs), and generative AI — turning complex requirements into intuitive, scalable applications. Whether you need a GPT-powered chatbot, a computer vision tool, or a predictive analytics platform, we ship production-ready AI products fast.
                        </p>
                        <p className="text-lg leading-relaxed text-white">
                            Trusted by clients across the US, UK, and India — SusaLabs is your dedicated AI development partner.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        Why Choose SusaLabs for AI App Development?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChooseUs.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center group hover:border-pink-500/50 transition-all duration-300"
                            >
                                <div className="mb-4 flex justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-pink-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Content Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-800 rounded-full p-1">
                        {[
                            { id: 'solutions', label: 'Core Solutions' },
                            { id: 'process', label: 'Our Process' },
                            { id: 'industries', label: 'Industries' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as 'solutions' | 'process' | 'industries')}
                                className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-pink-600 to-purple-500 text-white shadow-lg'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dynamic Content */}
                <div className="max-w-7xl mx-auto mb-16">
                    <div className={activeTab === 'solutions' ? 'block' : 'hidden'}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Core AI Development Solutions</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {coreServices.map((service, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
                                    >
                                        <div className="flex items-start mb-6">
                                            <div className="mr-4 p-3 bg-gray-700/50 rounded-lg">
                                                {service.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.features.map((feature, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className={activeTab === 'process' ? 'block' : 'hidden'}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Our Process Works</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {processSteps.map((step, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
                                    >
                                        <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.color}`}></div>
                                        <div className="flex items-center mb-4">
                                            <div className={`w-10 h-10 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                                                {step.step}
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed">{step.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className={activeTab === 'industries' ? 'block' : 'hidden'}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-center mb-12 text-white">Industries We Work With</h2>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
                                {industries.map((industry, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center hover:border-purple-500/50 transition-all"
                                    >
                                        <div className="text-4xl mb-3">{industry.icon}</div>
                                        <p className="text-white font-medium text-sm">{industry.name}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
                                <p className="text-center text-gray-100 text-lg">
                                    With a global delivery model, we combine technical expertise and agility to deliver solutions that scale across markets.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Platforms Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        Platforms & Technologies We Work On For AI App Development
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {platforms.map((platform, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center"
                            >
                                <div className="text-3xl mb-4">{platform.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-3">{platform.platform}</h3>
                                <p className="text-gray-300 text-sm">{platform.useCases}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Performance Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
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
                                className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-pink-500/30 text-center"
                            >
                                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2">
                                    {metric.value}
                                </div>
                                <h4 className="text-white font-bold mb-3">{metric.label}</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">{metric.supportingText}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        Benefits of Choosing Our Enterprise AI Solutions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ x: 5 }}
                                className="flex items-start bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                            >
                                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                                <p className="text-gray-200">{benefit}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Clients Say About SusaLabs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                text: "SusaLabs delivered our AI chatbot in just 6 weeks — on time, on budget, and it immediately cut our support ticket volume by 40%. Their team's expertise in NLP and conversational AI is genuinely world-class.",
                                author: "Sarah M.",
                                role: "VP Product, [HealthTech Company], Atlanta GA",
                                rating: 5,
                                project: "AI Chatbot Development"
                            },
                            {
                                text: "We needed an offshore AI development partner we could trust. SusaLabs' Gurugram team felt like an extension of our own — proactive communication, clean code, and a real understanding of our business goals.",
                                author: "James R.",
                                role: "CTO, [FinTech Startup], London UK",
                                rating: 5,
                                project: "FinTech AI Integration"
                            }
                        ].map((rev, i) => (
                            <div key={i} className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                                <div className="flex text-yellow-400 mb-4">
                                    {[...Array(rev.rating)].map((_, i) => <FiAward key={i} className="mr-1" />)}
                                </div>
                                <p className="text-gray-300 italic mb-6">"{rev.text}"</p>
                                <div>
                                    <h4 className="font-bold text-white">{rev.author}</h4>
                                    <p className="text-pink-400 text-sm mb-1">{rev.role}</p>
                                    <p className="text-gray-500 text-xs">Project: {rev.project}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="mb-16 max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-center mb-10 text-white">
                        Frequently Asked Questions — AI App Development
                    </h2>
                    <div className="space-y-4">
                        {faqList.map((faq, i) => (
                            <div 
                                key={i} 
                                className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300 overflow-hidden"
                            >
                                <button 
                                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                                    className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                                >
                                    <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                                    <span className="text-pink-400 text-2xl leading-none">
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

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 p-8 rounded-2xl border border-pink-500/30 backdrop-blur-sm max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">Ready to Build Your AI App? Let's Talk.</h2>
                        <p className="text-white mb-8 max-w-4xl mx-auto text-lg leading-relaxed">
                            Whether you're a startup with a bold AI idea or an enterprise looking to automate and scale intelligently — SusaLabs has the AI expertise, the team, and the track record to make it happen. Schedule a free 30-minute discovery call with our AI architects. We'll review your requirements, suggest the right tech stack, and give you a rough project scope — at no cost, no commitment. From AI chatbots and generative AI apps to full-stack ML platforms, we deliver production-ready AI software on time and within budget.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                            <a href="/contact-us" className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all w-full md:w-auto text-center">
                                Get a Free AI Project Quote
                            </a>
                            <a href="/product" className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 border border-white/20 transition-all w-full md:w-auto text-center">
                                View Our AI Portfolio
                            </a>
                            <a href="/contact-us" className="px-8 py-4 bg-transparent text-pink-400 font-bold rounded-full hover:bg-pink-900/30 border border-pink-500/50 transition-all w-full md:w-auto text-center">
                                Talk to an AI Expert
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* Structured JSON-LD Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Service",
                                "name": "AI App Development",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "SusaLabs",
                                    "url": "https://susalabs.com",
                                    "logo": "https://susalabs.com/images/logo.jpeg"
                                },
                                "description": "Custom AI app development for Android, iOS and web. We specialize in LLMs, Chatbots, and Machine Learning.",
                                "areaServed": "Worldwide",
                                "url": "https://susalabs.com/solutions/ai"
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
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://susalabs.com/"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Solutions",
                                        "item": "https://susalabs.com/solutions/"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": "AI App Development",
                                        "item": "https://susalabs.com/solutions/ai"
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />
        </div>
    );
};

export default AiAppDevelopmentPage;
