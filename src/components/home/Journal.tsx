"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "How a Jawai leopard safari works",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1549646467-17ed488dc476?q=80&w=1000&auto=format&fit=crop",
    size: "large"
  },
  {
    title: "Understanding Jawai's granite landscape",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1627443178229-87a32edbaaa5?q=80&w=1000&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Rabari culture: The pastoral heart of Jawai",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1524222717473-730000096953?q=80&w=1000&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Birdlife around Jawai Dam in Winter",
    category: "Wildlife",
    image: "https://images.unsplash.com/photo-1663488257088-dc780d6f466b?q=80&w=1000&auto=format&fit=crop",
    size: "medium"
  }
];

export default function Journal() {
  return (
    <section id="journal" className="py-32 bg-ivory text-basalt">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl"
          >
            FIELD NOTES <br /> FROM JAWAI
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/journal" className="group flex items-center gap-3 text-xs tracking-widest uppercase hover:text-terracotta transition-colors">
              Read all field notes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
          {articles.map((article, idx) => {
            // Create a varied grid layout
            let colSpan = "md:col-span-6";
            let aspect = "aspect-[4/3]";
            
            if (article.size === "large") {
              colSpan = "md:col-span-8";
              aspect = "aspect-[16/9]";
            } else if (article.size === "small") {
              colSpan = "md:col-span-4";
              aspect = "aspect-[3/4]";
            }

            return (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`${colSpan} group flex flex-col`}
              >
                <Link href="/journal" className="flex flex-col">
                  <div className={`w-full overflow-hidden mb-6 ${aspect}`}>
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-terracotta text-xs tracking-widest uppercase mb-3">{article.category}</span>
                  <h3 className="font-serif text-2xl md:text-3xl leading-snug group-hover:text-terracotta transition-colors">
                    {article.title}
                  </h3>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
