import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';

export default function PrivacyPolicy() {
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
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600 mt-1">Your privacy is important to us</p>
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
            <Shield className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            At MAHASHAKTI AGRO PRODUCTS PVT LTD (MAPL), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By using our website, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <Database className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Name and contact details (email, phone number, address)</li>
                <li>Account information (username, password)</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Shipping and delivery preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <Eye className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
              <li>Process and fulfill your orders</li>
              <li>Provide customer support and assistance</li>
              <li>Communicate with you about your orders</li>
              <li>Improve our products and services</li>
              <li>Send promotional offers and marketing communications</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </div>
        </div>

        {/* Data Protection */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <Lock className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Data Protection</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600">We implement appropriate security measures to protect your information:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers for data storage</li>
              <li>Restricted access to personal information</li>
              <li>Regular security audits and updates</li>
              <li>Employee training on data protection</li>
            </ul>
          </div>
        </div>

        {/* Cookies */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              We use cookies and similar tracking technologies to enhance your experience on our website:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
              <li>Essential cookies for website functionality</li>
              <li>Performance cookies to analyze website usage</li>
              <li>Marketing cookies for personalized content</li>
              <li>Social media cookies for sharing features</li>
            </ul>
            <p className="text-gray-600">
              You can control cookie settings through your browser preferences.
            </p>
          </div>
        </div>

        {/* Third-Party Sharing */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Sharing</h2>
          <div className="space-y-4">
            <p className="text-gray-600">We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
              <li>Payment processors for transaction processing</li>
              <li>Shipping companies for order fulfillment</li>
              <li>Service providers for website operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p className="text-gray-600">
              We do not sell or rent your personal information to third parties for marketing purposes.
            </p>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
          <div className="space-y-4">
            <p className="text-gray-600">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
              <li>Object to data processing</li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700"><strong>MAHASHAKTI AGRO PRODUCTS PVT LTD</strong></p>
              <p className="text-gray-600">Office No. 1B, Annex Building 2, B.T.M. Sarani, Kolkata - 700001</p>
              <p className="text-gray-600">Email: dey.Surajit.Kolkata@gmail.com</p>
              <p className="text-gray-600">Phone: +916290984501</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
