import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, Clock, MapPin, Video } from "lucide-react";

const FESTIVAL_IMAGE = "https://images.unsplash.com/photo-1617184003170-1f266c325ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBmZXN0aXZhbCUyMGNlbGVicmF0aW9uJTIwaW5kaWF8ZW58MXx8fHwxNzc5MTY0MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function FestivalsPage() {
  const upcomingFestivals = [
    {
      name: "Maha Shivaratri",
      date: "March 8, 2026",
      daysLeft: 12,
      description: "The great night of Lord Shiva with all-night prayers and abhishekam",
      schedule: ["5:00 AM - Morning Abhishekam", "12:00 PM - Midday Pooja", "6:30 PM - Evening Aarti", "12:00 AM - Maha Aarti"],
      image: FESTIVAL_IMAGE,
    },
    {
      name: "Ugadi",
      date: "March 30, 2026",
      daysLeft: 34,
      description: "New Year celebration with special prayers and prasadam distribution",
      schedule: ["6:00 AM - New Year Pooja", "11:00 AM - Annadanam", "6:00 PM - Cultural Program"],
      image: FESTIVAL_IMAGE,
    },
    {
      name: "Ram Navami",
      date: "April 6, 2026",
      daysLeft: 41,
      description: "Celebration of Lord Rama's birth with continuous chanting",
      schedule: ["5:00 AM - Morning Prayers", "12:00 PM - Rama Kalyanam", "7:00 PM - Evening Aarti"],
      image: FESTIVAL_IMAGE,
    },
  ];

  const pastFestivals = [
    { name: "Pongal", date: "January 14, 2026", attendees: "10,000+" },
    { name: "Makar Sankranti", date: "January 14, 2026", attendees: "8,500+" },
    { name: "Thai Pusam", date: "February 1, 2026", attendees: "12,000+" },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${FESTIVAL_IMAGE})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Festivals & Events</h1>
            <p className="text-xl text-[#D4B870]">Celebrate Divine Occasions with Us</p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Festivals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-[#6E1F1F] mb-8">Upcoming Festivals</h2>
          <div className="space-y-8">
            {upcomingFestivals.map((festival, index) => (
              <motion.div
                key={festival.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-[#C9A227]/20 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative h-64 md:h-auto">
                      <img src={festival.image} alt={festival.name} className="w-full h-full object-cover" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-[#C9A227]">{festival.daysLeft} days left</Badge>
                      </div>
                    </div>
                    <div className="md:col-span-2 p-6">
                      <h3 className="font-heading text-2xl text-[#6E1F1F] mb-2">{festival.name}</h3>
                      <div className="flex items-center space-x-4 text-[#666666] mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-[#C9A227]" />
                          {festival.date}
                        </div>
                      </div>
                      <p className="text-[#666666] mb-4">{festival.description}</p>
                      <div className="space-y-2 mb-4">
                        <h4 className="font-heading text-[#6E1F1F]">Schedule</h4>
                        {festival.schedule.map((item, i) => (
                          <div key={i} className="flex items-center text-sm text-[#666666]">
                            <Clock className="w-3 h-3 mr-2 text-[#C9A227]" />
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a
                          href="/live-streaming"
                          className="inline-flex items-center px-4 py-2 rounded-lg bg-[#C9A227] text-white hover:bg-[#D4B870] transition-colors"
                        >
                          <Video className="w-4 h-4 mr-2" />
                          Watch Live
                        </a>
                        <a
                          href="/contact"
                          className="inline-flex items-center px-4 py-2 rounded-lg border border-[#C9A227] text-[#C9A227] hover:bg-[#FAF6EE] transition-colors"
                        >
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Festivals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-[#6E1F1F] mb-8">Past Celebrations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastFestivals.map((festival) => (
              <Card key={festival.name} className="border-[#C9A227]/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl text-[#6E1F1F] mb-2">{festival.name}</h3>
                  <p className="text-sm text-[#666666] mb-3">{festival.date}</p>
                  <div className="flex items-center text-[#C9A227]">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{festival.attendees} devotees attended</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

