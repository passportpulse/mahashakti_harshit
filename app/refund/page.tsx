import Link from 'next/link';
import { ArrowLeft, RotateCcw, AlertCircle, Package, Clock, CheckCircle } from 'lucide-react';

export default function RefundAndReturnsPolicy() {
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
              <h1 className="text-3xl font-bold text-gray-900">Refund and Returns Policy</h1>
              <p className="text-gray-600 mt-1">Our commitment to customer satisfaction</p>
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
            <RotateCcw className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Our Return Policy</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            At MAHASHAKTI AGRO PRODUCTS PVT LTD (MAPL), we are committed to your satisfaction. If you are not completely satisfied with your purchase, we're here to help.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This policy outlines the conditions under which returns and refunds are processed for our products.
          </p>
        </div>

        {/* Return Eligibility */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Return Eligibility</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Products Eligible for Return</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Products received in damaged or defective condition</li>
                <li>Wrong product delivered (different from what was ordered)</li>
                <li>Products with manufacturing defects</li>
                <li>Expired products (if received before expiration date)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Products Not Eligible for Return</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Products returned after the specified time period</li>
                <li>Products with damaged packaging or missing seals</li>
                <li>Perishable items (if opened or used)</li>
                <li>Products returned due to change of mind (unless defective)</li>
                <li>Products damaged due to customer misuse</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Return Time Frame */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <Clock className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Return Time Frame</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Standard Returns</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>7 days</strong> from the date of delivery for defective/damaged products</li>
                <li><strong>48 hours</strong> to report wrong product delivery</li>
                <li>Returns must be initiated within the specified timeframe</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Important Notes</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>The return period starts from the date of delivery</li>
                <li>Proof of delivery may be required for return verification</li>
                <li>Late returns may not be accepted</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Return Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <Package className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Return Process</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Step-by-Step Process</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-600">
                <li>
                  <strong>Contact Customer Support:</strong> Call us at +916290984501 or email dey.Surajit.Kolkata@gmail.com
                </li>
                <li>
                  <strong>Provide Details:</strong> Share your order number, product details, and reason for return
                </li>
                <li>
                  <strong>Verification:</strong> Our team will verify your return request within 24-48 hours
                </li>
                <li>
                  <strong>Return Approval:</strong> If approved, we'll provide return instructions and shipping label
                </li>
                <li>
                  <strong>Ship the Product:</strong> Pack the item securely and ship it back to us
                </li>
                <li>
                  <strong>Quality Check:</strong> We'll inspect the returned product upon receipt
                </li>
                <li>
                  <strong>Refund Processing:</strong> Refund will be processed within 5-7 business days
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Refund Policy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Policy</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Refund Methods</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Original Payment Method:</strong> Refund will be credited to the original payment method used</li>
                <li><strong>Bank Transfer:</strong> For cash on delivery orders, refund via bank transfer</li>
                <li><strong>Store Credit:</strong> Option to receive store credit instead of refund</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Refund Timeframe</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>5-7 business days</strong> for credit/debit card refunds</li>
                <li><strong>7-10 business days</strong> for bank transfers</li>
                <li><strong>Immediate</strong> for store credit</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Deductions</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Shipping charges may be deducted for non-defective returns</li>
                <li>Restocking fee may apply for certain products</li>
                <li>No deductions for manufacturing defects or wrong products</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exchange Policy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Exchange Policy</h2>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              We offer exchanges for products under the following conditions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
              <li>Wrong product delivered</li>
              <li>Defective products (subject to availability)</li>
              <li>Size or quantity variations (for applicable products)</li>
            </ul>
            <p className="text-gray-600">
              Exchange requests must be made within the same timeframe as returns (7 days from delivery).
            </p>
          </div>
        </div>

        {/* Shipping Costs */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Shipping Costs</h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">We Cover Return Shipping For:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Manufacturing defects</li>
                <li>Wrong product delivery</li>
                <li>Damaged products received</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Customer Covers Return Shipping For:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Change of mind returns (if accepted)</li>
                <li>Products damaged by customer</li>
                <li>Returns beyond specified timeframe</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <AlertCircle className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Important Notes</h2>
          </div>
          
          <div className="space-y-4">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Products must be returned in their original packaging</li>
              <li>All tags, labels, and seals must be intact</li>
              <li>Products must be unused and unopened (unless defective)</li>
              <li>Return shipping address will be provided by customer support</li>
              <li>Keep your return tracking number for reference</li>
              <li>We reserve the right to refuse returns that don't meet our criteria</li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Returns?</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Our customer support team is here to assist you with any return or refund queries:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700"><strong>MAHASHAKTI AGRO PRODUCTS PVT LTD</strong></p>
              <p className="text-gray-600">Customer Support: +916290984501</p>
              <p className="text-gray-600">Email: dey.Surajit.Kolkata@gmail.com</p>
              <p className="text-gray-600">Office No. 1B, Annex Building 2, B.T.M. Sarani, Kolkata - 700001</p>
              <p className="text-gray-600">Support Hours: 9:00 AM - 6:00 PM (Monday to Saturday)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
