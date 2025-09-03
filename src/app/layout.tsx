import type { Metadata } from "next";
import { Caveat, Lato } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Key West Blue Crab | Only Food Truck in America Selling Blue Crabs All Year Round | Key West, FL",
  description: "The only food truck in America selling blue crabs all year round! Experience the freshest blue crabs and authentic Key West seafood from our mobile kitchen. Located at 3124 Overseas Highway. Order online for pickup!",
  keywords: "Key West blue crab, only food truck America blue crabs year round, fresh seafood, food truck, Key West restaurant, crab cakes, steamed crabs, Florida seafood, unique food truck",
  authors: [{ name: "Key West Blue Crab" }],
  icons: {
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  openGraph: {
    title: "Key West Blue Crab | Only Food Truck in America Selling Blue Crabs All Year Round",
    description: "The only food truck in America selling blue crabs all year round! Fresh blue crabs and authentic Key West seafood served from our mobile kitchen in paradise.",
    url: "https://keywestbluecrab.com",
    siteName: "Key West Blue Crab",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/images/kwbc-logo.png',
        width: 1200,
        height: 1200,
        alt: 'Key West Blue Crab Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Key West Blue Crab | Only Food Truck in America Selling Blue Crabs All Year Round",
    description: "The only food truck in America selling blue crabs all year round! Fresh blue crabs and authentic Key West seafood served from our mobile kitchen in paradise.",
    images: ['/images/kwbc-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
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
        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HZWTKPD92P"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HZWTKPD92P', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${caveat.variable} ${lato.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
