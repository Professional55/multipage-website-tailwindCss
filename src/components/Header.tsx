"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex flex-wrap bg-black w-full h-auto text-white items-center justify-between py-4 px-5">
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <img className="h-20 w-28" src="/carlogo.png" alt="Car Logo" />
        <h1 className="text-2xl md:text-4xl font-bold">Car World!</h1>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:flex space-x-5 lg:space-x-10 font-semibold">
        <Link className="hover:underline" href="/">HOME</Link>
        <Link className="hover:underline" href="/about">ABOUT</Link>
        <Link className="hover:underline" href="/cars">CARS</Link>
        <Link className="hover:underline" href="/contact">CONTACT</Link>
      </nav>

      {/* Search Box (Desktop) */}
      <div className="hidden md:block">
        <input
          className="bg-black text-white border-2 border-blue-600 rounded-full px-4 py-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Registration Now"
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-3 py-4 font-semibold">
          <Link className="hover:underline" href="/" onClick={toggleMobileMenu}>
            HOME
          </Link>
          <Link className="hover:underline" href="/about" onClick={toggleMobileMenu}>
            ABOUT
          </Link>
          <Link className="hover:underline" href="/cars" onClick={toggleMobileMenu}>
            CARS
          </Link>
          <Link className="hover:underline" href="/contact" onClick={toggleMobileMenu}>
            CONTACT
          </Link>
          <input
            className="bg-black text-white border-2 border-blue-600 rounded-full px-4 py-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-3"
            type="text"
            placeholder="Registration Now"
          />
        </nav>
      )}
    </header>
  );
};

export default Header;
