import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best Software Development Company in Mumbai | Susalabs',
    description: 'Looking for the best software development company in Mumbai? We build AI-driven CRM, ERP & SaaS solutions for fast-growing, innovative businesses.',
    keywords: 'software development company Mumbai, custom software development Mumbai, AI app development Mumbai, CRM software BKC, ERP services Andheri, SaaS development Mumbai',
    openGraph: {
        title: 'Best Software Development Company in Mumbai | Susalabs',
        description: 'Looking for the best software development company in Mumbai? We build AI-driven CRM, ERP & SaaS solutions for fast-growing, innovative businesses.',
        type: 'website',
        url: 'https://susalabs.com/software-development-company-in-mumbai',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Software Development Company in Mumbai | Susalabs',
        description: 'Looking for the best software development company in Mumbai? We build AI-driven CRM, ERP & SaaS solutions for fast-growing, innovative businesses.',
    },
};

export default function MumbaiLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
