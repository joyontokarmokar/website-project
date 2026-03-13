import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Art for Developers', path: '/art-for-developers' },
  { name: 'Interior Art Programs', path: '/interior-art-programs' },
  { name: 'Legacy Portraits', path: '/legacy-portraits' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Store', path: '/store' },
  { name: 'Contact', path: '/contact' },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans">
      <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-stone-900">
                CJ Latimore
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-stone-900 border-b-2 border-stone-900'
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-stone-500 hover:text-stone-900 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-stone-50 border-b border-stone-200 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === link.path
                        ? 'bg-stone-200 text-stone-900'
                        : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-serif font-bold mb-4">CJ Latimore</h3>
              <p className="text-sm">
                Legacy Portrait Artist • Cultural Storyteller • Art for Buildings & Communities
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/art-for-developers" className="hover:text-white transition-colors">Art for Developers</Link></li>
                <li><Link to="/legacy-portraits" className="hover:text-white transition-colors">Legacy Portraits</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <p className="text-sm mb-4">
                Collaborate to create artwork and curated art programs that give buildings a stronger cultural identity and sense of place.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-stone-800 hover:bg-stone-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-stone-800 text-sm text-center">
            &copy; {new Date().getFullYear()} CJ Latimore. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
