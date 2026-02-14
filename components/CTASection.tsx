'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

export default function CTASection() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-100">
      
      {/* 🔥 Creative Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-emerald-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-lime-300 opacity-30 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Get Premium
              <span className="text-green-600"> Agro Products</span>
              <br />
              Delivered to Your Doorstep
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Join thousands of satisfied customers who trust MAHASHAKTI AGRO PRODUCTS 
              for authentic, high-quality agricultural products.
            </p>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                "100% Natural & Organic Products",
                "Farm Direct Sourcing",
                "Fast & Secure Delivery",
                "Best Price Guarantee"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition group"
              >
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-xl hover:bg-green-600 hover:text-white transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur-lg">
              <Image
                src="/cta-image.png"
                alt="Premium Agro Products"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
