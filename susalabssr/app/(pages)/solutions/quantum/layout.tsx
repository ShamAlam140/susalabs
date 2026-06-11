import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Quantum Computing Solutions for Future-Ready Systems',
    description: 'Explore quantum computing solutions by SusaLabs, including quantum algorithms, cryptography, and enterprise-ready systems for next-gen innovation.',
    keywords: 'quantum computing, quantum algorithms, quantum cryptography, enterprise quantum solutions, quantum services',
    openGraph: {
        title: 'Quantum Computing Solutions for Future-Ready Systems',
        description: 'Explore quantum computing solutions by SusaLabs, including quantum algorithms, cryptography, and enterprise-ready systems for next-gen innovation.',
        type: 'website',
        url: 'https://susalabs.com/solutions/quantum',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Quantum Computing Solutions for Future-Ready Systems',
        description: 'Explore quantum computing solutions by SusaLabs, including quantum algorithms, cryptography, and enterprise-ready systems for next-gen innovation.',
    },
};

export default function QuantumLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
