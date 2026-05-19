import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Building2, Heart, Users, Award } from "lucide-react";

const TEMPLE_IMAGE = "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZW1wbGUlMjBnb3B1cmFtJTIwc3Vuc2V0fGVufDF8fHx8MTc3OTE2NDIyOXww&ixlib=rb-4.1.0&q=80&w=1080";
const KERALA_TEMPLE = "https://images.unsplash.com/photo-1644773182204-f0bf03cae0cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHRlbXBsZSUyMGtlcmFsYSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3OTE2NDIzMHww&ixlib=rb-4.1.0&q=80&w=1080";

export function AboutPage() {
  const timeline = [
    { year: "850 CE", event: "Temple Foundation", description: "Founded by the great sage Adi Shankaracharya during his spiritual journey" },
    { year: "1200 CE", event: "Major Renovation", description: "Extensive architectural enhancements and new deity installations" },
    { year: "1650 CE", event: "Golden Gopuram", description: "The magnificent golden tower was constructed with royal patronage" },
    { year: "1950", event: "Modern Era Begins", description: "Temple trust formed to preserve heritage and serve devotees" },
    { year: "2000", event: "Digital Temple", description: "Online services launched for global devotees" },
  ];

  const stats = [
    { icon: Users, label: "Daily Devotees", value: "5,000+" },
    { icon: Heart, label: "Years of Heritage", value: "1,200+" },
    { icon: Building2, label: "Temple Complex", value: "15 Acres" },
    { icon: Award, label: "UNESCO Recognition", value: "2015" },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${TEMPLE_IMAGE})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">About Our Temple</h1>
            <p className="text-xl text-[#fbbf24]">A Legacy of Devotion Spanning Centuries</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-[#d97706]/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-10 h-10 text-[#d97706] mx-auto mb-3" />
                    <p className="text-2xl md:text-3xl text-[#78350f] mb-1">{stat.value}</p>
                    <p className="text-sm text-[#78716c]">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Temple History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl text-[#78350f] mb-6">Temple History</h2>
              <div className="space-y-4 text-[#78716c] leading-relaxed">
                <p>
                  Sri Mahadev Temple stands as a testament to centuries of unwavering faith and devotion. 
                  Founded in 850 CE by the revered sage Adi Shankaracharya, this sacred shrine has been 
                  a beacon of spiritual light for over twelve centuries.
                </p>
                <p>
                  The temple's magnificent architecture reflects the Dravidian style with intricate carvings 
                  depicting scenes from ancient scriptures. The golden gopuram, added in the 17th century, 
                  rises majestically against the sky, visible from miles around.
                </p>
                <p>
                  Through the ages, the temple has been patronized by various dynasties, each contributing 
                  to its grandeur. Today, it remains not just a place of worship, but a living heritage 
                  that connects millions to their spiritual roots.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={KERALA_TEMPLE}
                alt="Temple Architecture"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h3 className="font-heading text-2xl md:text-3xl text-[#78350f] mb-8 text-center">Historical Timeline</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="border-[#d97706]/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d97706] to-[#f59e0b] flex items-center justify-center shadow-lg">
                            <span className="text-white text-sm font-heading">{item.year}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-heading text-xl text-[#78350f] mb-2">{item.event}</h4>
                          <p className="text-[#78716c]">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story of Deity */}
      <section className="py-16 bg-gradient-to-br from-[#78350f] to-[#92400e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-6">Story of Lord Mahadev</h2>
            <div className="space-y-4 text-white/90 leading-relaxed text-left">
              <p>
                Lord Shiva, known as Mahadev (the Great God), is one of the principal deities of Hinduism. 
                He is the Supreme Being in Shaivism tradition, the destroyer and transformer within the Trimurti.
              </p>
              <p>
                According to legend, this temple houses a self-manifested (Swayambhu) Shivalinga discovered 
                by a devout cowherd whose cattle would daily pour milk over a particular spot in the forest. 
                Upon investigation, the sacred Linga was found, radiating divine energy.
              </p>
              <p>
                Adi Shankaracharya, recognizing the spiritual significance of this sacred site, established 
                the temple here. It is believed that Lord Shiva himself blessed this place, promising to 
                grant the wishes of all devotees who worship here with a pure heart.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Spiritual Significance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#78350f] mb-8 text-center">
            Spiritual Significance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-[#d97706]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#fef3e2] flex items-center justify-center mb-4">
                  <span className="text-2xl">🕉️</span>
                </div>
                <h3 className="font-heading text-xl text-[#78350f] mb-3">Moksha</h3>
                <p className="text-[#78716c]">
                  Devotees believe that sincere worship at this temple leads to liberation from the cycle 
                  of birth and death, achieving ultimate spiritual freedom.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#d97706]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#fef3e2] flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-heading text-xl text-[#78350f] mb-3">Divine Energy</h3>
                <p className="text-[#78716c]">
                  The temple radiates powerful spiritual vibrations that cleanse the mind, body, and soul, 
                  bringing peace and positive transformation to all visitors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#d97706]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#fef3e2] flex items-center justify-center mb-4">
                  <span className="text-2xl">🙏</span>
                </div>
                <h3 className="font-heading text-xl text-[#78350f] mb-3">Sacred Blessings</h3>
                <p className="text-[#78716c]">
                  Prayers offered here are believed to be especially potent, with countless devotees 
                  experiencing miraculous fulfillment of their spiritual and material wishes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder/Trust Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#78350f] mb-8 text-center">
            Temple Trust
          </h2>
          <Card className="border-[#d97706]/20">
            <CardContent className="p-8">
              <p className="text-[#78716c] leading-relaxed mb-4">
                The Sri Mahadev Temple Trust was established in 1950 to preserve and promote the rich 
                spiritual heritage of this sacred shrine. The trust is dedicated to maintaining the temple 
                complex, conducting daily rituals, organizing festivals, and serving devotees from around 
                the world.
              </p>
              <p className="text-[#78716c] leading-relaxed mb-4">
                Under the guidance of esteemed spiritual leaders and efficient management, the trust has 
                implemented various welfare programs including Annadanam (free food distribution), 
                educational scholarships, and healthcare services for the underprivileged.
              </p>
              <div className="bg-[#fef3e2] rounded-lg p-6 mt-6">
                <h4 className="font-heading text-lg text-[#78350f] mb-3">Current Management</h4>
                <div className="space-y-2 text-sm text-[#78716c]">
                  <p><strong>Chairman:</strong> Sri Rajendra Sharma</p>
                  <p><strong>Chief Priest:</strong> Pandit Vishwanath Iyer</p>
                  <p><strong>Secretary:</strong> Dr. Lakshmi Narayan</p>
                  <p><strong>Treasurer:</strong> Mr. Krishnan Nair</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
