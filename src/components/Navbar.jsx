import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const linkClasses = ({ isActive }) =>
        isActive
            ? 'text-indigo-600 font-semibold'
            : 'text-gray-700 hover:text-indigo-600 font-semibold'

    return (
        <nav className="bg-white border-b shadow-sm w-screen">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/" className={linkClasses}>
                    <h1 className="text-xl font-bold text-indigo-600">Landing Page</h1>
                </NavLink>

                {/* Desktop Links */}
                <div className="hidden md:flex flex-col-12 gap-8 hover:text-indigo-600 justify-center">
                    <NavLink to="/" className={linkClasses}>Home</NavLink>
                    <NavLink to="/about" className={linkClasses}>About</NavLink>
                    <NavLink to="/contact" className={linkClasses}>Contact Us</NavLink>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t">
                    <NavLink
                        to="/"
                        onClick={() => setOpen(false)}
                        className="block px-4 py-3 border-b"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => setOpen(false)}
                        className="block px-4 py-3 border-b"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={() => setOpen(false)}
                        className="block px-4 py-3"
                    >
                        Contact Us
                    </NavLink>
                </div>
            )}
        </nav>
    )
}
