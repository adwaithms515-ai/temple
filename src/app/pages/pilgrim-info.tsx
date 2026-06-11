import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { MapPin, Hotel, Car, Info, DollarSign, AlertCircle } from "lucide-react";

export function PilgrimInfoPage() {
  return (
    <div className="min-h-screen bg-[#FAF6EE]">
      <section className="relative h-[300px] overflow-hidden bg-gradient-to-br from-[#1A3A6C] to-[#1A3A6C]">
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <MapPin className="w-16 h-16 text-[#D4B870] mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Pilgrim Information</h1>
            <p className="text-xl text-[#D4B870]">Plan Your Visit</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-[#C9A227]/20">
              <CardContent className="p-6">
                <Hotel className="w-10 h-10 text-[#C9A227] mb-4" />
                <h3 className="font-heading text-xl text-[#1A3A6C] mb-3">Accommodation</h3>
                <ul className="space-y-2 text-sm text-[#666666]">
                  <li>• Temple Guest House: ₹500-1000/night</li>
                  <li>• Dharamshala: ₹200/night</li>
                  <li>• Nearby Hotels: ₹1500-5000/night</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#C9A227]/20">
              <CardContent className="p-6">
                <Car className="w-10 h-10 text-[#C9A227] mb-4" />
                <h3 className="font-heading text-xl text-[#1A3A6C] mb-3">Parking</h3>
                <ul className="space-y-2 text-sm text-[#666666]">
                  <li>• Two-wheeler: ₹20</li>
                  <li>• Four-wheeler: ₹50</li>
                  <li>• Bus: ₹100</li>
                  <li>• 24/7 security available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#C9A227]/20">
              <CardContent className="p-6">
                <Info className="w-10 h-10 text-[#C9A227] mb-4" />
                <h3 className="font-heading text-xl text-[#1A3A6C] mb-3">Dress Code</h3>
                <ul className="space-y-2 text-sm text-[#666666]">
                  <li>• Traditional attire preferred</li>
                  <li>• Remove footwear at entrance</li>
                  <li>• Upper body must be covered</li>
                  <li>• Avoid dark colors</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#C9A227]/20">
              <CardContent className="p-6">
                <AlertCircle className="w-10 h-10 text-[#C9A227] mb-4" />
                <h3 className="font-heading text-xl text-[#1A3A6C] mb-3">Temple Rules</h3>
                <ul className="space-y-2 text-sm text-[#666666]">
                  <li>• Maintain silence in sanctum</li>
                  <li>• No photography inside temple</li>
                  <li>• Mobile phones on silent</li>
                  <li>• Follow queue system</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#C9A227]/20">
              <CardContent className="p-6">
                <MapPin className="w-10 h-10 text-[#C9A227] mb-4" />
                <h3 className="font-heading text-xl text-[#1A3A6C] mb-3">How to Reach</h3>
                <ul className="space-y-2 text-sm text-[#666666]">
                  <li>• By Air: 25 km from airport</li>
                  <li>• By Train: 5 km from station</li>
                  <li>• By Bus: Direct connectivity</li>
                  <li>• Local transport available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#C9A227]/20">
              <CardContent className="p-6">
                <DollarSign className="w-10 h-10 text-[#C9A227] mb-4" />
                <h3 className="font-heading text-xl text-[#1A3A6C] mb-3">Facilities</h3>
                <ul className="space-y-2 text-sm text-[#666666]">
                  <li>• Free drinking water</li>
                  <li>• Restrooms available</li>
                  <li>• Wheelchair accessible</li>
                  <li>• First aid center</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-[#C9A227]/20 mt-8">
            <CardContent className="p-6">
              <h3 className="font-heading text-xl text-[#1A3A6C] mb-4">Map & Directions</h3>
              <div className="aspect-video bg-[#FAF6EE] rounded-lg flex items-center justify-center">
                <MapPin className="w-16 h-16 text-[#C9A227]" />
              </div>
              <p className="text-sm text-[#666666] mt-4">
                Temple Road, Sacred City, Kerala, India - 695001
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

