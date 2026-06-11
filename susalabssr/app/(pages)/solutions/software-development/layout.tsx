import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Custom Software Development Services for Businesses',
    description: 'Get custom software development services by SusaLabs to build scalable, AI-powered applications, automate workflows, and drive business growth.',
    keywords: 'software development company, custom software development company, AI software development company, software development company in India, custom software development services, enterprise software development, mobile app development, CRM software development, ERP software development, cloud software development',
    openGraph: {
        title: 'Custom Software Development Services for Businesses',
        description: 'Get custom software development services by SusaLabs to build scalable, AI-powered applications, automate workflows, and drive business growth.',
        type: 'website',
        url: 'https://susalabs.com/solutions/software-development',
        siteName: 'SusaLabs',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Custom Software Development Services for Businesses',
        description: 'Get custom software development services by SusaLabs to build scalable, AI-powered applications, automate workflows, and drive business growth.',
    },
    alternates: {
        canonical: 'https://susalabs.com/solutions/software-development',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function SoftwareDevelopmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
