'use client';

import React, { useState, useEffect } from 'react';
import { Grid3X3, List, Heart, X } from 'lucide-react';

interface GalleryItem {
  id: number;
  filename: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    filename: "WhatsApp-Image-2026-01-20-at-3.15.07-PM-1.png",
    title: "Agro Product 1",
    description: "Premium quality agro products from Mahashakti"
  },
  {
    id: 2,
    filename: "WhatsApp-Image-2026-01-20-at-3.15.07-PM.png",
    title: "Agro Product 2",
    description: "Fresh and natural agro products"
  },
  {
    id: 3,
    filename: "WhatsApp-Image-2026-01-20-at-3.15.08-PM-1.png",
    title: "Agro Product 3",
    description: "High-quality food products"
  },
 
  {
    id: 4,
    filename: "WhatsApp-Image-2026-01-20-at-3.15.08-PM.png",
    title: "Agro Product 5",
    description: "Quality assurance in production"
  },
  
  {
    id: 5,
    filename: "WhatsApp-Image-2026-01-20-at-3.15.09-PM-2.png",
    title: "Agro Product 7",
    description: "Final product ready for export"
  },
  {
    id: 6,
    filename: "WhatsApp-Image-2026-01-20-at-3.15.08-PM-2.jpeg",
    title: "Agro Product 4",
    description: "Traditional manufacturing process"
  },
  {
    id: 7,
    filename: "WhatsApp-Image-2026-01-20-at-3.15.09-PM-1.jpeg",
    title: "Agro Product 6",
    description: "Packaging and quality control"
  },
  {
    id: 8,
    filename: "WhatsApp-Image-2026-01-20-at-3.15.09-PM.png",
    title: "Agro Product 8",
    description: "International standard packaging"
  }
];

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const toggleLike = (itemId: number) => {
    setLikedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Product Gallery
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Explore our premium quality agro products and manufacturing facilities
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Product Gallery
          </h1>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${
                viewMode === 'grid'
                  ? 'bg-green-100 text-green-600'
                  : 'text-gray-600'
              }`}
            >
              <Grid3X3 className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-2 rounded-lg ${
                viewMode === 'masonry'
                  ? 'bg-green-100 text-green-600'
                  : 'text-gray-600'
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Gallery */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {galleryItems.map((item) => (
    <div
      key={item.id}
      className="group  transition-all duration-300 p-3"
    >
      <div
        className="cursor-pointer"
        onClick={() => openLightbox(item)}
      >
        <img
          src={`/gallery/${item.filename}`}
          alt={item.title}
          className="w-full h-auto object-contain "
        />
      </div>

    </div>
  ))}
</div>

      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white"
            >
              <X className="h-8 w-8" />
            </button>

            <img
              src={`/gallery/${selectedItem.filename}`}
              alt={selectedItem.title}
              className="w-full max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
