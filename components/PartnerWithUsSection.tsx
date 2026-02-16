'use client';

import React from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Handshake,
  Home,
  Headphones,
  Rocket,

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
  <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-green-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="mb-14">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Partner With MAPL - Grow Your Business
      </h2>
      <p className="text-xl text-green-700 font-semibold mb-3">
        "Desh ki Har ghar ki shakti!!! Mahashakti."
      </p>
      <p className="text-gray-600 max-w-3xl">
        Reliable support, strong distribution network, and continuous product innovation
      </p>
    </div>

    {/* Main Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

      {/* LEFT SIDE */}
      <div className="space-y-10">

        {/* Capsules */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Why Partner With Us?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partnerFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white  border border-green-200 rounded-full px-6 py-4 flex items-center gap-4 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Below Capsules */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/1.png"
            alt="Partner with MAPL"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="lg:sticky lg:top-8">
        <div className="p-10 border border-green-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Start Your Partnership Journey
          </h3>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />

            <select className="w-full px-4 py-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
              <option>Select Business Type</option>
              <option>Retailer</option>
              <option>Distributor</option>
              <option>Wholesaler</option>
              <option>Manufacturer</option>
              <option>Other</option>
            </select>

            <textarea
              rows={4}
              placeholder="Tell us about your business..."
              className="w-full px-4 py-3 text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
            ></textarea>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 bg-green-600 text-white font-semibold py-4 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Submit Partnership Request
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>

  );
}
