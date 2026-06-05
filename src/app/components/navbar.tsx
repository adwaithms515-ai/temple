import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home", ml: "ഹോം" },
    { path: "/about", label: "About", ml: "ക്ഷേത്രത്തെക്കുറിച്ച്" },
    { path: "/pooja-timings", label: "Pooja Timings", ml: "പൂജാ സമയം" },
    { path: "/festivals", label: "Festivals", ml: "ഉത്സവങ്ങൾ" },
    { path: "/vazhipadu", label: "Vazhipadu", ml: "വഴിപാട്" },
    { path: "/donations", label: "Donate", ml: "സംഭാവന" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar py-4">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#D4B870] rounded-full flex items-center justify-center">
              <span className="text-[#D4B870] text-xl font-heading">ॐ</span>
            </div>
            <div>
              <h1 className="font-malayalam-heading text-lg sm:text-2xl text-white tracking-wide font-medium leading-tight">തിരുവണ്ണൂർ ശ്രീ കൃഷ്ണ ക്ഷേത്രം</h1>
              <p className="text-xs sm:text-sm text-[#D4B870] font-heading tracking-widest uppercase">Thiruvannur Sree Krishna Temple</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link group flex flex-col items-center ${
                  isActive(link.path) ? "text-[#D4B870]" : ""
                }`}
              >
                <span className="font-malayalam text-sm mb-0.5">{link.ml}</span>
                <span className="text-xs font-sans uppercase tracking-wider">{link.label}</span>
                <div className={`h-0.5 w-full bg-[#C9A227] transform origin-left transition-transform duration-300 mt-1 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button asChild className="bg-[#C9A227] hover:bg-[#D4B870] text-[#2B2B2B] rounded-full px-6 font-semibold">
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10"
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
            className="lg:hidden bg-[#0f1b29] border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex flex-col px-4 py-2 rounded-lg transition-all ${
                    isActive(link.path)
                      ? "text-[#C9A227] bg-white/5"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  <span className="font-malayalam text-base">{link.ml}</span>
                  <span className="text-xs font-sans uppercase tracking-wider opacity-80">{link.label}</span>
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-[#C9A227] hover:bg-[#D4B870] text-[#2B2B2B]"
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

