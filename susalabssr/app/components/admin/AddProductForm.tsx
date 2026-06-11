'use client';

import { useState } from 'react';

export default function AddProductForm() {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [responseMsg, setResponseMsg] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMsg('');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('link', link);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://susaweb-backend.el.r.appspot.com'}/project/add`, {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            if (response.ok) {
                setResponseMsg("✅ Project added successfully!");
                // Reset form
                setTitle('');
                setLink('');
                setDescription('');
                setImage(null);
                const fileInput = document.getElementById('image') as HTMLInputElement;
                if (fileInput) fileInput.value = '';
            } else {
                setResponseMsg(`❌ Error: ${result.message}`);
            }
        } catch (err) {
            setResponseMsg("❌ Network error.");
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Add New Project</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Project Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter project title"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                            Project Link
                        </label>
                        <input
                            type="text"
                            id="link"
                            name="link"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter project URL"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Project Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter project description"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Project Image
                        </label>
                        <div className="mt-1 flex items-center">
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
                                required
                            />
                        </div>
                        {image && (
                            <p className="mt-2 text-sm text-gray-500">
                                Selected: {image.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                                }`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>

                    {responseMsg && (
                        <div className={`text-center text-sm font-medium ${responseMsg.includes('✅') ? 'text-green-600' : 'text-red-600'
                            }`}>
                            {responseMsg}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
