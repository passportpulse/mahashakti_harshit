import Link from 'next/link';
import { ArrowLeft, FileText, Shield, Users } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        

          <h1 className="text-4xl md:text-5xl font-medium mb-4">
            Terms of Service
          </h1>

          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Terms and conditions governing your use of MAHASHAKTI AGRO PRODUCTS website and services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Last Updated */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">

          {/* Left Side - Breadcrumb */}
          <div className="text-sm text-gray-500 mb-2 sm:mb-0">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium">Terms Policy</span>
          </div>

          {/* Right Side - Last Updated */}
          <p className="text-gray-500 text-sm">
            <strong>Last Updated:</strong> January 1, 2026
          </p>

        </div>

        {/* Introduction */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Terms of Service</h2>
          </div>
          <p className="text-gray-500 leading-relaxed mb-4">
            These Terms & Conditions govern the access and use of the website and services provided by MAHASHAKTI AGRO PRODUCTS PVT. LTD. By accessing this website, you acknowledge that you have read, understood, and agreed to be bound by these terms.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            All content available on this website, including but not limited to text, images, logos, graphics, product descriptions, trademarks, and designs, is the intellectual property of the company and protected under applicable intellectual property laws. Unauthorized reproduction, distribution, modification, or use of website content without prior written consent is strictly prohibited and may result in legal action.
          </p>
          <p className="text-gray-500 leading-relaxed  mb-4">

            Product information, specifications, pricing, availability, and services described on the website are provided for general reference and may be modified without prior notice. The company reserves the right to refuse service, cancel orders, or terminate access to the website at its sole discretion.
          </p>
          <p className="text-gray-500 leading-relaxed">
            The company shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website, including but not limited to data loss, business interruption, or financial loss.
          </p>
        </div>

        {/* Use of Website */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Use of Website</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-500">
              You may use our website for lawful purposes and in accordance with these Terms. You are prohibited from using the site for any illegal activities, unauthorized access, or to transmit harmful content. We reserve the right to suspend or terminate access for violations.
            </p>
            <p className="text-gray-500">
              Users must provide accurate and complete information when registering or making purchases. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p className="text-gray-500">
              The website may not be used for any commercial purposes without prior written consent from MAHASHAKTI AGRO PRODUCTS PVT. LTD. Unauthorized automated access, scraping, or data mining is strictly prohibited.
            </p>
          </div>
        </div>

        {/* Product Information and Pricing */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Product Information and Pricing</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-500">
              We strive to provide accurate product descriptions, pricing, and availability. However, we do not warrant that product descriptions or prices are error-free. We reserve the right to correct any errors and update information without prior notice.
            </p>
            <p className="text-gray-500">
              All prices are displayed in Indian Rupees (INR) and are inclusive of applicable taxes unless otherwise specified. Shipping charges are additional and calculated based on delivery location and order weight.
            </p>
            <p className="text-gray-500">
              Product images are for illustrative purposes only and actual products may vary slightly in appearance, color, or packaging due to manufacturing variations or monitor settings.
            </p>
          </div>
        </div>

        {/* Orders and Payment */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Orders and Payment</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-500">
              All orders are subject to acceptance and availability. Payment must be received before order processing. We accept various payment methods including credit/debit cards, UPI, net banking, and cash on delivery.
            </p>
            <p className="text-gray-500">
              Order confirmation does not guarantee acceptance of your order. We reserve the right to refuse service or cancel orders at our discretion, including but not limited to cases of suspected fraud, incorrect pricing, or product unavailability.
            </p>
            <p className="text-gray-500">
              In case of order cancellation after payment has been processed, refunds will be issued according to our refund policy. Refund processing time may vary depending on payment method and bank processing times.
            </p>
          </div>
        </div>

        {/* Intellectual Property Rights */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Intellectual Property Rights</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-500">
              All content on this website, including logos, text, graphics, images, product descriptions, and designs, is the property of MAHASHAKTI AGRO PRODUCTS PVT. LTD. and protected by intellectual property laws.
            </p>
            <p className="text-gray-500">
              You may not use, reproduce, modify, distribute, or create derivative works of our content without prior written permission. Trademarks, trade names, and logos displayed on this website are registered and unregistered trademarks of MAHASHAKTI AGRO PRODUCTS PVT. LTD.
            </p>
            <p className="text-gray-500">
              Any unauthorized use of intellectual property may result in legal action and claims for damages. Users agree not to use any automated means to access or extract content from our website.
            </p>
          </div>
        </div>

        {/* User Content and Conduct */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">User Content and Conduct</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-500">
              Users may not submit or transmit through our website any content that is illegal, harmful, threatening, abusive, defamatory, vulgar, obscene, or otherwise objectionable. This includes content that violates privacy rights or intellectual property rights of others.
            </p>
            <p className="text-gray-500">
              By submitting any content to our website, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and display such content for the purpose of operating and improving our services.
            </p>
            <p className="text-gray-500">
              We reserve the right to remove or edit any user content that violates these terms or applicable laws. Users agree not to impersonate any person or entity or misrepresent their affiliation with any person or entity.
            </p>
          </div>
        </div>

        {/* Privacy and Data Protection */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Privacy and Data Protection</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-500">
              Your privacy is important to us. Our collection, use, and protection of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            <p className="text-gray-500">
              By using our website, you consent to the collection and processing of your personal information as described in our Privacy Policy. We implement appropriate security measures to protect your data but cannot guarantee absolute security.
            </p>
            <p className="text-gray-500">
              We may share your information with third-party service providers necessary for order processing, payment processing, and delivery. We do not sell your personal information to third parties for marketing purposes without your consent.
            </p>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Limitation of Liability</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-500">
              Our liability is limited to the maximum extent permitted by law. We shall not be liable for any indirect, incidental, or consequential damages arising from your use of our products or services.
            </p>
            <p className="text-gray-500">
              We are not liable for any losses or damages resulting from unauthorized access to or use of our secure servers and/or any personal information stored therein. We do not guarantee uninterrupted or error-free operation of our website.
            </p>
            <p className="text-gray-500">
              In no event shall our total liability to you for all damages exceed the amount paid by you for the products or services giving rise to the claim, if any.
            </p>
          </div>
        </div>

        {/* Indemnification */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Indemnification</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-500">
              You agree to indemnify, defend, and hold harmless MAHASHAKTI AGRO PRODUCTS PVT. LTD., its directors, employees, and agents from and against any and all claims, liabilities, damages, losses, and expenses.
            </p>
            <p className="text-gray-500">
              This includes claims arising from your breach of these Terms, your violation of any laws or rights of third parties, or your use of our website and services.
            </p>
          </div>
        </div>

        {/* Termination */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Termination</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-500">
              We may terminate or suspend your access to our website immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
            <p className="text-gray-500">
              Upon termination, your right to use the website will cease immediately. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
            </p>
          </div>
        </div>

        {/* Governing Law and Jurisdiction */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Governing Law and Jurisdiction</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-500">
              These Terms & Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-500">
              Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Kolkata, India.
            </p>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Changes to Terms</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-500">
              We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting on our website.
            </p>
            <p className="text-gray-500">
              Your continued use of the website after any changes constitutes acceptance of the new terms. Material changes will be highlighted on our website to notify users of significant modifications.
            </p>
          </div>
        </div>

        

       
      </div>
    </div>
  );
}
