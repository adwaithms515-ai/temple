import { useState } from "react";
import { initializePayment } from "../../lib/razorpay";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Heart, Building2, GraduationCap, Utensils, Home, Sparkles } from "lucide-react";

export function DonationsPage() {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("general");
  
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const categories = [
    { id: "general", name: "General Temple Fund", icon: Building2, description: "Support daily temple maintenance and operations" },
    { id: "annadanam", name: "Annadanam", icon: Utensils, description: "Feed devotees - ₹50 per person" },
    { id: "renovation", name: "Temple Renovation", icon: Home, description: "Preserve our sacred heritage" },
    { id: "education", name: "Educational Charity", icon: GraduationCap, description: "Support underprivileged students" },
    { id: "festival", name: "Festival Fund", icon: Sparkles, description: "Sponsor temple festivals and celebrations" },
  ];

  const suggestedAmounts = [500, 1000, 2500, 5000, 10000];
  const recentDonors = [
    { name: "Rajesh Kumar", amount: "₹10,000", category: "Annadanam" },
    { name: "Priya Sharma", amount: "₹5,000", category: "General Fund" },
    { name: "Anonymous", amount: "₹25,000", category: "Renovation" },
  ];

  const handleDonate = async () => {
    if (!customAmount || isNaN(Number(customAmount)) || Number(customAmount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    setIsProcessing(true);

    const categoryName = categories.find((c) => c.id === selectedCategory)?.name || "Donation";

    await initializePayment({
      amount: Number(customAmount),
      name: "Donation",
      description: `${categoryName} - Temple Donation`,
      customerName: donorName,
      customerEmail: donorEmail,
      customerPhone: donorPhone,
      onSuccess: (response) => {
        setIsProcessing(false);
        setPaymentComplete(true);
      },
      onError: (error) => {
        setIsProcessing(false);
        console.error("Payment Error:", error);
        alert(error.description || "Payment failed. Please try again.");
      },
    });
  };

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-[#FAF6EE] flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full text-center"
        >
          <Card className="border-[#C9A227]/20 shadow-2xl">
            <CardContent className="p-12">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="font-heading text-3xl text-[#1A3A6C] mb-4">Donation Successful!</h2>
              <p className="text-[#666666] mb-6">
                May the divine blessings of Lord Sree Krishna always be with you. Thank you for your generous contribution of ₹{customAmount}.
              </p>
              <Button 
                onClick={() => {
                  setPaymentComplete(false);
                  setCustomAmount("");
                  setDonorName("");
                  setDonorEmail("");
                  setDonorPhone("");
                }} 
                className="bg-[#C9A227] hover:bg-[#D4B870]"
              >
                Make Another Donation
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF6EE]">
      <section className="relative h-[300px] overflow-hidden bg-gradient-to-br from-[#1A3A6C] to-[#1A3A6C]">
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Heart className="w-16 h-16 text-[#D4B870] mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Make a Donation</h1>
            <p className="text-xl text-[#D4B870]">Support Our Sacred Mission</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-[#C9A227]/20 mb-8">
                <CardHeader>
                  <CardTitle className="font-heading text-[#1A3A6C]">Select Donation Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
                    <div className="space-y-3">
                      {categories.map((cat) => (
                        <div
                          key={cat.id}
                          className="flex items-center space-x-3 p-4 rounded-lg border border-[#C9A227]/20 hover:bg-[#FAF6EE]/50 cursor-pointer"
                        >
                          <RadioGroupItem value={cat.id} />
                          <cat.icon className="w-6 h-6 text-[#C9A227]" />
                          <div className="flex-1">
                            <p className="font-heading text-[#1A3A6C]">{cat.name}</p>
                            <p className="text-sm text-[#666666]">{cat.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Card className="border-[#C9A227]/20">
                <CardHeader>
                  <CardTitle className="font-heading text-[#1A3A6C]">Donation Amount</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                    {suggestedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant="outline"
                        className="border-[#C9A227] text-[#C9A227] hover:bg-[#FAF6EE]"
                        onClick={() => setCustomAmount(amount.toString())}
                      >
                        ₹{amount}
                      </Button>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="custom">Custom Amount</Label>
                    <Input
                      id="custom"
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                    />
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="donor-name">Your Name</Label>
                      <Input id="donor-name" placeholder="Enter your name" value={donorName} onChange={(e) => setDonorName(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="donor-email">Email</Label>
                      <Input id="donor-email" type="email" placeholder="your@email.com" value={donorEmail} onChange={(e) => setDonorEmail(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="donor-phone">Phone</Label>
                      <Input id="donor-phone" type="tel" placeholder="+91 9876543210" value={donorPhone} onChange={(e) => setDonorPhone(e.target.value)} />
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-[#C9A227] hover:bg-[#D4B870]" 
                    size="lg"
                    onClick={handleDonate}
                    disabled={isProcessing}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    {isProcessing ? "Processing..." : "Donate Now"}
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-[#C9A227]/20 bg-gradient-to-br from-[#FAF6EE] to-white">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl text-[#1A3A6C] mb-4">Impact of Your Donation</h3>
                  <ul className="space-y-3 text-sm text-[#666666]">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mr-2 mt-2"></div>
                      <span>₹500 feeds 10 devotees</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mr-2 mt-2"></div>
                      <span>₹2,500 sponsors one day of temple rituals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mr-2 mt-2"></div>
                      <span>₹10,000 supports one student for a year</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#C9A227]/20">
                <CardHeader>
                  <CardTitle className="font-heading text-[#1A3A6C]">Recent Donors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentDonors.map((donor, index) => (
                      <div key={index} className="p-3 bg-[#FAF6EE] rounded-lg">
                        <p className="text-[#1A3A6C]">{donor.name}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-[#666666]">{donor.category}</span>
                          <span className="text-[#C9A227]">{donor.amount}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#C9A227]/20 bg-gradient-to-br from-[#1A3A6C] to-[#1A3A6C] text-white">
                <CardContent className="p-6 text-center">
                  <Sparkles className="w-12 h-12 mx-auto mb-3 text-[#D4B870]" />
                  <p className="text-sm">
                    All donations are tax-deductible under Section 80G
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

