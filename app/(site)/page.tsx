// app/(site)/page.tsx
import HeroSection from "@/app/components/home/HeroSection";
import GallerySection from "@/app/components/home/GallerySection";
import TrustedBrandsSection from "@/app/components/home/TrustedBrandsSection";
import CategorySection from "@/app/components/home/CategorySection";
import ServicesGrid from "@/app/components/home/ServicesGrid";
import ProductShowcase from "@/app/components/home/ProductShowcase";
import MissionVisionSection from "@/app/components/home/MissionVisionSection";
import SubFooter from "@/app/components/SubFooter";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <HeroSection />
            <GallerySection />
            <TrustedBrandsSection />
            <CategorySection />
            <ServicesGrid />
            <ProductShowcase />
            <MissionVisionSection />
            <SubFooter />
        </div>
    );
}
