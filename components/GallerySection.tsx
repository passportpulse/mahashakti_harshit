'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Heart, Share2, Download } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "/gallery/WhatsApp-Image-2026-01-20-at-3.15.07-PM-1.png",
    alt: "Agro Product 1",
    category: "Products"
  },
  {
    id: 2,
    src: "/gallery/WhatsApp-Image-2026-01-20-at-3.15.07-PM.png",
    alt: "Agro Product 2",
    category: "Products"
  },
  {
    id: 3,
    src: "/gallery/WhatsApp-Image-2026-01-20-at-3.15.08-PM-1.png",
    alt: "Agro Product 3",
    category: "Products"
  },
  {
    id: 4,
    src: "/gallery/WhatsApp-Image-2026-01-20-at-3.15.08-PM.png",
    alt: "Agro Product 5",
    category: "Products"
  },
  {
    id: 5,
    src: "/gallery/WhatsApp-Image-2026-01-20-at-3.15.09-PM-2.png",
    alt: "Agro Product 7",
    category: "Products"
  },
  {
    id: 6,
    src: "/gallery/WhatsApp-Image-2026-01-20-at-3.15.08-PM-2.jpeg",
    alt: "Agro Product 4",
    category: "Products"
  },
  {
    id: 7,
    src: "/gallery/WhatsApp-Image-2026-01-20-at-3.15.09-PM-1.jpeg",
    alt: "Agro Product 6",
    category: "Products"
  },
  {
    id: 8,
    src: "/gallery/WhatsApp-Image-2026-01-20-at-3.15.09-PM.png",
    alt: "Agro Product 8",
    category: "Products"
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [likedImages, setLikedImages] = useState<number[]>([]);

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  const toggleLike = (imageId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedImages(prev =>
      prev.includes(imageId)
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Header */}
          <div className=" mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Gallery</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our journey of excellence
            </p>
          </div>

          {/* Responsive Grid (NO CROP) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className=" transition-all duration-300 overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="relative w-full aspect-[4/3] bg-white">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

              
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 text-white p-2 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-[80vh] bg-white">
              <Image
                src={selectedImageData?.src || ""}
                alt={selectedImageData?.alt || ""}
                fill
                className="object-contain p-6"
              />
            </div>

            <div className="p-6 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">
                  {selectedImageData?.alt}
                </h3>
                <span className="text-green-600 font-medium">
                  {selectedImageData?.category}
                </span>
              </div>

              <div className="flex gap-4">
                <Share2 className="w-5 h-5 text-gray-600 cursor-pointer" />
                <Download className="w-5 h-5 text-gray-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
