'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 flex justify-center gap-8 text-indigo-600 font-medium">
      <Link href="#projects" className="hover:text-indigo-800 transition-colors duration-200">Projects</Link>
      <Link href="#skills" className="hover:text-indigo-800 transition-colors duration-200">Skills</Link>
      <Link href="#contact" className="hover:text-indigo-800 transition-colors duration-200">Contact</Link>
    </nav>
  );
}
