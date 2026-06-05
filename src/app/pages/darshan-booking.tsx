import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Badge } from "../components/ui/badge";
import { Bell, Users, Clock, TrendingUp } from "lucide-react";
import { format } from "date-fns";

export function DarshanBookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedQueue, setSelectedQueue] = useState<"normal" | "vip">("normal");

  const timeSlots = [
    { time: "5:00 AM - 7:00 AM", available: 45, total: 100, crowd: "low" },
    { time: "7:00 AM - 9:00 AM", available: 12, total: 100, crowd: "high" },
    { time: "9:00 AM - 11:00 AM", available: 28, total: 100, crowd: "medium" },
    { time: "11:00 AM - 1:00 PM", available: 67, total: 100, crowd: "low" },
    { time: "5:00 PM - 7:00 PM", available: 5, total: 100, crowd: "high" },
    { time: "7:00 PM - 8:30 PM", available: 34, total: 100, crowd: "medium" },
  ];

  const getCrowdColor = (crowd: string) => {
    switch (crowd) {
      case "low": return "text-green-600 bg-green-50";
      case "medium": return "text-yellow-600 bg-yellow-50";
      case "high": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="relative h-[300px] overflow-hidden bg-gradient-to-br from-[#6E1F1F] to-[#6E1F1F]">
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Bell className="w-16 h-16 text-[#D4B870] mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Darshan Booking</h1>
            <p className="text-xl text-[#D4B870]">Skip the Queue - Book Your Slot Online</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Queue Type Selection */}
            <Card
              className={`cursor-pointer transition-all border-2 ${
                selectedQueue === "normal"
                  ? "border-[#C9A227] shadow-lg"
                  : "border-[#C9A227]/20 hover:shadow-md"
              }`}
              onClick={() => setSelectedQueue("normal")}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl text-[#6E1F1F] mb-2">Normal Queue</h3>
                    <Badge className="bg-green-600">Free</Badge>
                  </div>
                  <Users className="w-12 h-12 text-[#C9A227]" />
                </div>
                <ul className="space-y-2 text-[#666666]">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mr-2"></div>
                    General darshan access
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mr-2"></div>
                    Average wait time: 30-45 mins
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mr-2"></div>
                    Standard viewing time
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`cursor-pointer transition-all border-2 ${
                selectedQueue === "vip"
                  ? "border-[#C9A227] shadow-lg"
                  : "border-[#C9A227]/20 hover:shadow-md"
              }`}
              onClick={() => setSelectedQueue("vip")}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl text-[#6E1F1F] mb-2">VIP Queue</h3>
                    <Badge className="bg-[#C9A227]">₹500</Badge>
                  </div>
                  <TrendingUp className="w-12 h-12 text-[#C9A227]" />
                </div>
                <ul className="space-y-2 text-[#666666]">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mr-2"></div>
                    Priority darshan access
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mr-2"></div>
                    Average wait time: 5-10 mins
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mr-2"></div>
                    Extended viewing time + Prasadam
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Date & Time Selection */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-[#C9A227]/20">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl text-[#6E1F1F] mb-4">Select Date</h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border border-[#C9A227]/20"
                  disabled={(date) => date < new Date()}
                />
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="font-heading text-xl text-[#6E1F1F] mb-4">Available Time Slots</h3>
              {timeSlots.map((slot, index) => (
                <motion.div
                  key={slot.time}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="border-[#C9A227]/20 hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Clock className="w-5 h-5 text-[#C9A227]" />
                          <div>
                            <p className="text-[#6E1F1F]">{slot.time}</p>
                            <p className="text-sm text-[#666666]">
                              {slot.available} slots available
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge className={getCrowdColor(slot.crowd)}>
                            {slot.crowd} crowd
                          </Badge>
                          <Button
                            size="sm"
                            className="bg-[#C9A227] hover:bg-[#D4B870]"
                            disabled={slot.available === 0}
                          >
                            Book
                          </Button>
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
    </div>
  );
}

