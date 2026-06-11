'use client';

import dynamic from 'next/dynamic';

const MumbaiPage = dynamic(
    () => import('@/app/components/sections/MumbaiPage'),
    {
        loading: () => (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600" />
                    <p className="text-lg font-medium text-gray-600 animate-pulse">Loading...</p>
                </div>
            </div>
        ),
    }
);

export default function MumbaiPageRoute() {
    return <MumbaiPage />;
}
