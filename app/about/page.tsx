'use client';

import Image from 'next/image';
import { Globe, CheckCircle, Target, Award } from 'lucide-react';

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
                Supplying Quality Agro Products <span className="text-blue-600">Globally</span>
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
                <Globe className="h-6 w-6 text-blue-600" />
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
            <div className="lg:w-1/2 relative h-96 rounded-2xl overflow-hidden shadow-2xl lg:sticky lg:top-20">
              <Image
                src="/mahashakti-hero.png"
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
                <Target className="h-8 w-8 text-blue-600" />
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
                <Award className="h-8 w-8 text-blue-600" />
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that quality and commitment make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality Products</h3>
                <p className="text-gray-600">All our products undergo rigorous quality checks to ensure purity and freshness</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Standards</h3>
                <p className="text-gray-600">Manufactured and packed according to international food safety standards</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ethical Sourcing</h3>
                <p className="text-gray-600">Direct partnerships with farmers and trusted global suppliers</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Timely Delivery</h3>
                <p className="text-gray-600">Efficient supply chain ensuring on-time delivery worldwide</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Focus</h3>
                <p className="text-gray-600">Dedicated support and personalized service for all clients</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Practices</h3>
                <p className="text-gray-600">Environmentally friendly manufacturing and packaging solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner with Us for Quality Agro Products
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our growing network of satisfied customers worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              View Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
