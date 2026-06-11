import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blockchain Development Services for Secure Apps',
    description: 'Build secure, scalable blockchain solutions with SusaLabs. We develop smart contracts, decentralized apps, and enterprise blockchain systems for businesses.',
    keywords: 'blockchain development, smart contracts, DeFi solutions, enterprise blockchain, decentralized applications, blockchain services',
    openGraph: {
        title: 'Blockchain Development Services for Secure Apps',
        description: 'Build secure, scalable blockchain solutions with SusaLabs. We develop smart contracts, decentralized apps, and enterprise blockchain systems for businesses.',
        type: 'website',
        url: 'https://susalabs.com/solutions/blockchain',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blockchain Development Services for Secure Apps',
        description: 'Build secure, scalable blockchain solutions with SusaLabs. We develop smart contracts, decentralized apps, and enterprise blockchain systems for businesses.',
    },
};

export default function BlockchainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
