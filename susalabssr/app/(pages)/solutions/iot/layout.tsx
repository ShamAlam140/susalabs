import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'IoT & SaaS Development Services for Smart Solutions',
    description: 'Explore IoT and SaaS services by SusaLabs. Build scalable, cloud-based apps and smart connected systems to boost efficiency and business growth.',
    keywords: 'IoT development, Internet of Things, smart devices, industrial IoT, connected solutions, IoT services',
    openGraph: {
        title: 'IoT & SaaS Development Services for Smart Solutions',
        description: 'Explore IoT and SaaS services by SusaLabs. Build scalable, cloud-based apps and smart connected systems to boost efficiency and business growth.',
        type: 'website',
        url: 'https://susalabs.com/solutions/iot',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'IoT & SaaS Development Services for Smart Solutions',
        description: 'Explore IoT and SaaS services by SusaLabs. Build scalable, cloud-based apps and smart connected systems to boost efficiency and business growth.',
    },
};

export default function IotLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
