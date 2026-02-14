'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
  discount?: number;
}

const mockWishlistProducts: Product[] = [
  {
    id: 1,
    name: "Premium Makhana - 500g",
    price: 299,
    originalPrice: 399,
    image: "/api/placeholder/200/200",
    category: "Makhana",
    inStock: true,
    discount: 25
  },
  {
    id: 2,
    name: "Organic Almonds - 250g",
    price: 450,
    originalPrice: 550,
    image: "/api/placeholder/200/200",
    category: "Dry Fruits",
    inStock: true,
    discount: 18
  },
  {
    id: 3,
    name: "Cold Pressed Mustard Oil - 1L",
    price: 280,
    image: "/api/placeholder/200/200",
    category: "Mustard Oil",
    inStock: false,
    discount: 0
  },
  {
    id: 4,
    name: "Mixed Dry Fruits - 500g",
    price: 650,
    originalPrice: 799,
    image: "/api/placeholder/200/200",
    category: "Dry Fruits",
    inStock: true,
    discount: 19
  }
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Product[]>(mockWishlistProducts);
  const [notification, setNotification] = useState<string | null>(null);

  const removeFromWishlist = (productId: number) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
    showNotification('Product removed from wishlist');
  };

  const addToCart = (product: Product) => {
    showNotification(`${product.name} added to cart`);
  };

  const moveAllToCart = () => {
    const inStockProducts = wishlist.filter(item => item.inStock);
    if (inStockProducts.length > 0) {
      showNotification(`${inStockProducts.length} products moved to cart`);
    }
  };

  const clearWishlist = () => {
    setWishlist([]);
    showNotification('Wishlist cleared');
  };

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse">
          {notification}
        </div>
      )}

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
                <p className="text-gray-600 mt-1">
                  {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} in your wishlist
                </p>
              </div>
            </div>
            
            {wishlist.length > 0 && (
              <div className="flex space-x-3">
                <button
                  onClick={moveAllToCart}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Move All to Cart</span>
                </button>
                <button
                  onClick={clearWishlist}
                  className="border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Wishlist Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {wishlist.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <Heart className="h-10 w-10 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Add items you love to keep track of them</p>
            <Link
              href="/shop"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                {/* Product Image */}
                <div className="relative">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-400 text-6xl">🌰</div>
                  </div>
                  
                  {/* Discount Badge */}
                  {product.discount && product.discount > 0 && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                      -{product.discount}%
                    </div>
                  )}
                  
                  {/* Out of Stock Badge */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="bg-white text-gray-900 px-3 py-1 rounded font-semibold">Out of Stock</span>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  
                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className={`flex-1 py-2 px-3 rounded-lg font-medium transition-colors ${
                        product.inStock
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="h-4 w-4 inline mr-1" />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="p-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Wishlist Summary */}
      {wishlist.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Wishlist Summary</h3>
                <p className="text-gray-600">
                  Total value: ₹{wishlist.reduce((sum, item) => sum + item.price, 0)}
                </p>
              </div>
              <div className="flex space-x-3 mt-4 md:mt-0">
                <Link
                  href="/shop"
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/cart"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
