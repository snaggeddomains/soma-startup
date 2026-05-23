import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { event } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "SOMA Startup is a one-day youth entrepreneurship and startup pitch competition for South Orange & Maplewood students in grades 4–12. No coding or experience required.";

export const metadata: Metadata = {
  metadataBase: new URL("https://somastartup.com"),
  title: {
    default: `${event.name} — Youth Entrepreneurship in South Orange & Maplewood`,
    template: `%s · ${event.name}`,
  },
  description: siteDescription,
  applicationName: event.name,
  keywords: [
    "SOMA Startup",
    "youth entrepreneurship",
    "student startup competition",
    "startup pitch competition",
    "South Orange",
    "Maplewood",
    "South Orange Maplewood",
    "Columbia High School",
    "kids entrepreneurship",
    "student pitch competition New Jersey",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: `${event.name} — A town of makers, now it's the kids' turn`,
    description: siteDescription,
    type: "website",
    url: "https://somastartup.com",
    siteName: event.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${event.name} — Youth Entrepreneurship in South Orange & Maplewood`,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
