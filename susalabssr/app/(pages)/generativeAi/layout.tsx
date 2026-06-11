import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Software | Unlock Creative Potential with Generative Tools',
    description: 'Discover the power of AI software for generative design. Explore how it can enhance your creative projects and streamline your workflow today!',
    openGraph: {
        title: 'AI Software | Unlock Creative Potential with Generative Tools',
        description: 'Discover the power of AI software for generative design. Explore how it can enhance your creative projects and streamline your workflow today!',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Software | Unlock Creative Potential with Generative Tools',
        description: 'Discover the power of AI software for generative design. Explore how it can enhance your creative projects and streamline your workflow today!',
    },
};

export default function GenerativeAiLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
