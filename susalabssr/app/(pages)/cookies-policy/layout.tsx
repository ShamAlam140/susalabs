import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookies Policy - SUSA Labs | Cookie Usage & Privacy',
    description: 'Learn about SUSA Labs\' cookie policy. Understand how we use cookies, third-party services, and your privacy choices.',
    openGraph: {
        type: 'website',
        title: 'Cookies Policy - SUSA Labs | Cookie Usage & Privacy',
        description: 'Learn about SUSA Labs\' cookie policy. Understand how we use cookies, third-party services, and your privacy choices.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cookies Policy - SUSA Labs | Cookie Usage & Privacy',
        description: 'Learn about SUSA Labs\' cookie policy. Understand how we use cookies, third-party services, and your privacy choices.',
    },
};

export default function CookiesPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
