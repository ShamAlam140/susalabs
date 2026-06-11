import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Culture & Benefits - SusaLabs',
    description: 'Discover the culture and benefits at SusaLabs. Learn about our work environment, perks, and what makes us a great place to work.',
};

export default function CultureBenefitLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
