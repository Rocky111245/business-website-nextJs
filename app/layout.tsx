// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            {/* Helps mobile browser chrome match your brand */}
            <meta name="theme-color" content="#1e3a8a" />
        </head>
        <body className={`${inter.className} min-h-screen bg-neutral-50`}>
        {children}
        </body>
        </html>
    );
}
