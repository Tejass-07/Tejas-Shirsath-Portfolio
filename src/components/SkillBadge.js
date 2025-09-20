'use client';

import { motion } from 'framer-motion';

export default function SkillBadge({ label }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 text-indigo-800 px-4 py-2 rounded-full text-sm md:text-base font-semibold shadow-md hover:scale-110 hover:shadow-lg transition-transform duration-300 cursor-default"
    >
      {label}
    </motion.span>
  );
}
