// app/(site)/page.tsx
import SubFooter from "./../components/SubFooter";
import HeroSection from "./../components/home/HeroSection";
import GallerySection from "./../components/home/GallerySection";
import TrustedBrandsSection from "./../components/home/TrustedBrandsSection";
import CategorySection from "./../components/home/CategorySection";
import ServicesGrid from "./../components/home/ServicesGrid";
import ProductShowcase from "./../components/home/ProductShowcase";
import MissionVisionSection from "./../components/home/MissionVisionSection";

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
