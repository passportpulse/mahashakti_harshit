import Image from 'next/image';
import { Globe, CheckCircle, Target, Award } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - MAHASHAKTI AGRO PRODUCTS PVT. LTD. | Global Agro Products Supplier",
  description: "Learn about MAHASHAKTI AGRO PRODUCTS PVT. LTD. - Leading manufacturer, supplier, importer and exporter of premium quality agro products including besan, makhana, mustard oil, and cashews. Serving global markets from Kolkata, India.",
  keywords: ["about MAHASHAKTI", "agro products manufacturer", "besan supplier", "makhana exporter", "mustard oil importer", "cashews supplier", "Kolkata agro products", "global agro trade", "MAHASHAKTI AGRO PRODUCTS"],
  authors: [{ name: "MAHASHAKTI AGRO PRODUCTS PVT. LTD." }],
  creator: "MAHASHAKTI AGRO PRODUCTS PVT. LTD.",
  publisher: "MAHASHAKTI AGRO PRODUCTS PVT. LTD.",
  openGraph: {
    title: "About Us - MAHASHAKTI AGRO PRODUCTS PVT. LTD.",
    description: "Leading manufacturer, supplier, importer and exporter of premium quality agro products. Serving global markets from Kolkata, India.",
    url: "https://mahashaktiagroproductspvtltd.in/about",
    siteName: "MAHASHAKTI AGRO PRODUCTS PVT. LTD.",
    images: [
      {
        url: "/gallery/WhatsApp-Image-2026-01-20-at-3.15.07-PM-1.png",
        width: 800,
        height: 600,
        alt: "MAHASHAKTI AGRO PRODUCTS - About Us",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - MAHASHAKTI AGRO PRODUCTS PVT. LTD.",
    description: "Leading manufacturer, supplier, importer and exporter of premium quality agro products. Serving global markets from Kolkata, India.",
    images: ["/gallery/WhatsApp-Image-2026-01-20-at-3.15.07-PM-1.png"],
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
  alternates: {
    canonical: "https://mahashaktiagroproductspvtltd.in/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
            
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Supplying Quality Agro Products <span className="text-green-600">Globally</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Manufacturer, Supplier, Importer & Exporter of Quality Agro Products
              </p>
              
              <p className="text-lg text-gray-800 mb-8 leading-relaxed font-semibold">
                MAHASHAKTI AGRO PRODUCTS PVT. LTD. is a professionally managed agro-food
                company engaged in the manufacturing, supplying, importing, and exporting of
                high-quality food products. Headquartered in Kolkata, West Bengal (India), we
                cater to both domestic and international markets with a strong focus on quality,
                purity, and timely delivery.
              </p>

              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">Import & Export Operations</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are actively engaged in import and export of premium-quality agro food
                products, serving both domestic and international markets. Our export range
                includes high-grade Besan (Gram Flour), traditional Kachchi Ghani and refined
                mustard oil, and quality Makhana (Fox Nuts), all processed and packed in
                accordance with international food safety standards to ensure freshness and
                authenticity. Along with exports, we also import selected agro and food-related
                raw materials from trusted global suppliers to maintain consistent quality,
                support large-scale production, and ensure uninterrupted supply throughout
                the year.
              </p>
            </div>

            {/* Right Image - Fixed Position */}
            <div className="lg:w-1/2 relative h-96 overflow-hidden  lg:sticky lg:top-20">
              <Image
                src="/gallery/WhatsApp-Image-2026-01-20-at-3.15.07-PM-1.png"
                alt="Mahashakti Agro Products"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Our Mission */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-green-600" />
                <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver pure, safe, and high-quality agro products through ethical manufacturing
                practices and sustainable sourcing. We are committed to maintaining the highest
                standards of food safety and quality while building lasting relationships with
                our customers and partners worldwide.
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-8 w-8 text-green-600" />
                <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become a globally recognized leader in the agro-food industry, known for
                our commitment to quality, innovation, and customer satisfaction. We aim to
                expand our reach while maintaining our core values of integrity, sustainability,
                and excellence in every aspect of our business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl ">
              Experience the difference that quality and commitment make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality Products</h3>
                <p className="text-gray-600">All our products undergo rigorous quality checks to ensure purity and freshness</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Standards</h3>
                <p className="text-gray-600">Manufactured and packed according to international food safety standards</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ethical Sourcing</h3>
                <p className="text-gray-600">Direct partnerships with farmers and trusted global suppliers</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Timely Delivery</h3>
                <p className="text-gray-600">Efficient supply chain ensuring on-time delivery worldwide</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Focus</h3>
                <p className="text-gray-600">Dedicated support and personalized service for all clients</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Practices</h3>
                <p className="text-gray-600">Environmentally friendly manufacturing and packaging solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
