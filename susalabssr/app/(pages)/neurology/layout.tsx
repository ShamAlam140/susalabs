import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Neural Interface Technology: Transforming Communication',
    description: 'Discover Neural Interface Technology and its impact on human-computer interaction, bridging gaps in communication and enabling innovative advancements.',
    openGraph: {
        type: 'website',
        title: 'Neural Interface Technology: Transforming Communication',
        description: 'Discover Neural Interface Technology and its impact on human-computer interaction, bridging gaps in communication and enabling innovative advancements.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Neural Interface Technology: Transforming Communication',
        description: 'Discover Neural Interface Technology and its impact on human-computer interaction, bridging gaps in communication and enabling innovative advancements.',
    },
};

export default function NeurologyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
