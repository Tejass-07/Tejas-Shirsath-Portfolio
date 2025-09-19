import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Tejas Shirsath | Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
