import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-start gap-10">
          
          {/* Column 1: Contact Information */}
          <div className='w-[40%]'>
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/MM-2D-PNG.png"
                alt="Mahashakti Logo"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>
            
            {/* Introduction */}
            <p className="text-red-100 mb-6 text-sm leading-relaxed">
              Get in touch with MAHASHAKTI AGRO PRODUCTS PVT. LTD. for product enquiries, bulk orders, import-export requirements, or business partnerships.
            </p>
            
            {/* Contact Details */}
           
          </div>
<div className="flex justify-between items-start gap-10 w-[40%]">
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">OUR STORES</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/categories" className="text-red-100 hover:text-white">All Categories</Link></li>
              <li><Link href="/products/besan" className="text-red-100 hover:text-white">Besan</Link></li>
              <li><Link href="/products/makhana" className="text-red-100 hover:text-white">Makhana</Link></li>
              <li><Link href="/products/mustard-oil" className="text-red-100 hover:text-white">Mustard Oil</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div> 
            <h3 className="text-lg font-semibold mb-6">USEFUL LINKS</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="text-red-100 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-red-100 hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/refund" className="text-red-100 hover:text-white">Refund Policy</Link></li>
              <li><Link href="/shipping" className="text-red-100 hover:text-white">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">FOOTER MENU</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-red-100 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-red-100 hover:text-white">About Us</Link></li>
              <li><Link href="/shop" className="text-red-100 hover:text-white">Shop</Link></li>
              <li><Link href="/contact" className="text-red-100 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex justify-between items-center border-t border-red-700 py-6">
        <div className=" px-4 text-center text-sm text-red-100">
          © 2026 MAHASHAKTI AGRO PRODUCTS PVT. LTD. All Rights Reserved.
        </div>
        <div>
          <img src="/footer/payments.png" alt="payments methods" className="w-full" />
        </div>
      </div>
    </footer>
  );
}
