import { useState } from "react";
import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Image, Video, Camera } from "lucide-react";

const IMAGES = [
  "https://images.unsplash.com/photo-1557062975-96113e46608b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  "https://images.unsplash.com/photo-1616377009507-c8111f07aced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  "https://images.unsplash.com/photo-1626094305030-351b21cea3e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  "https://images.unsplash.com/photo-1617184003170-1f266c325ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  "https://images.unsplash.com/photo-1666694051761-cd972857da30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  "https://images.unsplash.com/photo-1644773182204-f0bf03cae0cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  "https://images.unsplash.com/photo-1568127335414-076e418412f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
];

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <section className="relative h-[300px] overflow-hidden bg-gradient-to-br from-[#78350f] to-[#92400e]">
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Camera className="w-16 h-16 text-[#fbbf24] mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Temple Gallery</h1>
            <p className="text-xl text-[#fbbf24]">Visual Journey of Divine Moments</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="photos" className="flex items-center">
                <Image className="w-4 h-4 mr-2" />
                Photos
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center">
                <Video className="w-4 h-4 mr-2" />
                Videos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="photos">
              <Masonry columnsCount={3} gutter="1rem">
                {IMAGES.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="cursor-pointer group"
                    onClick={() => setSelectedImage(img)}
                  >
                    <Card className="overflow-hidden border-[#d97706]/20 hover:shadow-xl transition-shadow">
                      <img
                        src={img}
                        alt={`Temple ${index + 1}`}
                        className="w-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </Card>
                  </motion.div>
                ))}
              </Masonry>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="border-[#d97706]/20 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative aspect-video bg-[#fef3e2] flex items-center justify-center">
                      <Video className="w-16 h-16 text-[#d97706]" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading text-[#78350f] mb-1">Festival Celebration {i}</h3>
                      <p className="text-sm text-[#78716c]">Duration: 5:30</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Full view" className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </div>
  );
}
