import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Motion Detection in AI: Revolutionizing Technology',
    description: 'Discover how motion detection in AI enhances security, automation, and user experience. Explore the latest advancements in this innovative technology.',
    openGraph: {
        type: 'website',
        title: 'Motion Detection in AI: Revolutionizing Technology',
        description: 'Discover how motion detection in AI enhances security, automation, and user experience. Explore the latest advancements in this innovative technology.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Motion Detection in AI: Revolutionizing Technology',
        description: 'Discover how motion detection in AI enhances security, automation, and user experience. Explore the latest advancements in this innovative technology.',
    },
};

export default function MotionDetectionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
