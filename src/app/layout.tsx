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
        className={`${caveat.variable} ${lato.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
