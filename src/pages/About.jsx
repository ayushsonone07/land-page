import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Page Header */}
            <section className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                    <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        We build reliable, scalable, and modern digital solutions that help
                        businesses grow with confidence.
                    </p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We are a technology-driven team focused on delivering high-quality
                            web applications using modern frameworks and best engineering
                            practices. Our goal is to create products that are efficient,
                            secure, and easy to maintain.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            With a strong emphasis on clean architecture and performance, we
                            help startups and businesses transform ideas into production-ready
                            solutions.
                        </p>
                    </div>

                    <div className="bg-white p-10 rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">What We Stand For</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li>• Clean and maintainable code</li>
                            <li>• Scalable and future-proof architecture</li>
                            <li>• Strong focus on user experience</li>
                            <li>• Transparent and professional communication</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div className="p-8 rounded-xl border">
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To empower businesses by building reliable digital products that
                            solve real-world problems and deliver long-term value.
                        </p>
                    </div>

                    <div className="p-8 rounded-xl border">
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To become a trusted technology partner known for quality,
                            innovation, and consistency across every project we deliver.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Our Core Values
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold mb-3">Quality First</h4>
                            <p className="text-gray-600">
                                We prioritize quality in every line of code and every decision
                                we make.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold mb-3">Reliability</h4>
                            <p className="text-gray-600">
                                Our solutions are built to be stable, secure, and dependable in
                                real-world environments.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold mb-3">Continuous Growth</h4>
                            <p className="text-gray-600">
                                We continuously learn, adapt, and improve to stay ahead in a
                                fast-evolving tech landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-indigo-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Let’s Build Something Meaningful
                    </h2>
                    <p className="mb-8 text-indigo-100">
                        Whether you’re a startup or an established business, we’re ready to
                        help you bring your ideas to life.
                    </p>
                    <NavLink to="/contact">
                        <button className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                            Get in Touch
                        </button>
                    </NavLink>
                </div>
            </section>
        </div>
    );
}

