import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "motion/react";
import {
  Calendar,
  Heart,
  Sparkles,
  Clock,
  BookOpen,
  Image,
  Utensils,
  Phone,
  Bell,
  Video,
  Gift,
  MapPin,
} from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1557062975-96113e46608b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZSUyMGdvbGRlbnxlbnwxfHx8fDE3NzkxNjQyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const DEITY_IMAGE = "https://images.unsplash.com/photo-1616377009507-c8111f07aced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZW1wbGUlMjBkZWl0eSUyMHN0YXR1ZXxlbnwxfHx8fDE3NzkxNjQyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const FESTIVAL_IMAGE = "https://images.unsplash.com/photo-1617184003170-1f266c325ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBmZXN0aXZhbCUyMGNlbGVicmF0aW9uJTIwaW5kaWF8ZW58MXx8fHwxNzc5MTY0MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function HomePage() {
  const quickAccessCards = [
    { icon: Sparkles, title: "Pooja Booking", path: "/pooja-booking", color: "from-amber-500 to-orange-600" },
    { icon: Heart, title: "Donations", path: "/donations", color: "from-rose-500 to-pink-600" },
    { icon: Calendar, title: "Events", path: "/festivals", color: "from-purple-500 to-indigo-600" },
    { icon: BookOpen, title: "Temple History", path: "/about", color: "from-blue-500 to-cyan-600" },
    { icon: Image, title: "Gallery", path: "/gallery", color: "from-green-500 to-emerald-600" },
    { icon: Utensils, title: "Annadanam", path: "/donations", color: "from-yellow-500 to-amber-600" },
    { icon: Gift, title: "Prasadam Store", path: "/prasadam-store", color: "from-orange-500 to-red-600" },
    { icon: Phone, title: "Contact", path: "/contact", color: "from-teal-500 to-green-600" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-5xl md:text-7xl text-white mb-4 tracking-wide">
              Sri Mahadev Temple
            </h1>
            <p className="text-xl md:text-2xl text-[#fbbf24] mb-2 font-display">
              ॐ नमः शिवाय
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience divine tranquility and eternal blessings in the sacred presence of Lord Mahadev
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#d97706] hover:bg-[#f59e0b] text-lg px-8 py-6"
              >
                <Link to="/darshan-booking">
                  <Bell className="mr-2 w-5 h-5" />
                  Book Darshan
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                <Link to="/live-streaming">
                  <Video className="mr-2 w-5 h-5" />
                  Watch Live
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Daily Quote/Sloka Section */}
      <section className="py-12 bg-gradient-to-r from-[#fef3e2] to-[#fbbf24]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-[#d97706]/20"
          >
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-[#d97706] mx-auto mb-4" />
              <h3 className="font-heading text-2xl text-[#78350f] mb-4">Sloka of the Day</h3>
              <p className="font-display text-xl md:text-2xl text-[#d97706] mb-4 italic">
                "असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर्मा अमृतं गमय।"
              </p>
              <p className="text-[#78716c] text-sm md:text-base">
                Lead me from the unreal to the real. Lead me from darkness to light. Lead me from death to immortality.
              </p>
              <p className="text-[#d97706] mt-2">- Brihadaranyaka Upanishad</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Temple Timings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-[#78350f] mb-3">Today's Timings</h2>
            <p className="text-[#78716c]">Temple Opening Hours & Ritual Schedule</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-[#d97706]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="w-10 h-10 text-[#d97706] mx-auto mb-3" />
                <h4 className="font-heading text-lg mb-2">Morning Darshan</h4>
                <p className="text-2xl text-[#78350f] mb-1">5:00 AM - 12:00 PM</p>
                <p className="text-sm text-[#78716c]">Includes Morning Aarti at 6:00 AM</p>
              </CardContent>
            </Card>
            
            <Card className="border-[#d97706]/20 hover:shadow-lg transition-shadow bg-gradient-to-br from-[#fef3e2] to-white">
              <CardContent className="p-6 text-center">
                <Bell className="w-10 h-10 text-[#d97706] mx-auto mb-3 animate-pulse" />
                <h4 className="font-heading text-lg mb-2">Evening Aarti</h4>
                <p className="text-2xl text-[#78350f] mb-1">6:30 PM</p>
                <p className="text-sm text-[#78716c]">Special Evening Prayer</p>
              </CardContent>
            </Card>
            
            <Card className="border-[#d97706]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="w-10 h-10 text-[#d97706] mx-auto mb-3" />
                <h4 className="font-heading text-lg mb-2">Evening Darshan</h4>
                <p className="text-2xl text-[#78350f] mb-1">4:00 PM - 8:30 PM</p>
                <p className="text-sm text-[#78716c]">Includes Evening Aarti</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Festival Highlight */}
      <section className="py-16 bg-gradient-to-br from-[#78350f] to-[#92400e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Calendar className="w-12 h-12 text-[#fbbf24] mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl mb-4">Upcoming Festival</h2>
              <h3 className="text-2xl text-[#fbbf24] mb-3">Maha Shivaratri</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Join us for the grand celebration of Maha Shivaratri. Experience all-night prayers, 
                abhishekam, and divine blessings. Special arrangements for devotees with prasadam distribution.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div>
                  <p className="text-sm text-[#fbbf24]">Date</p>
                  <p className="text-lg">March 8, 2026</p>
                </div>
                <div className="h-10 w-px bg-[#fbbf24]/30"></div>
                <div>
                  <p className="text-sm text-[#fbbf24]">Duration</p>
                  <p className="text-lg">24 Hours</p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-[#fbbf24] text-[#78350f] hover:bg-[#fbbf24]/90"
              >
                <Link to="/festivals">View All Festivals</Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={FESTIVAL_IMAGE}
                alt="Festival"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-[#78350f] mb-3">Temple Services</h2>
            <p className="text-[#78716c]">Quick access to all temple facilities and services</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {quickAccessCards.slice(0, 4).map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={card.path}>
                  <Card className="border-[#d97706]/20 hover:shadow-xl transition-all cursor-pointer group h-full">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <card.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-heading text-sm md:text-base text-[#78350f]">{card.title}</h4>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-[#d97706] text-[#d97706] hover:bg-[#fef3e2]">
              <Link to="/about">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Deity Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={DEITY_IMAGE}
                alt="Lord Mahadev"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#78350f]/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-heading text-2xl mb-2">Lord Mahadev</h3>
                <p className="text-white/90">The Supreme Deity</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-12 h-12 text-[#d97706] mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl text-[#78350f] mb-4">Divine Presence</h2>
              <p className="text-[#78716c] leading-relaxed mb-6">
                Experience the eternal blessings of Lord Shiva, the destroyer of evil and the embodiment of 
                supreme consciousness. Our temple is blessed with the divine presence that brings peace, 
                prosperity, and spiritual enlightenment to all devotees.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#fef3e2] flex items-center justify-center flex-shrink-0">
                    <Bell className="w-4 h-4 text-[#d97706]" />
                  </div>
                  <div>
                    <h4 className="font-heading text-[#78350f] mb-1">Daily Abhishekam</h4>
                    <p className="text-sm text-[#78716c]">Sacred ritual performed with milk, honey, and holy water</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#fef3e2] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-[#d97706]" />
                  </div>
                  <div>
                    <h4 className="font-heading text-[#78350f] mb-1">Special Darshan</h4>
                    <p className="text-sm text-[#78716c]">VIP and expedited darshan available for devotees</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-[#d97706] hover:bg-[#f59e0b]">
                <Link to="/deities">Explore All Deities</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <MapPin className="w-12 h-12 text-[#d97706] mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl text-[#78350f] mb-3">Find Us Here</h2>
            <p className="text-[#78716c]">Temple Location & Directions</p>
          </div>
          <Card className="border-[#d97706]/20 overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className="aspect-[21/9] w-full">
                <iframe
                  src="https://www.google.com/maps?q=Sri+Mahadeva+Temple,+Vaikom,+Kerala,+India&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Temple Location Demo"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#fef3e2] to-[#fbbf24]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-[#d97706] mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl text-[#78350f] mb-4">
            Support Our Sacred Mission
          </h2>
          <p className="text-[#78716c] text-lg mb-8 max-w-2xl mx-auto">
            Your generous donations help us maintain the temple, conduct daily rituals, 
            feed the needy through Annadanam, and preserve our spiritual heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#d97706] hover:bg-[#f59e0b]">
              <Link to="/donations">
                <Heart className="mr-2 w-5 h-5" />
                Make a Donation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#d97706] text-[#d97706]">
              <Link to="/pilgrim-info">
                <MapPin className="mr-2 w-5 h-5" />
                Plan Your Visit
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
