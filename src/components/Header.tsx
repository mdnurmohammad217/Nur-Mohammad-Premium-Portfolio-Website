import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from './ui/Button';
const navLinks = [
{
  name: 'About',
  href: '#about'
},
{
  name: 'Services',
  href: '#services'
},
{
  name: 'Portfolio',
  href: '#portfolio'
},
{
  name: 'Testimonials',
  href: '#testimonials'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg text-white group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
              <Code2 className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
              Nur<span className="text-blue-600">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group">

                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            )}
            <Button
              size="sm"
              onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })
              }>

              Hire Me
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">

            {isMobileMenuOpen ?
            <X className="w-6 h-6" /> :

            <Menu className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-white border-t border-slate-100 overflow-hidden">

            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>

                  {link.name}
                </a>
            )}
              <Button
              className="w-full max-w-xs"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>

                Hire Me
              </Button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}