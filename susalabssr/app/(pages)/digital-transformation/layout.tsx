import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Digital Transformation Services | Cloud & Automation Solutions – SusaLabs',
    description: 'Accelerate your digital transformation with SusaLabs. Cloud migration, automation, IoT integration, and data analytics for modern business operations.',
    keywords: 'digital transformation, cloud migration, business automation, IoT integration, data analytics, digital modernization, enterprise transformation, cloud computing',
    openGraph: {
        type: 'website',
        title: 'Digital Transformation Services | Cloud & Automation Solutions – SusaLabs',
        description: 'Accelerate your digital transformation with SusaLabs. Cloud migration, automation, IoT integration, and data analytics for modern business operations.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Digital Transformation Services | Cloud & Automation Solutions – SusaLabs',
        description: 'Accelerate your digital transformation with SusaLabs. Cloud migration, automation, IoT integration, and data analytics for modern business operations.',
    },
};

export default function DigitalTransformationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
