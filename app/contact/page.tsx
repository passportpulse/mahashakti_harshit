'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

interface FAQItem {
  question: string;
  answer: string;
}

export default function ContactPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqData: FAQItem[] = [
    {
      question: "Will I receive the same product that I see in the picture?",
      answer: "We manufacture, supply, import, and export Besan (Gram Flour), Mustard Oil, and Makhana (Fox Nuts) under strict hygiene and quality standards. The product matches the specifications mentioned. Minor packaging variations may occur."
    },
    {
      question: "Is your besan made from 100% chana?",
      answer: "Yes, our besan is made from carefully selected 100% chana (gram), ensuring natural taste, purity, and high nutritional value."
    },
    {
      question: "What is the difference between polished and unpolished besan?",
      answer: "Unpolished besan retains natural fiber and nutrients as it is minimally processed, whereas polished besan undergoes additional refining. We offer both options."
    },
    {
      question: "Is your mustard oil cold-pressed?",
      answer: "Yes, we offer Kachchi Ghani (cold-pressed) mustard oil extracted using traditional methods to preserve natural aroma, flavor, and health benefits."
    },
    {
      question: "Are your products suitable for export markets?",
      answer: "Yes, our products are processed and packed as per international food safety and export standards."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 flex justify-between gap-16 items-start">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl text-gray-700 font-semibold mb-6 tracking-tight">
              Contact MAPL
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              We manufacture and export premium agro food products including Besan, Mustard Oil, and Makhana. 
              Reach out to us for bulk orders, export inquiries, or business partnerships.
            </p>
        
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/contact-image.png"  // put your image in public folder
              alt="MAPL Agro Products"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ + CONTACT FORM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* FAQ LEFT */}
          <div>
            <h2 className="text-3xl text-gray-700 font-semibold mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left"
                  >
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  <div
                    className={`px-6 transition-all duration-300 ${
                      expandedFAQ === index
                        ? 'max-h-96 pb-6 opacity-100'
                        : 'max-h-0 overflow-hidden opacity-0'
                    }`}
                  >
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT FORM RIGHT */}
          <div className=" px-10 ">
            <h2 className="text-3xl  text-gray-700 font-semibold mb-8">
             Love to hear from you <br />
             Get in touch with us
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border text-gray-500 border-gray-200 rounded-lg focus:outline-none focus:border-black"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border text-gray-500 border-gray-200 rounded-lg focus:outline-none focus:border-black"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border text-gray-500 border-gray-200 rounded-lg focus:outline-none focus:border-black"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 border   text-gray-500  border-gray-200 rounded-lg focus:outline-none focus:border-black resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FULL WIDTH MAP */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471819.02611522906!2d88.333611!3d22.500951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sus!4v1771033547356!5m2!1sen!2sus"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
}
