import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - SUSA Labs | Tech Insights & Stories',
    description: 'Explore the latest insights, trends, and stories from SUSA Labs. Read about AI, software development, IoT, and technology innovations.',
    keywords: 'SusaLabs blog, tech insights, AI articles, software development blog, IoT trends, technology innovations, tech stories, programming tutorials, AI development, blockchain insights',
    openGraph: {
        title: 'Blog - SUSA Labs | Tech Insights & Stories',
        description: 'Explore the latest insights, trends, and stories from SUSA Labs. Read about AI, software development, IoT, and technology innovations.',
        type: 'website',
        url: 'https://susalabs.com/public-blog',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog - SUSA Labs | Tech Insights & Stories',
        description: 'Explore the latest insights, trends, and stories from SUSA Labs. Read about AI, software development, IoT, and technology innovations.',
    },
};

export default function PublicBlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
