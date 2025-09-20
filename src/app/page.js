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

          {/* Social & Contact Links */}
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/tejasshir60" target="_blank" rel="noopener" className="text-blue-600 hover:underline">
              GitHub
            </a>
            <a href="https://linkedin.com/in/tejas-shirsath" target="_blank" rel="noopener" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
            <a href="https://leetcode.com/tejasshir60" target="_blank" rel="noopener" className="text-blue-600 hover:underline">
              LeetCode
            </a>
            <a href="https://www.codechef.com/users/tejasshir60" target="_blank" rel="noopener" className="text-blue-600 hover:underline">
              CodeChef
            </a>
          </div>

          <div className="mt-4 space-y-1 text-sm">
            <p>✉️ tejasshir60@gmail.com</p>
            <p>📱 +91 9511793110</p>
          </div>

          {/* Download CV Button */}
          <div className="mt-6">
            <a
              href="/Tejas_Top.pdf"
              target="_blank"
              rel="noopener"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition-colors duration-300"
            >
              📄 Download CV
            </a>
          </div>
        </section>

        {/* Education */}
        <motion.div
          id="education"
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          <ul className="space-y-2 text-lg">
            <li>
              <strong>BE in Computer Engineering (Pursuing)</strong> (CGPA: 8.62)  
              Pimpri Chinchwad College of Engineering and Research, Pune
            </li>
            <li>
              <strong>12th (HSC, Science)</strong> (CET: 95.33%)  
              MVP Samaj’s K.T.H.M College, Nashik
            </li>
            <li>
              <strong>10th (CBSE)</strong>  
              Hon. Sharad Pawar International School, Nashik
            </li>
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          id="experience"
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">Experience</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <strong>Omspace Rocket & Exploration Pvt. Ltd. (Hybrid)</strong>  
              Built a professional company website with responsive design and dynamic content.  
              <em>Technologies:</em> HTML, CSS, Bootstrap, MySQL
            </li>
            <li>
              <strong>Web Development Intern @ Bluestack</strong>  
              Designed responsive web applications using React, Node.js, and MongoDB; improved UI/UX and implemented database optimizations.
            </li>
            <li>
              <strong>IBM Cybersecurity Intern</strong>  
              Worked on application and network security using IBM QRadar and firewalls; mitigated vulnerabilities in real-world scenarios.
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          id="projects"
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
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
              title="Sponsor Project for MB Canvassing Company"
              description="Built a professional company website with responsive design and dynamic content."
              tech={['HTML', 'CSS', 'Bootstrap', 'MySQL']}
            />
            <ProjectCard
              title="Travel Website"
              description="Designed a tourism site suggesting destinations across India."
              tech={['HTML', 'CSS', 'JavaScript', 'Figma']}
            />
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          id="skills"
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            <SkillBadge label="Java" />
            <SkillBadge label="Python" />
            <SkillBadge label="C/C++" />
            <SkillBadge label="HTML" />
            <SkillBadge label="CSS" />
            <SkillBadge label="JavaScript" />
            <SkillBadge label="React" />
            <SkillBadge label="Node.js" />
            <SkillBadge label="MySQL" />
            <SkillBadge label="MongoDB" />
            <SkillBadge label="Android Studio" />
            <SkillBadge label="Firebase" />
            <SkillBadge label="MATLAB" />
            <SkillBadge label="IBM QRadar" />
            <SkillBadge label="OOP" />
            <SkillBadge label="DSA" />
            <SkillBadge label="DBMS" />
            <SkillBadge label="Operating Systems" />
            <SkillBadge label="Computer Networks" />
          </div>
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          id="certifications"
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">Certifications & Achievements</h2>
          <div className="flex flex-wrap gap-3">
            <FeatBadge label="Solved 300+ DSA problems" />
            <FeatBadge label="Java Training (IIT Bombay)" />
            <FeatBadge label="Database Programming (Oracle Academy)" />
            <FeatBadge label="RDBMS Training (IIT Bombay)" />
            <FeatBadge label="Delta Full Stack Course (Apna College)" />
            <FeatBadge label="LaTeX Training (IIT Bombay)" />
            <FeatBadge label="C Training (IIT Bombay)" />
            <FeatBadge label="Android Development (MITU)" />
            <FeatBadge label="Advanced Python (LinkedIn)" />
          </div>
        </motion.div>

        {/* Responsibilities & Hobbies */}
        <motion.div
          id="more"
          className="mt-16 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl font-semibold mb-4">Responsibilities</h2>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>NSS Volunteer – Led social welfare activities at PCCOER Pune</li>
              <li>Football Team Captain – State-level player and team leader</li>
              <li>Cultural Program Executive – Organized college-level events</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Hobbies</h2>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>Problem-solving</li>
              <li>Reading</li>
              <li>Playing chess</li>
              <li>Traveling</li>
              <li>Yoga</li>
              <li>Painting</li>
            </ul>
          </div>
        </motion.div>

        {/* Contact & Back to Top */}
        <motion.div
          id="contact"
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-lg">
            📧 <a href="mailto:tejasshir60@gmail.com" className="text-indigo-600 hover:underline">tejasshir60@gmail.com</a>
          </p>
          <p className="text-lg">
            📱 <a href="tel:+919511793110" className="text-indigo-600 hover:underline">+91 9511793110</a>
          </p>
        </motion.div>

        <BackToTop />

        {/* Footer */}
        <footer className="mt-20 text-center text-sm text-gray-500 py-6 border-t">
          © {new Date().getFullYear()} Tejas Shirsath. Built with ❤️ using Next.js & Tailwind CSS.
        </footer>
      </main>
    </>
  );
}
