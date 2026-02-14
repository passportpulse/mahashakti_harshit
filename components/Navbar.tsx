'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Menu, X, User, Heart } from 'lucide-react';
import categories from '@/data/categories.json';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Sticky effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      {/* <div className="hidden sm:block bg-gray-50 border-b border-gray-200 py-2 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              dey.Surajit.Kolkata@gmail.com
            </span>
            <span className="hidden sm:flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              Office No. 1B, Annex Building 2, B.T.M. Sarani, Kolkata - 700001
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/categories" className="hover:text-green-600 transition-colors font-medium">
              All Categories
            </Link>
            <Link href="/products/makhana" className="hover:text-green-600 transition-colors font-medium">
              Makhana
            </Link>
            <Link href="/products/dry-fruits" className="hover:text-green-600 transition-colors font-medium">
              Dry Fruits
            </Link>
            <Link href="/products/mustard-oil" className="hover:text-green-600 transition-colors font-medium">
              Mustard oil
            </Link>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <div className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/MM-2D-PNG.png"
              alt="MAPL Logo"
              className="h-14 w-auto mr-3"
            />
        
          </Link>

          {/* Search */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <form className="flex w-full shadow-lg border border-gray-200 rounded-lg overflow-hidden">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3  text-gray-500  bg-gray-50 text-sm outline-none border-r border-gray-200"
              >
                {categories.map((cat, index) => (
                  <option key={index}>{cat.name}</option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Search for premium agro products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1  text-gray-500 px-4 py-3 outline-none text-sm"
              />

              <button
                type="submit"
                className="px-6 bg-gray600 text-white text-sm hover:bg-green-700 transition-colors"
              >
                <Search className="h-5 w-5  text-gray-500 " />
              </button>
            </form>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/account" className="text-gray-600 hover:text-green-600 transition-colors">
              <User className="h-6 w-6" />
            </Link>
            <Link href="/wishlist" className="text-gray-600 hover:text-green-600 transition-colors relative">
              <Heart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href="/cart" className="text-gray-600 hover:text-green-600 transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-600 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Sticky on Scroll */}
      <div
        className={`hidden md:block bg-white transition-all duration-300 ${
          isSticky
            ? 'fixed top-0 left-0 w-full shadow-lg z-50'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-500 hover:text-green-600 transition-colors font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-900 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-green-600 transition-colors font-medium relative group">
              About us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-900 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/gallery" className="text-gray-500 hover:text-green-600 transition-colors font-medium relative group">
              Gallery
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-900 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/shop" className="text-gray-500 hover:text-green-600 transition-colors font-medium relative group">
              Shop
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-900 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-green-600 transition-colors font-medium relative group">
              Contact us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-900 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
          </div>
          
     
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block py-2 text-gray-700 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-green-600 font-medium">
              About us
            </Link>
            <Link href="/gallery" className="block py-2 text-gray-700 hover:text-green-600 font-medium">
              Gallery
            </Link>
            <Link href="/shop" className="block py-2 text-gray-700 hover:text-green-600 font-medium">
              Shop
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-green-600 font-medium">
              Contact us
            </Link>
            <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors w-full">
              PURCHASE THEME
            </button>
          </div>
        </div>
      )}
    </>
  );
}
