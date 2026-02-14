'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  Handshake, 
  Home, 
  Headphones, 
  Rocket,
  CheckCircle,
  Phone,
  Mail,
  Globe
} from 'lucide-react';

export default function PartnerWithUsSection() {
  const partnerFeatures = [
    {
      icon: Briefcase,
      title: "Bulk Orders Available",
      description: "Special pricing for bulk purchases"
    },
    {
      icon: Handshake,
      title: "Free Distributorship",
      description: "Join our network without any investment"
    },
    {
      icon: Home,
      title: "CNF Welcome",
      description: "Commission agents are welcome"
    },
    {
      icon: Headphones,
      title: "24x7 Customer Support",
      description: "Round the clock assistance"
    },
    {
      icon: Rocket,
      title: "New Products Every Month",
      description: "Innovative products regularly"
    }
  ];

  const makhanaFeatures = [
    "Protein Rich",
    "Low Fat", 
    "No Cholesterol",
    "Gluten Free"
  ];

  return (
  <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partner With MAPL - Grow Your Business
          </h2>
          <p className="text-xl text-green-700 font-semibold mb-4">
            "Desh ki Har ghar ki shakti!!! Mahashakti."
          </p>
          <p className="text-lg text-gray-600 max-w-3xl">
            Reliable support, strong distribution network, and continuous product innovation
          </p>
        </div>

        {/* Partner Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {partnerFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/gallery/WhatsApp-Image-2026-01-20-at-3.15.07-PM.jpeg" 
              alt="Partner with MAPL - Business Growth"
              className="w-full  object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/gallery/WhatsApp-Image-2026-01-20-at-3.15.07-PM-1.jpeg" 
              alt="MAPL Partnership Opportunities"
              className="w-full  object-cover"
            />
          </div>
        </div>

   
      </div>
    </section>
  );
}
