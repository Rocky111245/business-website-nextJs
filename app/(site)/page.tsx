// app/(site)/page.tsx
import HeroSection from "@/app/(site)/home/_components/HeroSection";
import ProductShowcase from "@/app/(site)/home/_components/ProductShowcase";
import MissionVisionSection from "@/app/(site)/home/_components/MissionVisionSection";
import MedicalCarousel from "@/app/(site)/home/_components/MedicalCarousel";
import EquipmentAndOffers from "@/app/(site)/home/_components/EquipmentAndOffers";
import PartnersShowcase from "@/app/(site)/home/_components/PartnersShowcase";


export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <HeroSection />
            <MedicalCarousel />
            <PartnersShowcase/>
            <EquipmentAndOffers/>
            <ProductShowcase />
            <MissionVisionSection />
        </div>
    );
}
