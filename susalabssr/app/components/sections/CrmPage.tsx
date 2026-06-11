'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiDatabase, FiLayers, FiLink, FiTrendingUp, FiShield,
    FiGlobe, FiMonitor, FiCpu, FiUsers, FiTarget, FiZap, FiAward
} from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

/* ─── FAQ Data (Fix 7) ─── */
const faqList = [
    {
        question: "How much does CRM software development cost?",
        answer: "CRM software development cost at SusaLabs ranges from $8,000 for a lightweight operational CRM to $120,000+ for a fully custom enterprise CRM platform with AI features and multi-system integrations. Cost depends on the number of modules, integrations, platforms (web/mobile), and industry compliance requirements. We offer free discovery calls to provide accurate estimates within 48 hours."
    },
    {
        question: "How long does it take to build a custom CRM?",
        answer: "A basic CRM software solution takes 6–10 weeks. A mid-complexity CRM with sales, marketing, and customer service modules takes 3–5 months. Full-scale enterprise CRM platforms with AI and multi-system integrations typically take 5–8 months. SusaLabs follows agile sprints with bi-weekly demos so you see working software from week one."
    },
    {
        question: "Do you build CRM software for the financial services industry?",
        answer: "Yes. We specialize in CRM software for financial services industry — including wealth management CRMs, insurance broker CRMs, fintech sales platforms, and loan origination systems. Our financial services CRM solutions include KYC/AML workflow automation, regulatory audit trails, and compliance with FINRA, SOC 2, and GDPR requirements."
    },
    {
        question: "Can you build HIPAA-compliant CRM software for healthcare?",
        answer: "Yes. SusaLabs has built multiple HIPAA-compliant CRM software healthcare platforms — including patient relationship management systems, medical practice CRMs, telehealth CRMs, and medical device sales platforms. We implement end-to-end encryption, audit logging, role-based access control, and EHR/EMR integrations (Epic, Cerner, HL7/FHIR)."
    },
    {
        question: "What is operational CRM software?",
        answer: "Operational CRM software focuses on automating the core customer-facing processes of your business — sales automation (lead assignment, pipeline management, deal tracking), marketing automation (email campaigns, lead nurturing, segmentation), and customer service automation (ticket routing, SLA management, agent desks). SusaLabs builds all three modules, either as a unified platform or as standalone tools that integrate with your existing tech stack."
    },
    {
        question: "Do you offer offshore CRM development teams?",
        answer: "Yes. Our Gurugram, India team offers dedicated offshore CRM software development services at 40–60% lower cost than US/UK rates. Teams of 2–10 engineers are available with flexible engagement models: fixed-price project, time & material, or dedicated monthly retainer. All teams communicate in English and overlap with US/EU timezones."
    },
    {
        question: "Can you integrate CRM with our existing tools?",
        answer: "Absolutely. We specialize in CRM integration — connecting your CRM software solutions to ERP systems (SAP, Oracle, custom ERP), marketing platforms (HubSpot, Mailchimp, Klaviyo), data warehouses (Snowflake, BigQuery), communication tools (Slack, Teams, Twilio), and payment gateways. We build RESTful and GraphQL APIs that ensure real-time, bidirectional data sync across all your systems."
    },
    {
        question: "What industries does SusaLabs serve with CRM solutions?",
        answer: "We serve Financial Services & Fintech, Healthcare & MedTech, Insurance, Real Estate, E-commerce & Retail, Legal Services, Education (EdTech), Logistics, SaaS companies, and Professional Services firms. We have dedicated CRM solution templates and compliance frameworks for regulated industries like healthcare and financial services."
    },
    {
        question: "What makes your CRM software for customer service stand out?",
        answer: "Our CRM software for customer service is built around how modern support teams actually work — omnichannel (email, chat, WhatsApp, phone in one inbox), AI-powered response suggestions, intelligent ticket routing based on skill, workload, and customer priority, full customer history at every touchpoint, and CSAT/NPS tracking built in. We also integrate with any existing helpdesk tool (Zendesk, Freshdesk) if you prefer a hybrid approach."
    },
    {
        question: "What makes SusaLabs different from other CRM development companies?",
        answer: "Three things: (1) We have both US (Alpharetta, GA) and India (Gurugram) offices — combining Western project management with offshore cost efficiency. (2) We deliver working prototypes within 2–3 weeks so you see results fast. (3) We focus on measurable business outcomes — not just software delivery — with clear KPIs, analytics dashboards, and post-launch performance reviews built into every project."
    }
];

