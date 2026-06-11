import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Calendar } from "../components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Badge } from "../components/ui/badge";
import { Sparkles, Calendar as CalendarIcon, Users, Clock, CreditCard, CheckCircle2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { format } from "date-fns";

export function PoojaBookingPage() {
  const [step, setStep] = useState(1);
  const [selectedPooja, setSelectedPooja] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [bookingComplete, setBookingComplete] = useState(false);

  const poojaCategories = [
    {
      id: "daily",
      name: "Daily Pooja",
      items: [
        { id: "abhishek", name: "Rudrabhishek", price: "₹501", duration: "30 mins", description: "Sacred bathing ritual with milk, honey, and holy water" },
        { id: "archana", name: "Sahasranamam Archana", price: "₹251", duration: "20 mins", description: "Chanting of 1008 names with flower offerings" },
        { id: "aarti", name: "Special Aarti", price: "₹151", duration: "15 mins", description: "Divine lamp offering ceremony" },
      ]
    },
    {
      id: "special",
      name: "Special Pooja",
      items: [
        { id: "laghu", name: "Laghu Rudra", price: "₹11,000", duration: "3 hours", description: "Elaborate Vedic ritual by 11 priests" },
        { id: "maha", name: "Maha Rudrabhishek", price: "₹5,100", duration: "2 hours", description: "Grand abhishekam with special offerings" },
        { id: "mrityunjaya", name: "Mrityunjaya Homam", price: "₹7,500", duration: "2.5 hours", description: "Fire ritual for health and longevity" },
      ]
    },
    {
      id: "festival",
      name: "Festival Pooja",
      items: [
        { id: "shivaratri", name: "Maha Shivaratri Puja", price: "₹2,100", duration: "All day", description: "Complete festival rituals and abhishekam" },
        { id: "pradosh", name: "Pradosh Vrat Puja", price: "₹1,100", duration: "Evening", description: "Auspicious twilight worship" },
      ]
    },
    {
      id: "annadanam",
      name: "Annadanam",
      items: [
        { id: "anna-basic", name: "Feed 50 Devotees", price: "₹2,500", duration: "1 day", description: "Provide sacred food to 50 devotees" },
        { id: "anna-premium", name: "Feed 100 Devotees", price: "₹5,000", duration: "1 day", description: "Provide sacred food to 100 devotees" },
        { id: "anna-grand", name: "Feed 250 Devotees", price: "₹12,000", duration: "1 day", description: "Provide sacred food to 250 devotees" },
      ]
    },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingComplete(true);
  };

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-[#FAF6EE] flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full"
        >
          <Card className="border-[#C9A227]/20 shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="font-heading text-3xl text-[#1A3A6C] mb-4">Booking Confirmed!</h2>
              <p className="text-[#666666] mb-6">
                Your pooja has been successfully booked. You will receive a confirmation email with booking details and QR code.
              </p>
              <div className="bg-[#FAF6EE] rounded-lg p-6 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-left">
                    <p className="text-[#666666] mb-1">Booking ID</p>
                    <p className="text-[#1A3A6C] font-medium">BK-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                  </div>
                  <div className="text-left">
                    <p className="text-[#666666] mb-1">Date</p>
                    <p className="text-[#1A3A6C] font-medium">{selectedDate ? format(selectedDate, "PPP") : "Not selected"}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setBookingComplete(false)} className="bg-[#C9A227] hover:bg-[#D4B870]">
                  Book Another Pooja
                </Button>
                <Button variant="outline" className="border-[#C9A227] text-[#C9A227]">
                  Download Receipt
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF6EE]">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden bg-gradient-to-br from-[#1A3A6C] to-[#1A3A6C]">
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Sparkles className="w-16 h-16 text-[#D4B870] mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Pooja Booking</h1>
            <p className="text-xl text-[#D4B870]">Book Your Sacred Rituals Online</p>
          </motion.div>
        </div>
      </section>

      {/* Booking Progress */}
      <section className="py-8 bg-white border-b border-[#C9A227]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: "Select Pooja" },
              { num: 2, label: "Choose Date" },
              { num: 3, label: "Details" },
              { num: 4, label: "Payment" }
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    step >= s.num ? "bg-[#C9A227] text-white" : "bg-gray-200 text-gray-500"
                  }`}>
                    {s.num}
                  </div>
                  <p className={`text-xs mt-2 hidden sm:block ${step >= s.num ? "text-[#C9A227]" : "text-gray-500"}`}>
                    {s.label}
                  </p>
                </div>
                {idx < 3 && (
                  <div className={`w-12 sm:w-24 h-1 mx-2 ${step > s.num ? "bg-[#C9A227]" : "bg-gray-200"}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleBooking}>
            {/* Step 1: Select Pooja */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="font-heading text-2xl text-[#1A3A6C] mb-6">Select Pooja Type</h2>
                <div className="space-y-8">
                  {poojaCategories.map((category) => (
                    <div key={category.id}>
                      <h3 className="font-heading text-xl text-[#C9A227] mb-4">{category.name}</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.items.map((item) => (
                          <Card
                            key={item.id}
                            className={`cursor-pointer transition-all ${
                              selectedPooja === item.id
                                ? "border-[#C9A227] shadow-lg bg-gradient-to-br from-[#FAF6EE] to-white"
                                : "border-[#C9A227]/20 hover:shadow-md"
                            }`}
                            onClick={() => setSelectedPooja(item.id)}
                          >
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-3">
                                <h4 className="font-heading text-lg text-[#1A3A6C]">{item.name}</h4>
                                <Badge className="bg-[#C9A227]">{item.price}</Badge>
                              </div>
                              <p className="text-sm text-[#666666] mb-3">{item.description}</p>
                              <div className="flex items-center text-xs text-[#C9A227]">
                                <Clock className="w-3 h-3 mr-1" />
                                {item.duration}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!selectedPooja}
                    className="bg-[#C9A227] hover:bg-[#D4B870]"
                  >
                    Continue to Date Selection
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Choose Date */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="font-heading text-2xl text-[#1A3A6C] mb-6">Choose Date & Time</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-[#C9A227]/20">
                    <CardHeader>
                      <CardTitle className="font-heading text-[#1A3A6C]">Select Date</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border border-[#C9A227]/20"
                        disabled={(date) => date < new Date()}
                      />
                    </CardContent>
                  </Card>

                  <Card className="border-[#C9A227]/20">
                    <CardHeader>
                      <CardTitle className="font-heading text-[#1A3A6C]">Available Time Slots</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <RadioGroup defaultValue="morning">
                        <div className="space-y-3">
                          {[
                            { value: "early", label: "Early Morning", time: "5:00 AM - 7:00 AM", available: true },
                            { value: "morning", label: "Morning", time: "8:00 AM - 11:00 AM", available: true },
                            { value: "afternoon", label: "Afternoon", time: "2:00 PM - 4:00 PM", available: true },
                            { value: "evening", label: "Evening", time: "5:00 PM - 7:00 PM", available: false },
                          ].map((slot) => (
                            <div
                              key={slot.value}
                              className={`flex items-center space-x-3 p-4 rounded-lg border ${
                                slot.available
                                  ? "border-[#C9A227]/20 hover:bg-[#FAF6EE]/50"
                                  : "border-gray-200 bg-gray-50"
                              }`}
                            >
                              <RadioGroupItem value={slot.value} disabled={!slot.available} />
                              <div className="flex-1">
                                <p className="font-medium text-[#1A3A6C]">{slot.label}</p>
                                <p className="text-sm text-[#666666]">{slot.time}</p>
                              </div>
                              {!slot.available && (
                                <Badge variant="outline" className="text-xs">Booked</Badge>
                              )}
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-8 flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!selectedDate}
                    className="bg-[#C9A227] hover:bg-[#D4B870]"
                  >
                    Continue to Details
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Devotee Details */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="font-heading text-2xl text-[#1A3A6C] mb-6">Devotee Details</h2>
                <Card className="border-[#C9A227]/20">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="Enter full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gotra">Gotra</Label>
                        <Input id="gotra" placeholder="Enter gotra" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nakshatra">Nakshatra (Star)</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select nakshatra" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ashwini">Ashwini</SelectItem>
                            <SelectItem value="bharani">Bharani</SelectItem>
                            <SelectItem value="krittika">Krittika</SelectItem>
                            <SelectItem value="rohini">Rohini</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rashi">Rashi (Zodiac)</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select rashi" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mesha">Mesha (Aries)</SelectItem>
                            <SelectItem value="vrishabha">Vrishabha (Taurus)</SelectItem>
                            <SelectItem value="mithuna">Mithuna (Gemini)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="+91 9876543210" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="special">Special Requests (Optional)</Label>
                        <Input id="special" placeholder="Any special requirements or sankalpam" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="mt-8 flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setStep(4)}
                    className="bg-[#C9A227] hover:bg-[#D4B870]"
                  >
                    Continue to Payment
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Payment */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="font-heading text-2xl text-[#1A3A6C] mb-6">Payment</h2>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <Card className="border-[#C9A227]/20">
                      <CardHeader>
                        <CardTitle className="font-heading text-[#1A3A6C]">Payment Method</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <RadioGroup defaultValue="upi">
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#C9A227]/20 hover:bg-[#FAF6EE]/50">
                              <RadioGroupItem value="upi" />
                              <div className="flex-1">
                                <p className="font-medium text-[#1A3A6C]">UPI Payment</p>
                                <p className="text-sm text-[#666666]">Google Pay, PhonePe, Paytm</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#C9A227]/20 hover:bg-[#FAF6EE]/50">
                              <RadioGroupItem value="card" />
                              <div className="flex-1">
                                <p className="font-medium text-[#1A3A6C]">Credit/Debit Card</p>
                                <p className="text-sm text-[#666666]">Visa, Mastercard, Rupay</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#C9A227]/20 hover:bg-[#FAF6EE]/50">
                              <RadioGroupItem value="netbanking" />
                              <div className="flex-1">
                                <p className="font-medium text-[#1A3A6C]">Net Banking</p>
                                <p className="text-sm text-[#666666]">All major banks supported</p>
                              </div>
                            </div>
                          </div>
                        </RadioGroup>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card className="border-[#C9A227]/20 sticky top-24">
                      <CardHeader>
                        <CardTitle className="font-heading text-[#1A3A6C]">Booking Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-[#666666]">Pooja Type</p>
                            <p className="text-[#1A3A6C]">Rudrabhishek</p>
                          </div>
                          <div>
                            <p className="text-sm text-[#666666]">Date</p>
                            <p className="text-[#1A3A6C]">{selectedDate ? format(selectedDate, "PPP") : "Not selected"}</p>
                          </div>
                          <div>
                            <p className="text-sm text-[#666666]">Time</p>
                            <p className="text-[#1A3A6C]">8:00 AM - 11:00 AM</p>
                          </div>
                          <div className="border-t border-[#C9A227]/20 pt-4">
                            <div className="flex justify-between mb-2">
                              <span className="text-[#666666]">Pooja Amount</span>
                              <span className="text-[#1A3A6C]">₹501</span>
                            </div>
                            <div className="flex justify-between mb-2">
                              <span className="text-[#666666]">Prasadam</span>
                              <span className="text-[#1A3A6C]">₹100</span>
                            </div>
                            <div className="flex justify-between pt-2 border-t border-[#C9A227]/20">
                              <span className="text-lg text-[#1A3A6C]">Total</span>
                              <span className="text-lg text-[#C9A227]">₹601</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setStep(3)}>
                    Back
                  </Button>
                  <Button type="submit" className="bg-[#C9A227] hover:bg-[#D4B870]">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Complete Payment
                  </Button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

