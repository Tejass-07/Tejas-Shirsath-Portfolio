'use client';

export default function FeatBadge({ label }) {
  return (
    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">
      {label}
    </span>
  );
}
