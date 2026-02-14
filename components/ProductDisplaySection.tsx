'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Heart, Star, Tag, TrendingUp, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

// Import products data from JSON
import productsData from '@/data/products.json';

interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  unit: string;
  image: string;
  features: string[];
  inStock: boolean;
  price?: number;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  isNew?: boolean;
  isTopSeller?: boolean;
}

// Get all products from categories and add mock pricing data
const getAllProducts = (): Product[] => {
  const products = productsData.categories.flatMap(category => 
    category.products.map(product => ({
      ...product,
      // Add mock pricing data
      price: Math.floor(Math.random() * 500) + 200,
      originalPrice: Math.floor(Math.random() * 700) + 400,
      discount: Math.floor(Math.random() * 30) + 10,
      rating: Number((Math.random() * 2 + 3).toFixed(1)),
      // Randomly assign some products as new or top sellers
      isNew: Math.random() > 0.7,
      isTopSeller: Math.random() > 0.8
    } as Product))
  );
  return products;
};

const allProducts = getAllProducts();

export default function ProductDisplaySection() {
  const [activeTab, setActiveTab] = useState<'discounts' | 'new' | 'topsellers'>('discounts');
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const getProducts = () => {
    switch (activeTab) {
      case 'discounts':
        return allProducts.filter(product => product.discount && product.discount > 15).slice(0, 4);
      case 'new':
        return allProducts.filter(product => product.isNew).slice(0, 4);
      case 'topsellers':
        return allProducts.filter(product => product.isTopSeller || (product.rating && product.rating >= 4.5)).slice(0, 4);
      default:
        return allProducts.slice(0, 4);
    }
  };

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
      <div className="relative  bg-gray-100 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.src = '/api/placeholder/200/200';
          }}
        />
        
        {/* Badges
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
            -{product.discount}%
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
            NEW
          </div>
        )}
        {product.isTopSeller && (
          <div className="absolute top-2 left-2 bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold">
            TOP SELLER
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
        {/* Category */}
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        
        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
        
        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        
        {/* Rating */}
        {/* {product.rating && (
          <div className="mb-3">
            {renderStars(product.rating)}
          </div>
        )} */}
        
        {/* Price */}
        {/* <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
          </div>
        </div> */}

        {/* Add to Cart Button */}
        {/* <Link
          href={`/products/${product.id}`}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Link> */}
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Discover our amazing collection of premium quality products
          </p>
        </div>

        {/* Tabs - Desktop and Mobile */}
        <div className="mb-8">
          {/* Desktop Tabs */}
          <div className="hidden md:flex justify-start">
            <div className="inline-flex p-1">
              <button
                onClick={() => setActiveTab('discounts')}
                className={`px-6 py-3 text-sm rounded-md font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === 'discounts'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Tag className="h-4 w-4" />
                <span>DISCOUNTS AND PROMOTIONS</span>
              </button>
              <button
                onClick={() => setActiveTab('new')}
                className={`px-6 py-3 text-sm rounded-md font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === 'new'
                    ? 'bg-white  text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Sparkles className="h-4 w-4" />
                <span>NEW PRODUCTS</span>
              </button>
              <button
                onClick={() => setActiveTab('topsellers')}
                className={`px-6 py-3 text-sm rounded-md font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === 'topsellers'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <TrendingUp className="h-4 w-4" />
                <span>TOP SELLERS</span>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <div className="relative">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  {activeTab === 'discounts' && <Tag className="h-4 w-4 text-green-600" />}
                  {activeTab === 'new' && <Sparkles className="h-4 w-4 text-green-600" />}
                  {activeTab === 'topsellers' && <TrendingUp className="h-4 w-4 text-green-600" />}
                  <span className="font-medium text-gray-900">
                    {activeTab === 'discounts' && 'DISCOUNTS AND PROMOTIONS'}
                    {activeTab === 'new' && 'NEW PRODUCTS'}
                    {activeTab === 'topsellers' && 'TOP SELLERS'}
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
                      setActiveTab('discounts');
                      setIsMobileDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                      activeTab === 'discounts' ? 'bg-green-50 text-green-600' : 'text-gray-700'
                    }`}
                  >
                    <Tag className="h-4 w-4" />
                    <span>DISCOUNTS AND PROMOTIONS</span>
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
                    <span>NEW PRODUCTS</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('topsellers');
                      setIsMobileDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                      activeTab === 'topsellers' ? 'bg-green-50 text-green-600' : 'text-gray-700'
                    }`}
                  >
                    <TrendingUp className="h-4 w-4" />
                    <span>TOP SELLERS</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getProducts().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          {/* <Link
            href="/shop"
            className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            View All Products
          </Link> */}
        </div>
      </div>
    </section>
  );
}
