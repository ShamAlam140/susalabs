'use client';

import type React from "react";
import { useState, useRef } from "react";
import {
    Loader2,
    Bold,
    Italic,
    List,
    ListOrdered,
    Quote,
    Code,
    Link,
    AlignLeft,
    AlignCenter,
    AlignRight,
    ImageIcon,
    X,
    Upload,
} from "lucide-react";

export default function AddBlogForm(): React.ReactElement {
    const [formData, setFormData] = useState({
        authorName: "",
        blogTitle: "",
        blogDescription: "",
        category: "",
        keywords: "",
        metaDescription: "",
        canonicalUrl: "",
        file: null as File | null,
    });
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const editorRef = useRef<HTMLDivElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({
                ...prev,
                file: e.target.files![0],
            }));
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const authData = localStorage.getItem("authData");
            const token = authData ? JSON.parse(authData).token : null;

            if (!token) {
                setError("Please login again to upload images.");
                return;
            }

            for (const file of Array.from(files)) {
                try {
                    const data = new FormData();
                    data.append("file", file);

                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://susalabs.onrender.com'}/Blog/upload-inline-image`, {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        body: data,
                    });

                    if (!response.ok) {
                        throw new Error("Failed to upload image");
                    }

                    const result = await response.json();
                    const cloudinaryUrl = result.url;

                    setUploadedImages((prev) => [...prev, cloudinaryUrl]);
                } catch (err) {
                    console.error("Upload error:", err);
                    setError("Failed to upload one or more images. Please try again.");
                }
            }
        }
    };

    const handleEditorChange = () => {
        if (editorRef.current) {
            setFormData((prev) => ({
                ...prev,
                blogDescription: editorRef.current!.innerHTML,
            }));
        }
    };

    const formatText = (command: string, value?: string) => {
        document.execCommand(command, false, value);
        handleEditorChange();
        editorRef.current?.focus();
    };

    const insertHTML = (html: string) => {
        if (editorRef.current) {
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                range.deleteContents();
                const div = document.createElement("div");
                div.innerHTML = html;
                const fragment = document.createDocumentFragment();
                while (div.firstChild) {
                    fragment.appendChild(div.firstChild);
                }
                range.insertNode(fragment);
                handleEditorChange();
            } else {
                editorRef.current.innerHTML += html;
                handleEditorChange();
            }
        }
    };

    const insertImage = (imageUrl: string) => {
        const imageHTML = `<div style="margin: 20px auto; text-align: center; display: flex; justify-content: center; align-items: center; width: 100%;">
      <img src="${imageUrl}" alt="Blog image" style="max-width: 90%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.3s ease, box-shadow 0.3s ease; display: block; margin: 0 auto;" onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)'" />
    </div>`;
        insertHTML(imageHTML);
        editorRef.current?.focus();
    };

    const removeImage = (index: number) => {
        setUploadedImages((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");
        setSuccess("");

        try {
            const authData = localStorage.getItem("authData");
            const token = authData ? JSON.parse(authData).token : null;

            if (!token) {
                setError("Authentication token not found.");
                setIsSubmitting(false);
                return;
            }

            const data = new FormData();
            data.append("authorName", formData.authorName);
            data.append("blogTitle", formData.blogTitle);
            data.append("blogDescription", formData.blogDescription);
            data.append("category", formData.category);
            data.append("keywords", formData.keywords);
            data.append("metaDescription", formData.metaDescription);
            data.append("canonicalUrl", formData.canonicalUrl);
            data.append("dateTime", new Date().toISOString());
            if (formData.file) {
                data.append("file", formData.file);
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://susalabs.onrender.com'}/Blog/Addblog`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: data,
            });

            if (!response.ok) {
                throw new Error("Failed to add blog");
            }

            setSuccess("Blog added successfully!");
            setFormData({
                authorName: "",
                blogTitle: "",
                blogDescription: "",
                category: "",
                keywords: "",
                metaDescription: "",
                canonicalUrl: "",
                file: null,
            });
            setUploadedImages([]);

            if (editorRef.current) {
                editorRef.current.innerHTML = "";
            }
        } catch (err) {
            setError("Failed to add blog. Please try again.");
            console.error("Error adding blog:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6 bg-gray-50 min-h-screen">
            {/* Card Container */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                {/* Card Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-900">Add New Blog</h1>
                    <p className="text-gray-600 mt-1">Create and publish your blog post with rich content and images</p>
                </div>

                {/* Card Content */}
                <div className="p-6">
                    {/* Error Alert */}
                    {error && (
                        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                            <p className="text-red-800 text-sm">{error}</p>
                        </div>
                    )}

                    {/* Success Alert */}
                    {success && (
                        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
                            <p className="text-green-800 text-sm">{success}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Author Name & Blog Title */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">
                                    Author Name
                                </label>
                                <input
                                    id="authorName"
                                    name="authorName"
                                    type="text"
                                    value={formData.authorName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter author name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="blogTitle" className="block text-sm font-medium text-gray-700">
                                    Blog Title
                                </label>
                                <input
                                    id="blogTitle"
                                    name="blogTitle"
                                    type="text"
                                    value={formData.blogTitle}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter blog title"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div className="space-y-2">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Select a category</option>
                                <option value="Technology">Technology</option>
                                <option value="Finance">Finance</option>
                                <option value="Health">Health</option>
                                <option value="Travel">Travel</option>
                                <option value="Lifestyle">Lifestyle</option>
                            </select>
                        </div>

                        {/* SEO Fields */}
                        <div className="grid grid-cols-1 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700">
                                    Meta Description (SEO)
                                </label>
                                <input
                                    id="metaDescription"
                                    name="metaDescription"
                                    type="text"
                                    value={formData.metaDescription}
                                    onChange={handleChange}
                                    placeholder="Brief description for search engines (max 160 chars recommended)"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <p className="text-xs text-gray-500">This will not appear on the page but will be in the page's HTML source for SEO.</p>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">
                                    Keywords (SEO)
                                </label>
                                <input
                                    id="keywords"
                                    name="keywords"
                                    type="text"
                                    value={formData.keywords}
                                    onChange={handleChange}
                                    placeholder="E.g. AI software, custom CRM, tech blog (comma separated)"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <p className="text-xs text-gray-500">Comma-separated list of keywords for search engines.</p>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="canonicalUrl" className="block text-sm font-medium text-gray-700">
                                    Canonical URL (Optional)
                                </label>
                                <input
                                    id="canonicalUrl"
                                    name="canonicalUrl"
                                    type="url"
                                    value={formData.canonicalUrl}
                                    onChange={handleChange}
                                    placeholder="https://example.com/original-post"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <p className="text-xs text-gray-500">Add a canonical URL if this blog was originally published elsewhere (prevents duplicate content issues).</p>
                            </div>
                        </div>

                        {/* Rich Text Editor with Image Support */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Blog Content</label>
                            <div className="border border-gray-300 rounded-lg overflow-hidden">
                                {/* Toolbar */}
                                <div className="flex flex-wrap gap-1 p-2 bg-gray-50 border-b border-gray-200">
                                    <button
                                        type="button"
                                        onClick={() => formatText("bold")}
                                        className="p-2 hover:bg-gray-200 rounded border border-gray-300 bg-white transition-colors"
                                        title="Bold"
                                    >
                                        <Bold className="h-4 w-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => formatText("italic")}
                                        className="p-2 hover:bg-gray-200 rounded border border-gray-300 bg-white transition-colors"
                                        title="Italic"
                                    >
                                        <Italic className="h-4 w-4" />
                                    </button>

                                    <div className="w-px h-8 bg-gray-300 mx-1" />

                                    <button
                                        type="button"
                                        onClick={() => formatText("formatBlock", "h1")}
                                        className="px-3 py-2 hover:bg-gray-200 rounded border border-gray-300 bg-white text-xs font-medium transition-colors"
                                        title="Heading 1"
                                    >
                                        H1
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => formatText("formatBlock", "h2")}
                                        className="px-3 py-2 hover:bg-gray-200 rounded border border-gray-300 bg-white text-xs font-medium transition-colors"
                                        title="Heading 2"
                                    >
                                        H2
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => formatText("formatBlock", "h3")}
                                        className="px-3 py-2 hover:bg-gray-200 rounded border border-gray-300 bg-white text-xs font-medium transition-colors"
                                        title="Heading 3"
                                    >
                                        H3
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => formatText("formatBlock", "p")}
                                        className="px-3 py-2 hover:bg-gray-200 rounded border border-gray-300 bg-white text-xs font-medium transition-colors"
                                        title="Paragraph"
                                    >
                                        P
                                    </button>

                                    <div className="w-px h-8 bg-gray-300 mx-1" />

                                    <button
                                        type="button"
                                        onClick={() => formatText("insertUnorderedList")}
                                        className="p-2 hover:bg-gray-200 rounded border border-gray-300 bg-white transition-colors"
                                        title="Bullet List"
                                    >
                                        <List className="h-4 w-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => formatText("insertOrderedList")}
                                        className="p-2 hover:bg-gray-200 rounded border border-gray-300 bg-white transition-colors"
                                        title="Numbered List"
                                    >
                                        <ListOrdered className="h-4 w-4" />
                                    </button>

                                    <div className="w-px h-8 bg-gray-300 mx-1" />

                                    <button
                                        type="button"
                                        onClick={() => insertHTML("<blockquote>Quote text here</blockquote>")}
                                        className="p-2 hover:bg-gray-200 rounded border border-gray-300 bg-white transition-colors"
                                        title="Quote"
                                    >
                                        <Quote className="h-4 w-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => insertHTML("<pre><code>Code here</code></pre>")}
                                        className="p-2 hover:bg-gray-200 rounded border border-gray-300 bg-white transition-colors"
                                        title="Code Block"
                                    >
                                        <Code className="h-4 w-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const url = prompt("Enter URL:");
                                            if (url) formatText("createLink", url);
                                        }}
                                        className="p-2 hover:bg-gray-200 rounded border border-gray-300 bg-white transition-colors"
                                        title="Add Link"
                                    >
                                        <Link className="h-4 w-4" />
                                    </button>

                                    <div className="w-px h-8 bg-gray-300 mx-1" />

                                    {/* Image Upload Button */}
                                    <button
                                        type="button"
                                        onClick={() => imageInputRef.current?.click()}
                                        className="p-2 hover:bg-gray-200 rounded border border-gray-300 bg-white transition-colors"
                                        title="Upload Images"
                                    >
                                        <ImageIcon className="h-4 w-4" />
                                    </button>

                                    <div className="w-px h-8 bg-gray-300 mx-1" />

                                    <button
                                        type="button"
                                        onClick={() => formatText("justifyLeft")}
                                        className="p-2 hover:bg-gray-200 rounded border border-gray-300 bg-white transition-colors"
                                        title="Align Left"
                                    >
                                        <AlignLeft className="h-4 w-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => formatText("justifyCenter")}
                                        className="p-2 hover:bg-gray-200 rounded border border-gray-300 bg-white transition-colors"
                                        title="Align Center"
                                    >
                                        <AlignCenter className="h-4 w-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => formatText("justifyRight")}
                                        className="p-2 hover:bg-gray-200 rounded border border-gray-300 bg-white transition-colors"
                                        title="Align Right"
                                    >
                                        <AlignRight className="h-4 w-4" />
                                    </button>

                                    {/* Hidden Image Input */}
                                    <input
                                        ref={imageInputRef}
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                </div>

                                {/* Image Gallery */}
                                {uploadedImages.length > 0 && (
                                    <div className="p-3 bg-blue-50 border-b border-gray-200">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="text-sm font-medium text-blue-800">
                                                📸 Uploaded Images ({uploadedImages.length}) - Click to insert into content
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                                            {uploadedImages.map((imageUrl, index) => (
                                                <div key={index} className="relative group">
                                                    <img
                                                        src={imageUrl || "/placeholder.svg"}
                                                        alt={`Upload ${index + 1}`}
                                                        className="w-16 h-16 object-cover rounded cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all duration-200 hover:scale-105"
                                                        onClick={() => insertImage(imageUrl)}
                                                        title="Click to insert into content"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => removeImage(index)}
                                                        className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                                                        title="Remove image"
                                                    >
                                                        <X className="h-2 w-2" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Editor */}
                                <div
                                    ref={editorRef}
                                    contentEditable
                                    onInput={handleEditorChange}
                                    className="min-h-[300px] p-4 focus:outline-none prose prose-sm max-w-none blog-editor"
                                    style={{
                                        whiteSpace: "pre-wrap",
                                    }}
                                    suppressContentEditableWarning={true}
                                    data-placeholder="Start writing your blog content here... Use the 📸 button to upload images and insert them anywhere in your content!"
                                />
                                <style dangerouslySetInnerHTML={{
                                    __html: `
                    .blog-editor img {
                      display: block !important;
                      margin: 20px auto !important;
                      max-width: 90% !important;
                      height: auto !important;
                      border-radius: 12px !important;
                      box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
                      transition: all 0.3s ease !important;
                    }
                    .blog-editor img:hover {
                      transform: scale(1.02) !important;
                      box-shadow: 0 6px 20px rgba(0,0,0,0.2) !important;
                    }
                    .blog-editor div {
                      text-align: center !important;
                    }
                  `
                                }} />
                            </div>
                            <div className="flex items-start space-x-2 text-xs text-gray-500">
                                <div className="flex-1">
                                    <p className="mb-1">
                                        💡 <strong>Pro Tips:</strong>
                                    </p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Use the toolbar above to format your text</li>
                                        <li>Click the 📸 image button to upload multiple images</li>
                                        <li>Click on any uploaded image to insert it at cursor position</li>
                                        <li>Images are automatically styled and responsive</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="space-y-2">
                            <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                                Featured Image (Cover Photo)
                            </label>
                            <div className="flex items-center space-x-2">
                                <Upload className="h-4 w-4 text-gray-400" />
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    onChange={handleFileChange}
                                    required
                                    accept="image/*"
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 border border-gray-300 rounded-md"
                                />
                            </div>
                            <p className="text-xs text-gray-500">This will be the main cover image for your blog post</p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Publishing...
                                </>
                            ) : (
                                "Publish Blog"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
