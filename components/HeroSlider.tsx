'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  { id: 1, image: '/hero/4.png' },
  { id: 2, image: '/hero/5.png' },
  { id: 3, image: '/hero/6.jpeg' },
  { id: 4, image: '/hero/7.jpeg' },
  { id: 5, image: '/hero/8.jpeg' },
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
    <div className="relative w-full h-[100vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt="Hero Image"
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
