import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Placeholder for API / Email integration
        console.log("Form submitted:", formData);

        alert("Thank you for contacting us. We will get back to you shortly.");

        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Header */}
            <section className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                    <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Have a question or want to work together? Reach out to us and we’ll
                        respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We’re always open to discussing new projects, creative ideas, or
                            opportunities to be part of your vision.
                        </p>

                        <div className="space-y-4 text-gray-600">
                            <p>
                                <span className="font-semibold text-gray-800">Email:</span>{" "}
                                contact@yourcompany.com
                            </p>
                            <p>
                                <span className="font-semibold text-gray-800">Business Hours:</span>{" "}
                                Monday – Friday, 9:00 AM – 6:00 PM
                            </p>
                            <p>
                                <span className="font-semibold text-gray-800">Location:</span>{" "}
                                Remote / Global
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-10 rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold mb-6">
                            Send Us a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}