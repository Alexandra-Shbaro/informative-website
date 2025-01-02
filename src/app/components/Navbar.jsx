"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">
        <a href="/">Logo</a>
      </div>

      {/* Right Section */}
      <div className="flex items-center">
        {/* Get Started Button */}
        <a
          href="/get-started"
          className="hidden md:inline-block px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Get Started
        </a>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-4 p-2 text-gray-700 rounded-md hover:bg-gray-200 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-gray-100 rounded-md shadow-lg w-40 py-2 md:hidden">
          <a
            href="/get-started"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
    );
}
