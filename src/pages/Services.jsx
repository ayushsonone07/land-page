import { NavLink } from "react-router-dom";

const services = [
  {
    title: "Web Development",
    description:
      "High-performance, scalable web applications built with modern technologies.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "UI / UX Design",
    description:
      "User-centered designs focused on clarity, usability, and conversion.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },
  {
    title: "Backend & APIs",
    description:
      "Secure, scalable backend systems and REST / GraphQL APIs.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "Performance Optimization",
    description:
      "Improve speed, SEO, and overall user experience.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Cloud & Deployment",
    description:
      "Reliable deployment pipelines and cloud infrastructure setup.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Maintenance & Support",
    description:
      "Continuous monitoring, updates, and long-term support.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <section className="bg-white my-4">
        <div className="max-w-7xl mx-auto px-6 pt-32 text-center">
          <h2 className="text-5xl font-bold leading-tight mb-6">
          Everything You Need to <span className='text-5xl text-4xl font-bold bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent'>Grow Your <br/>Business</span>
          </h2>
          <p className="text-lg text-black mx-auto">One simple pricing for all AI Agents for maximum revenue.<br/>
          Automate, engage, and grow - starting today.</p>
        </div>
      </section>
      <TeamOfAgentsHero/>
      {/* Services Grid */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => ( */}
              {/* <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              > */}
                {/* Image */}
                {/* <div className="h-48 overflow-hidden"> */}
                  {/* <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div> */}

                {/* Content */}
                {/* <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3"> */}
                    {/* {service.title} */}
                  {/* </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description} */}
                  {/* </p> */}

                  {/* <button className="text-indigo-600 font-semibold hover:underline">
                    Learn More →
                  </button>
                </div>
              </div> */}
            {/* ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
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
    </div>
  );
}
