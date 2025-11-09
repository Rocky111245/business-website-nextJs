// app/(site)/page.tsx
import SubFooter from "./../components/SubFooter";
import HeroSection from "@/app/(site)/home/HeroSection";
import ProductShowcase from "@/app/(site)/home/ProductShowcase";
import MissionVisionSection from "@/app/(site)/home/MissionVisionSection";
import MedicalCarousel from "@/app/(site)/home/MedicalCarousel";
import EquipmentAndOffers from "@/app/(site)/home/EquipmentAndOffers";
import PartnersShowcase from "@/app/(site)/home/PartnersShowcase";


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
