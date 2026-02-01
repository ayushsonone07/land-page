import { NavLink } from 'react-router-dom'
import Accordian from "../components/Accordion"
import Hero from '../components/Hero';
import TeamOfAgentsHero,{HeroCTA} from '../components/Teamofagentshero';
import BusinessCategories from '../components/Businesscategories';
import MeetYourAITeam from '../components/Meetyouraiteam';
import VideoTestimonials from '../components/Videotestimonials';
import RealStoriesResults from '../components/Realstoriesresults';
import TrustedByIndustries from '../components/Trustedbyindustries'

export default function Home() {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            {/* <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-24 text-center">
                        <h2 className="text-6xl font-semibold leading-tight mb-6">
                            Build Modern Web Experiences <br />With <span className='text-6xl text-4xl font-bold bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent'>Confidence</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-600 ">A professional solution designed to help businesses and developers launch fast, scale efficiently, and maintain high performance.</p>
                        <ImageCarousel/>
                        <div className="flex justify-center gap-4">
                        <NavLink to="/contact">
                            <button
                                className="bg-indigo-600 text-white px-10 py-5 rounded-full font-medium hover:bg-indigo-700 transition hover:bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600"
                            >
                                Contact Us
                            </button>
                        </NavLink>
                        <NavLink to="/about">
                            <button
                                className="border border-black px-10 py-5 rounded-full font-medium hover:border-indigo-600 text-black hover:text-white hover:bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 transition"
                            >
                                About us
                            </button>
                        </NavLink>
                    </div>
                </div>
            </section> */}
            <Hero/>
            <TeamOfAgentsHero/>
            <BusinessCategories/>
            <MeetYourAITeam/>
            <VideoTestimonials/>
            <RealStoriesResults/>
            <TrustedByIndustries/>
            <Accordian />
            <HeroCTA />
            {/* Features */}
            {/* <section
                id="features"
                className="py-28 bg-gradient-to-b from-gray-50 to-white"
                >
                <div className="max-w-7xl mx-auto px-6"> */}
                    {/* Section Header */}
                    {/* <div className="text-center max-w-3xl mx-auto mb-20">
                    <h3 className="text-4xl font-extrabold mb-4">
                        Why Choose Our Platform
                    </h3>
                    <p className="text-gray-600 text-lg">
                        Built with modern technologies, performance, and scalability in mind.
                    </p>
                    </div> */}

                    {/* Feature Cards */}
                    {/* <div className="grid gap-10 md:grid-cols-3"> */}
                    {/* {[
                        {
                        title: "Fast Development",
                        desc: "Build and ship applications rapidly using proven tools and best practices.",
                        icon: "⚡",
                        },
                        {
                        title: "Scalable Architecture",
                        desc: "Future-ready systems that scale seamlessly as your business grows.",
                        icon: "📈",
                        },
                        {
                        title: "Secure by Design",
                        desc: "Security-first approach to safeguard your users and data.",
                        icon: "🔒",
                        },
                    ].map((feature, i) => ( */}
                        {/* <div
                        key={i}
                        className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600"
                        >
                        <div className="h-full rounded-2xl bg-white p-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl"> */}
                            {/* Icon */}
                            {/* <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-6 bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 text-white text-xl">
                            {feature.icon}
                            </div> */}

                            {/* Content */}
                            {/* <h4 className="text-xl font-semibold mb-3 group-hover:text-indigo-600 transition">
                            {feature.title}
                            </h4> */}

                            {/* <p className="text-gray-600 leading-relaxed">
                            {feature.desc}
                            </p> */}

                            {/* Hover underline */}
                            {/* <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-violet-600 to-teal-600 group-hover:w-full transition-all duration-300" />
                        </div>
                        </div> */}
                    {/* ))} */}
                    {/* </div>
                </div>
            </section> */}


            {/* About */}
            {/* <section
                id="about"
                className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
                >
                <div className="max-w-5xl mx-auto px-6">
                    <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/20">
                     */}
                    {/* Gradient Accent */}
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />

                    <div className="relative p-10 md:p-16 text-center">
                        <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        About Us
                        </h3>

                        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        We specialize in building high-quality digital products using modern web
                        technologies. Our approach emphasizes clean architecture, maintainable
                        codebases, and intuitive user experiences that scale with your business.
                        </p>
                    </div>
                    </div>
                </div>
                </section> */}
            {/* Call to Action */}
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
            </section> */}

            {/* Footer */}
            {/* <footer className="bg-gray-900 text-gray-400">
                <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-sm">
                    <p>© 2026 YourBrand. All rights reserved.</p>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-white">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-white">
                            Terms
                        </a>
                    </div>
                </div>
            </footer> */}
        </div>
    );
};

