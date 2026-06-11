import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - SUSA Labs | Data Protection & Privacy',
    description: 'Read SUSA Labs\' privacy policy. Learn how we collect, use, and protect your personal information and data privacy.',
    openGraph: {
        type: 'website',
        title: 'Privacy Policy - SUSA Labs | Data Protection & Privacy',
        description: 'Read SUSA Labs\' privacy policy. Learn how we collect, use, and protect your personal information and data privacy.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Privacy Policy - SUSA Labs | Data Protection & Privacy',
        description: 'Read SUSA Labs\' privacy policy. Learn how we collect, use, and protect your personal information and data privacy.',
    },
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
