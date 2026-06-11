import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers - SusaLabs',
    description: 'Join our team of innovators at SusaLabs. Explore career opportunities in software development, AI, and technology.',
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
