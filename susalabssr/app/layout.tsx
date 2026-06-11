import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GTM_ID = "GTM-59CPPJ2X";

export const metadata: Metadata = {
  metadataBase: new URL("https://susalabs.com"),
  title: "SusaLabs | AI, Software & App Development Company",
  description: "SusaLabs is a leading AI and software development company offering custom solutions, mobile apps, IoT, blockchain, and scalable tech services.",
  keywords: "custom software development, AI solutions, medical software, CRM development, healthcare software, software development company India, software development company USA",
  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
  openGraph: {
    title: "SusaLabs | AI, Software & App Development Company",
    description: "SusaLabs is a leading AI and software development company offering custom solutions, mobile apps, IoT, blockchain, and scalable tech services.",
    url: "https://susalabs.com",
    siteName: "SusaLabs",
    type: "website",
    images: ["/images/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <NextTopLoader color="#4F46E5" showSpinner={false} />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
