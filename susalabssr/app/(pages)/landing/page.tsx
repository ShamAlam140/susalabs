import MarketingLanding from '@/app/components/sections/MarketingLanding';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Custom Software Development Solutions | Susalabs',
    description: 'We deliver tailored software solutions that drive business growth and digital transformation. From concept to deployment, we build scalable applications that meet your unique requirements.',
    keywords: 'custom software development, SaaS solutions, cloud solutions, product engineering, cross-platform development, Susalabs',
    openGraph: {
        title: 'Custom Software Development Solutions | Susalabs',
        description: 'We deliver tailored software solutions that drive business growth and digital transformation.',
        type: 'website',
        url: 'https://susalabs.com/landing',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Custom Software Development Solutions | Susalabs',
        description: 'We deliver tailored software solutions that drive business growth and digital transformation.',
    },
};

export default function LandingPageRoute() {
    return <MarketingLanding />;
}
