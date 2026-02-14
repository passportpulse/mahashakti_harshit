import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-500">
            Don't worry, let's get you back to where you need to be.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors duration-300"
          >
            <Search className="h-5 w-5 mr-2" />
            Browse Products
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Looking for something specific?
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link
              href="/about"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              About Us
            </Link>
            <Link
              href="/shop"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Privacy
            </Link>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-8 text-gray-500 text-sm">
          <p>
            Still can't find what you're looking for? 
            <Link href="/contact" className="text-green-600 hover:text-green-700 font-medium ml-1">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
