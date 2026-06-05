import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#6E1F1F] to-[#6E1F1F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#C9A227] flex items-center justify-center">
                <span className="text-white font-heading">ॐ</span>
              </div>
              <h3 className="font-heading text-lg">Sri Mahadev Temple</h3>
            </div>
            <p className="text-[#D4B870]/80 text-sm leading-relaxed mb-4">
              A divine abode of peace, spirituality, and devotion. Experience the eternal blessings of Lord Mahadev.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-[#C9A227]/20 hover:bg-[#C9A227] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#C9A227]/20 hover:bg-[#C9A227] flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#C9A227]/20 hover:bg-[#C9A227] flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#C9A227]/20 hover:bg-[#C9A227] flex items-center justify-center transition-colors">
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
              <li><Link to="/festivals" className="hover:text-[#D4B870] transition-colors">Festivals & Events</Link></li>
              <li><Link to="/rituals" className="hover:text-[#D4B870] transition-colors">Daily Rituals</Link></li>
              <li><Link to="/blog" className="hover:text-[#D4B870] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-[#D4B870] mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/pooja-booking" className="hover:text-[#D4B870] transition-colors">Pooja Booking</Link></li>
              <li><Link to="/darshan-booking" className="hover:text-[#D4B870] transition-colors">Darshan Booking</Link></li>
              <li><Link to="/donations" className="hover:text-[#D4B870] transition-colors">Donations</Link></li>
              <li><Link to="/prasadam-store" className="hover:text-[#D4B870] transition-colors">Prasadam Store</Link></li>
              <li><Link to="/live-streaming" className="hover:text-[#D4B870] transition-colors">Live Streaming</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-[#D4B870] mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-[#D4B870] flex-shrink-0" />
                <span>Temple Road, Sacred City<br />Kerala, India - 695001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#D4B870] flex-shrink-0" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#D4B870] flex-shrink-0" />
                <span>info@mahadevtemple.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C9A227]/20 mt-8 pt-8 text-center text-sm text-[#D4B870]/60">
          <p>&copy; 2026 Sri Mahadev Temple. All rights reserved. | Designed with devotion 🙏</p>
        </div>
      </div>
    </footer>
  );
}

