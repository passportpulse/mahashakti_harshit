'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ShoppingCart, 
  Heart, 
  ArrowLeft, 
  Truck, 
  Shield, 
  RefreshCw, 
  Star,
  Plus,
  Minus,
  Check,
  ChevronRight
} from 'lucide-react';

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
}

const relatedProducts = [
  { id: 3, name: "Roasted Makhana - 250g", price: 199, image: "/api/placeholder/200/200" },
  { id: 4, name: "Mixed Dry Fruits - 500g", price: 650, image: "/api/placeholder/200/200" },
  { id: 5, name: "Flavored Makhana Assortment", price: 349, image: "/api/placeholder/200/200" },
  { id: 6, name: "Premium Cashews - 200g", price: 380, image: "/api/placeholder/200/200" }
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = parseInt(params.id as string);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');
  const [notification, setNotification] = useState<string | null>(null);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    rating: 5,
    title: '',
    comment: ''
  });
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const product = productsData.categories.flatMap((category) => category.products).find((product) => product.id === productId) as Product | undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link href="/shop" className="text-green-600 hover:text-green-700">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const addToCart = () => {
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const addToWishlist = () => {
    setNotification(`${product.name} added to wishlist!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNotification('Review submitted successfully!');
    setReviewForm({
      name: '',
      email: '',
      rating: 5,
      title: '',
      comment: ''
    });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleReviewChange = (field: string, value: string | number) => {
    setReviewForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const renderStars = (rating: number = 4) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
        <span className="ml-2 text-gray-600">({rating} · 24 reviews)</span>
      </div>
    );
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href={`/shop?category=${product.category}`} className="text-gray-600 hover:text-gray-900">
              {product.category}
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="">
              <div className="relative">
                <div 
                  className="aspect-square bg-gray-50 rounded-lg overflow-hidden cursor-zoom-in"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = '/api/placeholder/400/400';
                    }}
                  />
                </div>
                
                {/* Zoom Overlay */}
                {isHovering && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div 
                      className="absolute w-32 h-32 border-2 border-green-500 rounded-full shadow-lg"
                      style={{
                        left: `${zoomPosition.x}%`,
                        top: `${zoomPosition.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            
            {/* Zoom Preview */}
            {isHovering && (
              <div className="bg-white rounded-lg shadow-md p-2">
                <div className="aspect-square overflow-hidden rounded">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                    style={{
                      transform: `scale(2) translate(-${zoomPosition.x/2}%, -${zoomPosition.y/2}%)`,
                      transformOrigin: 'center'
                    }}
                    onError={(e) => {
                      e.currentTarget.src = '/api/placeholder/400/400';
                    }}
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">Hover to zoom</p>
              </div>
            )}
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-2 cursor-pointer hover:ring-2 hover:ring-green-500">
                  <div className="aspect-square bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={`${product.name} ${i}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = '/api/placeholder/100/100';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Info */}
            <div>
              <div className="text-sm text-gray-500 mb-2">{product.category}</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="mb-4">
                {renderStars()}
              </div>
 <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Description</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
              {/* Price */}
              {/* <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">₹299</span>
                <span className="text-xl text-gray-500 line-through">₹399</span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                  -25%
                </span>
              </div> */}

              {/* Stock Status */}
              <div className="flex items-center space-x-2 mb-6">
                {product.inStock ? (
                  <>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium">In Stock</span>
                  </>
                ) : (
                  <>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 font-medium">Out of Stock</span>
                  </>
                )}
              </div>

              {/* Quantity and Actions */}
              <div className="flex text-gray-500 items-center space-x-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-gray-500 hover:bg-gray-50"
                  >
                    <Minus className="h-4 w-4 text-gray-500" />
                  </button>
                  <span className="px-4 py-3 font-medium text-gray-500">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-gray-500 hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4 text-gray-500" />
                  </button>
                </div>

                <button
                  onClick={addToCart}
                  disabled={!product.inStock}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                    product.inStock
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="h-5 w-5 inline mr-2" />
                  Add to Cart
                </button>

                <button
                  onClick={addToWishlist}
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              {/* Product Features */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="border-t pt-6 mt-6">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Weight:</span>
                    <span className="ml-2 font-medium">1 {product.unit}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Shelf Life:</span>
                    <span className="ml-2 font-medium">6 months</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Category:</span>
                    <span className="ml-2 font-medium">{product.category}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Truck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Free Shipping</h4>
                <p className="text-sm text-gray-600">On orders above ₹500</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Secure Payment</h4>
                <p className="text-sm text-gray-600">100% secure transactions</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <RefreshCw className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Easy Returns</h4>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md">
            <div className="border-b">
              <div className="flex space-x-8 px-6">
                {['description', 'nutrition', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`py-4 px-2 border-b-2 font-medium capitalize ${
                      selectedTab === tab
                        ? 'border-green-600 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              {selectedTab === 'description' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Description</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Storage Instructions</h4>
                    <p className="text-gray-600">Store in a cool, dry place away from direct sunlight. Keep in an airtight container to maintain freshness.</p>
                  </div>
                </div>
              )}

              {selectedTab === 'nutrition' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Nutritional Information</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">350</div>
                        <div className="text-sm text-gray-600">Calories</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">12g</div>
                        <div className="text-sm text-gray-600">Protein</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">65g</div>
                        <div className="text-sm text-gray-600">Carbs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">8g</div>
                        <div className="text-sm text-gray-600">Fiber</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">3g</div>
                        <div className="text-sm text-gray-600">Fat</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'reviews' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Reviews</h3>
                  
                  {/* Review Summary */}
                  <div className="text-center py-8 mb-8">
                    <div className="text-4xl font-bold text-gray-900 mb-2">4.0</div>
                    <div className="flex justify-center mb-2">
                      {renderStars()}
                    </div>
                    <p className="text-gray-600">Based on 24 reviews</p>
                  </div>

                  {/* Review Form */}
                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Write a Review</h4>
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={reviewForm.name}
                            onChange={(e) => handleReviewChange('name', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={reviewForm.email}
                            onChange={(e) => handleReviewChange('email', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Rating *
                        </label>
                        <div className="flex items-center space-x-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => handleReviewChange('rating', star)}
                              className="focus:outline-none"
                            >
                              <Star
                                className={`w-6 h-6 ${star <= reviewForm.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}
                              />
                            </button>
                          ))}
                          <span className="ml-2 text-gray-600">({reviewForm.rating} out of 5)</span>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Review Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={reviewForm.title}
                          onChange={(e) => handleReviewChange('title', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="Summarize your experience"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Your Review *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={reviewForm.comment}
                          onChange={(e) => handleReviewChange('comment', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="Share your thoughts about this product..."
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                      >
                        Submit Review
                      </button>
                    </form>
                  </div>

                  {/* Sample Reviews */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-gray-900">Recent Reviews</h4>
                    
                    <div className="bg-white border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-gray-600 font-semibold">JD</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">John Doe</div>
                            <div className="text-sm text-gray-500">2 days ago</div>
                          </div>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${star <= 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-1">Excellent Quality Product!</h5>
                      <p className="text-gray-600">I've been using this product for a month now and the quality is outstanding. Highly recommend!</p>
                    </div>
                    
                    <div className="bg-white border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-gray-600 font-semibold">AS</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Alice Smith</div>
                            <div className="text-sm text-gray-500">1 week ago</div>
                          </div>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-1">Good Value for Money</h5>
                      <p className="text-gray-600">Great product at a reasonable price. Packaging was good and delivery was on time.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
    <div className="mt-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {relatedProducts.map((relatedProduct) => {
      const relatedProductData = productsData.categories
        .flatMap((category) => category.products)
        .find((p) => p.id === relatedProduct.id);

      return (
        <div
          key={relatedProduct.id}
          className="overflow-hidden  transition-shadow"
        >
          <div className="flex items-center justify-center overflow-hidden">
            {relatedProductData ? (
              <img
                src={relatedProductData.image}
                alt={relatedProductData.name}
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/api/placeholder/200/200";
                }}
              />
            ) : (
              <div className="text-gray-400 text-4xl">🌰</div>
            )}
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              {relatedProductData?.name || relatedProduct.name}
            </h3>

            <Link
              href={`/products/${relatedProduct.id}`}
              className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              View Product
            </Link>
          </div>
        </div>
      );
    })}
  </div>
</div>

      </div>
    </div>
  );
}
