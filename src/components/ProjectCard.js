'use client';

export default function ProjectCard({ title, description, tech, videoUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-indigo-700">{title}</h3>
      <p className="text-gray-600">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span key={index} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm">
            {item}
          </span>
        ))}
      </div>

      {/* Demo Video */}
      {videoUrl && (
        <div className="aspect-video mt-4">
          <iframe
            src={videoUrl}
            title={`${title} Demo`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded"
          />
        </div>
      )}
    </div>
  );
}
