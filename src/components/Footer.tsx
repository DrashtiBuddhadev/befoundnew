import { ArrowUpRight, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'UI/UX Design', href: '#' },
    { label: 'Web Development', href: '#' },
    { label: 'Brand Identity', href: '#' },
    { label: 'SEO Optimization', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Work', href: '/work' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white border-t border-white/10 z-90">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-20">
        {/* Top section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Left: CTA */}
          <div>
            <h3 className="heading-md mb-6">
              Ready to create
              <br />
              something amazing?
            </h3>
            <button className="btn-primary inline-flex items-center gap-2 group">
              Let's talk
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          {/* Right: Links */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="label text-white/50 mb-4">Services</p>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-white/50 mb-4">Company</p>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-white/50 mb-4">Resources</p>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">N</span>
            </div>
            <span className="font-semibold">NextGen</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} NextGen. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
