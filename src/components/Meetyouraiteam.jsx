import React from 'react';

// Import agent images
import agent1 from '../assets/agent-img/img1.webp';
import agent2 from '../assets/agent-img/img2.webp';
import agent3 from '../assets/agent-img/img3.webp';
import agent4 from '../assets/agent-img/img4.webp';

export default function MeetYourAITeam(){
  const aiAgents = [
    {
      id: 1,
      name: 'Google Business Profile',
      badge: 'AI Agent',
      brandColor: 'text-blue-600',
      logo: 'Google',
      image: agent1,
      bgColor: 'bg-orange-50',
      title: 'AI Agent to Get You More Leads from Google',
      features: [
        { icon: '🔍', text: 'Finds the best SEO keywords for your business' },
        { icon: '✏️', text: 'Rewrites SEO-optimised GBP content and services' },
        { icon: '📸', text: 'Auto-publishes SEO-powered GBP posts' },
        { icon: '💬', text: 'Crafts SEO-rich replies to all Google reviews' },
        { icon: '🎂', text: 'Generates authentic Google reviews from your paid customers' }
      ]
    },
    {
      id: 2,
      name: 'Lead Conversion',
      badge: 'AI Agent',
      brandColor: 'text-blue-600',
      logo: null,
      image: agent2,
      bgColor: 'bg-blue-50',
      title: 'AI Agent to Capture, Connect & Convert more Leads.',
      features: [
        { icon: '👤', text: "Collects every lead's details and interests" },
        { icon: '✅', text: 'Instantly connects with all leads on WhatsApp' },
        { icon: '💎', text: 'Shares product info & testimonials to build trust' },
        { icon: '🔍', text: 'Analyses chats to identify potential new customers' }
      ]
    },
    {
      id: 3,
      name: 'WhatsApp Chat',
      badge: 'AI Agent',
      brandColor: 'text-green-600',
      logo: 'WhatsApp',
      image: agent3,
      bgColor: 'bg-green-50',
      title: 'Your Personal Assistant Who Chats With Your Customers 24/7',
      features: [
        { icon: '🎯', text: 'Exclusively trained for your business' },
        { icon: '💬', text: 'Can chat with any number of customers at a time' },
        { icon: '💡', text: 'Know everything about your business' },
        { icon: '📋', text: 'Knows everything about your offerings, price and testimonials' },
        { icon: '📊', text: "Remembers every customer's purchase history" }
      ]
    },
    {
      id: 4,
      name: 'WhatsApp Marketing',
      badge: 'AI Agent',
      brandColor: 'text-green-600',
      logo: 'WhatsApp',
      image: agent4,
      bgColor: 'bg-yellow-50',
      title: 'AI Agent to Increase Repeat Sales & Google Reviews',
      features: [
        { icon: '✨', text: 'Creates Offers, Visuals & Messaging' },
        { icon: '🎯', text: 'Analyses purchase data to pick the right customers' },
        { icon: '🔄', text: 'Spots repeat-purchase opportunities from conversations' },
        { icon: '❓', text: 'Answers all promotion-related customer queries' },
        { icon: '📲', text: 'Sends offers & reminders directly on WhatsApp' }
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Meet Your{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Digital Marketing AI Team
          </span>
        </h2>

        {/* AI Agents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {aiAgents.map((agent) => (
            <div
              key={agent.id}
              className="group"
            >
              {/* Agent Card */}
              <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-2 mb-4">
                    {agent.logo === 'Google' && (
                      <span className="text-2xl font-bold">
                        <span className="text-blue-500">G</span>
                        <span className="text-red-500">o</span>
                        <span className="text-yellow-500">o</span>
                        <span className="text-blue-500">g</span>
                        <span className="text-green-500">l</span>
                        <span className="text-red-500">e</span>
                      </span>
                    )}
                    {agent.logo === 'WhatsApp' && (
                      <span className="text-green-600 text-2xl font-bold flex items-center gap-1">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp
                      </span>
                    )}
                    {!agent.logo && (
                      <span className={`text-2xl font-bold ${agent.brandColor}`}>
                        {agent.name}
                      </span>
                    )}
                    
                    <span className="text-gray-400">|</span>
                    
                    <div className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full">
                      <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      <span className="text-blue-600 text-sm font-semibold">{agent.badge}</span>
                    </div>
                  </div>

                  {/* Agent Info Card */}
                  <div className={`${agent.bgColor} rounded-xl p-6 flex flex-col md:flex-row items-center gap-6`}>
                  {/* Agent Image */}
                  <div className="relative flex-shrink-0">
                    <div className="flex w-64 h-64 rounded-md bg-white">
                      <img 
                        src={agent.image} 
                        alt={agent.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative icons */}
                    <div className="absolute -top-2 -left-2 w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
                      {agent.id === 1 && <span className="text-xl">⭐</span>}
                      {agent.id === 2 && <span className="text-xl">🎯</span>}
                      {agent.id === 3 && <span className="text-xl">💬</span>}
                      {agent.id === 4 && <span className="text-xl">📊</span>}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
                      {agent.id === 1 && (
                        <span className="text-xl font-bold">
                          <span className="text-blue-500">G</span>
                        </span>
                      )}
                      {agent.id === 2 && <span className="text-xl">🔍</span>}
                      {agent.id === 3 && <span className="text-xl">💭</span>}
                      {agent.id === 4 && <span className="text-xl">📈</span>}
                    </div>
                  </div>

                  {/* Agent Title and Button - Stacked on mobile, side-by-side on larger screens */}
                  <div className="md:flex-row md:items-center md:justify-between w-full gap-4">
                    <h3 className="my-4 text-lg md:text-xl font-bold text-gray-900 leading-snug">
                      {agent.title}
                    </h3>
                    <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 whitespace-nowrap">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Book Free Demo
                    </button>
                  </div>
                </div>
                </div>

                {/* Features List */}
                <div className="px-6 pb-6">
                  <div className="space-y-3">
                    {agent.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="w-8 h-8 flex-shrink-0 bg-blue-50 rounded-lg flex items-center justify-center">
                          <span className="text-lg">{feature.icon}</span>
                        </div>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed pt-1">
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};