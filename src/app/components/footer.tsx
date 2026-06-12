import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1A3A6C] to-[#0d2147] text-white">
      {/* Decorative brass border */}
      <div className="h-1 bg-gradient-to-r from-[#C9A227] via-[#D4B870] to-[#C9A227]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-[#C9A227] flex items-center justify-center">
                <span className="text-[#C9A227] font-heading text-lg">🕉</span>
              </div>
              <div>
                <h3 className="font-malayalam-heading text-base text-white leading-tight">
                  തിരുവണ്ണൂർ ശ്രീ കൃഷ്ണ ക്ഷേത്രം
                </h3>
              </div>
            </div>
            <p className="text-xs text-[#D4B870] font-heading tracking-widest uppercase mb-3">
              Thiruvannur Sree Krishna Temple
            </p>
            <p className="text-[#D4B870]/80 text-sm leading-relaxed mb-4">
              A sacred abode of Lord Sree Krishna in Thiruvannur, Kozhikode — 
              the beloved patron deity of the Samuthiri royal lineage of Malabar.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#C9A227]/20 hover:bg-[#C9A227] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-[#C9A227]/20 hover:bg-[#C9A227] flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#C9A227]/20 hover:bg-[#C9A227] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#C9A227]/20 hover:bg-[#C9A227] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-[#D4B870] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#D4B870] transition-colors">About Temple</Link></li>
              <li><Link to="/deities" className="hover:text-[#D4B870] transition-colors">Deities</Link></li>
              <li><Link to="/festivals" className="hover:text-[#D4B870] transition-colors">Festivals &amp; Events</Link></li>
              <li><Link to="/rituals" className="hover:text-[#D4B870] transition-colors">Daily Rituals &amp; Timings</Link></li>
              <li><Link to="/gallery" className="hover:text-[#D4B870] transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-[#D4B870] transition-colors">Temple News</Link></li>
              <li><Link to="/admin" className="hover:text-[#D4B870] transition-colors text-[#C9A227] font-semibold flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]"></div>Admin Dashboard</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-[#D4B870] mb-4">Vazhipadu &amp; Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/pooja-booking" className="hover:text-[#D4B870] transition-colors">Pooja Booking</Link></li>
              <li><Link to="/darshan-booking" className="hover:text-[#D4B870] transition-colors">Darshan Booking</Link></li>
              <li><Link to="/donations" className="hover:text-[#D4B870] transition-colors">Donations</Link></li>
              <li><Link to="/prasadam-store" className="hover:text-[#D4B870] transition-colors">Prasadam Store</Link></li>
              <li><Link to="/live-streaming" className="hover:text-[#D4B870] transition-colors">Live Streaming</Link></li>
              <li><Link to="/pilgrim-info" className="hover:text-[#D4B870] transition-colors">Pilgrim Information</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-[#D4B870] mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-[#D4B870] flex-shrink-0" aria-hidden="true" />
                <span>
                  Thiruvannur, Kozhikode<br />
                  Kerala, India — 673 029
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#D4B870] flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919876543210" className="hover:text-[#D4B870] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#D4B870] flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@thiruvannurtemple.org" className="hover:text-[#D4B870] transition-colors">
                  info@thiruvannurtemple.org
                </a>
              </li>
              <li className="flex items-start space-x-2 mt-2">
                <ExternalLink className="w-4 h-4 mt-1 text-[#D4B870] flex-shrink-0" aria-hidden="true" />
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4B870] transition-colors"
                >
                  WhatsApp Updates
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Brass divider */}
        <div className="border-t border-[#C9A227]/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#D4B870]/60">
          <p>
            &copy; 2026 Thiruvannur Sree Krishna Temple Devaswom. All rights reserved.
          </p>
          <p className="font-malayalam text-[#D4B870]/40 text-xs">
            ഓം നമോ ഭഗവതേ വാസുദേവായ 🪔
          </p>
        </div>
      </div>
    </footer>
  );
}