const CrmPage: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    /* ─── Fix 5: Why Choose SusaLabs ─── */
    const whyChooseUs = [
        {
            title: "Full-Spectrum CRM Expertise",
            description: "Our engineers specialize in the complete CRM technology stack — from building custom sales pipeline automation and contact management systems to deploying AI-driven lead scoring, operational CRM workflows, and real-time customer analytics dashboards. We work with Salesforce, HubSpot, Zoho, Microsoft Dynamics, and build fully custom CRM software solutions from scratch when off-the-shelf tools don't fit.",
            icon: <FiAward className="text-2xl text-indigo-400" />
        },
        {
            title: "Industry-Specific CRM Development",
            description: "We build purpose-built CRM platforms tailored to your industry's compliance, workflow, and data requirements. From CRM software for financial services industry with audit trails and regulatory compliance, to CRM software healthcare with HIPAA-compliant patient relationship management — we understand the nuances that generic CRM vendors miss.",
            icon: <FiTarget className="text-2xl text-violet-400" />
        },
        {
            title: "Operational CRM That Actually Works",
            description: "Our operational CRM software connects your sales, marketing, and customer service teams in a single, unified platform. We automate lead capture, nurturing sequences, follow-up reminders, deal tracking, and customer service ticketing — so your team spends less time on admin and more time closing deals and delighting customers.",
            icon: <FiZap className="text-2xl text-purple-400" />
        },
        {
            title: "End-to-End CRM Product Delivery",
            description: "From discovery to deployment, we own the full lifecycle of your CRM software development project. Our process includes requirements analysis, data architecture, UI/UX design, development, testing, migration from legacy systems, training, and ongoing support — all under one roof with a single point of accountability.",
            icon: <FiLayers className="text-2xl text-blue-400" />
        },
        {
            title: "Affordable Offshore CRM Development Teams",
            description: "SusaLabs operates dedicated offshore CRM software development teams from Gurugram, India — giving you access to senior CRM engineers at 40–60% lower cost than US/UK rates, with zero compromise on quality, communication, or timezone overlap. We offer fixed-price, time-and-material, and dedicated team models.",
            icon: <FiGlobe className="text-2xl text-cyan-400" />
        }
    ];

    /* ─── Fix 6: Core CRM Solutions (7 cards) ─── */
    const crmSolutions = [
        {
            title: "Custom CRM Software Development",
            description: "We design and build fully custom CRM software solutions from scratch — tailored to your exact sales process, customer journey, and business logic. Our custom CRM development covers contact management, deal pipelines, activity tracking, document generation, reporting dashboards, and third-party API integrations. No licence fees, no unnecessary features — just a CRM that works exactly the way your team works.",
            techStack: "React, Node.js, Python, PostgreSQL, AWS, Azure, REST/GraphQL APIs",
            tags: ["Custom CRM Build", "Sales Pipeline", "Contact Management", "Custom Integrations"],
            icon: <FiDatabase className="text-3xl text-indigo-400" />
        },
        {
            title: "CRM Software for Financial Services Industry",
            description: "We build CRM software for financial services industry with the compliance, security, and audit capabilities that banks, wealth management firms, insurance companies, and fintech startups require. Our financial services CRM platforms include KYC/AML workflow automation, regulatory reporting dashboards, client portfolio management, and secure document storage — all built to meet FINRA, SOC 2, and GDPR requirements.",
            useCases: "Wealth management CRM, insurance broker CRM, fintech sales CRM, loan origination CRM",
            tags: ["Financial Services CRM", "KYC/AML Automation", "Regulatory Compliance", "Audit Trail"],
            icon: <FiTrendingUp className="text-3xl text-violet-400" />
        },
        {
            title: "CRM Software Healthcare",
            description: "Our CRM software healthcare solutions help hospitals, clinics, telehealth platforms, and medtech companies manage patient relationships, referral pipelines, and care coordination at scale. We build HIPAA-compliant CRM platforms with EHR/EMR integration (Epic, Cerner), patient communication automation, appointment scheduling, insurance verification workflows, and clinical team collaboration tools.",
            useCases: "Patient relationship management, medical practice CRM, telehealth CRM, medical device sales CRM",
            tags: ["Healthcare CRM", "HIPAA-Compliant", "EHR Integration", "Patient Management"],
            icon: <FiShield className="text-3xl text-purple-400" />
        },
        {
            title: "Operational CRM Software",
            description: "Our operational CRM software connects your front-line sales, marketing, and support teams in a unified platform that automates the day-to-day activities driving revenue. We build sales automation modules (lead assignment, follow-up sequences, deal stage automation), marketing automation layers (email campaigns, lead scoring, segment triggers), and customer service desks (ticket routing, SLA tracking, agent dashboards) — all talking to each other in real time.",
            tags: ["Sales Automation", "Marketing Automation", "Customer Service Desk", "Real-Time Sync"],
            icon: <FiMonitor className="text-3xl text-blue-400" />
        },
        {
            title: "CRM Software for Customer Service",
            description: "We build CRM software for customer service teams that transforms how your support agents handle interactions. Our customer service CRM platforms include omnichannel inbox (email, chat, WhatsApp, phone), intelligent ticket routing, SLA management, customer history timeline, CSAT/NPS tracking, and AI-powered response suggestions — giving your team the context to resolve every issue faster.",
            useCases: "B2B customer success CRM, e-commerce support CRM, SaaS customer service platform, helpdesk + CRM hybrid",
            tags: ["Omnichannel Support", "SLA Management", "CSAT Tracking", "AI Response Suggestions"],
            icon: <FiUsers className="text-3xl text-cyan-400" />
        },
        {
            title: "CRM Integration & Migration Services",
            description: "Already using Salesforce, HubSpot, or Zoho but need custom features or a seamless switch? SusaLabs specializes in CRM integration and migration — connecting your CRM to ERP systems, marketing platforms, data warehouses, and internal tools via robust APIs. We also handle full legacy CRM migrations with zero data loss, thorough field mapping, and user training to ensure a smooth transition.",
            tags: ["CRM Integration", "Salesforce Customisation", "HubSpot Integration", "Data Migration", "ERP Sync"],
            icon: <FiLink className="text-3xl text-indigo-400" />
        },
        {
            title: "AI-Powered CRM Development",
            description: "Harness the power of artificial intelligence inside your CRM with SusaLabs. We build AI layers on top of your CRM software solutions — intelligent lead scoring that ranks prospects by conversion probability, AI-driven email personalisation, churn prediction models, conversational AI chatbots for first-line customer service, and natural language query interfaces that let your team ask questions about their pipeline in plain English.",
            tags: ["AI Lead Scoring", "Churn Prediction", "Conversational AI", "NLP CRM Interface", "Predictive Analytics"],
            icon: <FiCpu className="text-3xl text-violet-400" />
        }
    ];

    /* ─── Fix 11: Performance Metrics ─── */
    const metrics = [
        {
            value: "45%",
            label: "Increase in Sales Team Productivity",
            supportingText: "Average productivity lift reported by clients after deploying SusaLabs' custom operational CRM software and sales pipeline automation."
        },
        {
            value: "60%",
            label: "Reduction in Customer Response Time",
            supportingText: "Our CRM software for customer service cuts average resolution time by automating ticket routing, agent context, and AI-powered response suggestions."
        },
        {
            value: "92%",
            label: "CRM User Adoption Rate (Day 30)",
            supportingText: "A financial services client achieved 92% user adoption within the first 30 days — driven by intuitive UX and targeted onboarding built into the platform."
        },
        {
            value: "40–60%",
            label: "Cost Saving vs US/UK Rates",
            supportingText: "Access senior CRM engineers through our Gurugram, India offshore team — 40–60% lower cost than US/UK equivalents with zero compromise on quality or delivery speed."
        }
    ];

    /* ─── Process Steps ─── */
    const processSteps = [
        { title: "Discovery & Requirements", description: "We map your sales process, customer journey, and data requirements to define the exact CRM architecture your business needs.", color: "from-indigo-500 to-violet-500" },
        { title: "Data Architecture & Design", description: "Custom data models, entity relationships, and UI/UX wireframes designed around your team's actual workflows.", color: "from-violet-500 to-purple-500" },
        { title: "Agile CRM Development", description: "Iterative builds with bi-weekly demos — you see working software from week one, not month four.", color: "from-purple-500 to-blue-500" },
        { title: "Integration & Testing", description: "API connections to your existing tools, data migration, QA testing across all modules and user roles.", color: "from-blue-500 to-cyan-500" },
        { title: "Launch & Training", description: "Smooth go-live with full user training, documentation, and 30-day hypercare support included.", color: "from-cyan-500 to-teal-500" },
        { title: "Support & Optimisation", description: "Ongoing performance monitoring, feature additions, and quarterly CRM health reviews to keep you ahead.", color: "from-teal-500 to-indigo-500" }
    ];

    /* ─── Industries ─── */
    const industries = [
        { name: "Financial Services & Fintech", icon: "💰" },
        { name: "Healthcare & MedTech", icon: "🏥" },
        { name: "Insurance", icon: "📋" },
        { name: "Real Estate", icon: "🏢" },
        { name: "E-commerce & Retail", icon: "🛒" },
        { name: "Legal Services", icon: "⚖️" },
        { name: "Education & EdTech", icon: "📚" },
        { name: "Logistics", icon: "🚚" },
        { name: "SaaS Companies", icon: "☁️" },
        { name: "Professional Services", icon: "💼" },
    ];

    /* ─── Tech Stack ─── */
    const techStack = [
        { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular"] },
        { category: "Backend", items: ["Node.js", "Python", "Django", "FastAPI", "Go"] },
        { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"] },
        { category: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"] },
        { category: "Integrations", items: ["Salesforce API", "HubSpot API", "Zoho API", "Twilio", "Stripe"] },
        { category: "AI/ML", items: ["OpenAI GPT", "LangChain", "TensorFlow", "Scikit-learn", "Python ML"] }
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

                {/* ═══ Fix 3: Hero — H1 + Subtitle ═══ */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                        CRM Software Development Services
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mb-8" />
                    <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 leading-relaxed">
                        Transform your customer relationships with intelligent CRM software development services. We build scalable, production-ready CRM platforms — from operational CRM software to AI-powered customer service solutions and industry-specific CRM systems.
                    </p>
                </div>

                {/* ═══ Fix 4: Intro Paragraphs ═══ */}
                <div className="mb-16">
                    <div className="bg-gradient-to-r from-indigo-600/20 to-violet-600/20 rounded-2xl p-8 border border-indigo-500/30 backdrop-blur-sm text-left">
                        <p className="text-lg leading-relaxed text-white mb-6">
                            In today&apos;s customer-first economy, businesses that manage relationships intelligently win. At SusaLabs, we specialize in end-to-end CRM software development services — helping startups, SMEs, and enterprises build custom CRM solutions that automate workflows, improve customer service, and drive measurable revenue growth.
                        </p>
                        <p className="text-lg leading-relaxed text-white mb-6">
                            Our CRM software development company brings deep expertise in operational CRM software, CRM integration, sales pipeline automation, and industry-specific CRM platforms — including CRM software for financial services industry, CRM software healthcare, and CRM software for customer service teams.
                        </p>
                        <p className="text-lg leading-relaxed text-white mb-6">
                            Whether you need a lightweight CRM software solution for a growing startup or a fully custom enterprise CRM platform with AI-driven analytics — SusaLabs engineers it from scratch, built precisely around how your business operates.
                        </p>
                        <p className="text-lg leading-relaxed text-white">
                            Trusted by clients across the US, UK, and India — SusaLabs is your dedicated CRM software development partner.
                        </p>
                    </div>
                </div>

                {/* ═══ Fix 5: Why Choose SusaLabs ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                        Why Choose SusaLabs for CRM Software Development?
                    </h2>
                    <p className="text-center text-white/70 mb-12 text-lg">
                        We don&apos;t just build CRM systems — we engineer customer relationship advantage.
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
                                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ═══ Fix 6: Core CRM Solutions (7 cards, all visible for SSR) ═══ */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        Our CRM Software Development Solutions
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {crmSolutions.map((solution, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
                            >
                                <div className="flex items-start mb-5">
                                    <div className="mr-4 p-3 bg-indigo-900/40 rounded-lg flex-shrink-0">
                                        {solution.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                                </div>
                                <p className="text-gray-300 mb-4 leading-relaxed">{solution.description}</p>
                                {solution.useCases && (
                                    <p className="text-sm text-gray-400 mb-2">
                                        <span className="text-indigo-400 font-semibold">Use cases:</span> {solution.useCases}
                                    </p>
                                )}
                                {solution.techStack && (
                                    <p className="text-sm text-gray-400 mb-4">
                                        <span className="text-violet-400 font-semibold">Tech stack:</span> {solution.techStack}
                                    </p>
                                )}
                                <div className="flex flex-wrap gap-2">
                                    {solution.tags.map((tag, idx) => (
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
                        Industries We Serve with CRM Software
                    </h2>
                    <p className="text-center text-white/70 mb-10 max-w-2xl mx-auto">
                        Deep domain knowledge across regulated and complex industries — we know what your CRM needs to do.
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
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        Our CRM Software Development Process
                    </h2>
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
                        Technology Stack We Use
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

                {/* ═══ Fix 11: Performance Metrics ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        Real Results from Our CRM Software Development Projects
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
                </motion.div>

                {/* ═══ Integrations Highlight ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-indigo-600/20 to-violet-600/20 rounded-2xl p-8 border border-indigo-500/30 backdrop-blur-sm">
                        <h2 className="text-3xl font-bold text-center mb-8 text-white">
                            Seamless CRM Integration with Your Existing Stack
                        </h2>
                        <p className="text-center text-white/80 mb-8 max-w-4xl mx-auto">
                            Your CRM shouldn&apos;t live in a silo. We connect it to everything your business runs on:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                "ERP systems — SAP, Oracle, custom ERP, real-time bi-directional sync",
                                "Marketing platforms — HubSpot, Mailchimp, Klaviyo, ActiveCampaign",
                                "Communication tools — Slack, Microsoft Teams, Twilio, WhatsApp API",
                                "Data warehouses — Snowflake, BigQuery, Redshift for advanced analytics",
                                "Payment gateways — Stripe, Razorpay, PayPal integrated into CRM workflows",
                                "Helpdesks — Zendesk, Freshdesk, Intercom for unified customer view"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start bg-white/5 rounded-lg p-4">
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                                    <span className="text-white text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ═══ Fix 7: FAQ Section ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mb-16 max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-center mb-10 text-white">
                        Frequently Asked Questions — CRM Software Development
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

                {/* ═══ Fix 12: Final CTA Section ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-indigo-600/20 to-violet-600/20 p-10 rounded-2xl border border-indigo-500/30 backdrop-blur-sm max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                            Ready to Build Your CRM System? Let&apos;s Talk.
                        </h2>
                        <p className="text-white/90 mb-4 max-w-4xl mx-auto text-lg leading-relaxed">
                            Whether you&apos;re a startup needing your first CRM software solution or an enterprise looking to replace a legacy system with a custom, scalable platform — SusaLabs has the CRM expertise, the team, and the track record to make it happen.
                        </p>
                        <p className="text-white/90 mb-4 max-w-4xl mx-auto text-lg leading-relaxed">
                            Schedule a free 30-minute discovery call with our CRM architects. We&apos;ll review your sales process, customer service workflows, and data requirements — then suggest the right CRM architecture and give you a rough project scope, at no cost and no commitment.
                        </p>
                        <p className="text-white/90 mb-8 max-w-4xl mx-auto text-lg leading-relaxed">
                            From operational CRM software and industry-specific platforms to full-stack custom CRM solutions with AI — we deliver production-ready CRM software on time and within budget.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <a
                                href="/contact-us"
                                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all w-full md:w-auto text-center"
                            >
                                Get a Free CRM Quote
                            </a>
                            <a
                                href="/product"
                                className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 border border-white/20 transition-all w-full md:w-auto text-center"
                            >
                                View Our CRM Portfolio
                            </a>
                            <a
                                href="/contact-us"
                                className="px-8 py-4 bg-transparent text-indigo-300 font-bold rounded-full hover:bg-indigo-900/30 border border-indigo-500/50 transition-all w-full md:w-auto text-center flex items-center justify-center gap-2"
                            >
                                Talk to a CRM Expert <span>→</span>
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
                                "@type": "Service",
                                "name": "CRM Software Development Services",
                                "alternateName": [
                                    "CRM Software Solutions",
                                    "Operational CRM Software",
                                    "CRM Software for Customer Service",
                                    "CRM Software for Financial Services Industry",
                                    "CRM Software Healthcare",
                                    "CRM Software Development Company"
                                ],
                                "provider": {
                                    "@type": "Organization",
                                    "name": "SusaLabs",
                                    "url": "https://susalabs.com",
                                    "logo": "https://susalabs.com/images/logo.jpeg",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "625 Union Hill Rd",
                                        "addressLocality": "Alpharetta",
                                        "addressRegion": "GA",
                                        "postalCode": "30004",
                                        "addressCountry": "US"
                                    },
                                    "telephone": "+14788884458",
                                    "email": "contact@susalabs.com"
                                },
                                "serviceType": "CRM Software Development",
                                "areaServed": [
                                    { "@type": "Country", "name": "United States" },
                                    { "@type": "Country", "name": "India" },
                                    { "@type": "Country", "name": "United Kingdom" }
                                ],
                                "description": "Custom CRM software development services for healthcare, finance, and enterprises. Operational CRM, customer service CRM, and industry-specific CRM platforms.",
                                "url": "https://susalabs.com/solutions/crm",
                                "hasOfferCatalog": {
                                    "@type": "OfferCatalog",
                                    "name": "CRM Software Development Services",
                                    "itemListElement": [
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom CRM Software Development" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Software for Financial Services Industry" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Software Healthcare" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Operational CRM Software" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI-Powered CRM Development" } }
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
                                    { "@type": "ListItem", "position": 3, "name": "CRM Software Development", "item": "https://susalabs.com/solutions/crm" }
                                ]
                            }
                        ]
                    })
                }}
            />
        </div>
    );
};

export default CrmPage;
