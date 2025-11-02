// app/(site)/layout.tsx
import type { ReactNode } from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import WhatsAppIcon from "./../components/WhatsAppIcon";

export default function SiteLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <WhatsAppIcon />
            {children}
            <Footer />
        </div>
    );
}
