import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Star, Quote } from "lucide-react";

export function TestimonialsPage() {
  const testimonials = [
    { name: "Rajesh Kumar", location: "Mumbai", rating: 5, text: "The divine energy of this temple is unparalleled. I experienced profound peace during my visit. The priests are knowledgeable and the facilities are excellent.", date: "March 2026" },
    { name: "Priya Sharma", location: "Delhi", rating: 5, text: "My wish was fulfilled after offering prayers here. The temple management is very efficient and the live streaming helps me stay connected daily.", date: "February 2026" },
    { name: "Dr. Venkatesh", location: "Bangalore", rating: 5, text: "The architectural beauty combined with spiritual atmosphere makes this temple unique. Must visit during Maha Shivaratri.", date: "February 2026" },
    { name: "Lakshmi Nair", location: "Kerala", rating: 5, text: "Regular visitor for 10 years. The Annadanam service is commendable. They truly serve humanity along with divinity.", date: "January 2026" },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <section className="relative h-[300px] overflow-hidden bg-gradient-to-br from-[#78350f] to-[#92400e]">
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Quote className="w-16 h-16 text-[#fbbf24] mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Testimonials</h1>
            <p className="text-xl text-[#fbbf24]">Devotee Experiences & Blessings</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-[#d97706]/20 hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-[#d97706]/20 mb-3" />
                    <p className="text-[#78716c] mb-4 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#d97706]/20">
                      <div>
                        <p className="font-heading text-[#78350f]">{testimonial.name}</p>
                        <p className="text-sm text-[#78716c]">{testimonial.location}</p>
                      </div>
                      <p className="text-xs text-[#d97706]">{testimonial.date}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
