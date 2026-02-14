"use client"
import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll padding for anchor links
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-padding-top: 100px;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
      document.head.removeChild(style);
    };
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
  {/* Hero Section */}
<div className="bg-green-600 text-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    


    <h1 className="text-4xl md:text-5xl font-medium mb-4">
      Privacy Policy
    </h1>

    <p className="text-lg text-green-100 max-w-2xl mx-auto">
      Your privacy is important to us. Learn how MAHASHAKTI AGRO PRODUCTS PVT LTD (MAPL) 
      collects, uses, and protects your information.
    </p>

  </div>
</div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Navigation Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">

              {/* Left Side - Breadcrumb */}
              <div className="text-sm text-gray-500 mb-2 sm:mb-0">
                <Link href="/" className="hover:text-green-600 transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-gray-700 font-medium">Privacy Policy</span>
              </div>

              {/* Right Side - Last Updated */}
              <p className="text-gray-500 text-sm">
                <strong>Last Updated:</strong> January 1, 2026
              </p>

            </div>

        {/* Introduction */}
        <div className=" mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Introduction</h2>
          </div>
          <p className="text-gray-500 leading-relaxed mb-4">
              At MAHASHAKTI AGRO PRODUCTS PVT. LTD., safeguarding the privacy of our website visitors, customers, and business partners is of utmost importance to us. This Privacy Policy outlines how we collect, use, store, process, and protect personal and business-related information obtained through our website and business interactions.

          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
          We may collect personal information such as name, contact number, email address, company details, location, enquiry details, and communication records when users voluntarily submit information through enquiry forms, email correspondence, phone calls, or other communication channels. This information is collected strictly for legitimate business purposes, including responding to enquiries, processing orders, managing import–export documentation, customer support, compliance with legal obligations, and improving our products and services.
          </p>
                <p className="text-gray-500 leading-relaxed mb-4">
          
All personal data is stored securely and accessed only by authorized personnel. We implement reasonable technical and organizational security measures to protect information against unauthorized access, misuse, alteration, disclosure, or destruction. We do not sell, lease, or trade personal information to third parties. However, information may be shared with logistics partners, regulatory authorities, customs agencies, payment processors, or service providers where required for order fulfillment, compliance with applicable laws, or operational efficiency.

          </p>
                <p className="text-gray-500 leading-relaxed">
        By using our website or engaging with us, you consent to the collection and use of your information as described in this policy. We reserve the right to update this Privacy Policy periodically, and continued use of the website constitutes acceptance of such changes.
          </p>
        </div>
   



        {/* Information We Collect */}
        <div className=" mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Personal Information</h3>
              <p className="text-gray-500 leading-relaxed">
                We collect name and contact details including email, phone number, and address. 
                We also gather account information such as username and password, 
                payment information including credit card details and billing address, 
                and shipping and delivery preferences.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-500 leading-relaxed">
                We automatically collect IP address and browser type, device information and operating system, 
                pages visited and time spent on our website, and cookies and similar tracking technologies.
              </p>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className=" mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">How We Use Your Information</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-500">We use your information to process and fulfill your orders, provide customer support and assistance, communicate with you about your orders, improve our products and services, send promotional offers and marketing communications, comply with legal obligations, and prevent fraud and ensure security.</p>
          </div>
        </div>

        {/* Data Protection */}
        <div className="b mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Data Protection</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-500">We implement appropriate security measures to protect your information including SSL encryption for data transmission, secure servers for data storage, restricted access to personal information, regular security audits and updates, and employee training on data protection.</p>
          </div>
        </div>

        {/* Cookies */}
        <div className=" mb-8">
          <h2 className="text-2xl font-medium text-gray-700 mb-4">Cookies and Tracking Technologies</h2>
          <div className="space-y-4">
            <p className="text-gray-500">
              We use cookies and similar tracking technologies to enhance your experience on our website including essential cookies for website functionality, performance cookies to analyze website usage, marketing cookies for personalized content, and social media cookies for sharing features.
            </p>
            <p className="text-gray-500">
              You can control cookie settings through your browser preferences.
            </p>
          </div>
        </div>

        {/* Third-Party Sharing */}
        <div className=" mb-8">
          <h2 className="text-2xl font-medium text-gray-700 mb-4">Third-Party Sharing</h2>
          <div className="space-y-4">
            <p className="text-gray-500">We may share your information with payment processors for transaction processing, shipping companies for order fulfillment, service providers for website operations, and legal authorities when required by law.</p>
            <p className="text-gray-500">
              We do not sell or rent your personal information to third parties for marketing purposes.
            </p>
          </div>
        </div>

        {/* Your Rights */}
        <div className=" mb-8">
          <h2 className="text-2xl font-medium text-gray-700 mb-4">Your Rights</h2>
          <div className="space-y-4">
            <p className="text-gray-500">You have the right to access your personal information, correct inaccurate information, delete your account and data, opt-out of marketing communications, request data portability, and object to data processing.</p>
          </div>
        </div>

        </div>

          {/* Sticky Sidebar */}
          <div className="hidden lg:block lg:w-80 lg:sticky lg:top-10 lg:h-fit">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Privacy Policy
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                How we collect, use, and protect your information
              </p>
              
              {/* Quick Links */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
                <a href="#information-collect" className="block text-green-600 hover:text-green-700 text-sm py-1">
                  Information We Collect
                </a>
                <a href="#how-use" className="block text-green-600 hover:text-green-700 text-sm py-1">
                  How We Use Information
                </a>
                <a href="#data-sharing" className="block text-green-600 hover:text-green-700 text-sm py-1">
                  Data Sharing
                </a>
                <a href="#data-security" className="block text-green-600 hover:text-green-700 text-sm py-1">
                  Data Security
                </a>
                <a href="#user-rights" className="block text-green-600 hover:text-green-700 text-sm py-1">
                  Your Rights
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
