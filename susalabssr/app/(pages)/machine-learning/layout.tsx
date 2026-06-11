import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Machine Learning Development Services | AI & ML Solutions – SusaLabs',
    description: 'Transform your business with advanced machine learning solutions by SusaLabs. Deep learning, predictive analytics, computer vision, and NLP services for intelligent automation.',
    keywords: 'machine learning development, AI ML solutions, deep learning services, predictive analytics, computer vision, natural language processing, neural networks, data science',
    openGraph: {
        type: 'website',
        title: 'Machine Learning Development Services | AI & ML Solutions – SusaLabs',
        description: 'Transform your business with advanced machine learning solutions by SusaLabs. Deep learning, predictive analytics, computer vision, and NLP services for intelligent automation.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Machine Learning Development Services | AI & ML Solutions – SusaLabs',
        description: 'Transform your business with advanced machine learning solutions by SusaLabs. Deep learning, predictive analytics, computer vision, and NLP services for intelligent automation.',
    },
};

export default function MachineLearningLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
