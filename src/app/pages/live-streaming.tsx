import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Video, Calendar, Users, Music } from "lucide-react";

export function LiveStreamingPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <section className="relative h-[300px] overflow-hidden bg-gradient-to-br from-[#78350f] to-[#92400e]">
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Video className="w-16 h-16 text-[#fbbf24] mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Live Streaming</h1>
            <p className="text-xl text-[#fbbf24]">Watch Live from Anywhere</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-[#d97706]/20 mb-8">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-[#78350f] to-[#92400e] flex items-center justify-center">
                <div className="text-center text-white">
                  <Video className="w-20 h-20 mx-auto mb-4 text-[#fbbf24]" />
                  <h3 className="font-heading text-2xl mb-2">Live Stream Will Start Soon</h3>
                  <Badge className="bg-red-600 animate-pulse">
                    <span className="w-2 h-2 bg-white rounded-full inline-block mr-2"></span>
                    Next: Evening Aarti at 6:30 PM
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-[#d97706]/20">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-[#d97706] mb-4" />
                <h3 className="font-heading text-xl text-[#78350f] mb-4">Live Schedule</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between text-sm">
                    <span className="text-[#78716c]">Morning Aarti</span>
                    <span className="text-[#d97706]">6:00 AM</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-[#78716c]">Abhishekam</span>
                    <span className="text-[#d97706]">7:00 AM</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-[#78716c]">Evening Aarti</span>
                    <span className="text-[#d97706]">6:30 PM</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#d97706]/20">
              <CardContent className="p-6">
                <Music className="w-8 h-8 text-[#d97706] mb-4" />
                <h3 className="font-heading text-xl text-[#78350f] mb-4">Devotional Music</h3>
                <p className="text-sm text-[#78716c] mb-4">Listen to continuous devotional bhajans and mantras</p>
                <div className="bg-[#fef3e2] rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#d97706] flex items-center justify-center">
                      <Music className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#78350f]">Om Namah Shivaya</p>
                      <p className="text-xs text-[#78716c]">Now Playing</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
