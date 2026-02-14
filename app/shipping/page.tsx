import Link from 'next/link';
import { ArrowLeft, Truck, Package, Clock } from 'lucide-react';

export default function ShippingAndDeliveryPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       

          <h1 className="text-4xl md:text-5xl font-medium mb-4">
            Shipping Policy
          </h1>

          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Our shipping policy ensures timely and safe delivery of your agro products across India and internationally.
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
            <span className="text-gray-700 font-medium">Shipping Policy</span>
          </div>

          {/* Right Side - Last Updated */}
          <p className="text-gray-500 text-sm">
            <strong>Last Updated:</strong> January 1, 2026
          </p>

        </div>

        {/* Introduction */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Shipping Policy</h2>
          </div>
          <p className="text-gray-500 leading-relaxed mb-4">
            MAHASHAKTI AGRO PRODUCTS PVT. LTD. strives to ensure safe, timely, and efficient delivery of all orders. Order processing begins only after confirmation of order details, availability of stock, and receipt of payment or agreed commercial terms.

          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Domestic shipments are executed through trusted courier services or transport partners. Delivery timelines may vary depending on the destination, order volume, and logistical conditions.
          </p>
          <p className="text-gray-500 leading-relaxed  mb-4">
            For export shipments, delivery timelines depend on international freight schedules, port operations, customs clearance, regulatory approvals, and destination country import regulations. The company shall not be responsible for delays caused by customs authorities, port congestion, strikes, natural disasters, or other events beyond reasonable control.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Customers are responsible for providing accurate delivery information. Any additional costs arising due to incorrect details or failed deliveries shall be borne by the customer.
          </p>
        </div>

        {/* Domestic Shipping */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Domestic Shipping</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              We ship to all locations within India using reliable courier services. Standard delivery takes 5-7 business days, while express delivery takes 2-3 business days. Shipping charges vary based on weight, distance, and delivery speed selected.
            </p>
            <p className="text-gray-500">
              For metro cities, delivery may be faster due to better connectivity. Remote locations may require additional time for delivery. We provide tracking information for all domestic shipments once dispatched.
            </p>
            <p className="text-gray-500">
              Free shipping is available on orders above specified value thresholds. Standard shipping charges start from ₹50 for domestic orders, with higher rates for express delivery and remote locations.
            </p>
          </div>
        </div>

        {/* International Shipping */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">International Shipping</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              We offer international shipping to selected countries. International orders typically take 10-15 business days for delivery. Shipping costs are calculated based on destination country, weight, and customs requirements.
            </p>
            <p className="text-gray-500">
              Customers are responsible for any customs duties, taxes, or import fees applicable in their country. These charges are not included in our shipping fees and must be paid directly to customs authorities.
            </p>
            <p className="text-gray-500">
              International shipments require proper documentation including commercial invoice, packing list, and certificates of origin where applicable. We ensure all necessary export documentation is prepared for smooth customs clearance.
            </p>
          </div>
        </div>

        {/* Processing Time */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Order Processing Time</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              All orders are processed within 1-2 business days. Processing includes order verification, quality checks, and packaging. You will receive a confirmation email with tracking details once your order ships.
            </p>
            <p className="text-gray-500">
              During peak seasons or promotional periods, processing time may extend to 3-4 business days. We appreciate your patience during such times and strive to minimize delays.
            </p>
            <p className="text-gray-500">
              Orders placed on weekends or holidays are processed on the next business day. Processing time does not include shipping transit time.
            </p>
          </div>
        </div>

        {/* Shipping Charges */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Shipping Charges</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              Shipping charges are calculated based on order value, weight, and delivery location. We offer free shipping on orders above certain value thresholds. Standard shipping rates start from ₹50 for domestic orders and vary for international shipments.
            </p>
            <p className="text-gray-500">
              Additional charges may apply for special handling requirements, express delivery, or shipments to remote areas. All shipping charges are clearly displayed during checkout before payment confirmation.
            </p>
            <p className="text-gray-500">
              Shipping charges are non-refundable except in cases of incorrect charges applied or order cancellation before dispatch. Partial refunds may be considered for returned orders based on our refund policy.
            </p>
          </div>
        </div>

        {/* Packaging and Handling */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Packaging and Handling</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              All products are carefully packaged to ensure safe transit. We use appropriate packaging materials based on product type, including moisture-proof packaging for dry goods and temperature-controlled packaging where required.
            </p>
            <p className="text-gray-500">
              Fragile items receive special handling with additional protective packaging. Bulk orders may be packaged in larger containers or multiple packages for easier handling and delivery.
            </p>
            <p className="text-gray-500">
              We follow food safety and hygiene standards for all edible products. Packaging materials are food-grade and comply with regulatory requirements for food products.
            </p>
          </div>
        </div>

        {/* Delivery Instructions */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Delivery Instructions</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              Please provide complete and accurate delivery address including landmark, contact person name, and mobile number. Someone must be available at the delivery address to receive the package.
            </p>
            <p className="text-gray-500">
              For office or commercial deliveries, please provide specific timing requirements and contact person details. Delivery partners may call before arrival to confirm availability.
            </p>
            <p className="text-gray-500">
              Special delivery instructions like "leave with neighbor" or "leave at reception" should be clearly mentioned during order placement. However, we cannot guarantee compliance with all special requests.
            </p>
          </div>
        </div>

        {/* Order Tracking */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Order Tracking</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              Once your order ships, you will receive a tracking number via email. You can track your order status on our website or directly on the courier's website. We recommend checking tracking regularly for delivery updates.
            </p>
            <p className="text-gray-500">
              Tracking information may take 24-48 hours to update after dispatch. International shipments may have limited tracking information once the package leaves the origin country.
            </p>
            <p className="text-gray-500">
              For any tracking issues or delivery concerns, please contact our customer service with your order number and tracking details for prompt assistance.
            </p>
          </div>
        </div>

        {/* Delivery Issues */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Delivery Issues</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              In case of delivery issues such as delays, damaged packages, or lost shipments, please contact our customer service immediately at dey.Surajit.Kolkata@gmail.com or call +916290984501. We will work with our shipping partners to resolve the issue promptly.
            </p>
            <p className="text-gray-500">
              For damaged packages, please refuse delivery and contact us immediately with photos of the damage. We will arrange for replacement or refund as per our policy.
            </p>
            <p className="text-gray-500">
              Lost shipments are investigated with shipping partners and may take 7-10 business days to resolve. We will keep you informed throughout the investigation process.
            </p>
          </div>
        </div>

        {/* Returns and Exchanges */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Returns and Exchanges</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              Returns and exchanges are governed by our refund policy. Please review the refund policy for detailed information about return eligibility, timeframes, and procedures.
            </p>
            <p className="text-gray-500">
              Return shipping costs are generally borne by the customer unless the return is due to our error or product defect. We recommend using insured shipping for return packages.
            </p>
            <p className="text-gray-500">
              All returns must be in original packaging with all labels and tags intact. Processed returns typically take 5-7 business days for refund or exchange completion.
            </p>
          </div>
        </div>

        {/* Special Conditions */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium text-gray-700">Special Conditions</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">
              Delivery may be delayed during extreme weather conditions, natural disasters, or unforeseen circumstances. We prioritize product safety over delivery speed in such situations.
            </p>
            <p className="text-gray-500">
              We are not liable for delays caused by circumstances beyond our control, including strikes, government restrictions, or customs delays for international shipments.
            </p>
            <p className="text-gray-500">
              Some products may have specific shipping requirements due to their nature. We will inform you of any special shipping conditions for such products at the time of order.
            </p>
          </div>
        </div>

        

      


      </div>
    </div>
  );
}

