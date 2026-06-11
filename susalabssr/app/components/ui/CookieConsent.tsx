'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent: React.FC = () => {
    const [showConsent, setShowConsent] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const hasAccepted = localStorage.getItem('cookieConsent');
        if (!hasAccepted) {
            setShowConsent(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowConsent(false);
    };

    // Don't render until mounted to prevent hydration mismatch
    if (!mounted || !showConsent) {
        return null;
    }

    return (
        <div className="fixed inset-x-0 bottom-0 bg-gradient-to-r from-blue-900 to-purple-900 text-white p-4 z-50 shadow-lg animate-fade-in-up">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1 text-center md:text-left">
                    <p className="text-sm md:text-base">
                        🍪 We use cookies to enhance your experience on our website.
                        By continuing to browse, you agree to our use of cookies.
                        Learn more in our{' '}
                        <Link
                            href="/cookies-policy"
                            className="text-blue-300 hover:text-blue-100 underline font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cookies Policy
                        </Link>{' '}
                        and{' '}
                        <Link
                            href="/privacy-policy"
                            className="text-blue-300 hover:text-blue-100 underline font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Privacy Policy
                        </Link>.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handleAccept}
                        className="bg-white text-blue-900 hover:bg-blue-100 font-medium px-5 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
