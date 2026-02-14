'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  Search, 
  ShoppingCart, 
  Star, 
  Grid3X3,
  List,
  Heart,
  Package,
  Truck
} from 'lucide-react';

// Import products data from JSON
import productsData from "@/data/products.json";

function ShopPageContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [likedItems, setLikedItems] = useState<number[]>([]);

  // Update selected category when URL parameter changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }
  }, [categoryParam]);

  // Filter products based on category and search
  const getFilteredProducts = () => {
    let products: any[] = [];
    
    if (selectedCategory === 'all') {
      productsData.categories.forEach(category => {
        products = [...products, ...category.products];
      });
    } else {
      const category = productsData.categories.find(cat => cat.slug === selectedCategory);
      if (category) {
        products = category.products;
      }
    }

    // Search filter
    if (searchQuery) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return products;
  };

  const filteredProducts = getFilteredProducts();

  const toggleCart = (productId: number) => {
    setCartItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleLike = (productId: number) => {
    setLikedItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Premium quality agro products for your daily needs
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/shop"
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Products
              </Link>
              {productsData.categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/shop?category=${category.slug}`}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.slug
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>

            {/* Search and Controls */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'text-gray-600'}`}
                >
                  <Grid3X3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-green-100 text-green-600' : 'text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

       

        {/* All Products Grid/List */}
        <div>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'space-y-4'
            }>
              {filteredProducts.map((product) => (
                <Link 
                  href={`/products/${product.id}`}
                  key={product.id}
                  className={` overflow-hidden transition-all duration-300 group ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <>
                      <div className="relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={200}
                          className="object-cover w-full"
                        />
                        
                        {/* Action Buttons */}
                        <div className="absolute top-2 right-2 flex space-x-2">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleLike(product.id);
                            }}
                            className="p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                          >
                            <Heart className={`h-4 w-4 ${likedItems.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleCart(product.id);
                            }}
                            className="p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                          >
                            <ShoppingCart className={`h-4 w-4 ${cartItems.includes(product.id) ? 'text-green-600' : 'text-gray-600'}`} />
                          </button>
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{product.description}</p>
                        
                        {/* <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                            <span className="text-sm text-gray-500">/{product.unit}</span>
                          </div>
                          
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600">4.5</span>
                          </div>
                        </div> */}

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {product.features.slice(0, 3).map((feature: string, index: number) => (
                            <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    // List View
                    <div className="flex w-full">
                      <div className="relative w-48 h-32 flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={200}
                          height={150}
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                toggleLike(product.id);
                              }}
                              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                            >
                              <Heart className={`h-4 w-4 ${likedItems.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                toggleCart(product.id);
                              }}
                              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                            >
                              <ShoppingCart className={`h-4 w-4 ${cartItems.includes(product.id) ? 'text-green-600' : 'text-gray-600'}`} />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                            <span className="text-sm text-gray-500">/{product.unit}</span>
                          </div>
                          
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600">4.5</span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {product.features.map((feature: string, index: number) => (
                            <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading shop...</p>
        </div>
      </div>
    }>
      <ShopPageContent />
    </Suspense>
  );
}