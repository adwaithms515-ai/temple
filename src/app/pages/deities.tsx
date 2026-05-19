import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Sparkles, Calendar, Book } from "lucide-react";

const DEITY_IMAGE = "https://images.unsplash.com/photo-1616377009507-c8111f07aced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZW1wbGUlMjBkZWl0eSUyMHN0YXR1ZXxlbnwxfHx8fDE3NzkxNjQyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function DeitiesPage() {
  const [selectedDeity, setSelectedDeity] = useState(0);

  const deities = [
    {
      name: "Lord Shiva (Mahadev)",
      title: "The Supreme Deity",
      image: DEITY_IMAGE,
      significance: "Lord Shiva is the destroyer of evil and the transformer within the Hindu Trinity. As Mahadev, he embodies the supreme cosmic power and grants liberation to devoted souls.",
      offerings: ["Bilva leaves", "Milk abhishekam", "Rudraksha", "White flowers", "Sacred ash (Vibhuti)"],
      festivals: ["Maha Shivaratri", "Shravan Monday", "Pradosh Vrat"],
      mantra: "ॐ नमः शिवाय (Om Namah Shivaya)",
      description: "The principal deity of our temple, installed by Adi Shankaracharya himself."
    },
    {
      name: "Goddess Parvati",
      title: "Divine Mother",
      image: DEITY_IMAGE,
      significance: "Goddess Parvati is the consort of Lord Shiva, representing Shakti (divine feminine power). She is the embodiment of love, fertility, and devotion.",
      offerings: ["Red flowers", "Kumkum", "Turmeric", "Bangles", "Sweet offerings"],
      festivals: ["Navratri", "Gauri Puja", "Teej"],
      mantra: "ॐ पार्वत्यै नमः (Om Parvatyai Namah)",
      description: "The Divine Mother who blesses devotees with prosperity and harmony."
    },
    {
      name: "Lord Ganesha",
      title: "Remover of Obstacles",
      image: DEITY_IMAGE,
      significance: "Lord Ganesha is the elephant-headed god of wisdom and prosperity. He removes obstacles and ensures success in all endeavors.",
      offerings: ["Modak (sweet dumplings)", "Durva grass", "Red flowers", "Coconut", "Laddu"],
      festivals: ["Ganesh Chaturthi", "Sankashti Chaturthi"],
      mantra: "ॐ गं गणपतये नमः (Om Gam Ganapataye Namah)",
      description: "The beloved deity worshipped first in all Hindu rituals."
    },
    {
      name: "Lord Hanuman",
      title: "The Mighty Devotee",
      image: DEITY_IMAGE,
      significance: "Lord Hanuman exemplifies strength, devotion, and selfless service. He grants courage and protection to his devotees.",
      offerings: ["Sindoor (vermilion)", "Jasmine oil", "Red flowers", "Betel leaves", "Sweet prasad"],
      festivals: ["Hanuman Jayanti", "Tuesday fasting"],
      mantra: "ॐ हं हनुमते नमः (Om Ham Hanumate Namah)",
      description: "The eternal devotee who embodies unwavering faith and infinite strength."
    },
    {
      name: "Nandi",
      title: "Divine Vehicle",
      image: DEITY_IMAGE,
      significance: "Nandi is the sacred bull and devoted vehicle of Lord Shiva. He symbolizes strength, faith, and righteousness.",
      offerings: ["Green grass", "Jaggery", "Coconut", "Flowers"],
      festivals: ["Nandi Jayanti"],
      mantra: "ॐ नन्दीश्वराय नमः (Om Nandishwaraya Namah)",
      description: "The guardian at the temple entrance, blessing all who enter with devotion."
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden bg-gradient-to-br from-[#78350f] to-[#92400e]">
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Sparkles className="w-16 h-16 text-[#fbbf24] mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Temple Deities</h1>
            <p className="text-xl text-[#fbbf24]">Divine Presence & Sacred Blessings</p>
          </motion.div>
        </div>
      </section>

      {/* Main Deities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Deity Selection Cards */}
            <div className="lg:col-span-1 space-y-4">
              {deities.map((deity, index) => (
                <motion.div
                  key={deity.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`cursor-pointer transition-all ${
                      selectedDeity === index
                        ? "border-[#d97706] shadow-lg bg-gradient-to-br from-[#fef3e2] to-white"
                        : "border-[#d97706]/20 hover:shadow-md"
                    }`}
                    onClick={() => setSelectedDeity(index)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d97706] to-[#f59e0b] flex items-center justify-center flex-shrink-0 shadow-md">
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-heading text-[#78350f]">{deity.name}</h3>
                          <p className="text-sm text-[#d97706]">{deity.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Deity Details */}
            <div className="lg:col-span-2">
              <motion.div
                key={selectedDeity}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-[#d97706]/20 overflow-hidden shadow-xl">
                  {/* Deity Image with Glow Effect */}
                  <div className="relative h-[400px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#78350f] via-transparent to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-[#d97706]/10 animate-pulse"></div>
                    <img
                      src={deities[selectedDeity].image}
                      alt={deities[selectedDeity].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                      <Badge className="bg-[#fbbf24] text-[#78350f] mb-3">
                        {deities[selectedDeity].title}
                      </Badge>
                      <h2 className="font-heading text-3xl mb-2">{deities[selectedDeity].name}</h2>
                      <p className="text-white/90 text-sm">{deities[selectedDeity].description}</p>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    {/* Significance */}
                    <div className="mb-6">
                      <h3 className="font-heading text-xl text-[#78350f] mb-3 flex items-center">
                        <Sparkles className="w-5 h-5 mr-2 text-[#d97706]" />
                        Spiritual Significance
                      </h3>
                      <p className="text-[#78716c] leading-relaxed">
                        {deities[selectedDeity].significance}
                      </p>
                    </div>

                    {/* Expandable Sections */}
                    <Accordion type="single" collapsible className="space-y-2">
                      <AccordionItem value="offerings" className="border-[#d97706]/20">
                        <AccordionTrigger className="text-[#78350f] font-heading hover:text-[#d97706]">
                          Special Offerings
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="grid grid-cols-2 gap-2 mt-2">
                            {deities[selectedDeity].offerings.map((offering) => (
                              <li key={offering} className="flex items-center space-x-2 text-[#78716c]">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#d97706]"></div>
                                <span>{offering}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="festivals" className="border-[#d97706]/20">
                        <AccordionTrigger className="text-[#78350f] font-heading hover:text-[#d97706]">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-[#d97706]" />
                            Festival Dates
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 mt-2">
                            {deities[selectedDeity].festivals.map((festival) => (
                              <div key={festival} className="p-3 bg-[#fef3e2] rounded-lg">
                                <p className="text-[#78350f]">{festival}</p>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="mantra" className="border-[#d97706]/20">
                        <AccordionTrigger className="text-[#78350f] font-heading hover:text-[#d97706]">
                          <div className="flex items-center">
                            <Book className="w-4 h-4 mr-2 text-[#d97706]" />
                            Sacred Mantra
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="mt-2 p-6 bg-gradient-to-br from-[#fef3e2] to-[#fbbf24]/10 rounded-lg text-center border border-[#d97706]/20">
                            <p className="font-display text-2xl text-[#d97706] mb-2">
                              {deities[selectedDeity].mantra}
                            </p>
                            <p className="text-sm text-[#78716c]">
                              Chant this mantra 108 times for divine blessings
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#fef3e2] to-[#fbbf24]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 text-[#d97706] mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl text-[#78350f] mb-4">
            Receive Divine Blessings
          </h2>
          <p className="text-[#78716c] text-lg mb-8">
            Book a special pooja or abhishekam for your chosen deity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pooja-booking"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#d97706] text-white hover:bg-[#f59e0b] transition-colors"
            >
              Book Pooja Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-[#d97706] text-[#d97706] hover:bg-[#fef3e2] transition-colors"
            >
              Contact Priest
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
