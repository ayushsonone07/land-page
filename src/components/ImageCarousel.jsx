import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const images = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide (optional but professional)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Overlay Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 backdrop-blur px-4 py-2 rounded-full hover:bg-white transition"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 backdrop-blur px-4 py-2 rounded-full hover:bg-white transition"
        >
          ›
        </button>

        {/* CTA Button on Top */}
        <div className="absolute inset-0 flex items-center justify-center pb-6">
            
        </div>
      </div>
    </div>
  );
}
