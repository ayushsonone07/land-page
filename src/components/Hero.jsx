import ag1 from "../assets/agent-img/img1.webp"
import ag2 from "../assets/agent-img/img2.webp"
import ag3 from "../assets/agent-img/img3.webp"
import ag4 from "../assets/agent-img/img4.webp"
import stars from "../assets/stars.gif"
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const services = [
    {
      icon: "🌐",
      title: "Google Business Profile",
      subtitle: "AI Agent",
      description: "Gets You More Leads from Google",
      bgColor: "bg-blue-50",
      accentColor: "text-blue-600",
      image: ag1 // Replace with actual image path
    },
    {
      icon: "🎯",
      title: "Lead Conversion",
      subtitle: "AI Agent",
      description: "Captures, Connects and Converts from leads",
      bgColor: "bg-purple-50",
      accentColor: "text-purple-600",
      image: ag2 // Replace with actual image path
    },
    {
      icon: "💬",
      title: "WhatsApp Chat",
      subtitle: "AI Agent",
      description: "Chats With Your Customers 24/7",
      bgColor: "bg-green-50",
      accentColor: "text-green-600",
      image: ag3 // Replace with actual image path
    },
    {
      icon: "📈",
      title: "WhatsApp Marketing",
      subtitle: "AI Agent",
      description: "Increases Repeat Sales & Google Reviews",
      bgColor: "bg-yellow-50",
      accentColor: "text-yellow-600",
      image: ag4 // Replace with actual image path
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-28 px-4">
      {/* Badge */}
      <div className="flex items-center ring-1 ring-purple-500 text-purple-600 rounded-full px-4 py-1 mb-10 shadow-lg">
        <img src={stars} alt="Animation" className="w-6 h-6" /><span className="text-sm font-bold">Grow Faster with AI</span>
      </div>

      {/* Headline */}
      <h1 className="text-center text-5xl font-semibold text-gray-900 leading-tight max-w-6xl">
        Your All-in-One Marketing AI Platform <br/> that Delivers Real Revenue
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-gray-800 text-lg font-medium">
        Trusted by 60,000+ business owners
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        {/* Primary Button */}
        <button className="flex items-center gap-2 bg-[#4867fa] hover:bg-blue-700 text-white font-semibold text-base px-7 py-4 rounded-lg shadow-md transition-colors duration-200">
          <FaWhatsapp size={23} /> <span className="text-md">Free AI Google Profile Booster</span>
        </button> 

        {/* Secondary Button */}
        <button className="flex items-center gap-2 border border-gray-300 hover:border-blue-300 text-gray-700 font-semibold text-base px-7 py-4 rounded-lg bg-white shadow-sm transition-colors duration-200">
          <span className="flex gap-2 text-md text-[#4867fa]"><FaWhatsapp size={23} /> Book Free Demo</span>
        </button>
      </div>

      <section className="py-12 px-4 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {service.title.includes('Google') && (
                      <span className="text-xl font-bold">
                        <span className="text-blue-500">G</span>
                        <span className="text-red-500">o</span>
                        <span className="text-yellow-500">o</span>
                        <span className="text-blue-500">g</span>
                        <span className="text-green-500">l</span>
                        <span className="text-red-500">e</span>
                      </span>
                    )}
                    {service.title.includes('WhatsApp') && (
                      <span className="text-green-500 text-xl">WhatsApp</span>
                    )}
                    {!service.title.includes('Google') && !service.title.includes('WhatsApp') && (
                      <span className="text-xl font-semibold text-gray-800">
                        {service.title.split(' ')[0]}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                    {service.title.includes('Google') ? 'Business Profile' : 
                     service.title.includes('WhatsApp') ? service.title.replace('WhatsApp ', '') : 
                     service.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-sm text-gray-600">|</span>
                    <span className="text-sm text-blue-600 font-medium flex items-center gap-1">
                      ✨ {service.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative mb-4 rounded-xl overflow-hidden bg-white/50 aspect-square flex items-center justify-center">
                <div className="absolute top-2 left-2 flex gap-2">
                  <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-lg">
                    {index === 0 && '⭐'}
                    {index === 1 && '🔍'}
                    {index === 2 && '💬'}
                    {index === 3 && '📊'}
                  </div>
                </div>
                <div className="absolute top-2 right-2 flex gap-2">
                  <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    {index === 1 && '🎯'}
                    {index === 2 && '💭'}
                    {index === 3 && '🔔'}
                  </div>
                </div>
                
                {/* Placeholder for person image */}
                {/* <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div> */}
                
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />


                {/* Bottom icon */}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 font-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}