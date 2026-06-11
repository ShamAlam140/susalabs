import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'CRM Software Development Services',
    description: 'Get CRM software development services by SusaLabs to manage leads, automate sales, and improve customer engagement with scalable CRM solutions.',
    keywords: [
        'CRM software development services', 'custom CRM software development',
        'CRM software solutions', 'operational CRM software',
        'CRM software for financial services industry', 'CRM software healthcare',
        'CRM software for customer service', 'CRM software development company',
        'custom CRM development', 'CRM integration services'
    ],
    alternates: {
        canonical: 'https://susalabs.com/solutions/crm',
    },
    openGraph: {
        title: 'CRM Software Development Services',
        description: 'Get CRM software development services by SusaLabs to manage leads, automate sales, and improve customer engagement with scalable CRM solutions.',
        type: 'website',
        url: 'https://susalabs.com/solutions/crm',
        siteName: 'SusaLabs',
        images: [
            {
                url: '/images/logo.jpeg',
                width: 1200,
                height: 630,
                alt: 'SusaLabs CRM Software Development Company',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'CRM Software Development Services',
        description: 'Get CRM software development services by SusaLabs to manage leads, automate sales, and improve customer engagement with scalable CRM solutions.',
        images: ['/images/logo.jpeg'],
    },
};

export default function CrmLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
