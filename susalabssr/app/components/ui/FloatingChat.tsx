'use client';

import React, { useState, useEffect } from 'react';

const FloatingChatForm: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Handle hydration - only access localStorage after mount
    useEffect(() => {
        setMounted(true);
        const savedState = localStorage.getItem('chatFormState');
        if (savedState !== null) {
            setIsOpen(JSON.parse(savedState));
        } else {
            setIsOpen(true); // Default to open if no saved state
        }
    }, []);

    const toggleChat = (state: boolean) => {
        setIsOpen(state);
        localStorage.setItem('chatFormState', JSON.stringify(state));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://susaweb-backend.el.r.appspot.com'}/ChatForm/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Form submitted:', data);
                alert('Thank you for contacting us! We will get back to you soon.');
                setFormData({ name: '', email: '', phone: '' });
                setIsOpen(false);
                localStorage.setItem('chatFormState', JSON.stringify(false));
            } else {
                const error = await response.json();
                console.error('Error submitting form:', error.message);
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Network error:', error);
            alert('Network error. Please check your connection and try again.');
        }
    };

    // Don't render until mounted to prevent hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <>
            {!isOpen && (
                <button
                    onClick={() => toggleChat(true)}
                    className="fixed right-0 bottom-1/2 transform translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-l-full shadow-xl z-40 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center"
                    style={{ boxShadow: '0 4px 14px rgba(168, 85, 247, 0.4)' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium">Chat</span>
                </button>
            )}

            {isOpen && (
                <div className="fixed right-0 bottom-1/2 transform translate-y-1/2 z-40 w-64 bg-white shadow-2xl rounded-l-lg overflow-hidden transition-all duration-300 border border-gray-100" style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 flex justify-between items-center">
                        <h3 className="font-semibold text-sm">Chat with Team</h3>
                        <button
                            onClick={() => toggleChat(false)}
                            className="text-white hover:text-gray-200 focus:outline-none transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-3 space-y-3">
                        <div>
                            <label htmlFor="chat-name" className="block text-xs font-medium text-gray-600 mb-1">Name</label>
                            <input
                                type="text"
                                id="chat-name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="chat-email" className="block text-xs font-medium text-gray-600 mb-1">Email</label>
                            <input
                                type="email"
                                id="chat-email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="chat-phone" className="block text-xs font-medium text-gray-600 mb-1">Phone</label>
                            <input
                                type="tel"
                                id="chat-phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                                placeholder="+1 6766555"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition duration-200 shadow-md hover:shadow-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default FloatingChatForm;
