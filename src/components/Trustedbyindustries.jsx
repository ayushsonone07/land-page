import React from 'react';

export default function TrustedByIndustries() {
  // Using placeholder images - replace with actual brand logos
  const brands = [
    { id: 1, name: 'Bliss Travels', logo: 'https://via.placeholder.com/150x60/8B7355/FFFFFF?text=Bliss+Travels' },
    { id: 2, name: 'Antipest', logo: 'https://via.placeholder.com/150x60/2D5016/FFFFFF?text=ANTIPEST' },
    { id: 3, name: 'Spa & Wellness', logo: 'https://via.placeholder.com/150x60/D4AF37/FFFFFF?text=Spa' },
    { id: 4, name: 'The Aura', logo: 'https://via.placeholder.com/150x60/FF6B35/FFFFFF?text=The+Aura' },
    { id: 5, name: 'Frenzy Holidays', logo: 'https://via.placeholder.com/150x60/4A90E2/FFFFFF?text=Frenzy' },
    { id: 6, name: 'Desire Salon', logo: 'https://via.placeholder.com/150x60/1A1A1A/FFFFFF?text=DESIRE' },
    { id: 7, name: 'Physioedge', logo: 'https://via.placeholder.com/150x60/00A8CC/FFFFFF?text=PhysioEdge' },
    { id: 8, name: 'Healthcare', logo: 'https://via.placeholder.com/150x60/4CAF50/FFFFFF?text=Healthcare' },
  ];

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-2xl md:text-3xl font-semibold text-gray-900">
          Trusted by Business Owners <br/> from Various Industries
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative mb-16">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling Logos */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.id}-${index}`}
                  className="flex-shrink-0 mx-6 flex items-center justify-center"
                  style={{ width: '150px' }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-700 text-lg mb-6">
            Ready to get started? Connect with Grexa Agent
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Book Free Demo
          </button>
        </div>

      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};