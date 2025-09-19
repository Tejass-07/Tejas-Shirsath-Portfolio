'use client';

import ProjectCard from '@/components/ProjectCard';
import SkillBadge from '@/components/SkillBadge';
import FeatBadge from '@/components/FeatBadge';
import { motion } from 'framer-motion';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 text-gray-800 px-6 md:px-20 py-10 scroll-smooth">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold animate-pulse text-indigo-600">
            Hi, I&apos;m Tejas 👋
          </h1>
          <p className="text-lg md:text-xl">
            Full Stack Developer | Problem Solver | Creative Thinker
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/tejasshir60" target="_blank" className="text-blue-600 hover:underline">
              GitHub
            </a>
            <a href="https://linkedin.com/in/tejas-shirsath" target="_blank" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
            <a href="/Tejas_Resume.pdf" target="_blank" className="text-blue-600 hover:underline">
              Resume
            </a>
          </div>

          {/* Download CV Button */}
          <div className="mt-6">
            <a
              href="/Tejas_Resume.pdf"
              target="_blank"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition-colors duration-300"
            >
              📄 Download CV
            </a>
          </div>
        </section>

        {/* Main Sections */}
        <section className="mt-20 space-y-16">
          {/* Projects Section */}
          <motion.div
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="KrushiMitra App"
                description="Android app for farmers with weather updates, market prices, and expert advice."
                tech={['Android Studio', 'Firebase', 'Java']}
                videoUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              />
              <ProjectCard
                title="Bluestack Internship"
                description="Built responsive web apps using React, Node.js, and MongoDB. Improved UI/UX and optimized database queries."
                tech={['React', 'Node.js', 'MongoDB']}
              />
              <ProjectCard
                title="Sponsor Project"
                description="Professional website for MB Canvassing Company with dynamic content and responsive design."
                tech={['HTML', 'CSS', 'Bootstrap', 'MySQL']}
              />
              <ProjectCard
                title="Travel Website"
                description="Tourism site suggesting destinations across India with interactive UI."
                tech={['HTML', 'CSS', 'JavaScript', 'Figma']}
              />
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            id="skills"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-3">
              <SkillBadge label="Java" />
              <SkillBadge label="React" />
              <SkillBadge label="Next.js" />
              <SkillBadge label="Tailwind CSS" />
              <SkillBadge label="Firebase" />
              <SkillBadge label="Node.js" />
              <SkillBadge label="MongoDB" />
              <SkillBadge label="DSA" />
              <SkillBadge label="Git & GitHub" />
            </div>
          </motion.div>

          {/* Feats Section */}
          <motion.div
            id="feats"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4">Feats & Achievements</h2>
            <div className="flex flex-wrap gap-3">
              <FeatBadge label="Knight @ LeetCode (2025)" />
              <FeatBadge label="3-star @ CodeChef (1779)" />
              <FeatBadge label="Pupil @ Codeforces (1324)" />
              <FeatBadge label="CET Score: 95.33%" />
              <FeatBadge label="CGPA: 8.62 (PCCOER)" />
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4">Contact</h2>
            <p className="text-lg">
              📧 Email: <a href="mailto:tejasshir60@gmail.com" className="text-indigo-600 hover:underline">tejasshir60@gmail.com</a>
            </p>
            <p className="text-lg">
              📱 Phone: <a href="tel:+919876543210" className="text-indigo-600 hover:underline">+91 9876543210</a>
            </p>
          </motion.div>
        </section>

        <BackToTop />

        {/* Footer */}
        <footer className="mt-20 text-center text-sm text-gray-500 py-6 border-t">
          © {new Date().getFullYear()} Tejas Shirsath. Built with ❤️ using Next.js & Tailwind CSS.
        </footer>
      </main>
    </>
  );
}
