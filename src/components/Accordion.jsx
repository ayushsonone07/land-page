import React, { useState } from 'react';

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Will it work if I'm not tech-savvy?",
      answer: "Absolutely! Grexa AI is designed to be user-friendly and requires no technical expertise. Our platform handles all the technical aspects while you focus on running your business. Plus, our support team is always available to help you get started and answer any questions."
    },
    {
      id: 2,
      question: "How soon will I see results?",
      answer: "Most business owners start seeing results within the first 30 days. You'll notice improvements in your Google Business Profile visibility, increased website traffic, and more customer inquiries. The timeline can vary based on your industry and current online presence, but our AI agents work 24/7 to accelerate your growth."
    },
    {
      id: 3,
      question: "Is my customer data secure?",
      answer: "Yes, security is our top priority. We use enterprise-grade encryption and follow strict data protection protocols to ensure your customer information is completely secure. Your data is stored on secure servers and is never shared with third parties. We're fully compliant with data protection regulations."
    },
    {
      id: 4,
      question: "Is there someone to help me if I get stuck?",
      answer: "Yes! We provide dedicated support through multiple channels. You can reach our support team via WhatsApp, email, or phone. We also offer onboarding assistance to help you get started, regular check-ins to ensure everything is running smoothly, and a comprehensive knowledge base with tutorials and guides."
    },
    {
      id: 5,
      question: "Does Grexa work for all types of businesses?",
      answer: "Yes, Grexa AI works for businesses across various industries including salons, clinics, gyms, restaurants, services, retail, and more. Our AI agents are customizable to fit your specific business needs and industry requirements. Whether you're a small local business or a growing enterprise, Grexa AI can help you scale."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Common Questions from Business Owners
          </h2>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="border-b border-gray-200 last:border-b-0"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-6 px-2 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 rounded-lg"
              >
                <span className="text-lg md:text-xl text-gray-700 font-medium pr-8">
                  {faq.question}
                </span>
                
                {/* Chevron Icon */}
                <svg
                  className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer Panel */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-6 px-2">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};