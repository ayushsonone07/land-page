const services = [
    "Web Development",
    "Frontend Engineering",
    "Backend APIs",
    "Full Stack Solutions",
    "UI/UX Optimization",
    "Performance Tuning",
    "SEO-Friendly Apps",
    "Scalable Architecture",
  ];
  
export default function Services() {
    return (
      <div className="bg-gray-50 text-gray-800 overflow-hidden">
        {/* Header */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl font-extrabold mb-4">Our Services</h1>
            <p className="max-w-2xl mx-auto text-gray-600">
              We provide end-to-end digital services focused on quality,
              scalability, and long-term value.
            </p>
          </div>
        </section>
  
        {/* Marquee */}
        <section className="bg-indigo-600 py-6">
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex gap-12 text-white text-lg font-medium">
              {services.map((service, index) => (
                <span key={index}>{service}</span>
              ))}
            </div>
  
            <div
              className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 text-white text-lg font-medium"
              aria-hidden="true"
            >
              {services.map((service, index) => (
                <span key={index}>{service}</span>
              ))}
            </div>
          </div>
        </section>
  
        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              What We Offer
            </h2>
  
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                title="Frontend Development"
                description="Modern, responsive, and accessible user interfaces built with React and modern CSS frameworks."
              />
              <ServiceCard
                title="Backend Development"
                description="Secure, scalable APIs and server-side logic using Node.js and modern backend practices."
              />
              <ServiceCard
                title="Full Stack Solutions"
                description="Complete product development from database design to frontend deployment."
              />
              <ServiceCard
                title="Performance Optimization"
                description="Improving application speed, SEO, and overall user experience."
              />
              <ServiceCard
                title="UI/UX Consulting"
                description="Design-focused guidance to ensure clarity, usability, and consistency."
              />
              <ServiceCard
                title="Maintenance & Support"
                description="Ongoing improvements, bug fixes, and performance monitoring."
              />
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section className="bg-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Let’s Work Together
            </h2>
            <p className="mb-8 text-indigo-100">
              Tell us about your project and we’ll help you turn your ideas into
              reality.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    );
  };
  
const ServiceCard = ({ title, description }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};  