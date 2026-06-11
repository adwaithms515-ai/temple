import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Video, Calendar, Users, Music } from "lucide-react";

export function LiveStreamingPage() {
  return (
    <div className="min-h-screen bg-[#FAF6EE]">
      <section className="relative h-[300px] overflow-hidden bg-gradient-to-br from-[#1A3A6C] to-[#1A3A6C]">
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Video className="w-16 h-16 text-[#D4B870] mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Live Streaming</h1>
            <p className="text-xl text-[#D4B870]">Watch Live from Anywhere</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-[#C9A227]/20 mb-8">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-[#1A3A6C] to-[#1A3A6C] flex items-center justify-center">
                <div className="text-center text-white">
                  <Video className="w-20 h-20 mx-auto mb-4 text-[#D4B870]" />
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
            <Card className="border-[#C9A227]/20">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-[#C9A227] mb-4" />
                <h3 className="font-heading text-xl text-[#1A3A6C] mb-4">Live Schedule</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between text-sm">
                    <span className="text-[#666666]">Morning Aarti</span>
                    <span className="text-[#C9A227]">6:00 AM</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-[#666666]">Abhishekam</span>
                    <span className="text-[#C9A227]">7:00 AM</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-[#666666]">Evening Aarti</span>
                    <span className="text-[#C9A227]">6:30 PM</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#C9A227]/20">
              <CardContent className="p-6">
                <Music className="w-8 h-8 text-[#C9A227] mb-4" />
                <h3 className="font-heading text-xl text-[#1A3A6C] mb-4">Devotional Music</h3>
                <p className="text-sm text-[#666666] mb-4">Listen to continuous devotional bhajans and mantras</p>
                <div className="bg-[#FAF6EE] rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#C9A227] flex items-center justify-center">
                      <Music className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#1A3A6C]">Om Namah Shivaya</p>
                      <p className="text-xs text-[#666666]">Now Playing</p>
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

