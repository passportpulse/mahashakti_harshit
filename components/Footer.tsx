import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10">
          
          {/* Column 1: Contact Information */}
          <div className='w-full lg:w-[40%]'>
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/MM-2D-PNG.png"
                alt="Mahashakti Logo"
                width={180}
                height={60}
                className="object-contain brightness-0 invert"
              />
            </div>
            
            {/* Introduction */}
            <p className="text-green-100 mb-6 text-sm leading-relaxed">
              Get in touch with MAHASHAKTI AGRO PRODUCTS PVT. LTD. for product enquiries, bulk orders, import-export requirements, or business partnerships.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-green-200 flex-shrink-0" />
                <span className="text-green-100 text-sm">Office No. 1B, Annex Building 2, B.T.M. Sarani, Kolkata - 700001</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-green-200 flex-shrink-0" />
                <a href="mailto:dey.Surajit.Kolkata@gmail.com" className="text-green-100 text-sm hover:text-white transition-colors">
                  dey.Surajit.Kolkata@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-green-200 flex-shrink-0" />
                <a href="tel:+916290984501" className="text-green-100 text-sm hover:text-white transition-colors">
                  +916290984501
                </a>
              </div>
            </div>
           
          </div>
<div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-10 w-full lg:w-[40%]">
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">OUR STORES</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/shop" className="text-green-100 hover:text-white">All Categories</Link></li>
              <li><Link href="/shop?category=besan" className="text-green-100 hover:text-white">Besan</Link></li>
              <li><Link href="/shop?category=makhana" className="text-green-100 hover:text-white">Makhana</Link></li>
              <li><Link href="/shop?category=mustard-oil" className="text-green-100 hover:text-white">Mustard Oil</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div> 
            <h3 className="text-lg font-semibold mb-6">USEFUL LINKS</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="text-green-100 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-green-100 hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/refund" className="text-green-100 hover:text-white">Refund Policy</Link></li>
              <li><Link href="/shipping" className="text-green-100 hover:text-white">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">FOOTER MENU</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-green-100 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-green-100 hover:text-white">About Us</Link></li>
              <li><Link href="/shop" className="text-green-100 hover:text-white">Shop</Link></li>
              <li><Link href="/contact" className="text-green-100 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center border-t border-green-700 py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-green-100 mb-4 sm:mb-0">
          © 2026 MAHASHAKTI AGRO PRODUCTS PVT. LTD. All Rights Reserved.
        </div>
        <div className="w-full sm:w-auto">
          <img src="/footer/payments.png" alt="payments methods" className="w-full max-w-xs mx-auto sm:mx-0" />
        </div>
      </div>
    </footer>
  );
}
