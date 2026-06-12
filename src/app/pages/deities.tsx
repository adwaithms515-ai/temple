import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Sparkles, Calendar, Book } from "lucide-react";

const IMG_KRISHNA_BAL = "/deities/krishna-bal.jpg";
const IMG_SHIVA       = "/deities/shiva.jpg";
const IMG_PARASHURAMA = "/deities/parashurama.jpg";
const IMG_MURUGAN     = "/deities/murugan.jpg";
const IMG_GANESHA     = "/deities/ganesha.jpg";
const IMG_NAGARAJA    = "/deities/nagaraja.jpg";

export function DeitiesPage() {
  const [selectedDeity, setSelectedDeity] = useState(0);

  const deities = [
    {
      name: "Unnikrishna (Bal Krishna)",
      title: "Thiruvannur Sree Krishna — The Supreme Deity",
      image: IMG_KRISHNA_BAL,
      significance: "Unnikrishna — the divine baby form of Lord Sree Krishna — is the principal deity of Thiruvannur Sree Krishna Temple. He is worshipped in His enchanting Bal Gopal form: seated on a golden pedestal, adorned with a peacock feather crown, pearl necklaces, and golden bangles, lovingly eating butter (vennacharthu) from a golden pot. This is the very form for which the temple's unique daily Vennacharthu ritual is performed every morning — offering fresh white butter to the Lord at the break of dawn.",
      offerings: ["Vennacharthu (fresh white butter)", "Palpayasam (sweet milk pudding)", "Tulasi garland", "Panchamritha abhishekam", "Unniappam (sweet rice balls)"],
      festivals: ["Ashtami Rohini (Sree Krishna Jayanti)", "Guruvayur Ekadasi", "Janmashtami"],
      mantra: "ഓം നമോ ഭഗവതേ വാസുദേവായ (Om Namo Bhagavate Vasudevaya)",
      description: "The beloved Unnikrishna — eternal child of Vrindavan — enshrined here as the supreme patron deity of the Samuthiri royal family."
    },
    {
      name: "Lord Shiva",
      title: "Maheshwara — The Great God",
      image: IMG_SHIVA,
      significance: "Lord Shiva is enshrined in the northern sub-shrine of Thiruvannur Temple. As Maheshwara, He is the cosmic destroyer who transforms and renews all creation. His majestic form with the trishul (trident) and Vasuki serpent as a garland draws thousands of Shivaratri pilgrims from across Malabar.",
      offerings: ["Bilva (Koovalam) leaves", "Milk & Panchamritha Abhishekam", "Rudraksha garlands", "White lotus flowers", "Vibhuti (sacred ash)"],
      festivals: ["Shivaratri", "Pradosham", "Tiru Karthika"],
      mantra: "ഓം നമഃ ശിവായ (Om Namah Shivaya)",
      description: "The great Maheshwara enshrined in the northern sub-shrine, adored by Malabar devotees for centuries."
    },
    {
      name: "Lord Parashurama",
      title: "The Warrior Avatar — Creator of Kerala",
      image: IMG_PARASHURAMA,
      significance: "Parashurama, the sixth avatar of Lord Vishnu, is revered as the creator of Kerala (Parashurama Kshetram). He is said to have reclaimed the land of Kerala from the sea with his axe. His fierce warrior form — bearing the trishul and the blazing Parashu (axe) — is a potent symbol of divine justice and Kshatriya dharma.",
      offerings: ["Neyyabhishekam (ghee)", "Tulasi garlands", "Warrior flowers (red)", "Coconut with jaggery", "Sandal paste"],
      festivals: ["Parashurama Jayanti", "Vaishnava utsavams"],
      mantra: "ഓം ശ്രീ പരശുരാമായ നമഃ (Om Sri Parashuramaya Namah)",
      description: "The warrior avatar who created Kerala — revered throughout Malabar as the founder of this sacred land."
    },
    {
      name: "Lord Murugan (Subramanya)",
      title: "Skanda — God of Victory & Wisdom",
      image: IMG_MURUGAN,
      significance: "Lord Murugan (Subramanya / Skanda), the son of Lord Shiva and Goddess Parvati, is one of the most beloved deities of Kerala. Holding a vel (spear) and a bow, His golden-robed form stands majestically flanked by exquisitely carved temple pillars. He is the bestower of intellect, valor, and divine grace upon His devotees.",
      offerings: ["Vel (spear) offerings", "Panchamritha abhishekam", "Scarlet flowers", "Peacock feathers", "Tender coconut"],
      festivals: ["Skanda Sashti", "Thaipusam", "Karthigai Deepam"],
      mantra: "ഓം ശരവണഭവ (Om Saravanabhava)",
      description: "Son of Shiva, the radiant Lord of Victory, standing in divine splendor between the sacred temple pillars."
    },
    {
      name: "Lord Ganesha",
      title: "Ganapathi — Remover of Obstacles",
      image: IMG_GANESHA,
      significance: "Lord Ganesha, the elephant-headed son of Shiva and Parvati, is the first deity worshipped in all rituals at Thiruvannur Temple. His beautifully adorned idol — draped in jasmine garlands, marigolds, and jeweled ornaments — radiates divine joy and prosperity. No pooja, festival, or new beginning happens at the temple without first invoking Ganapathi.",
      offerings: ["Modakam (kozhukatta)", "Durva grass", "Marigold garlands", "Jaggery & coconut", "Banana stem"],
      festivals: ["Ganesh Chaturthi", "Vinayaka Chaturthi", "Sankashti"],
      mantra: "ഓം ഗം ഗണപതയേ നമഃ (Om Gam Ganapataye Namah)",
      description: "The beloved elephant-headed deity, bedecked in jasmine and gold, who blesses every devotee entering the temple."
    },
    {
      name: "Nagaraja (Serpent King)",
      title: "Kavu Thampuran — Guardian of the Sacred Grove",
      image: IMG_NAGARAJA,
      significance: "Nagaraja, the divine Serpent King, resides in the sacred Sarpa Kavu (snake grove) at the northeastern corner of the temple complex — a hallowed Kerala tradition. This ancient black stone idol, nestled among the tulasi vines and peepal leaves of the temple grove, is believed to protect the temple and grant fertility, health, and family harmony to devoted serpent-worshippers.",
      offerings: ["Noorunuri (turmeric rice)", "Tender coconut", "Milk", "Eggs", "Serpentine flowers (nagalingam)"],
      festivals: ["Ayilyam", "Naga Panchami", "Sarpa Bali"],
      mantra: "ഓം നാഗ രാജായ നമഃ (Om Naga Rajaya Namah)",
      description: "The ancient Nagaraja of the Sarpa Kavu — the sacred serpent grove that every traditional Kerala temple preserves."
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF6EE]">
      {/* Hero Section — Deity imagery backdrop */}
      <section className="relative h-[380px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${IMG_GANESHA})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3A6C]/80 via-[#1A3A6C]/60 to-[#1A3A6C]/90" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Sparkles className="w-16 h-16 text-[#D4B870] mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Temple Deities</h1>
            <p className="text-xl text-[#D4B870] font-malayalam">ദൈവ സന്നിധി — Divine Presence &amp; Sacred Blessings</p>
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
                          ? "border-[#C9A227] shadow-lg bg-gradient-to-br from-[#FAF6EE] to-white"
                          : "border-[#C9A227]/20 bg-white hover:bg-[#FAF6EE]/50 hover:shadow-md"
                    }`}
                    onClick={() => setSelectedDeity(index)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A227] to-[#D4B870] flex items-center justify-center flex-shrink-0 shadow-md">
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-heading text-[#1A3A6C]">{deity.name}</h3>
                          <p className="text-sm text-[#C9A227]">{deity.title}</p>
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
                <Card className="border-[#C9A227]/20 overflow-hidden shadow-xl">
                  {/* Deity Image with Glow Effect */}
                  <div className="relative h-[400px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A6C] via-transparent to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-[#C9A227]/10 animate-pulse"></div>
                    <img
                      src={deities[selectedDeity].image}
                      alt={deities[selectedDeity].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                      <Badge className="bg-[#D4B870] text-[#1A3A6C] mb-3">
                        {deities[selectedDeity].title}
                      </Badge>
                      <h2 className="font-heading text-3xl mb-2">{deities[selectedDeity].name}</h2>
                      <p className="text-white/90 text-sm">{deities[selectedDeity].description}</p>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    {/* Significance */}
                    <div className="mb-6">
                      <h3 className="font-heading text-xl text-[#1A3A6C] mb-3 flex items-center">
                        <Sparkles className="w-5 h-5 mr-2 text-[#C9A227]" />
                        Spiritual Significance
                      </h3>
                      <p className="text-[#666666] leading-relaxed">
                        {deities[selectedDeity].significance}
                      </p>
                    </div>

                    {/* Expandable Sections */}
                    <Accordion type="single" collapsible className="space-y-2">
                      <AccordionItem value="offerings" className="border-[#C9A227]/20">
                        <AccordionTrigger className="text-[#1A3A6C] font-heading hover:text-[#C9A227]">
                          Special Offerings
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="grid grid-cols-2 gap-2 mt-2">
                            {deities[selectedDeity].offerings.map((offering) => (
                              <li key={offering} className="flex items-center space-x-2 text-[#666666]">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]"></div>
                                <span>{offering}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="festivals" className="border-[#C9A227]/20">
                        <AccordionTrigger className="text-[#1A3A6C] font-heading hover:text-[#C9A227]">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-[#C9A227]" />
                            Festival Dates
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 mt-2">
                            {deities[selectedDeity].festivals.map((festival) => (
                              <div key={festival} className="p-3 bg-[#FAF6EE] rounded-lg">
                                <p className="text-[#1A3A6C]">{festival}</p>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="mantra" className="border-[#C9A227]/20">
                        <AccordionTrigger className="text-[#1A3A6C] font-heading hover:text-[#C9A227]">
                          <div className="flex items-center">
                            <Book className="w-4 h-4 mr-2 text-[#C9A227]" />
                            Sacred Mantra
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="mt-2 p-6 bg-gradient-to-br from-[#FAF6EE] to-[#D4B870]/10 rounded-lg text-center border border-[#C9A227]/20">
                            <p className="font-display text-2xl text-[#C9A227] mb-2">
                              {deities[selectedDeity].mantra}
                            </p>
                            <p className="text-sm text-[#666666]">
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
      <section className="py-16 bg-gradient-to-r from-[#FAF6EE] to-[#D4B870]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 text-[#C9A227] mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl text-[#1A3A6C] mb-4">
            Receive Divine Blessings
          </h2>
          <p className="text-[#666666] text-lg mb-8">
            Book a special pooja or abhishekam for your chosen deity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pooja-booking"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#C9A227] text-white hover:bg-[#D4B870] transition-colors"
            >
              Book Pooja Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-[#C9A227] text-[#C9A227] hover:bg-[#FAF6EE] transition-colors"
            >
              Contact Priest
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

