'use client';

export default function SkillBadge({ label }) {
  return (
    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">
      {label}
    </span>
  );
}
