'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiDatabase, FiLayers, FiLink, FiRefreshCw, FiTrendingUp, FiShield, FiGlobe, FiMonitor } from 'react-icons/fi';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const erpFaqList = [
    {
        question: "How much does custom ERP development cost?",
        answer: "Custom ERP development at SusaLabs ranges from $15,000 for a basic ERP module to $150,000+ for full-scale enterprise implementations."
    },
    {
        question: "How long does ERP implementation take?",
        answer: "A basic ERP module takes 4-6 weeks. A mid-complexity ERP system takes 3-5 months."
    },
    {
        question: "Which ERP platforms do you work with?",
        answer: "We work with Odoo, SAP Business One, Microsoft Dynamics 365, and custom-built ERP frameworks."
    },
    {
        question: "Can you build a HIPAA or GDPR-compliant ERP?",
        answer: "Yes. SusaLabs has built compliant ERP solutions for healthcare providers and EU-based businesses."
    },
    {
        question: "Do you offer offshore ERP development teams?",
        answer: "Yes. Our Gurugram, India team offers dedicated offshore ERP developers at 40-60% lower cost than US/UK rates."
    },
    {
        question: "What platforms do you build ERP apps for?",
        answer: "We develop ERP systems for Web (React/Next.js/Python), Android, iOS, and desktop with unified databases."
    },
    {
        question: "Can you integrate ERP with my existing software?",
        answer: "Absolutely. We specialize in ERP integration with CRMs (Salesforce, HubSpot, Zoho), e-commerce platforms, and internal tools."
    },
    {
        question: "What industries does SusaLabs build ERP for?",
        answer: "We serve Manufacturing, Healthcare, Retail & E-commerce, Logistics & Supply Chain, Finance, and Education."
    },
    {
        question: "Do you provide post-launch ERP support?",
        answer: "Yes. We offer ongoing ERP maintenance, module updates, performance optimization, and user training."
    }
];

const ErpDevelopmentPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'services' | 'industries' | 'benefits'>('services');
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const erpServices = [
        {
            title: "Custom ERP Software Development",
            description: "We design and build fully custom ERP systems tailored to your business workflows from scratch or on top of platforms like Odoo and SAP Business One. Our custom ERP solutions cover finance, HR, inventory, procurement, manufacturing, and supply chain integrated into one centralized platform. We deliver modular ERP architecture so you can start small and scale as your business grows.",
            icon: <FiDatabase className="text-3xl text-blue-400" />,
            features: ["Custom Architecture", "Odoo & SAP Experts", "Modular Design", "Full Stack Solutions"]
        },
        {
            title: "ERP Module Development & Customization",
            description: "Need a specific ERP module or a customization of an existing one? We build standalone ERP modules for inventory management, HR & payroll, CRM integration, project tracking, e-commerce sync, and reporting/analytics. Every module is API-ready and integrates cleanly with your existing ERP platform or third-party tools.",
            icon: <FiLayers className="text-3xl text-green-400" />,
            features: ["Standalone Modules", "Seamless APIs", "Inventory & HR", "Custom Reporting"]
        },
        {
            title: "ERP-CRM Integration Services",
            description: "We integrate your ERP with CRM platforms like Salesforce, HubSpot, and Zoho creating a unified view of customers, orders, inventory, and financials. Our ERP-CRM integrations eliminate data silos, automate lead-to-cash workflows, and give your sales and ops teams real-time visibility across the business.",
            icon: <FiLink className="text-3xl text-purple-400" />,
            features: ["Salesforce & HubSpot", "Data Syncing", "Real-Time Tracking", "Lead-To-Cash Ops"]
        },
        {
            title: "Cloud ERP Development & Migration",
            description: "We architect and deploy cloud-native ERP systems on AWS, GCP, and Azure delivering enterprise-grade scalability at SME-friendly costs. Our cloud ERP solutions support multi-tenant SaaS models, real-time dashboards, automated backups, and role-based access controls. We also handle ERP migrations from legacy on-premise systems to cloud.",
            icon: <FiRefreshCw className="text-3xl text-orange-400" />,
            features: ["AWS, GCP, Azure", "Legacy Migrations", "SaaS Models", "High Security"]
        },
        {
            title: "ERP-Based Business Process Automation",
            description: "We build automation layers inside your ERP eliminating repetitive tasks like invoice generation, purchase order approval, payroll processing, and inventory replenishment alerts. Reduce manual overhead by up to 60% with targeted ERP workflow automation that integrates with your existing systems via API.",
            icon: <FiTrendingUp className="text-3xl text-cyan-400" />,
            features: ["Workflow Automation", "API Integration", "Reduced Overhead", "Smart Approvals"]
        },
        {
            title: "ERP Implementation & Consulting Services",
            description: "End-to-end ERP implementation for businesses going live for the first time or switching platforms. SusaLabs handles discovery, requirements mapping, data migration, user training, go-live support, and post-implementation optimization. We've implemented ERP for manufacturing, logistics, healthcare, and retail clients across the US and India.",
            icon: <FiMonitor className="text-3xl text-blue-400" />,
            features: ["Requirements Mapping", "Data Migration", "Live Support", "User Training"]
        },
        {
            title: "ERP for Manufacturing & Supply Chain",
            description: "SusaLabs has deep experience building ERP solutions for manufacturing companies, logistics providers, and supply chain operators. Our manufacturing ERP modules cover production planning, BOM management, shop floor control, inventory tracking, and supplier management fully integrated with finance and HR modules for end-to-end visibility.",
            icon: <FiGlobe className="text-3xl text-green-400" />,
            features: ["Production Planning", "BOM Management", "Shop Floor Control", "Supply Chain Ops"]
        }
    ];

    const industries = [
        { name: "Manufacturing", icon: "🏭", description: "Streamline production, inventory, and supply chain management" },
        { name: "Retail", icon: "🛍️", description: "Unify POS, inventory, and customer data across locations" },
        { name: "Healthcare", icon: "🏥", description: "HIPAA-compliant systems for patient and resource management" },
        { name: "Education", icon: "📚", description: "Student information systems and institutional management" },
        { name: "Logistics", icon: "🚚", description: "Optimize fleet, warehouse, and delivery operations" },
        { name: "Finance", icon: "💰", description: "Accounting, compliance, and risk management solutions" }
    ];

    const benefits = [
        {
            title: "Deep ERP Expertise",
            description: (
                <>
                    Our engineers specialize in the full ERP stack from designing <a href="https://susalabs.com/solutions/erp" className="text-cyan-400 hover:text-cyan-300 underline font-medium">custom ERP modules</a> and building ERP-CRM integrations to deploying cloud-native ERP on AWS and Azure. We work with Odoo, SAP Business One, Microsoft Dynamics, and custom-built ERP frameworks.
                </>
            ),
            icon: <FiDatabase className="text-2xl text-blue-400" />
        },
        {
            title: "End-to-End Delivery",
            description: "From discovery to go-live, we own the full lifecycle of your ERP project. Our process includes requirements analysis, data migration strategy, module development, UI/UX design, QA testing, deployment, and ongoing support all under one roof.",
            icon: <FiTrendingUp className="text-2xl text-green-400" />
        },
        {
            title: "Cross-Platform",
            description: "We build unified ERP solutions that work across web, Android, and iOS with real-time sync, role-based dashboards, and native mobile performance. One ERP system access from anywhere.",
            icon: <FiMonitor className="text-2xl text-purple-400" />
        },
        {
            title: "ROI Focused",
            description: "Every ERP system we deliver comes with KPI dashboards and measurable metrics. We've helped clients achieve 40% faster processing, 60% fewer errors, and 30% cost reduction through targeted ERP automation.",
            icon: <FiLayers className="text-2xl text-orange-400" />
        },
        {
            title: "Affordable Offshore ERP Development Teams",
            description: (
                <>
                    SusaLabs operates dedicated offshore <a href="https://susalabs.com/office-pages" className="text-cyan-400 hover:text-cyan-300 underline font-medium">ERP development teams</a> from Gurugram, India giving you access to senior ERP engineers at 40-60% lower cost than US/UK rates, with zero compromise on quality, communication, or delivery timelines.
                </>
            ),
            icon: <FiGlobe className="text-2xl text-cyan-400" />
        }
    ];

    const techStack = [
        { category: "Languages", items: ["Java", "Python", "PHP", "JavaScript", "C#"] },
        { category: "Frameworks", items: ["Spring Boot", "Laravel", ".NET", "Node.js"] },
        { category: "Frontend", items: ["React", "Angular", "Vue.js"] },
        { category: "Databases", items: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"] },
        { category: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
        { category: "Mobile", items: ["Android", "iOS"] }
    ];

    const results = [
        { value: "40%", label: "faster order processing" },
        { value: "60%", label: "fewer manual errors" },
        { value: "30%", label: "reduction in operational costs" },
        { value: "100%", label: "accurate real-time reporting" },
        { value: "50%", label: "increase in employee productivity" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
            {/* Floating Particles Background */}
            <FloatingOrbs
                className="absolute inset-0 overflow-hidden"
                orbClassName="absolute rounded-full bg-blue-500 opacity-10"
            />

            <div className="relative z-10 container mx-auto px-6 py-24">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-white"
                    >
                        ERP Software Development Services
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl max-w-4xl mx-auto text-white"
                    >
                        Transform your operations with intelligent, end-to-end ERP software development. We build scalable, production-ready ERP applications from custom modules to full-stack cloud ERP platforms integrated with your CRM and data systems.
                    </motion.p>
                </div>

                {/* Introduction Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
                        <p className="text-lg leading-relaxed text-white mb-4">
                            In today's data-driven world, businesses that automate win. At SusaLabs, we specialize in end-to-end ERP development for SMEs, startups, and enterprises — helping teams eliminate manual work, centralize operations, and build custom ERP software solutions that deliver real, measurable ROI. Our ERP software development team brings deep expertise in ERP module development, CRM integration, business process automation, cloud ERP architecture, and offshore ERP delivery — turning complex requirements into intuitive, scalable systems.
                        </p>
                        <p className="text-lg leading-relaxed text-white">
                            Whether you need a custom ERP from scratch, an ERP-CRM integration, or an ERP upgrade, we ship production-ready software on time and within budget. Trusted by clients across the US, UK, and India — SusaLabs is your dedicated ERP development company.
                        </p>
                    </div>
                </motion.div>

                {/* What is ERP Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        What Is ERP & Why Does It Matter for Your Business?
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-lg text-white mb-6">
                                Enterprise Resource Planning (ERP) is the digital backbone of your company. It&apos;s a unified software platform that brings all core business operations — finance, supply chain, HR, production, customer service — into one seamless system.
                            </p>
                            <p className="text-lg text-white mb-6">
                                With SusaLabs ERP solutions, you can:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "📊 Track real-time performance across departments",
                                    "🔁 Eliminate duplication and manual errors",
                                    "📦 Manage inventory and procurement easily",
                                    "🤝 Integrate sales and CRM pipelines",
                                    "📈 Enable data-driven decisions across your organization"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="mr-3">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 rounded-2xl p-8 border border-blue-500/30 h-full flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-xl text-white mb-4">
                                    Our ERP development services are built for performance, scalability, and ROI. Whether you need a cloud-based ERP, hybrid, or on-premise solution — we develop it from scratch, just the way your business needs it.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-800 rounded-full p-1">
                        {[
                            { id: 'services', label: 'Our Services' },
                            { id: 'industries', label: 'Industries' },
                            { id: 'benefits', label: 'Benefits' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as 'services' | 'industries' | 'benefits')}
                                className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
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
                    <div className={activeTab === 'services' ? 'block' : 'hidden'}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our ERP Development Solutions</h2>
                            <p className="text-center text-white mb-8 max-w-3xl mx-auto">
                                We don&apos;t believe in one-size-fits-all software. Every business is unique — and so should be its ERP system.
                            </p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {erpServices.map((service, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
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
                                                <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
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
                            <h2 className="text-3xl font-bold text-center mb-12 text-white">Industries We Serve with ERP Software</h2>
                            <p className="text-center text-white mb-8 max-w-3xl mx-auto">
                                Our ERP software services have deep experience across sectors. We know what your business needs — and we build it.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {industries.map((industry, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all"
                                    >
                                        <div className="text-4xl mb-3">{industry.icon}</div>
                                        <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                                        <p className="text-gray-300">{industry.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className={activeTab === 'benefits' ? 'block' : 'hidden'}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-center mb-4 text-white">Why Choose SusaLabs for ERP Development?</h2>
                            <p className="text-center text-white mb-12 max-w-3xl mx-auto">
                                We don&apos;t just build ERP &mdash; we engineer operational excellence.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {benefits.map((benefit, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.03 }}
                                        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all"
                                    >
                                        <div className="flex items-center mb-4">
                                            <div className="mr-4">
                                                {benefit.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                                        </div>
                                        <p className="text-gray-300">{benefit.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* CRM Integration Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
                        <h2 className="text-3xl font-bold text-center mb-8 text-white">Built-In CRM That Works With You</h2>
                        <p className="text-center text-white mb-8 max-w-4xl mx-auto">
                            Modern businesses need more than ERP — they need ERP + CRM synergy.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                            {[
                                "Track every customer interaction",
                                "Sync lead-to-invoice workflows",
                                "Get real-time sales performance data",
                                "Automate follow-ups and communication",
                                "Manage accounts in one place"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center bg-white/5 rounded-lg p-4">
                                    <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                                    <span className="text-white">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-white">
                            Want to use Salesforce, HubSpot, or Zoho? We offer 100% seamless integrations with third-party CRMs too.
                        </p>
                    </div>
                </motion.div>

                {/* Tech Stack Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">Smart Tech Stack. Smarter Results.</h2>
                    <p className="text-center text-white mb-8 max-w-3xl mx-auto">
                        Our ERP and CRM platforms are built with modern tools and frameworks to ensure long-term scalability, security, and performance.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                            >
                                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tech.items.map((item, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile & Web Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-500/30 backdrop-blur-sm">
                        <h2 className="text-3xl font-bold text-center mb-8 text-white">Mobile & Web ERP Development</h2>
                        <p className="text-center text-white mb-8 max-w-3xl mx-auto">
                            Today&apos;s teams are mobile — your ERP should be too.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                                { icon: "🌐", label: "Web Browsers" },
                                { icon: "📱", label: "Android & iOS" },
                                { icon: "💻", label: "Desktop Apps" },
                                { icon: "🖥️", label: "Admin Dashboards" },
                                { icon: "🛒", label: "E-commerce" },
                                { icon: "🧾", label: "Field Operations" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center bg-white/5 rounded-lg p-4">
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <p className="text-white text-center text-sm">{item.label}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-white mt-8">
                            Manage your business from anywhere — in the office or on the move.
                        </p>
                    </div>
                </motion.div>

                {/* Results Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">Results That Speak for Themselves</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {results.map((result, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 text-center"
                            >
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                                    {result.value}
                                </div>
                                <p className="text-gray-200 text-sm">{result.label}</p>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center text-white mt-8 max-w-3xl mx-auto">
                        Your operations become smarter, leaner, and faster with ERP by SusaLabs.
                    </p>
                </motion.div>

                {/* Support Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
                        <h2 className="text-3xl font-bold text-center mb-8 text-white">Post-Launch Support That Actually Supports</h2>
                        <p className="text-center text-white mb-8 max-w-3xl mx-auto">
                            We don&apos;t disappear after delivery. SusaLabs offers:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            {[
                                "24×7 bug support & uptime monitoring",
                                "Regular system health checks",
                                "ERP upgrades and feature additions",
                                "Onboarding and staff training",
                                "SLA-based response times"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start bg-white/5 rounded-lg p-4">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></div>
                                    <span className="text-white">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-white">
                            Think of us as your long-term ERP Development partners, not just developers.
                        </p>
                    </div>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="mb-16 max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-center mb-10 text-white">
                        Frequently Asked Questions ERP Development
                    </h2>
                    <div className="space-y-4">
                        {erpFaqList.map((faq, i) => (
                            <div 
                                key={i} 
                                className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
                            >
                                <button 
                                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                                    className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                                >
                                    <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                                    <span className="text-blue-400 text-2xl leading-none">
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
                    <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-white">Ready to Build Your ERP System? Let's Talk.</h2>
                        <p className="text-white mb-8 max-w-4xl mx-auto text-lg leading-relaxed">
                            Whether you're a startup with a bold idea or an enterprise looking to automate and scale intelligently — SusaLabs has the ERP expertise, the team, and the track record to make it happen. Schedule a free 30-minute discovery call with our ERP architects. We'll review your requirements, suggest the right platform and modules, and give you a rough project scope at no cost, no commitment. From custom ERP development and ERP CRM integration to cloud ERP migration and ERP implementation services, we deliver production-ready ERP software on time and within budget.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                            <a href="/contact-us" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all w-full md:w-auto">
                                Get a Free ERP Project Quote
                            </a>
                            <a href="/product" className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 border border-white/20 transition-all w-full md:w-auto">
                                View Our ERP Portfolio
                            </a>
                            <a href="/contact-us" className="px-8 py-4 bg-transparent text-cyan-400 font-bold rounded-full hover:bg-cyan-900/30 border border-cyan-500/50 transition-all w-full md:w-auto">
                                Talk to an ERP Expert
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
                                "name": "Custom ERP Software Development",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "SusaLabs",
                                    "url": "https://susalabs.com",
                                    "logo": "https://susalabs.com/images/logo.jpeg"
                                },
                                "description": "Custom Enterprise Resource Planning (ERP) development services, CRM integrations, and automated supply chain software.",
                                "areaServed": "Worldwide",
                                "url": "https://susalabs.com/solutions/erp"
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": erpFaqList.map(f => ({
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
                                        "name": "ERP Development",
                                        "item": "https://susalabs.com/solutions/erp"
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

export default ErpDevelopmentPage;
