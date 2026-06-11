'use client';

import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

interface ChatUser {
    _id: string;
    name: string;
    email: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export default function ChatUserPage() {
    const [users, setUsers] = useState<ChatUser[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredData, setFilteredData] = useState<ChatUser[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://susaweb-backend.el.r.appspot.com'}/ChatForm/GetAll`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setUsers(data);
                setFilteredData(data);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phone.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
        setPage(0);
    }, [searchTerm, users]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString();
    };

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Chat Users</h1>

            {/* Search */}
            <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search users..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated At</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {paginatedData.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(user.createdAt)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(user.updatedAt)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200 mt-4 rounded-b-lg">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">Rows per page:</span>
                    <select
                        value={rowsPerPage}
                        onChange={(e) => {
                            setRowsPerPage(parseInt(e.target.value, 10));
                            setPage(0);
                        }}
                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">
                        {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, filteredData.length)} of {filteredData.length}
                    </span>
                    <button
                        onClick={() => setPage(prev => Math.max(0, prev - 1))}
                        disabled={page === 0}
                        className="p-1 rounded hover:bg-gray-200 disabled:opacity-50"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setPage(prev => Math.min(totalPages - 1, prev + 1))}
                        disabled={page >= totalPages - 1}
                        className="p-1 rounded hover:bg-gray-200 disabled:opacity-50"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
