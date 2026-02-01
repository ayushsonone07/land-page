import { NavLink } from "react-router-dom";
import about from "../assets/about-us.webp"
import WhyWeStarted from "../components/WhyWeStarted"
import TeamGallary from "../components/TeamGallery"
import {HeroCTA2} from "../components/Teamofagentshero"
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
    return (
        <main>

        <section className="bg-white my-4">
          <div className="max-w-7xl mx-auto px-6 pt-32 text-center">
            <h2 className="text-5xl font-bold leading-tight mb-6">
            Helping Local Business' <br />Grow, <span className='text-5xl text-4xl font-bold bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent'>Effortlessly</span>
            </h2>
            <p className="text-xs mx-auto text-gray-600">We are an all-in-one Marketing AI platform that delivers actual revenue growth for small business owners, all on auto-pilot.</p>
          </div>
        </section>

        <div className="w-full md:w-4/5 lg:w-3/4 mx-auto h-full flex-shrink-0 overflow-hidden rounded-lg">
          <img 
            src={about} 
            alt="about"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6">
          We're Building for Small Business Owners
        </h2>

        {/* Description */}
        <p className="text-lg md:text-2xl text-center text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-bold">
          93% of small business owners struggle to manage their marketing. They are losing customers to bigger brands and chains. Grexa empowers them the tech advantage they've never had, to grow and compete with confidence.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12">
          
          {/* Stat 1 */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
              2.3+ Crore
            </h3>
            <p className="text-base md:text-lg  font-medium">
              Micro Businesses in India
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
              32%+
            </h3>
            <p className="text-base md:text-lg text-gray-700 font-medium">
              Contribution to India's GDP
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
              90%+
            </h3>
            <p className="text-base md:text-lg text-gray-700 font-medium">
              Never tried Digital Marketing
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            <FaWhatsapp/>
            Book Free Demo
          </button>
        </div>
      </div>
    </section>

    <WhyWeStarted/>
    <TeamGallary/>
    <HeroCTA2/>

      {/* About Card Section */}
      {/* <section className="py-20">
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
      </section> */}

      {/* Values Section */}
      {/* <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             */}
            {/* {[
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
            ))} */}

          {/* </div>
        </div>
      </section> */}
      {/* CTA Section */}
      {/* <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
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
 */}
    </main>
    );
}

