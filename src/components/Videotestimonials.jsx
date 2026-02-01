import React, { useState, useEffect } from 'react';

export default function VideoTestimonials() {
  const [showCTA, setShowCTA] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      title: 'Calisthenics Institute',
      subtitle: '',
      description: 'Ranked No 1 on Google ISC Success Story with Grexa AI | Indian School of Calisthenics',
      thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID_1/maxresdefault.jpg',
      videoUrl: 'https://www.pexels.com/download/video/7237018/'
    },
    {
      id: 2,
      title: 'Dr Thakur Pediatric Dentist',
      subtitle: '',
      description: "From New Clinic to Profitable Practice - Dr. Thakur's Grexa AI Journey | Dr.Thakur Pediatric Dentist",
      thumbnail: 'https://images.pexels.com/photos/10682514/pexels-photo-10682514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_2'
    },
    {
      id: 3,
      title: 'Grexa AI',
      subtitle: '',
      description: 'How Grexa AI helped businesses grow',
      thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID_3/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_3'
    },
    {
      id: 4,
      title: 'Peacock Salon',
      subtitle: '',
      description: 'Transformation story with Grexa AI',
      thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID_4/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_4'
    },
    {
      id: 5,
      title: 'Antipest',
      subtitle: '',
      description: 'Transformation of Antipest with Grexa - Small Business to Market Leader',
      thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID_5/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_5'
    }
  ];

  // Triple the testimonials for smoother infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Close modal on escape key and handle body scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Voices of Real Business Owners
        </h2>

        {/* Marquee Container */}
        <div className="relative overflow-hidden group">
          {/* Gradient Overlays for smooth edges */}
          {/* Marquee Track */}
          <div className="flex gap-6 animate-marquee group-hover:pause-animation">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[350px]"
              >
                <div 
                  className="relative rounded-3xl overflow-hidden cursor-pointer group/card h-[480px] transform transition-transform duration-300"
                  onMouseEnter={() => testimonial.id === 2 && setShowCTA(true)}
                  onMouseLeave={() => setShowCTA(false)}
                  onClick={() => openVideoModal(testimonial)}
                >
                  {/* Video Thumbnail */}
                  <img 
                    src={testimonial.thumbnail}
                    alt={testimonial.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300 shadow-2xl">
                      <svg 
                        className="w-10 h-10 text-gray-900 ml-1" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>

                  {/* Business Title - Top */}
                  <div className="absolute top-6 left-6 right-6">
                    <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                      {testimonial.title}
                    </h3>
                  </div>

                  {/* Subtitle - Middle */}
                  {testimonial.subtitle && (
                    <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2">
                      <p className="text-white text-3xl font-bold drop-shadow-lg leading-tight">
                        {testimonial.subtitle}
                      </p>
                    </div>
                  )}

                  {/* Description - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-600 to-transparent">
                    <p className="text-white text-base font-semibold leading-snug">
                      {testimonial.description}
                    </p>
                  </div>

                  {/* CTA Popup for Dr Thakur card */}
                  {/* {testimonial.id === 2 && showCTA && (
                    
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Free AI Google Profile Booster
          </button>

          <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-3 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-200">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book Free Demo
          </button>
        </div>

      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Close video"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <iframe
              className="w-full h-full rounded-lg shadow-2xl"
              src={`${selectedVideo.videoUrl}?autoplay=1`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-marquee {
          animation: marquee 4s linear infinite;  /* Changed from 25s to 12s */
          will-change: transform;
        }

        .pause-animation {
          animation-play-state: paused;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        /* Smooth hardware acceleration */
        .animate-marquee {
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}