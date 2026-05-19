import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Bell, Sunrise, Sunset, Moon } from "lucide-react";

export function RitualsPage() {
  const rituals = [
    { time: "5:00 AM", name: "Temple Opening & Suprabhatam", icon: Sunrise, description: "Wake-up hymns for the deity" },
    { time: "6:00 AM", name: "Abhishekam", icon: Bell, description: "Sacred bathing ritual" },
    { time: "7:00 AM", name: "Alankaram", icon: Sunrise, description: "Decoration of deity" },
    { time: "8:00 AM - 12:00 PM", name: "Morning Darshan", icon: Bell, description: "General darshan hours" },
    { time: "12:30 PM", name: "Maha Naivedyam", icon: Sunset, description: "Noon food offering" },
    { time: "4:00 PM", name: "Temple Reopening", icon: Sunset, description: "Evening session begins" },
    { time: "6:30 PM", name: "Evening Aarti", icon: Moon, description: "Divine lamp ceremony" },
    { time: "8:30 PM", name: "Temple Closing", icon: Moon, description: "Final prayers" },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <section className="relative h-[300px] overflow-hidden bg-gradient-to-br from-[#78350f] to-[#92400e]">
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Bell className="w-16 h-16 text-[#fbbf24] mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Daily Rituals</h1>
            <p className="text-xl text-[#fbbf24]">Temple Schedule & Timings</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#d97706]/20"></div>
            <div className="space-y-8">
              {rituals.map((ritual, index) => (
                <motion.div
                  key={ritual.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#d97706] to-[#f59e0b] flex items-center justify-center shadow-lg">
                    <ritual.icon className="w-8 h-8 text-white" />
                  </div>
                  <Card className="border-[#d97706]/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-heading text-xl text-[#78350f]">{ritual.name}</h3>
                        <span className="text-[#d97706] px-3 py-1 rounded-full bg-[#fef3e2]">{ritual.time}</span>
                      </div>
                      <p className="text-[#78716c]">{ritual.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
