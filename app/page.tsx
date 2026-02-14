import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import PopularCategories from "@/components/PopularCategories";
import ProductDisplaySection from "@/components/ProductDisplaySection";
import PartnerWithUsSection from "@/components/PartnerWithUsSection";
import ProductGridSection from "@/components/ProductGridSection";
import CTASection from "@/components/CTASection";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Product Display Section */}
      <ProductDisplaySection />

      {/* Popular Categories Section */}
      <PopularCategories />

      {/* Gallery Section */}

      {/* CTA Section */}
      <CTASection />

      {/* Partner With Us Section */}
      <PartnerWithUsSection />

      {/* Product Grid Section */}
      <ProductGridSection />

 
    </div>
  );
}
