import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { BookOpen, Calendar, User } from "lucide-react";

export function BlogPage() {
  const articles = [
    { title: "Significance of Maha Shivaratri", category: "Festivals", date: "Mar 1, 2026", author: "Pandit Vishwanath", excerpt: "Discover the deep spiritual meaning behind the great night of Shiva..." },
    { title: "The Power of Om Namah Shivaya", category: "Mantras", date: "Feb 25, 2026", author: "Dr. Lakshmi", excerpt: "Understanding the five-syllable mantra and its transformative effects..." },
    { title: "Temple Architecture: A Divine Blueprint", category: "Heritage", date: "Feb 20, 2026", author: "Sri Rajendra", excerpt: "Exploring the sacred geometry and symbolism in temple design..." },
    { title: "Benefits of Daily Temple Visits", category: "Spirituality", date: "Feb 15, 2026", author: "Swami Ananda", excerpt: "How regular darshan enhances spiritual growth and well-being..." },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <section className="relative h-[300px] overflow-hidden bg-gradient-to-br from-[#78350f] to-[#92400e]">
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <BookOpen className="w-16 h-16 text-[#fbbf24] mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Spiritual Blog</h1>
            <p className="text-xl text-[#fbbf24]">Wisdom & Stories from Our Temple</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-[#d97706]/20 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-[#fef3e2] text-[#d97706]">{article.category}</Badge>
                      <div className="flex items-center text-sm text-[#78716c]">
                        <Calendar className="w-3 h-3 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center text-sm text-[#78716c]">
                        <User className="w-3 h-3 mr-1" />
                        {article.author}
                      </div>
                    </div>
                    <h3 className="font-heading text-2xl text-[#78350f] mb-2">{article.title}</h3>
                    <p className="text-[#78716c]">{article.excerpt}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
