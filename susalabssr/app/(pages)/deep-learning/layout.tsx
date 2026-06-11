import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Deep Learning Development Services | Neural Networks & AI – SusaLabs',
    description: 'Advanced deep learning solutions by SusaLabs. CNNs, RNNs, Transformers, and neural networks for computer vision, NLP, and complex pattern recognition.',
    keywords: 'deep learning development, neural networks, CNNs, RNNs, transformers, computer vision, natural language processing, AI models, backpropagation, feature learning',
    openGraph: {
        type: 'website',
        title: 'Deep Learning Development Services | Neural Networks & AI – SusaLabs',
        description: 'Advanced deep learning solutions by SusaLabs. CNNs, RNNs, Transformers, and neural networks for computer vision, NLP, and complex pattern recognition.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Deep Learning Development Services | Neural Networks & AI – SusaLabs',
        description: 'Advanced deep learning solutions by SusaLabs. CNNs, RNNs, Transformers, and neural networks for computer vision, NLP, and complex pattern recognition.',
    },
};

export default function DeepLearningLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
