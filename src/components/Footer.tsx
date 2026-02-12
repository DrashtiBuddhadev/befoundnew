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
    { label: 'Work', href: '#' },
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
      </div>
    </footer>
  );
}
