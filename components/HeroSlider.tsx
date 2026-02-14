'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  { id: 1, image: '/hero/7.png' },
  { id: 2, image: '/hero/8.png' },
  { id: 3, image: '/hero/6.png' },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}
        >
          <Image
            src={slide.image}
            alt="Hero Image"
            width={1920}
            height={800}
            className="w-full h-auto object-contain"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
