import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Heart, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/pooja-booking", label: "Pooja Booking" },
    { path: "/darshan-booking", label: "Darshan" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-[#d97706]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d97706] to-[#f59e0b] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white text-xl font-heading">ॐ</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading text-xl text-[#78350f] tracking-wide">Sri Mahadev Temple</h1>
              <p className="text-xs text-[#d97706]">Divine Blessings</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg transition-all ${
                  isActive(link.path)
                    ? "text-[#d97706] bg-[#fef3e2]"
                    : "text-[#78350f] hover:text-[#d97706] hover:bg-[#fef3e2]/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              asChild
              variant="outline"
              className="border-[#d97706] text-[#d97706] hover:bg-[#fef3e2]"
            >
              <Link to="/donations">
                <Heart className="w-4 h-4 mr-2" />
                Donate
              </Link>
            </Button>
            <Button asChild className="bg-[#d97706] hover:bg-[#f59e0b]">
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#fef3e2] text-[#78350f]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#d97706]/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    isActive(link.path)
                      ? "text-[#d97706] bg-[#fef3e2]"
                      : "text-[#78350f] hover:bg-[#fef3e2]/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#d97706] text-[#d97706]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/donations">
                    <Heart className="w-4 h-4 mr-2" />
                    Donate
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-[#d97706] hover:bg-[#f59e0b]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/contact">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
