import React, { useState } from 'react';

export default function RealStoriesResults() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Before Grexa AI, we barely got 2-3 leads a month. Now we're ranking on the first page of Google for 'Calisthenics classes in Mumbai' and generating 20+ leads every week. Our website is no longer just a brochure - it's a lead engine.",
      author: "Shubham Mishra",
      role: "Founder - ISC, Mumbai"
    },
    {
      id: 2,
      quote: "Despite being a 17-year-old brand, we struggled to compete with bigger salon chains online. Our visibility was low, and most of our clients came only through word of mouth. After partnering with Grexa AI, we started ranking locally, saw a 60% jump in new footfall, and now receive 20-25 client calls every week.",
      author: "Priti Gajora & Jayesh",
      role: "Owners, Peacock Salon"
    },
    {
      id: 3,
      quote: "In just 3 months, our new website made by Grexa AI saw over 1,400 impressions and a 2X jump in revenue. Grexa AI helped us publish 26 detailed service pages, launch a product store, and introduce our education courses.",
      author: "Meha Mhatre",
      role: "Tressesz - Trichologist"
    },
    {
      id: 4,
      quote: "Grexa AI transformed our digital presence completely. We went from being invisible online to getting daily inquiries through our website. The results speak for themselves!",
      author: "Rajesh Kumar",
      role: "Owner, Digital Solutions"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - 3) : Math.max(0, prev - 1)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev >= testimonials.length - 3 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Real Stories, Real Results
          </h2>
          <p className="text-gray-600 text-lg max-w-mdmx-auto">
            See how Grexa AI has helped business owners like you grow their businesses.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg 
              className="w-6 h-6 text-gray-900" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Testimonials Wrapper */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 3)}%)` 
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: '33.333%', minWidth: '300px' }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <svg 
                        className="w-10 h-10 text-gray-900"
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                      </svg>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="flex-1 mb-6">
                      <p className="text-gray-700 text-base leading-relaxed italic">
                        {testimonial.quote}
                      </p>
                    </blockquote>

                    {/* Author Info */}
                    <div className="bg-indigo-50 rounded-xl px-4 py-3">
                      <p className="text-gray-900 font-semibold text-base">
                        — {testimonial.author}
                      </p>
                      <p className="text-indigo-700 text-sm italic">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - 3}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg 
              className="w-6 h-6 text-gray-900" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.max(1, testimonials.length - 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-indigo-600 w-8' 
                  : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};