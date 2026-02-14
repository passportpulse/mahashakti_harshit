"use client"
import Link from 'next/link';
import { ArrowLeft, RefreshCw, Package, Clock } from 'lucide-react';
import { useEffect } from 'react';

export default function RefundAndReturnsPolicy() {
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
            Refund Policy
          </h1>

          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Cancellation & Refund Policy for fair and transparent business transactions
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
                <span className="text-gray-700 font-medium">Refund Policy</span>
              </div>

              {/* Right Side - Last Updated */}
              <p className="text-gray-500 text-sm">
                <strong>Last Updated:</strong> January 1, 2026
              </p>

            </div>


        {/* Introduction */}
        <div className=" mb-8">

          <p className="text-gray-500 leading-relaxed mb-4">
            At MAHASHAKTI AGRO PRODUCTS PVT. LTD., we value transparency and fairness in all our business transactions. This Cancellation & Refund Policy explains the terms and conditions under which order cancellations, returns, and refunds may be considered for products supplied by our company.
          </p>
        </div>


        {/* Order Confirmation */}
        <div className=" mb-8" id="order-confirmation">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Order Confirmation</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              All orders placed with us are considered confirmed only after mutual agreement on product specifications, quantity, pricing, packaging, delivery terms, and payment conditions. Once an order is confirmed, we initiate procurement of raw materials, processing, packaging, and logistical arrangements accordingly.
            </p>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className=" mb-8" id="cancellation-policy">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Cancellation Policy</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              Requests for order cancellation must be communicated in writing via email or official communication channels within a reasonable timeframe after order confirmation. Approval of cancellation is subject to the status of order at the time of request.
            </p>
            <p className="text-gray-500">
              If manufacturing, processing, packaging, or dispatch has already commenced, cancellation may not be possible. In such cases, the company reserves the right to refuse cancellation or deduct applicable costs incurred, including raw material procurement, processing charges, packaging expenses, and logistics arrangements.
            </p>
            <p className="text-gray-500">
              Bulk orders, customized packaging, private labeling, and export consignments are generally non-cancellable, unless explicitly agreed upon in writing prior to order confirmation.
            </p>
          </div>
        </div>

        {/* Refund Policy */}
        <div className=" mb-8" id="refund-policy">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Refund Policy</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              Refunds are considered only under specific circumstances, such as manufacturing defects, quality issues, or incorrect supply, subject to inspection and verification by our quality control team.
            </p>
            <p className="text-gray-500">
              To be eligible for a refund, customers must notify the company within a reasonable period after receipt of goods and provide supporting evidence, including photographs or inspection reports, where applicable. Returned goods must remain unused and in original condition, unless otherwise agreed.
            </p>
            <p className="text-gray-500">
              Refunds, if approved, will be processed through the original mode of payment within a reasonable timeframe after completion of verification and approval procedures.
            </p>
          </div>
        </div>

        {/* Export Orders */}
        <div className=" mb-8" id="export-orders"> 
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Export Orders</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              For export consignments, refunds or cancellations are not permitted once goods have been dispatched or cleared for export. Any claims related to export shipments must comply with agreed international trade terms, shipping conditions, and insurance coverage.
            </p>
            <p className="text-gray-500">
              The company shall not be liable for losses arising from customs delays, port congestion, regulatory inspections, or circumstances beyond its reasonable control.
            </p>
          </div>
        </div>

        {/* Non-Refundable Situations */}
        <div className=" mb-8" id="non-refundable">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Non-Refundable Situations</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              Refunds shall not be applicable in cases of:
            </p>
            <p className="text-gray-500">
              Minor variations in color, texture, or taste inherent to natural agro products
            </p>
            <p className="text-gray-500">
              Delays caused by logistics partners, customs authorities, or force majeure events
            </p>
            <p className="text-gray-500">
              Improper storage or handling by customer after delivery
            </p>
            <p className="text-gray-500">
              Orders placed with special pricing, discounts, or promotional offers
            </p>
          </div>
        </div>

        {/* Final Decision */}
        <div className=" mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Final Decision</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              All decisions regarding cancellations, refunds, or replacements shall be made solely by MAHASHAKTI AGRO PRODUCTS PVT. LTD. and shall be final and binding.
            </p>
          </div>
        </div>

        {/* Policy Updates */}
        <div className=" mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Policy Updates</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              The company reserves the right to amend or update this Cancellation & Refund Policy at any time without prior notice. Continued business engagement with us constitutes acceptance of the revised policy.
            </p>
          </div>
        </div>

        </div>

          {/* Sticky Sidebar */}
          <div className="lg:w-80 lg:sticky lg:top-10 lg:h-fit">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Cancellation & Refund Policy
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Fair and transparent business transactions for all our customers
              </p>
              
              {/* Quick Links */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
                <a href="#order-confirmation" className="block text-green-600 hover:text-green-700 text-sm py-1">
                  Order Confirmation
                </a>
                <a href="#cancellation-policy" className="block text-green-600 hover:text-green-700 text-sm py-1">
                  Cancellation Policy
                </a>
                <a href="#refund-policy" className="block text-green-600 hover:text-green-700 text-sm py-1">
                  Refund Policy
                </a>
                <a href="#export-orders" className="block text-green-600 hover:text-green-700 text-sm py-1">
                  Export Orders
                </a>
                <a href="#non-refundable" className="block text-green-600 hover:text-green-700 text-sm py-1">
                  Non-Refundable Situations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
