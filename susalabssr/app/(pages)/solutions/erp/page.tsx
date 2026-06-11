import { Metadata } from 'next';
import ErpDevelopmentPage from '@/app/components/sections/ErpPage';

export const metadata: Metadata = {
    title: 'ERP Software Development Services',
    description: 'Get ERP software development services by SusaLabs to streamline operations, automate workflows, and build scalable ERP systems for business growth.',
    keywords: [
        'custom ERP development', 'ERP software services', 'cloud-based ERP', 
        'enterprise resource planning', 'ERP integration company', 'scalable SaaS architecture',
        'automated supply chain management', 'bespoke enterprise software', 'ERP migration'
    ],
    alternates: {
        canonical: 'https://susalabs.com/solutions/erp',
    },
    openGraph: {
        title: 'ERP Software Development Services',
        description: 'Get ERP software development services by SusaLabs to streamline operations, automate workflows, and build scalable ERP systems for business growth.',
        url: 'https://susalabs.com/solutions/erp',
        siteName: 'SusaLabs',
        type: 'website',
        images: [
            {
                url: '/images/logo.jpeg',
                width: 1200,
                height: 630,
                alt: 'SusaLabs Custom ERP Development Company',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ERP Software Development Services',
        description: 'Get ERP software development services by SusaLabs to streamline operations, automate workflows, and build scalable ERP systems for business growth.',
        images: ['/images/logo.jpeg'],
    },
};

export default function ErpPageRoute() {
    return <ErpDevelopmentPage />;
}
