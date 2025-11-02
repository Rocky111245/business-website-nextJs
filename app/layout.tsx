// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: { default: "Evolution Medical Technologies", template: "%s – Evolution Medical Technologies" },
    description: "World-class medical equipment for healthcare institutions in Bangladesh.",
};

export const viewport: Viewport = { themeColor: "#0ea5e9" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.variable}>
        <body className="min-h-screen bg-gray-50">{children}</body>
        </html>
    );
}
