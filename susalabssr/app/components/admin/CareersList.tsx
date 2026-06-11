'use client';

import React, { useState, useEffect } from 'react';
import { FiSearch, FiDownload, FiTrash2, FiEdit, FiX, FiMapPin, FiCalendar } from 'react-icons/fi';

interface Resume {
    _id: string;
    name: string;
    number: string;
    education: string;
    resume: string;
    address: string;
    timestamp: string;
    __v: number;
}

export default function CareersList() {
    const [resumes, setResumes] = useState<Resume[]>([]);
    const [filteredResumes, setFilteredResumes] = useState<Resume[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [resumeToDelete, setResumeToDelete] = useState<string | null>(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchResumes();
    }, []);

    useEffect(() => {
        if (Array.isArray(resumes)) {
            const filtered = resumes.filter(resume =>
                resume.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                resume.number.includes(searchTerm) ||
                resume.education.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (resume.address && resume.address.toLowerCase().includes(searchTerm.toLowerCase()))
            );
            setFilteredResumes(filtered);
            setPage(0);
        }
    }, [searchTerm, resumes]);

    const formatIndianDateTime = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    const fetchResumes = async () => {
        try {
            setLoading(true);
            setError(null);

            const authData = localStorage.getItem('authData');
            const token = authData ? JSON.parse(authData).token : '';

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://susalabs.onrender.com'}/Resume/resume-get`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) throw new Error('Failed to fetch resumes');

            const responseData = await response.json();
            const data = responseData.data;

            if (!Array.isArray(data)) {
                throw new Error('Invalid data format received from server');
            }

            setResumes(data);
            setFilteredResumes(data);
        } catch (error) {
            console.error('Error fetching resumes:', error);
            setError(error instanceof Error ? error.message : 'Failed to fetch resumes');
            showSnackbar('Failed to fetch resumes', 'error');
            setResumes([]);
            setFilteredResumes([]);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteClick = (id: string) => {
        setResumeToDelete(id);
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (!resumeToDelete) return;

        try {
            const authData = localStorage.getItem('authData');
            const token = authData ? JSON.parse(authData).token : '';

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://susalabs.onrender.com'}/Resume/Dresume/${resumeToDelete}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) throw new Error('Failed to delete resume');

            setResumes(resumes.filter(resume => resume._id !== resumeToDelete));
            showSnackbar('Resume deleted successfully', 'success');
        } catch (error) {
            console.error('Error deleting resume:', error);
            showSnackbar('Failed to delete resume', 'error');
        } finally {
            setDeleteDialogOpen(false);
            setResumeToDelete(null);
        }
    };

    const handleDownload = (url: string, name: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = `resume_${name}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const showSnackbar = (message: string, severity: 'success' | 'error') => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
        setTimeout(() => setSnackbarOpen(false), 6000);
    };

    const totalPages = Math.ceil(filteredResumes.length / rowsPerPage);
    const paginatedResumes = filteredResumes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <div className="w-full">
            {/* Header */}
            <div className="bg-white shadow-sm rounded-lg mb-4 p-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h1 className="text-2xl font-bold text-gray-800">Resume Management</h1>
                    <div className="relative w-full md:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : error ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
                    <p>{error}</p>
                    <button onClick={fetchResumes} className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                        Retry
                    </button>
                </div>
            ) : (
                <>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted On</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {paginatedResumes.map((resume) => (
                                        <tr key={resume._id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{resume.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resume.number}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resume.education}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="flex items-center">
                                                    <FiMapPin className="mr-1 text-gray-400" />
                                                    {resume.address}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="flex items-center">
                                                    <FiCalendar className="mr-1 text-gray-400" />
                                                    {formatIndianDateTime(resume.timestamp)}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <button
                                                    onClick={() => handleDownload(resume.resume, resume.name)}
                                                    className="inline-flex items-center px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
                                                >
                                                    <FiDownload className="mr-1" />
                                                    Download
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button
                                                    onClick={() => handleDeleteClick(resume._id)}
                                                    className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                                                >
                                                    <FiTrash2 className="h-5 w-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
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
                                    {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, filteredResumes.length)} of {filteredResumes.length}
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

                    {/* Delete Confirmation Dialog */}
                    {deleteDialogOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
                                <div className="px-6 py-4 border-b border-gray-200">
                                    <h3 className="text-lg font-medium text-gray-900">Confirm Delete</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700">Are you sure you want to delete this resume? This action cannot be undone.</p>
                                </div>
                                <div className="px-6 py-3 border-t border-gray-200 flex justify-end gap-3">
                                    <button
                                        onClick={() => setDeleteDialogOpen(false)}
                                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleDeleteConfirm}
                                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* Snackbar */}
            {snackbarOpen && (
                <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg ${snackbarSeverity === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white flex items-center gap-2`}>
                    <span>{snackbarMessage}</span>
                    <button onClick={() => setSnackbarOpen(false)} className="ml-2">
                        <FiX />
                    </button>
                </div>
            )}
        </div>
    );
}
