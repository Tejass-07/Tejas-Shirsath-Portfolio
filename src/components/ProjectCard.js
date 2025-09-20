'use client';

import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tech, videoUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-6 space-y-4 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
    >
      <h3 className="text-xl md:text-2xl font-bold text-indigo-600">{title}</h3>
      <p className="text-gray-700">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 text-indigo-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Demo Video */}
      {videoUrl && (
        <div className="aspect-video mt-4 rounded-lg overflow-hidden shadow-md">
          <iframe
            src={videoUrl}
            title={`${title} Demo`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}
    </motion.div>
  );
}
