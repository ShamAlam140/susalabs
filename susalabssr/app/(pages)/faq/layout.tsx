import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ - SusaLabs',
    description: 'Frequently asked questions about SusaLabs services, pricing, and technology solutions.',
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
