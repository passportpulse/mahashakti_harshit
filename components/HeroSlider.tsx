'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  badge?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Natural, nutritious & delicious snacking choice",
    subtitle: "Healthy & Nutritious",
    description:
      "Our makhana range includes Premium, Quality, Salted, and Peri-Peri variants, carefully processed to deliver crisp texture, great taste, and healthy nutrition—perfect for guilt-free snacking.",
    buttonText: "Shop Now",
    buttonLink: "/products/makhana",
    backgroundImage: "/hero/1.png",
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Cold-pressed & refined options for healthy cooking",
    subtitle: "Pure Mustard Oil with Traditional Taste",
    description:
      "Experience the purity of mustard oil crafted through traditional Kachchi Ghani methods and modern refining processes. Our mustard oil offers strong aroma, rich flavor, and essential nutrients for everyday cooking.",
    buttonText: "Shop Now",
    buttonLink: "/products/mustard-oil",
    backgroundImage: "/hero/2.png",
    badge: "Cold Pressed",
  },
  {
    id: 3,
    title: "Made from carefully selected chana for authentic taste & nutrition",
    subtitle: "Pure & Natural Besan for Everyday Cooking",
    description:
      "Our besan is finely processed using premium-quality chana to deliver rich aroma, smooth texture, and natural goodness. Available in 100% Chana Besan, Unpolished Besan, and Organic Besan, perfect for healthy and traditional cooking.",
    buttonText: "Buy Now",
    buttonLink: "/products/besan",
    backgroundImage: "/hero/3.png",
    badge: "Fresh Stock",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-white">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Content Container */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left Content */}
                  <div className="order-2 lg:order-1">
                    {/* Badge */}
                    {slide.badge && (
                      <div className="inline-block text-red-600 rounded-full text-sm font-semibold mb-4">
                      {slide.title}
                      </div>
                    )}
                    
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl  font-bold text-gray-700 mb-4 leading-tight">
                  {slide.subtitle}
                    </h1>
                    
                    {/* Subtitle */}
                    {/* <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4 font-medium">
                      {slide.subtitle}
                    </h2> */}
                    
                    {/* Description */}
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    
                    {/* Button */}
                    <a
                      href={slide.buttonLink}
                      className="inline-flex items-center border border-gray-500  text-gray-500 px-8 py-4 rounded-lg font-semibold text-lg  transition-all duration-300 transform "
                    >
                      {slide.buttonText}
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  {/* Right Image */}
                  <div className="order-1 lg:order-2 flex items-center justify-center">
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                      <img
                        src={slide.backgroundImage}
                        alt={slide.title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = '/api/placeholder/600/500';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 h-3 bg-white rounded-full'
                : 'w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
          aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
        >
          {isAutoPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
