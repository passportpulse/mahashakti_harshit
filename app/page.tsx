import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import HeroSlider from "@/components/HeroSlider";
import PopularCategories from "@/components/PopularCategories";
import ProductDisplaySection from "@/components/ProductDisplaySection";
import PartnerWithUsSection from "@/components/PartnerWithUsSection";
import ProductGridSection from "@/components/ProductGridSection";
import CTASection from "@/components/CTASection";
import GallerySection from "@/components/GallerySection";

export const metadata: Metadata = {
  title: "MAHASHAKTI AGRO PRODUCTS PVT. LTD. - Premium Agro Products & Natural Foods",
  description: "MAHASHAKTI AGRO PRODUCTS PVT. LTD. offers premium quality agro products including besan, makhana, mustard oil, cashews, and dry fruits. Trusted supplier of natural and healthy food products in Kolkata, India.",
  keywords: ["MAHASHAKTI AGRO PRODUCTS", "agro products", "besan", "makhana", "mustard oil", "cashews", "dry fruits", "natural foods", "premium quality", "Kolkata", "India"],
  authors: [{ name: "MAHASHAKTI AGRO PRODUCTS PVT. LTD." }],
  creator: "MAHASHAKTI AGRO PRODUCTS PVT. LTD.",
  publisher: "MAHASHAKTI AGRO PRODUCTS PVT. LTD.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mahashaktiagroproductspvtltd.in"),
  alternates: {
    canonical: "https://mahashaktiagroproductspvtltd.in",
  },
  openGraph: {
    title: "MAHASHAKTI AGRO PRODUCTS PVT. LTD. - Premium Agro Products",
    description: "Premium quality agro products including besan, makhana, mustard oil, cashews, and dry fruits. Trusted supplier in Kolkata, India.",
    url: "https://mahashaktiagroproductspvtltd.in",
    siteName: "MAHASHAKTI AGRO PRODUCTS PVT. LTD.",
    images: [
      {
        url: "/MM-2D-PNG.png",
        width: 180,
        height: 60,
        alt: "MAHASHAKTI AGRO PRODUCTS PVT. LTD. Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAHASHAKTI AGRO PRODUCTS PVT. LTD. - Premium Agro Products",
    description: "Premium quality agro products including besan, makhana, mustard oil, cashews, and dry fruits. Trusted supplier in Kolkata, India.",
    images: ["/MM-2D-PNG.png"],
    creator: "@mahashaktiagro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

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
