import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Offices - SusaLabs',
    description: 'Find SusaLabs global offices in USA, India, and Dubai. Connect with us at any of our worldwide locations.',
};

export default function OfficesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
