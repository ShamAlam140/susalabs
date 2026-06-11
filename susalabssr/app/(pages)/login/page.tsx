'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AuthResponse {
    message: string;
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
    };
}

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // Check if already logged in
    useEffect(() => {
        const authData = localStorage.getItem('authData');
        if (authData) {
            const parsedAuth = JSON.parse(authData);
            const now = new Date().getTime();

            if (parsedAuth.token && parsedAuth.expiry && now < parsedAuth.expiry) {
                router.push('/admin');
            }
        }
    }, [router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://susalabs.onrender.com'}/Admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data: AuthResponse = await response.json();
            console.log("LOGIN RESPONSE:", data);

            if (response.ok) {
                const expiry = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours
                const authDataWithExpiry = { ...data, expiry };

                localStorage.setItem('authData', JSON.stringify(authDataWithExpiry));

                router.push('/admin');
            } else {
                throw new Error(data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong. Please check your connection.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md mx-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900">
                        Welcome back
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Sign in to your admin dashboard
                    </p>
                </div>

                {error && (
                    <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <span className="text-sm text-blue-600 hover:text-blue-500 cursor-pointer">
                                Forgot password?
                            </span>
                        </div>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors duration-200 ${loading
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 shadow-md'
                            }`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Signing in...
                            </span>
                        ) : (
                            'Sign in'
                        )}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>
                        Don&apos;t have an account?{' '}
                        <span className="text-blue-600 hover:text-blue-500 font-medium cursor-pointer">
                            Contact support
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
