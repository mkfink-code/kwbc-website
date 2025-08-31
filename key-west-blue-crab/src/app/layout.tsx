import type { Metadata } from "next";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Key West Blue Crab | Only Food Truck in America Selling Blue Crabs All Year Round | Key West, FL",
  description: "The only food truck in America selling blue crabs all year round! Experience the freshest blue crabs and authentic Key West seafood from our mobile kitchen. Located at 3124 Overseas Highway. Order online for pickup!",
  keywords: "Key West blue crab, only food truck America blue crabs year round, fresh seafood, food truck, Key West restaurant, crab cakes, steamed crabs, Florida seafood, unique food truck",
  authors: [{ name: "Key West Blue Crab" }],
  openGraph: {
    title: "Key West Blue Crab | Only Food Truck in America Selling Blue Crabs All Year Round",
    description: "The only food truck in America selling blue crabs all year round! Fresh blue crabs and authentic Key West seafood served from our mobile kitchen in paradise.",
    url: "https://keywestbluecrab.com",
    siteName: "Key West Blue Crab",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Key West Blue Crab | Only Food Truck in America Selling Blue Crabs All Year Round",
    description: "The only food truck in America selling blue crabs all year round! Fresh blue crabs and authentic Key West seafood served from our mobile kitchen in paradise.",
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
      <body
        className={`${merriweather.variable} ${sourceSans.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
