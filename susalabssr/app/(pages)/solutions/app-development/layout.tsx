import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mobile App Development Services | SusaLabs',
    description: 'SusaLabs builds custom Android & iOS mobile apps using React Native, Flutter & native development. Expert mobile app development services for startups & enterprises across the US and India. Get a free quote today!',
    keywords: [
        'mobile app development services', 'android app development', 'iOS app development',
        'React Native app development', 'Flutter app development', 'native mobile app development',
        'custom mobile app development', 'mobile app development company in India',
        'cross-platform app development', 'mobile app development for Android and iOS'
    ],
    alternates: {
        canonical: 'https://susalabs.com/solutions/app-development',
    },
    openGraph: {
        title: 'Mobile App Development Services — Android & iOS | SusaLabs',
        description: 'Custom Android & iOS mobile app development services. React Native, Flutter & native solutions for startups & enterprises.',
        type: 'website',
        url: 'https://susalabs.com/solutions/app-development',
        siteName: 'SusaLabs',
        images: [
            {
                url: '/images/logo.jpeg',
                width: 1200,
                height: 630,
                alt: 'SusaLabs Mobile App Development Company',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mobile App Development Services — Android & iOS | SusaLabs',
        description: 'Custom Android & iOS mobile app development services by SusaLabs.',
        images: ['/images/logo.jpeg'],
    },
};

export default function AppDevelopmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
