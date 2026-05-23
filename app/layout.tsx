import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { event } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://somastartup.com"),
  title: {
    default: `${event.name} — ${event.tagline}`,
    template: `%s · ${event.name}`,
  },
  description:
    "A one-day, high-energy entrepreneurship event for students who live in South Orange & Maplewood — grades 4 through college. No coding, no experience required.",
  openGraph: {
    title: `${event.name} — ${event.tagline}`,
    description:
      "A one-day startup challenge for SOMA students. Spot a problem, build a solution, pitch it to judges.",
    type: "website",
    url: "https://somastartup.com",
    siteName: event.name,
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
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
