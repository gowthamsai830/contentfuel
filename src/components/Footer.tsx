import { Link } from 'react-router-dom';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-heading font-bold">
              <span className="text-primary">Content</span>
              <span className="text-foreground">Fuels</span>
            </div>
            <p className="font-paragraph text-foreground/70 text-sm leading-relaxed">
              A creative content & growth studio helping creators, startups, and brands scale
              across social platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="font-paragraph text-foreground/70 hover:text-primary transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="font-paragraph text-foreground/70 hover:text-primary transition-colors text-sm"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="font-paragraph text-foreground/70 hover:text-primary transition-colors text-sm"
              >
                Portfolio
              </Link>
              <Link
                to="/pricing"
                className="font-paragraph text-foreground/70 hover:text-primary transition-colors text-sm"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="font-paragraph text-foreground/70 hover:text-primary transition-colors text-sm"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-foreground">Get in Touch</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:gscreations830@gmail.com"
                className="flex items-center space-x-2 font-paragraph text-foreground/70 hover:text-primary transition-colors text-sm group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span>gscreations830@gmail.com</span>
              </a>
              <a
                href="https://wa.me/918309951360"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 font-paragraph text-foreground/70 hover:text-whatsapp-green transition-colors text-sm group"
              >
                <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/gowtham_fx._/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-paragraph text-foreground/60 text-sm">
              © {currentYear} Content Fuels. All rights reserved.
            </p>
            <p className="font-paragraph text-foreground/60 text-sm">
              Designed for growth. Built for creators.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
