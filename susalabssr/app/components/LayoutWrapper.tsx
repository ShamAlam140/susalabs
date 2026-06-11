'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

// Lazy load non-critical UI components
const FloatingChat = dynamic(() => import('./ui/FloatingChat'), {
    ssr: false, // Don't render on server
});

const CookieConsent = dynamic(() => import('./ui/CookieConsent'), {
    ssr: false, // Don't render on server
});

interface LayoutWrapperProps {
    children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
    const pathname = usePathname();

    // Check if current path is admin or login
    const isAdminPage = pathname?.startsWith('/admin');
    const isLoginPage = pathname === '/login';

    // Don't show public layout components on admin and login pages
    if (isAdminPage || isLoginPage) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingChat />
            <CookieConsent />
        </>
    );
}
