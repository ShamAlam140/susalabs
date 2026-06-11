import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best Software Development Company in Delhi NCR, India',
    description: 'Looking for the best software development company in Delhi NCR, India? We build AI-driven CRM, ERP & SaaS solutions for fast-growing, innovative businesses.',
    keywords: 'software development company Delhi NCR, custom software development NCR, AI app development Delhi, CRM software Noida, ERP services Gurugram, SaaS development India',
    openGraph: {
        title: 'Best Software Development Company in Delhi NCR, India',
        description: 'Looking for the best software development company in Delhi NCR, India? We build AI-driven CRM, ERP & SaaS solutions for fast-growing, innovative businesses.',
        type: 'website',
        url: 'https://susalabs.com/software-development-company-in-india-ncr',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Software Development Company in Delhi NCR, India',
        description: 'Looking for the best software development company in Delhi NCR, India? We build AI-driven CRM, ERP & SaaS solutions for fast-growing, innovative businesses.',
    },
};

export default function DelhiNCRLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
