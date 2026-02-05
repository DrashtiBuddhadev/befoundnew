import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Work', href: '/work', isRoute: true },
  { label: 'Services', href: '/#services', isRoute: false },
  { label: 'Contact', href: '/contact', isRoute: true },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMenuOpen(false);

    // If it's a hash link on the home page
    if (!isRoute && href.startsWith('/#')) {
      if (location.pathname === '/') {
        // Already on home page, just scroll
        const element = document.querySelector(href.replace('/', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // If not on home page, the Link will navigate there
    }
  };

  return (
    <>
      {/* Minimal Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled && !isMenuOpen ? 'bg-black/90 backdrop-blur-xl' : 'bg-transparent'
          }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 h-20 lg:h-24">
          {/* Logo - Stacked */}
          <Link to="/" className="relative z-[101]">
            <div className="flex flex-col leading-[1.1]">
              <span className="text-lg font-medium tracking-tight text-white">
                BeFound
              </span>
              <div className="flex items-baseline gap-0.5">
                <span className="text-lg font-medium tracking-tight text-white">
                  Studio
                </span>
                <span className="text-xs font-medium text-indigo-500">
                  +
                </span>
              </div>
            </div>
          </Link>

          {/* Right Side - Hamburger Only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-[101] flex items-center gap-6"
            aria-label="Toggle menu"
          >
            {/* Hamburger Icon */}
            <div className="w-10 h-10 flex items-center justify-center">
              <div className="relative w-7 h-5 flex flex-col justify-between">
                <span
                  className={`block h-[2px] bg-white transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                    }`}
                />
                <span
                  className={`block h-[2px] bg-white transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'opacity-0 scale-x-0' : ''
                    }`}
                />
                <span
                  className={`block h-[2px] bg-white transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                    }`}
                />
              </div>
            </div>
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-[99] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Background */}
        <div
          className={`absolute inset-0 bg-[#0a0a0a] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] origin-top ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'
            }`}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col">
          {/* Spacer */}
          <div className="h-24 lg:h-28" />

          {/* Main Navigation */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16">
            <div className="max-w-7xl">
              {navLinks.map((link, index) => (
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => handleNavClick(link.href, link.isRoute)}
                    className="group block overflow-hidden"
                  >
                    <div
                      className={`flex items-center gap-6 py-3 md:py-4 border-b border-white/10 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                        }`}
                      style={{ transitionDelay: isMenuOpen ? `${index * 80 + 200}ms` : '0ms' }}
                    >
                      <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white group-hover:text-indigo-400 transition-colors duration-300">
                        {link.label}
                      </span>
                      <ArrowUpRight
                        className="w-6 h-6 lg:w-8 lg:h-8 text-white/0 group-hover:text-indigo-400 translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300"
                      />
                    </div>
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => handleNavClick(link.href, link.isRoute)}
                    className="group block overflow-hidden"
                  >
                    <div
                      className={`flex items-center gap-6 py-3 md:py-4 border-b border-white/10 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                        }`}
                      style={{ transitionDelay: isMenuOpen ? `${index * 80 + 200}ms` : '0ms' }}
                    >
                      <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white group-hover:text-indigo-400 transition-colors duration-300">
                        {link.label}
                      </span>
                      <ArrowUpRight
                        className="w-6 h-6 lg:w-8 lg:h-8 text-white/0 group-hover:text-indigo-400 translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300"
                      />
                    </div>
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Footer */}
          <div
            className={`px-6 sm:px-10 lg:px-16 pb-8 lg:pb-12 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            style={{ transitionDelay: isMenuOpen ? '600ms' : '0ms' }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 pt-8 border-t border-white/10">
              {/* Contact Info */}
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-white/30">Get in touch</p>
                <a href="mailto:hello@befound.studio" className="block text-lg text-white hover:text-indigo-400 transition-colors">
                  hello@befound.studio
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-8">
                <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
