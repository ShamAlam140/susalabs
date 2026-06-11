'use client';

import dynamic from 'next/dynamic';

const AddBlogForm = dynamic(
    () => import('@/app/components/admin/AddBlogForm'),
    {
        loading: () => (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        ),
    }
);

export default function AddBlogPage() {
    return <AddBlogForm />;
}
