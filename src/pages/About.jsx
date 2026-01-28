import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <main className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Building Digital Experiences That Matter
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We are a team of developers and designers focused on creating
              scalable, high-performance web applications using modern
              technologies and clean architecture principles.
            </p>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
            <img
              src="https://illustrations.popsy.co/gray/web-design.svg"
              alt="Team Illustration"
              className="relative rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About Card Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/20 p-10 md:p-16 text-center">
            <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              We specialize in crafting modern digital products using React,
              Next.js, Node.js, and scalable backend systems. Our mission is to
              deliver clean, maintainable solutions with a strong focus on user
              experience and long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {[
              {
                title: "Clean Code",
                desc: "Maintainable, scalable, and readable codebases following best practices.",
                icon: "🧩",
              },
              {
                title: "User-Centered Design",
                desc: "Interfaces designed with clarity, accessibility, and usability in mind.",
                icon: "🎯",
              },
              {
                title: "Performance First",
                desc: "Fast-loading, SEO-friendly applications optimized for all devices.",
                icon: "⚡",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white shadow-lg p-8 text-center hover:-translate-y-1 transition-transform"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Great Together
        </h2>
        <p className="text-lg opacity-90 mb-10">
            Have an idea or project in mind? We’d love to collaborate and bring
            it to life.
        </p>
        <NavLink to="/contact">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
                Contact Us
            </button>
        </NavLink>
        </div>
    </section>

    </main>
    );
}

