'use client';

import ProjectCard from '@/components/ProjectCard';
import SkillBadge from '@/components/SkillBadge';
import FeatBadge from '@/components/FeatBadge';
import { motion } from 'framer-motion';
import BackToTop from '@/components/BackToTop';
import { FaGithub, FaLinkedin, FaCode, FaEnvelope, FaPhone } from 'react-icons/fa';




export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 px-6 md:px-20 py-10 scroll-smooth">
      {/* Hero Section */}
      <section className="text-center space-y-6 mt-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Hi, I&apos;m Tejas 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-600"
        >
          🚀 Full Stack Developer | Problem Solver | Creative Thinker
        </motion.p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-2xl text-indigo-600">
          <a href="https://github.com/tejasshir60" target="_blank" rel="noopener" className="hover:scale-125 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/tejas-shirsath" target="_blank" rel="noopener" className="hover:scale-125 transition">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/tejasshir60" target="_blank" rel="noopener" className="hover:scale-125 transition">
            <FaCode />
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-4 text-sm text-gray-600 space-y-1">
          <p className="flex items-center justify-center gap-2"><FaEnvelope /> tejasshir60@gmail.com</p>
          <p className="flex items-center justify-center gap-2"><FaPhone /> +91 9511793110</p>
        </div>

        {/* CV Button */}
        <div className="mt-6">
          <a
            href="/Tejas_Top.pdf"
            target="_blank"
            rel="noopener"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition transform duration-300"
          >
            📄 Download CV
          </a>
        </div>
      </section>

      {/* Education */}
      <motion.div
        id="education"
        className="mt-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-500 inline-block">🎓 Education</h2>
        <ul className="space-y-4 text-lg">
          <li>
            <strong>BE in Computer Engineering (Pursuing)</strong> — CGPA: 8.62  
            <p className="text-gray-600">Pimpri Chinchwad College of Engineering and Research, Pune</p>
          </li>
          <li>
            <strong>12th (HSC, Science)</strong> — CET: 95.33%  
            <p className="text-gray-600">MVP Samaj’s K.T.H.M College, Nashik</p>
          </li>
          <li>
            <strong>10th (CBSE)</strong> — CGPA: 8.4  
            <p className="text-gray-600">Hon. Sharad Pawar International School, Nashik</p>
          </li>
        </ul>
      </motion.div>

      {/* Experience */}
      <motion.div
        id="experience"
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-500 inline-block">💼 Experience</h2>
        <div className="space-y-8 relative">
          <div className="absolute left-2 top-0 bottom-0 border-l-2 border-indigo-300"></div>
          <div className="ml-6">
            <h3 className="font-bold">Omspace Rocket & Exploration Pvt. Ltd. (Hybrid)</h3>
            <p className="text-gray-600">Built professional company website with responsive design and dynamic content.</p>
            <em className="text-sm text-indigo-600">Tech: HTML, CSS, Bootstrap, MySQL</em>
          </div>
          <div className="ml-6">
            <h3 className="font-bold">Web Development Intern @ Bluestack</h3>
            <p className="text-gray-600">Designed responsive apps using React, Node.js, MongoDB. Improved UI/UX.</p>
          </div>
          <div className="ml-6">
            <h3 className="font-bold">IBM Cybersecurity Intern</h3>
            <p className="text-gray-600">Worked on app & network security with IBM QRadar. Mitigated real-world vulnerabilities.</p>
          </div>
        </div>
      </motion.div>

      {/* Projects */}
      <motion.div
        id="projects"
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-500 inline-block">🚀 Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard title="KrushiMitra App" description="Android app for farmers with weather updates, prices, and advice." tech={['Android Studio', 'Firebase', 'Java']} />
          <ProjectCard title="Diabetic Retinopathy Detection" description="Deep learning model for early diagnosis using CNN + Grad-CAM." tech={['Python', 'TensorFlow', 'Keras', 'OpenCV']} />
          <ProjectCard title="Matrix Calculator" description="Python tool for advanced matrix operations with LaTeX rendering." tech={['Python', 'NumPy', 'SymPy']} />
          <ProjectCard title="Travel Website" description="Tourist destination platform for India." tech={['HTML', 'CSS', 'JavaScript', 'Figma']} />
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        id="skills"
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-500 inline-block">🛠️ Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Java', 'Python', 'C/C++', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MySQL', 'MongoDB', 'Android Studio', 'Firebase', 'MATLAB', 'IBM QRadar', 'OOP', 'DSA', 'DBMS', 'OS', 'Computer Networks'].map(skill => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        id="certifications"
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-500 inline-block">🏅 Achievements</h2>
        <div className="flex flex-wrap gap-3">
          <FeatBadge label="300+ DSA problems solved" />
          <FeatBadge label="Java Training - IIT Bombay" />
          <FeatBadge label="Database Programming - Oracle Academy" />
          <FeatBadge label="Full Stack Course - Apna College" />
          <FeatBadge label="Android Development - MITU" />
          <FeatBadge label="Advanced Python - LinkedIn" />
          <FeatBadge label="IBM Cybersecurity Internship" />
        </div>
      </motion.div>

      {/* Contact */}
      <motion.div
        id="contact"
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-500 inline-block">📬 Contact Me</h2>
        <p className="text-lg">
          <a href="mailto:tejasshir60@gmail.com" className="text-indigo-600 hover:underline">tejasshir60@gmail.com</a>
        </p>
        <p className="text-lg">
          <a href="tel:+919511793110" className="text-indigo-600 hover:underline">+91 9511793110</a>
        </p>
      </motion.div>

      <BackToTop />

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} Tejas Shirsath. Built with ❤️ using Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}

