import Link from 'next/link';
import { ArrowLeft, Truck, Package, Clock, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

export default function ShippingAndDeliveryPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Shipping & Delivery Policy</h1>
              <p className="text-gray-600 mt-1">How we deliver your orders safely and efficiently</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Last Updated */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="text-blue-800 text-sm">
            <strong>Last Updated:</strong> January 1, 2024
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <Truck className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Our Shipping Commitment</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            At MAHASHAKTI AGRO PRODUCTS PVT LTD (MAPL), we are committed to delivering your orders safely, quickly, and efficiently. This policy outlines our shipping and delivery procedures.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We strive to provide the best delivery experience while ensuring the quality and freshness of our products.
          </p>
        </div>

        {/* Delivery Areas */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <MapPin className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Delivery Areas</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Serviceable Areas</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>All major cities across India</li>
                <li>Kolkata and surrounding areas (2-3 days delivery)</li>
                <li>Metropolitan cities (3-5 days delivery)</li>
                <li>Rural and remote areas (5-7 days delivery)</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Currently Not Serviceable</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>International destinations</li>
                <li>Extreme remote locations</li>
                <li>Areas with access restrictions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Shipping Methods */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Methods</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Standard Shipping</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Delivery Time:</strong> 3-7 business days</li>
                <li><strong>Cost:</strong> ₹50 for orders below ₹500</li>
                <li><strong>Free Shipping:</strong> Orders above ₹500</li>
                <li><strong>Tracking:</strong> Available</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Express Shipping</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Delivery Time:</strong> 2-3 business days</li>
                <li><strong>Cost:</strong> ₹120 for all orders</li>
                <li><strong>Availability:</strong> Major cities only</li>
                <li><strong>Tracking:</strong> Real-time tracking available</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Bulk Order Shipping</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Delivery Time:</strong> 5-10 business days</li>
                <li><strong>Cost:</strong> Calculated based on weight and distance</li>
                <li><strong>Minimum Order:</strong> 10kg or above</li>
                <li><strong>Special Handling:</strong> Dedicated logistics support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Order Processing Time */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <Package className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Order Processing Time</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              Once your order is placed, it goes through the following process:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <ol className="list-decimal list-inside space-y-3 text-gray-600">
                <li>
                  <strong>Order Confirmation:</strong> Immediate confirmation via email/SMS
                </li>
                <li>
                  <strong>Order Processing:</strong> 12-24 hours for order verification and packaging
                </li>
                <li>
                  <strong>Quality Check:</strong> Products undergo quality inspection before dispatch
                </li>
                <li>
                  <strong>Dispatch:</strong> Orders are handed over to shipping partners
                </li>
                <li>
                  <strong>Transit:</strong> Shipping time depends on selected method and location
                </li>
                <li>
                  <strong>Delivery:</strong> Final delivery at your doorstep
                </li>
              </ol>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Processing Delays</h3>
              <p className="text-gray-600">
                Order processing may be delayed during:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                <li>Festive seasons and holidays</li>
                <li>Natural disasters or weather conditions</li>
                <li>High order volume periods</li>
                <li>Product availability issues</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Delivery Time Estimates */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <Clock className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Delivery Time Estimates</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">By Location</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Major Cities</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>Kolkata: 2-3 days</li>
                    <li>Mumbai, Delhi, Bangalore: 3-4 days</li>
                    <li>Chennai, Hyderabad, Pune: 3-5 days</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Other Areas</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>Tier 2 Cities: 4-6 days</li>
                    <li>Tier 3 Cities: 5-7 days</li>
                    <li>Remote Areas: 6-8 days</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Business Days Only</h3>
              <p className="text-gray-600">
                Delivery times are calculated in business days (Monday to Saturday, excluding public holidays).
              </p>
            </div>
          </div>
        </div>

        {/* Order Tracking */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Tracking</h2>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              Stay updated on your order status with our comprehensive tracking system:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Tracking Number:</strong> Provided once order is dispatched</li>
                <li><strong>SMS Updates:</strong> Real-time delivery updates via SMS</li>
                <li><strong>Email Notifications:</strong> Detailed order status emails</li>
                <li><strong>Website Tracking:</strong> Track order on our website</li>
                <li><strong>Partner Tracking:</strong> Direct tracking on shipping partner's website</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Delivery Instructions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Instructions</h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Please Provide:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Complete and accurate address with landmark</li>
                <li>Mobile number for delivery coordination</li>
                <li>Preferred delivery time (if available)</li>
                <li>Special instructions for gated communities</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Delivery Guidelines:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Someone must be available to receive the delivery</li>
                <li>Check package condition before accepting</li>
                <li>Report any damage immediately to customer support</li>
                <li>Provide OTP if required by delivery partner</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Failed Delivery */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <AlertCircle className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Failed Delivery Attempts</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              In case delivery attempts fail:
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>First Attempt:</strong> Delivery partner will attempt redelivery next day</li>
                <li><strong>Second Attempt:</strong> Package will be held at local hub for 3 days</li>
                <li><strong>Third Attempt:</strong> Package will be returned to our warehouse</li>
                <li><strong>Customer Responsibility:</strong> Additional charges may apply for re-delivery</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Special Conditions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Conditions</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Weather Conditions</h3>
              <p className="text-gray-600">
                Delivery may be delayed during extreme weather conditions. We prioritize product safety over delivery speed.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Force Majeure</h3>
              <p className="text-gray-600">
                We are not liable for delays caused by circumstances beyond our control, including natural disasters, strikes, or government restrictions.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Product Specific Requirements</h3>
              <p className="text-gray-600">
                Some products may require special handling or packaging, which may affect delivery times.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Shipping Support</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              For any shipping or delivery related queries, please contact our support team:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700"><strong>MAHASHAKTI AGRO PRODUCTS PVT LTD</strong></p>
              <p className="text-gray-600">Shipping Support: +916290984501</p>
              <p className="text-gray-600">Email: dey.Surajit.Kolkata@gmail.com</p>
              <p className="text-gray-600">Office No. 1B, Annex Building 2, B.T.M. Sarani, Kolkata - 700001</p>
              <p className="text-gray-600">Support Hours: 9:00 AM - 6:00 PM (Monday to Saturday)</p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Quick Tips:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Track your order regularly for updates</li>
                <li>Keep your phone available during delivery hours</li>
                <li>Inspect package before accepting delivery</li>
                <li>Contact us immediately for any delivery issues</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
