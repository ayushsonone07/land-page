import React from 'react';
import foundary from "../assets/founding-story.webp"

export default function WhyWeStarted() {
  const problems = [
    {
      id: 1,
      title: "No Marketing Skills",
      description: "Local business owners are great at what they do — but digital marketing feels confusing and out of reach."
    },
    {
      id: 2,
      title: "High Agency Costs",
      description: "Good agencies charge ₹2–8L/month, which most small businesses simply can't afford."
    },
    {
      id: 3,
      title: "Unreliable Budget Options",
      description: "Low-cost freelancers often disappear, underdeliver, or don't get how local businesses work."
    },
    {
      id: 4,
      title: "Tools Not Built for Them",
      description: "Most tools are made for big teams — not for owners handling everything on their own."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#06B6D4] p-2 md:p-16 lg:p-8 text-white rounded-[3rem] m-4">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Why We Started Grexa
          </h2>
          <p className="text-xl md:text-2xl font-medium max-w-5xl mx-auto leading-relaxed opacity-95">
            Every local business deserves to compete and grow — with the right tools, clear results, and zero complexity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Problems List */}
          <div className="space-y-12">
            <p className="text-sm font-semibold opacity-80 uppercase tracking-wide">
              The problem we witnessed
            </p>
            
            <div className="space-y-0">
              {problems.map((item) => (
                <div 
                  key={item.id}
                  className="border-t border-white/20 py-8 last:border-b-0"
                >
                  <h3 className="text-xl font-bold mb-3">
                    {item.id}. {item.title}
                  </h3>
                  <p className="text-lg opacity-85 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Visuals */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={foundary} 
                alt="Product presentation" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}