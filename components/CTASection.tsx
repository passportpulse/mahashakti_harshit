'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

export default function CTASection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle form submission
  };

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Get Premium
                <span className="text-green-600"> Agro Products</span>
                <br />
                Delivered to Your Doorstep
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Join thousands of satisfied customers who trust MAHASHAKTI AGRO PRODUCTS for authentic, 
                high-quality agricultural products. From farm-fresh Makhana to pure Mustard Oil, 
                we bring nature's best directly to you.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">100% Natural & Organic Products</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Farm Direct Sourcing</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Fast & Secure Delivery</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Best Price Guarantee</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors group"
              >
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src="/cta/cta-image.png"
                alt="Premium Agro Products"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">NEW</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
                <span className="text-green-600 font-bold">Free Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
