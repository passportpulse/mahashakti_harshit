import Link from 'next/link';
import { ArrowLeft, FileText, AlertTriangle, Scale, Users } from 'lucide-react';

export default function TermsAndConditions() {
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
              <h1 className="text-3xl font-bold text-gray-900">Terms & Conditions</h1>
              <p className="text-gray-600 mt-1">Terms of service for MAHASHAKTI AGRO PRODUCTS PVT LTD</p>
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
            <FileText className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Welcome to MAHASHAKTI AGRO PRODUCTS PVT LTD (MAPL). These Terms & Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you do not agree to these terms, please do not use our website or services.
          </p>
        </div>

        {/* Acceptance of Terms */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions, including our Privacy Policy.
            </p>
            <p className="text-gray-600">
              These terms apply to all visitors, users, and others who access or use our services.
            </p>
          </div>
        </div>

        {/* Products and Services */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Products and Services</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions or other content are accurate, complete, reliable, current, or error-free.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Product Availability</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>All products are subject to availability</li>
                <li>We reserve the right to discontinue products at any time</li>
                <li>Prices may change without prior notice</li>
                <li>We are not liable for product unavailability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* User Account */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">User Account</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              To access certain features of our website, you may be required to create an account. You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Providing accurate and complete information</li>
            </ul>
            <p className="text-gray-600">
              We reserve the right to terminate accounts that violate these terms.
            </p>
          </div>
        </div>

        {/* Orders and Payment */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Orders and Payment</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Order Process</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>All orders are subject to acceptance and availability</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Order confirmation does not guarantee product availability</li>
                <li>We may require additional verification for certain orders</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Payment Terms</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Payment must be received before order processing</li>
                <li>We accept various payment methods as listed on our website</li>
                <li>All prices are in Indian Rupees (INR)</li>
                <li>We are not responsible for payment processing errors</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of MAHASHAKTI AGRO PRODUCTS PVT LTD or its content suppliers and is protected by intellectual property laws.
            </p>
            <p className="text-gray-600">
              You may not use, reproduce, or distribute any content from our website without our prior written consent.
            </p>
          </div>
        </div>

        {/* Prohibited Activities */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Prohibited Activities</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">You are strictly prohibited from:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
              <li>Using the website for illegal purposes</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Interfering with the website's operation</li>
              <li>Posting malicious or harmful content</li>
              <li>Violating any applicable laws or regulations</li>
              <li>Infringing on intellectual property rights</li>
              <li>Spamming or sending unsolicited communications</li>
            </ul>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <Scale className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              To the maximum extent permitted by law, MAHASHAKTI AGRO PRODUCTS PVT LTD shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services.
            </p>
            <p className="text-gray-600">
              Our total liability to you for all damages shall not exceed the amount paid by you for the products in question.
            </p>
          </div>
        </div>

        {/* Indemnification */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              You agree to indemnify and hold MAHASHAKTI AGRO PRODUCTS PVT LTD and its affiliates harmless from any claims, damages, or expenses arising from your use of our website or violation of these terms.
            </p>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.
            </p>
          </div>
        </div>

        {/* Governing Law */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              These Terms & Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-600">
              Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Kolkata, India.
            </p>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting on our website.
            </p>
            <p className="text-gray-600">
              Your continued use of the website after any changes constitutes acceptance of the new terms.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              If you have any questions about these Terms & Conditions, please contact us:
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
