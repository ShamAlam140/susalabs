import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - SusaLabs',
    description: 'Get in touch with SusaLabs. We are here to help you with your custom software development, AI solutions, and technology needs.',
};

export default function ContactUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
