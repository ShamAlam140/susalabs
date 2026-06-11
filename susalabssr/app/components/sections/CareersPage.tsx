'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiUser, FiPhone, FiBook, FiSend, FiLoader, FiMapPin } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import FloatingOrbs from '@/app/components/ui/FloatingOrbs';

const CareersPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        education: '',
        address: '',
        resume: null as File | null
    });
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            phone: '',
            education: '',
            address: '',
            resume: null
        });
        const fileInput = document.getElementById('resume-upload') as HTMLInputElement;
        if (fileInput) {
            fileInput.value = '';
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('education', formData.education);
            formDataToSend.append('address', formData.address);
            if (formData.resume) {
                formDataToSend.append('resume', formData.resume);
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://susalabs.onrender.com'}/Resume/resume`, {
                method: 'POST',
                body: formDataToSend,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Success:', result);
            alert('Application submitted successfully! Our team will contact you soon.');
            resetForm();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your application. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
            <FloatingOrbs className="inset-0 overflow-hidden pointer-events-none -z-10" orbClassName="absolute rounded-full bg-white opacity-20 backdrop-blur-sm" />
            <div className="absolute top-1/4 left-1/2 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl filter opacity-30 -translate-x-1/2"></div>

            <div className="relative z-10 container mx-auto px-6 py-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-4">
                        <span className="text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Careers With Us
                        </span>
                    </h2>
                    <motion.div
                        className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <p className="text-xl max-w-3xl mx-auto mt-6 text-gray-300">
                        Join our team of innovators and help shape the future of technology
                    </p>
                </motion.div>

                {/* Career Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-gray-400 mb-2 flex items-center">
                                <FiUser className="mr-2 text-blue-300" />
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Your full name"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label htmlFor="phone" className="text-sm font-medium text-gray-400 mb-2 flex items-center">
                                <FiPhone className="mr-2 text-blue-300" />
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="+1 (123) 456-7890"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        {/* Address Field */}
                        <div>
                            <label htmlFor="address" className="text-sm font-medium text-gray-400 mb-2 flex items-center">
                                <FiMapPin className="mr-2 text-blue-300" />
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Your complete address"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        {/* Education Field */}
                        <div>
                            <label htmlFor="education" className="text-sm font-medium text-gray-400 mb-2 flex items-center">
                                <FiBook className="mr-2 text-blue-300" />
                                Education
                            </label>
                            <select
                                id="education"
                                name="education"
                                value={formData.education}
                                onChange={handleInputChange}
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                                disabled={isLoading}
                            >
                                <option value="">Select your education level</option>
                                <option value="diploma">Diploma</option>
                                <option value="bachelors">Bachelor&apos;s Degree</option>
                                <option value="masters">Master&apos;s Degree</option>
                                <option value="phd">PhD</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <label className="text-sm font-medium text-gray-400 mb-2 flex items-center">
                                <FiUpload className="mr-2 text-blue-300" />
                                Upload Resume
                            </label>
                            <div className="flex items-center">
                                <label className={`flex flex-col items-center px-4 py-6 bg-gray-700 rounded-lg border border-gray-600 cursor-pointer hover:bg-gray-600 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                    <span className="text-sm text-gray-300 mb-2">
                                        {formData.resume ? formData.resume.name : 'Choose file'}
                                    </span>
                                    <input
                                        id="resume-upload"
                                        type="file"
                                        className="hidden"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        required
                                        disabled={isLoading}
                                    />
                                    <span className="text-xs text-gray-400">
                                        {!formData.resume && 'PDF, DOC, DOCX (Max 5MB)'}
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                                whileTap={{ scale: isLoading ? 1 : 0.95 }}
                                className={`w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center ${isLoading ? 'opacity-75' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <FiLoader className="mr-2 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <FiSend className="mr-2" />
                                        Submit Application
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </form>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <div className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30">
                        <h3 className="text-xl font-bold mb-4 text-white">Why Join Our Team?</h3>
                        <p className="text-gray-300 mb-6">
                            We offer competitive benefits, cutting-edge projects, and opportunities for growth
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                            onClick={() => router.push('/culture-benefit')}
                        >
                            Learn About Benefits →
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CareersPage;
