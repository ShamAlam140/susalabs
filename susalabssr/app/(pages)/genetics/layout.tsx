import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'RNA-Based Cancer Therapy: Revolutionizing Treatment',
    description: 'Discover how RNA-Based Cancer Therapy is changing the landscape of cancer treatment, offering innovative solutions and new hope for patients.',
    openGraph: {
        type: 'website',
        title: 'RNA-Based Cancer Therapy: Revolutionizing Treatment',
        description: 'Discover how RNA-Based Cancer Therapy is changing the landscape of cancer treatment, offering innovative solutions and new hope for patients.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'RNA-Based Cancer Therapy: Revolutionizing Treatment',
        description: 'Discover how RNA-Based Cancer Therapy is changing the landscape of cancer treatment, offering innovative solutions and new hope for patients.',
    },
};

export default function GeneticsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
