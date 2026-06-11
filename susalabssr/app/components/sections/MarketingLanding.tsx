'use client';

import React from 'react';
import {
    FaCloud, FaServer, FaCode, FaMobileAlt,
    FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram,
    FaCopy, FaEnvelope, FaPhoneAlt
} from 'react-icons/fa';

const MarketingLanding: React.FC = () => {
    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        const formData = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
            email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
            subject: (form.elements.namedItem('subject') as HTMLInputElement).value.trim(),
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim()
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://susalabs.onrender.com'}/ContactForm/contactform`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Thank you for your message! Our team will contact you shortly.');
                form.reset();
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error('Error:', err);
            alert('Failed to submit form. Please check your connection.');
        }
    };

    const handleSocialRedirect = (platform: string) => {
        switch (platform) {
            case 'facebook':
                window.open('https://www.facebook.com/profile.php?id=61575717664111', '_blank');
                break;
            case 'twitter':
                window.open('https://x.com/susa_labs', '_blank');
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/company/susalabs', '_blank');
                break;
            case 'instagram':
                window.open('https://www.instagram.com/susa_labs/', '_blank');
                break;
            default:
                break;
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert(`${text} copied to clipboard!`);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-slate-50 text-slate-900">
            <header className="w-full py-2 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center bg-white/80 backdrop-blur-sm shadow-sm gap-2 sm:gap-0">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8 w-full sm:w-auto">
                    <div className="font-bold text-2xl sm:text-3xl bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent flex items-center">
                        <img
                            src="/logo.jpeg"
                            alt="Susalabs Logo"
                            className="h-8 w-8 sm:h-10 sm:w-10 mr-2 object-contain"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40';
                            }}
                        />
                        <span className='w-42'>Susalabs</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-6 text-xs sm:text-sm w-full justify-center sm:justify-start">
                        <div className="flex items-center gap-1">
                            <div className="flex items-center">
                                <FaEnvelope className="text-indigo-500 mr-1 sm:mr-2" size={12} />
                                <a
                                    href="mailto:contact@susalabs.com"
                                    className="hover:text-indigo-600 whitespace-nowrap"
                                >
                                    contact@susalabs.com
                                </a>
                            </div>
                            <button
                                onClick={() => copyToClipboard('contact@susalabs.com')}
                                className="text-gray-500 hover:text-indigo-600 ml-1"
                                title="Copy email"
                            >
                                <FaCopy size={10} />
                            </button>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className="flex items-center">
                                <FaPhoneAlt className="text-indigo-500 mr-1 sm:mr-2" size={12} />
                                <a
                                    href="tel:8595591496"
                                    className="hover:text-indigo-600 whitespace-nowrap"
                                >
                                    (859) 559-1496
                                </a>
                            </div>
                            <button
                                onClick={() => copyToClipboard('8595591496')}
                                className="text-gray-500 hover:text-indigo-600 ml-1"
                                title="Copy phone number"
                            >
                                <FaCopy size={10} />
                            </button>
                        </div>
                    </div>
                </div>
                <a
                    href="/"
                    className="px-4 py-1 sm:px-5 sm:py-2 rounded-full font-semibold cursor-pointer bg-gradient-to-r from-indigo-500 to-indigo-700 text-white text-xs sm:text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-400/40 whitespace-nowrap"
                >
                    Home
                </a>
            </header>

            <main className="flex-grow flex items-center justify-center p-4 w-full max-w-6xl mx-auto">
                <div className="hidden lg:flex flex-col items-center gap-6 sticky top-8 h-min self-start mr-8 mt-12">
                    <button
                        onClick={() => handleSocialRedirect('facebook')}
                        className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        aria-label="Facebook"
                    >
                        <FaFacebookF size={20} />
                    </button>
                    <button
                        onClick={() => handleSocialRedirect('twitter')}
                        className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-sky-50 hover:text-sky-500"
                        aria-label="Twitter"
                    >
                        <FaTwitter size={20} />
                    </button>
                    <button
                        onClick={() => handleSocialRedirect('linkedin')}
                        className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-blue-50 hover:text-blue-700"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn size={20} />
                    </button>
                    <button
                        onClick={() => handleSocialRedirect('instagram')}
                        className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={20} />
                    </button>
                </div>

                <div className="w-full h-full flex flex-col md:flex-row">
                    <div className="flex-1 p-6 sm:p-8 bg-white/90 backdrop-blur-sm rounded-xl mr-0 md:mr-8 mb-8 md:mb-0 flex flex-col justify-center shadow-md">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-indigo-700">
                            Custom Software Development Solutions
                        </h1>
                        <p className="font-normal mb-6 text-base sm:text-lg text-slate-600">
                            We deliver tailored software solutions that drive business growth and digital transformation.
                            From concept to deployment, we build scalable applications that meet your unique requirements.
                        </p>

                        <div className="my-6 sm:my-8">
                            <div className="flex items-center mb-4">
                                <div className="text-indigo-500 mr-3 sm:mr-4 text-lg sm:text-xl"><FaCode /></div>
                                <div className="text-slate-700 text-sm sm:text-base">End-to-End Custom Software Product Development</div>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="text-indigo-500 mr-3 sm:mr-4 text-lg sm:text-xl"><FaCloud /></div>
                                <div className="text-slate-700 text-sm sm:text-base">Scalable SaaS & Cloud Solutions</div>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="text-indigo-500 mr-3 sm:mr-4 text-lg sm:text-xl"><FaServer /></div>
                                <div className="text-slate-700 text-sm sm:text-base">End-to-End Product Engineering Services</div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-indigo-500 mr-3 sm:mr-4 text-lg sm:text-xl"><FaMobileAlt /></div>
                                <div className="text-slate-700 text-sm sm:text-base">Cross-Platform Application Development</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 p-6 sm:p-8 bg-white/90 backdrop-blur-sm rounded-xl flex flex-col justify-center shadow-md">
                        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-indigo-700">Get in Touch</h3>
                        <form onSubmit={submitForm}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-100 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                className="w-full mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-100 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                className="w-full mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-100 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="How can we help your business?"
                                required
                                className="w-full mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-100 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full p-3 sm:p-4 rounded-full font-semibold cursor-pointer bg-gradient-to-r from-indigo-500 to-indigo-700 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-sm sm:text-base"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <footer className="w-full py-4 px-8 text-center bg-white/80 backdrop-blur-sm text-slate-600 border-t border-slate-200 text-sm">
                <div>&copy; {new Date().getFullYear()} Susalabs Technologies. All rights reserved.</div>
            </footer>
        </div>
    );
};

export default MarketingLanding;
