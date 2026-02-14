'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Makhana",
    title: "Premium Foxnuts",
    description: "Protein-rich, roasted and flavored makhana perfect for healthy snacking.",
    image: "/categories/makhana.png",
    bgColor: "from-green-600 to-emerald-500",
    link: "/shop?category=makhana"
  },
  {
    id: 2,
    name: "Mustard Oil",
    title: "Cold Pressed Mustard Oil",
    description: "Pure, chemical-free mustard oil extracted using traditional methods.",
    image: "/categories/mustard-oil.png",
    bgColor: "from-yellow-500 to-orange-500",
    link: "/shop?category=mustard-oil"
  },
  {
    id: 3,
    name: "Dry Fruits",
    title: "Organic Dry Fruits",
    description: "Handpicked premium dry fruits packed with natural nutrients and freshness.",
    image: "/categories/dry-fruits.png",
    bgColor: "from-orange-500 to-red-500",
    link: "/shop?category=dry-fruits"
  },
  {
    id: 4,
    name: "Besan",
    title: "Premium Gram Flour",
    description: "Stone-ground premium quality besan for all your cooking needs.",
    image: "/categories/aata.png",
    bgColor: "from-amber-500 to-yellow-600",
    link: "/shop?category=besan"
  }
];


export default function PopularCategories() {
  return (
    <section className="py-16 bg-gray-50" style={{ backgroundImage: 'url("/bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4">
            POPULAR CATEGORIES
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Explore our most popular product categories, trusted by thousands of customers
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         {categories.map((category) => (
  <Link
    key={category.id}
    href={category.link}
    className="group transition-all duration-500 overflow-hidden"
  >
    {/* Image Section */}
    <div className="relative h-80 overflow-hidden">
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-contain transition-transform duration-700"
      />

      {/* Soft Dark Overlay */}
    </div>

    {/* Content Section */}
    <div className="">
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
        {category.title}
      </h3>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {category.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-green-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
          Shop Now
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  </Link>
))}

        </div>

     
      </div>
    </section>
  );
}
