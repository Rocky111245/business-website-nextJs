// app/(site)/layout.tsx
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsAppIcon from "@/app/components/WhatsAppIcon";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <WhatsAppIcon />
            {children}
            <Footer />
        </div>
    );
}
