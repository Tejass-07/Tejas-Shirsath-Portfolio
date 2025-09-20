// app/layout.js
import './globals.css';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';

export const metadata = {
  title: 'Tejas Shirsath | Full Stack Developer',
  description: 'Portfolio showcasing Tejas Shirsath’s projects, skills, and achievements. Built with Next.js & Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-500 text-gray-800 dark:text-gray-100 font-sans">
        
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>

        {/* Back to Top */}
        <BackToTop />

        {/* Footer */}
        <footer className="mt-12 w-full text-center text-sm text-gray-500 dark:text-gray-400 py-6 border-t border-gray-200 dark:border-gray-700">
          © {new Date().getFullYear()} Tejas Shirsath. Built with ❤️ using Next.js & Tailwind CSS.
        </footer>
      </body>
    </html>
  );
}
