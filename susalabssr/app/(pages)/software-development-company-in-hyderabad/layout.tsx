import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best Software Development Company in Hyderabad | Susalabs',
    description: 'Looking for the best software development company in Hyderabad? SusaLabs builds AI-driven CRM, ERP & SaaS solutions for fast-growing, innovative businesses.',
    keywords: 'software development company Hyderabad, custom software development Hyderabad, AI app development Hyderabad, CRM software HITEC City, ERP services Hyderabad, SaaS development Hyderabad',
    openGraph: {
        title: 'Best Software Development Company in Hyderabad | Susalabs',
        description: 'Looking for the best software development company in Hyderabad? SusaLabs builds AI-driven CRM, ERP & SaaS solutions for fast-growing, innovative businesses.',
        type: 'website',
        url: 'https://susalabs.com/software-development-company-in-hyderabad',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Software Development Company in Hyderabad | Susalabs',
        description: 'Looking for the best software development company in Hyderabad? SusaLabs builds AI-driven CRM, ERP & SaaS solutions for fast-growing, innovative businesses.',
    },
};

export default function HyderabadLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
