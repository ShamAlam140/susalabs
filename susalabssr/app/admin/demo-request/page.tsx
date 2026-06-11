'use client';

import { useState, useEffect, useMemo } from 'react';
import { FiSearch, FiCalendar, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { format } from 'date-fns';

type DemoRequestType = {
    _id: string;
    name: string;
    email: string;
    contact: string;
    projectTitle: string;
    projectUrl: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export default function DemoRequestPage() {
    const [requests, setRequests] = useState<DemoRequestType[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [dateFilter, setDateFilter] = useState<{ start: string; end: string }>({ start: '', end: '' });
    const [showDateFilter, setShowDateFilter] = useState(false);
    const itemsPerPage = 5;

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://susaweb-backend.el.r.appspot.com'}/user/getAll`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setRequests(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filter and paginate data
    const filteredRequests = useMemo(() => {
        return requests.filter(request => {
            const matchesSearch =
                request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                request.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                request.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                request.contact.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesDate =
                (!dateFilter.start || new Date(request.createdAt) >= new Date(dateFilter.start)) &&
                (!dateFilter.end || new Date(request.createdAt) <= new Date(dateFilter.end));

            return matchesSearch && matchesDate;
        });
    }, [requests, searchTerm, dateFilter]);

    const paginatedRequests = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredRequests.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredRequests, currentPage]);

    const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);

    const handleDateFilterApply = () => {
        setCurrentPage(1);
        setShowDateFilter(false);
    };

    const resetDateFilter = () => {
        setDateFilter({ start: '', end: '' });
        setCurrentPage(1);
    };

    const formatDate = (dateString: string) => {
        return format(new Date(dateString), 'dd MMM yyyy, hh:mm a');
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-gray-800">Demo Requests</h2>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <div className="relative flex-grow">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search requests..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>

                    <button
                        onClick={() => setShowDateFilter(!showDateFilter)}
                        className={`px-4 py-2 rounded-lg flex items-center justify-center gap-2 ${dateFilter.start || dateFilter.end
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        <FiCalendar />
                        <span>Date</span>
                        {(dateFilter.start || dateFilter.end) && (
                            <span className="bg-white text-blue-600 text-xs font-bold px-1.5 py-0.5 rounded-full">
                                {(dateFilter.start ? 1 : 0) + (dateFilter.end ? 1 : 0)}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Date Filter Panel */}
            {showDateFilter && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
                            <input
                                type="date"
                                className="w-full p-2 border rounded-lg"
                                value={dateFilter.start}
                                onChange={(e) => setDateFilter({ ...dateFilter, start: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
                            <input
                                type="date"
                                className="w-full p-2 border rounded-lg"
                                value={dateFilter.end}
                                onChange={(e) => setDateFilter({ ...dateFilter, end: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={resetDateFilter}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center gap-1"
                        >
                            <FiX />
                            Reset
                        </button>
                        <button
                            onClick={handleDateFilterApply}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Date</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {loading ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-4 text-center">
                                    Loading...
                                </td>
                            </tr>
                        ) : paginatedRequests.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                                    No requests found
                                </td>
                            </tr>
                        ) : (
                            paginatedRequests.map((request) => (
                                <tr key={request._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{request.name}</div>
                                                <div className="text-sm text-gray-500">{request.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{request.contact}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900">{request.projectTitle}</div>
                                        <a
                                            href={request.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-blue-600 hover:underline"
                                        >
                                            View Project
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{formatDate(request.createdAt)}</div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {filteredRequests.length > itemsPerPage && (
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-gray-700">
                        Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                        <span className="font-medium">
                            {Math.min(currentPage * itemsPerPage, filteredRequests.length)}
                        </span>{' '}
                        of <span className="font-medium">{filteredRequests.length}</span> results
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            <FiChevronLeft />
                        </button>

                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            let pageNum;
                            if (totalPages <= 5) {
                                pageNum = i + 1;
                            } else if (currentPage <= 3) {
                                pageNum = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                                pageNum = totalPages - 4 + i;
                            } else {
                                pageNum = currentPage - 2 + i;
                            }

                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => setCurrentPage(pageNum)}
                                    className={`px-3 py-1 rounded-md ${currentPage === pageNum ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}

                        {totalPages > 5 && currentPage < totalPages - 2 && (
                            <span className="px-2">...</span>
                        )}

                        {totalPages > 5 && currentPage < totalPages - 2 && (
                            <button
                                onClick={() => setCurrentPage(totalPages)}
                                className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
                            >
                                {totalPages}
                            </button>
                        )}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            <FiChevronRight />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
