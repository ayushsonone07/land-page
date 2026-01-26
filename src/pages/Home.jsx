import { NavLink } from 'react-router-dom'
import Contact from './Contact'
import ImageCarousel from '../components/ImageCarousel';

export default function Home() {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="bg-white">
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
            </section>

            {/* Features */}
            <section id="features" className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-3xl font-bold text-center mb-12">
                        Why Choose Our Platform
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white hover:bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 hover:text-white p-8 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold mb-3">Fast Development<span className="text-gray-600 hover:text-white">
                                Build and ship applications quickly using modern tools and best
                                practices.
                            </span></h4>
                        </div>

                        <div className="bg-white hover:bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 hover:text-white p-8 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold mb-3">
                                Scalable Architecture
                                <span className="text-gray-600 hover:text-white">
                                Designed to grow with your business without compromising
                                performance.
                            </span>
                            </h4>
                            
                        </div>

                        <div className="bg-white hover:bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 hover:text-white p-8 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold mb-3">Secure by Design<span className="text-gray-600">
                                Built with security-first principles to protect your data and
                                users.
                            </span></h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="bg-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h3 className="text-3xl font-bold mb-6">About Us</h3>
                    <p className="text-gray-600 leading-relaxed">
                        We specialize in building high-quality digital products using modern
                        web technologies. Our focus is on clean architecture, maintainable
                        code, and exceptional user experience.
                    </p>
                </div>
            </section>

            {/* Call to Action */}
            <section
                id="contact"
                className="py-20 bg-indigo-600 text-white"
            >
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h3 className="text-3xl font-bold mb-6">
                        Ready to Start Your Project?
                    </h3>
                    <p className="mb-8 text-indigo-100">
                        Get in touch today and let’s build something great together.
                    </p>
                    <NavLink to="/contact" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                        Contact Us
                    </NavLink>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400">
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
            </footer>
        </div>
    );
};

