import { Metadata } from 'next';
import AiInnovationPage from '@/app/components/sections/AiInnovationPage';

export const metadata: Metadata = {
    title: 'AI Solutions & Services for Business Growth | SusaLabs',
    description: 'Explore cutting-edge AI solutions by SusaLabs to automate processes, boost efficiency, and scale your business with smart, data-driven innovation today.',
    keywords: [
        'AI app development', 'AI software development services', 'custom AI software solutions', 
        'AI chatbot development', 'generative AI development', 'AI mobile app development',
        'LLM integration', 'RAG-based applications', 'NLP development', 'machine learning app development',
        'HIPAA-compliant AI', 'offshore AI development', 'AI automation services'
    ],
    alternates: {
        canonical: 'https://susalabs.com/solutions/ai',
    },
    openGraph: {
        title: 'AI Solutions & Services for Business Growth | SusaLabs',
        description: 'Explore cutting-edge AI solutions by SusaLabs to automate processes, boost efficiency, and scale your business with smart, data-driven innovation today.',
        url: 'https://susalabs.com/solutions/ai',
        siteName: 'SusaLabs',
        type: 'website',
        images: [
            {
                url: '/images/logo.jpeg',
                width: 1200,
                height: 630,
                alt: 'SusaLabs AI Development Company',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Solutions & Services for Business Growth | SusaLabs',
        description: 'Explore cutting-edge AI solutions by SusaLabs to automate processes, boost efficiency, and scale your business with smart, data-driven innovation today.',
        images: ['/images/logo.jpeg'],
    },
};

export default function AiPageRoute() {
    return <AiInnovationPage />;
}
