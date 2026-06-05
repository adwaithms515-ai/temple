import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <section className="relative h-[300px] overflow-hidden bg-gradient-to-br from-[#6E1F1F] to-[#6E1F1F]">
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Phone className="w-16 h-16 text-[#D4B870] mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Contact Us</h1>
            <p className="text-xl text-[#D4B870]">We're Here to Help</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="border-[#C9A227]/20">
                <CardContent className="p-6">
                  <MapPin className="w-10 h-10 text-[#C9A227] mb-4" />
                  <h3 className="font-heading text-lg text-[#6E1F1F] mb-2">Address</h3>
                  <p className="text-sm text-[#666666]">
                    Temple Road, Sacred City<br />
                    Kerala, India - 695001
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#C9A227]/20">
                <CardContent className="p-6">
                  <Phone className="w-10 h-10 text-[#C9A227] mb-4" />
                  <h3 className="font-heading text-lg text-[#6E1F1F] mb-2">Phone</h3>
                  <p className="text-sm text-[#666666]">
                    Office: +91 9876543210<br />
                    Emergency: +91 9876543211
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#C9A227]/20">
                <CardContent className="p-6">
                  <Mail className="w-10 h-10 text-[#C9A227] mb-4" />
                  <h3 className="font-heading text-lg text-[#6E1F1F] mb-2">Email</h3>
                  <p className="text-sm text-[#666666]">
                    info@mahadevtemple.org<br />
                    admin@mahadevtemple.org
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#C9A227]/20">
                <CardContent className="p-6">
                  <Clock className="w-10 h-10 text-[#C9A227] mb-4" />
                  <h3 className="font-heading text-lg text-[#6E1F1F] mb-2">Office Hours</h3>
                  <p className="text-sm text-[#666666]">
                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                    Sunday: 9:00 AM - 1:00 PM
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#C9A227]/20 bg-gradient-to-br from-[#6E1F1F] to-[#6E1F1F] text-white">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-[#C9A227]/20">
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl text-[#6E1F1F] mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="Enter your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="+91 9876543210" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input id="subject" placeholder="Subject of your message" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Write your message here..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" className="bg-[#C9A227] hover:bg-[#D4B870]" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="border-[#C9A227]/20 mt-8 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
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
          </div>
        </div>
      </section>
    </div>
  );
}

