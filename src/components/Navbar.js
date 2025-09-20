'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/30 shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo / Name */}
      <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
        Tejas Shirsath
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-indigo-600 font-medium">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-indigo-800 hover:bg-gradient-to-r hover:from-indigo-200 hover:via-purple-200 hover:to-pink-200 px-3 py-1 rounded transition-all duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-indigo-600 text-3xl focus:outline-none">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md flex flex-col items-center gap-4 py-4 md:hidden shadow-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-indigo-600 text-lg font-medium hover:text-indigo-800 hover:bg-gradient-to-r hover:from-indigo-200 hover:via-purple-200 hover:to-pink-200 px-4 py-2 rounded transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
