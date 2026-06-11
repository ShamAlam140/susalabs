import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Innovative Projects - SusaLabs | Cutting-edge Solutions & Creative Works',
    description: "Explore SusaLabs' curated collection of innovative projects and cutting-edge solutions. Discover creative works, register for demos, and see how our technology can transform your business.",
    keywords: 'innovative projects, SusaLabs projects, software solutions, technology demos, creative works, project showcase',
    openGraph: {
        title: 'Innovative Projects - SusaLabs | Cutting-edge Solutions & Creative Works',
        description: "Explore SusaLabs' curated collection of innovative projects and cutting-edge solutions.",
        type: 'website',
        url: 'https://susalabs.com/product',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Innovative Projects - SusaLabs | Cutting-edge Solutions & Creative Works',
        description: "Explore SusaLabs' curated collection of innovative projects and cutting-edge solutions.",
    },
};

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
