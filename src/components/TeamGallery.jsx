import React from 'react';
import team1 from "../assets/team/team1.jpg"
import team2 from "../assets/team/team2.jpg"
import team3 from "../assets/team/team3.jpg"
import team4 from "../assets/team/team4.jpg"
import team5 from "../assets/team/team5.jpg"
import team6 from "../assets/team/team6.jpg"
import team7 from "../assets/team/team7.jpg"
import team8 from "../assets/team/team8.jpg"

export default function TeamGallery() {
  // Replace these placeholder paths with your actual image assets
  const teamPhotos = [
    { id: 1, src: team1, alt: 'Team member at desk' },
    { id: 2, src: team2, alt: 'Team cheering' },
    { id: 3, src: team3, alt: 'Presentation meeting' },
    { id: 4, src: team4, alt: 'Meeting with Grexa logo' },
    { id: 5, src: team5, alt: 'Pizza break' },
    { id: 6, src: team6, alt: 'Full office view' },
    { id: 7, src: team7, alt: 'Group photo' },
    { id: 8, src: team8, alt: 'High five' },
  ];

  return (
    <section className="py-16 px-4 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            The Team Behind the Hustle
          </h2>
          <p className="text-xl md:text-2xl font-bold text-gray-600">
            Serious About Impact. Chill Otherwise.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {teamPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="aspect-square overflow-hidden rounded-[2rem] bg-gray-100 shadow-sm transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};