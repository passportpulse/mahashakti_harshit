'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Heart, Star, Tag, Sparkles, Crown, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

// Import products data from JSON
import productsData from '@/data/products.json';

interface Product {
  id: number;
  name: string;
  slug: string;
  category?: string;
  description: string;
  unit: string;
  image: string;
  features: string[];
  inStock: boolean;
  price?: number;
  originalPrice?: number;
  rating?: number;
  isNew?: boolean;
  isFeatured?: boolean;
  hasOffer?: boolean;
  title?: string;
  categories?: string[];
}

// Get all products from categories and add mock pricing data
const getAllProducts = (): Product[] => {
  const products = productsData.categories.flatMap(category => 
    category.products.map(product => ({
      ...product,
      // Add additional properties for compatibility
      title: product.name,
      // Add mock pricing data
      price: Math.floor(Math.random() * 500) + 200,
      originalPrice: Math.floor(Math.random() * 700) + 400,
      discount: Math.floor(Math.random() * 30) + 10,
      rating: Number((Math.random() * 2 + 3).toFixed(1)),
      // Assign specific categories as requested
      productCategory: getProductCategory(product.name),
      // Map to existing properties for compatibility
      hasOffer: getProductCategory(product.name) === 'discounts',
      isNew: getProductCategory(product.name) === 'new',
      isFeatured: getProductCategory(product.name) === 'topsellers'
    } as unknown as Product))
  );
  return products;
};

// Function to categorize products as requested
const getProductCategory = (productName: string): 'discounts' | 'new' | 'topsellers' => {
  if (productName.includes('MAPL Premium Besan') || 
      productName.includes('MAPL Dry Dates') || 
      productName.includes('MAPL Premium Cashews')) {
    return 'new'; // First product goes to New
  }
  if  (productName.includes('MAPL Kachchi Ghani Mustard Oil') || 
      productName.includes('MAPL Pure Mustard Oil') ||
      productName.includes('MAPL Roasted Makhana | High Protein')) {
    return 'discounts'; // Next products go to New Offers
  }
  // Remaining products go to Featured (topsellers)
  return 'topsellers';
};



const allProducts = getAllProducts();

// Get all products for each category (no limit)
const getProductsByCategory = (category: 'offers' | 'new' | 'featured') => {
  const filtered = allProducts.filter(product => {
    if (category === 'offers') return product.hasOffer;
    if (category === 'new') return product.isNew;
    if (category === 'featured') return product.isFeatured;
    return true;
  });
  
  return filtered; // Return all available products
};



const newOffersProducts = getProductsByCategory('offers');
const newProducts = getProductsByCategory('new');
const featuredProducts = getProductsByCategory('featured');

export default function ProductGridSection() {
  const [activeTab, setActiveTab] = useState<'offers' | 'new' | 'featured'>('offers');
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const getProducts = () => {
    switch (activeTab) {
      case 'offers':
        return newOffersProducts;
      case 'new':
        return newProducts;
      case 'featured':
        return featuredProducts;
      default:
        return newOffersProducts;
    }
  };

  const products = getProducts();

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <div className=" transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="relative  flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title || product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = '/api/placeholder/200/200';
          }}
        />
        
        {/* Badges */}
        {product.hasOffer && (
          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
            OFFER
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
            NEW
          </div>
        )}
        {product.isFeatured && (
          <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
            FEATURED
          </div>
        )}

        {/* Discount Badge */}
        {/* {product.originalPrice && product.price && (
          <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )} */}

        {/* Quick Actions */}
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
            <ShoppingCart className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Categories */}
        <div className="flex flex-wrap gap-1 mb-2">
          {product.categories?.map((category, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {category}
            </span>
          ))}
        </div>
        
        {/* Product Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm leading-tight">
          {product.title || product.name}
        </h3>
        
        {/* Description */}
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">{product.description}</p>


        {/* Add to Cart Button */}
        <Link
          href={`/products/${product.id}`}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center text-sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Link>
      </div>
    </div>
  );

  return (
    <section className="py-16 relative overflow-hidden bg-gray-50" style={{ backgroundImage: 'url(/bg2.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className=" mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Discover our wide range of high-quality agro products
          </p>
        </div>

        {/* Tabs with Navigation - Desktop and Mobile */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1">
            {/* Desktop Tabs */}
            <div className="hidden md:inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
              <button
                onClick={() => {
                  setActiveTab('offers');
                }}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === 'offers'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Tag className="h-4 w-4" />
                <span>NEW OFFERS</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('new');
                }}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === 'new'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Sparkles className="h-4 w-4" />
                <span>NEW</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('featured');
                }}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === 'featured'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Crown className="h-4 w-4" />
                <span>FEATURED</span>
              </button>
            </div>

            {/* Mobile Dropdown */}
            <div className="md:hidden">
              <div className="relative">
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    {activeTab === 'offers' && <Tag className="h-4 w-4 text-green-600" />}
                    {activeTab === 'new' && <Sparkles className="h-4 w-4 text-green-600" />}
                    {activeTab === 'featured' && <Crown className="h-4 w-4 text-green-600" />}
                    <span className="font-medium text-gray-900">
                      {activeTab === 'offers' && 'NEW OFFERS'}
                      {activeTab === 'new' && 'NEW'}
                      {activeTab === 'featured' && 'FEATURED'}
                    </span>
                  </div>
                  {isMobileDropdownOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {isMobileDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <button
                      onClick={() => {
                        setActiveTab('offers');
                        setIsMobileDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                        activeTab === 'offers' ? 'bg-green-50 text-green-600' : 'text-gray-700'
                      }`}
                    >
                      <Tag className="h-4 w-4" />
                      <span>NEW OFFERS</span>
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('new');
                        setIsMobileDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                        activeTab === 'new' ? 'bg-green-50 text-green-600' : 'text-gray-700'
                      }`}
                    >
                      <Sparkles className="h-4 w-4" />
                      <span>NEW</span>
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('featured');
                        setIsMobileDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                        activeTab === 'featured' ? 'bg-green-50 text-green-600' : 'text-gray-700'
                      }`}
                    >
                      <Crown className="h-4 w-4" />
                      <span>FEATURED</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
</div>
        {/* Products Grid - Show All Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
  
    </section>
  );
}
