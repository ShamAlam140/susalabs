import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://susalabs.com';

    let blogRoutes: MetadataRoute.Sitemap = [];
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://susalabs.onrender.com'}/Blog/Allblog`, {
            next: { revalidate: 3600 } // Revalidate every hour
        });

        if (response.ok) {
            const data = await response.json();
            const blogs = data.blogs || data;

            if (Array.isArray(blogs)) {
                blogRoutes = blogs.map((blog: any) => {
                    const slug = blog.blogTitle
                        ? blog.blogTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                        : '';
                    return {
                        url: `${baseUrl}/blog/${slug}`,
                        lastModified: new Date(blog.dateTime || new Date()),
                        priority: 0.80,
                    };
                });
            }
        }
    } catch (error) {
        console.error('Error fetching blogs for sitemap:', error);
    }

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            priority: 1.00,
        },
        {
            url: `${baseUrl}/solutions/ai`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${baseUrl}/solutions/blockchain`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${baseUrl}/solutions/iot`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${baseUrl}/solutions/quantum`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${baseUrl}/generativeAi`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${baseUrl}/genetics`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${baseUrl}/neurology`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${baseUrl}/motion-detection`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${baseUrl}/contact-us`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${baseUrl}/public-blog`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${baseUrl}/office-pages`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${baseUrl}/careers`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${baseUrl}/industry-solutions`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${baseUrl}/solutions/erp`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${baseUrl}/solutions/app-development`,
            lastModified: new Date(),
            priority: 0.90,
        },
        {
            url: `${baseUrl}/solutions/crm`,
            lastModified: new Date(),
            priority: 0.90,
        },
        {
            url: `${baseUrl}/solutions/software-development`,
            lastModified: new Date(),
            priority: 0.90,
        },
        {
            url: `${baseUrl}/software-development-company-in-india-ncr`,
            lastModified: new Date(),
            priority: 0.75,
        },
        {
            url: `${baseUrl}/software-development-company-in-mumbai`,
            lastModified: new Date(),
            priority: 0.75,
        },
        {
            url: `${baseUrl}/software-development-company-in-hyderabad`,
            lastModified: new Date(),
            priority: 0.75,
        },
        {
            url: `${baseUrl}/product`,
            lastModified: new Date(),
            priority: 0.70,
        },
    ];

    return [...staticRoutes, ...blogRoutes];
}
