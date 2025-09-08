import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata stays only with title, description, etc.
export const metadata: Metadata = {
  title: "STABDHA UTILITY INSIGHTS PRIVATE LIMITED | SUIPL",
  description:
    "Certified startup providing data-driven analytics, utility management, and business intelligence solutions with a B2B approach.",
  keywords:
    "utility management, data analytics, financial IT, infrastructure support, carbon footprint reduction",
  authors: [{ name: "SUIPL" }],
  icons: { icon: "/favicon.ico" }, // keep favicon here if needed
};

// ✅ Move viewport to its own export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000", // optional
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
