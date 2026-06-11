import ViewBlogDetails from '@/app/components/sections/ViewBlogDetails';
import { Metadata } from 'next';

interface BlogPost {
    _id: string;
    authorName: string;
    blogDescription: string;
    blogTitle: string;
    category: string;
    dateTime: string;
    file: string;
    keywords?: string;
    metaDescription?: string;
    canonicalUrl?: string;
}

interface PageProps {
    params: Promise<{ blogTitle: string }>;
    searchParams: Promise<{ id?: string }>;
}

// Fetch FULL blog content (including blogDescription) for SSR/SEO
async function getBlogContent(blogTitle: string, id?: string): Promise<BlogPost | null> {
    try {
        // 1. If we have an ID, fetch the full blog directly (Fastest)
        if (id) {
            const response = await fetch(`https://susalabs.onrender.com/Blog/blog/${id}`, {
                cache: 'no-store', // Always get fresh content
            });
            if (response.ok) {
                return await response.json();
            }
        }

        // 2. If no ID or ID fetch failed, we must find it by title in the list
        // Note: For better SEO, consider adding a backend endpoint /Blog/by-slug/:slug
        const listResponse = await fetch('https://susalabs.onrender.com/Blog/Allblog', {
            cache: 'no-store',
        });

        if (listResponse.ok) {
            const data = await listResponse.json();
            const blogs = data.blogs || data;

            if (Array.isArray(blogs)) {
                const foundBlog = blogs.find(
                    (b: BlogPost) =>
                        b.blogTitle
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, '-')
                            .replace(/(^-|-$)/g, '') === blogTitle
                );

                if (foundBlog) {
                    // Fetch the full details for this found blog to get the description
                    const detailResponse = await fetch(`https://susalabs.onrender.com/Blog/blog/${foundBlog._id}`, {
                        cache: 'no-store',
                    });
                    if (detailResponse.ok) {
                        return await detailResponse.json();
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error fetching blog content for SSR:', error);
    }
    return null;
}

// Dynamic metadata generation
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const blog = await getBlogContent(resolvedParams.blogTitle, resolvedSearchParams.id);

    if (!blog) {
        return {
            title: 'Blog Post | SusaLabs',
            description: 'Read the latest insights and stories from SusaLabs',
        };
    }

    // Strip HTML tags from description (may be empty from /Allblog endpoint)
    // Priority: metaDescription from backend > truncated blogDescription > default string
    const cleanDescription = blog.metaDescription
        ? blog.metaDescription.trim()
        : (blog.blogDescription
            ? blog.blogDescription.replace(/<[^>]*>/g, '').substring(0, 160) + '...'
            : `Read about ${blog.blogTitle} - Latest insights from SusaLabs`);

    const keywordsList = blog.keywords
        ? blog.keywords.trim()
        : `${blog.category}, SusaLabs blog, tech insights, ${blog.blogTitle}, software development, AI, innovation`;

    return {
        title: `${blog.blogTitle} | SusaLabs Blog`,
        description: cleanDescription,
        keywords: keywordsList,
        authors: [{ name: blog.authorName }],
        alternates: {
            canonical: blog.canonicalUrl && blog.canonicalUrl.trim() !== ''
                ? blog.canonicalUrl.trim()
                : `https://susalabs.com/blog/${blog.blogTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`,
        },
        openGraph: {
            title: `${blog.blogTitle} | SusaLabs Blog`,
            description: cleanDescription,
            type: 'article',
            url: `https://susalabs.com/blog/${blog.blogTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`,
            images: blog.file ? [{ url: blog.file }] : [],
            authors: [blog.authorName],
            publishedTime: blog.dateTime,
            section: blog.category,
        },
        twitter: {
            card: 'summary_large_image',
            title: `${blog.blogTitle} | SusaLabs Blog`,
            description: cleanDescription,
            images: blog.file ? [blog.file] : [],
        },
    };
}

export default async function BlogDetailPage({ params, searchParams }: PageProps) {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const blog = await getBlogContent(resolvedParams.blogTitle, resolvedSearchParams.id);

    // Pass the fetched blog data to the client component
    return <ViewBlogDetails initialBlog={blog} />;
}
