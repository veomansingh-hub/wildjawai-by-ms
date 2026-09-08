"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "LOCAL COMFORT",
    desc: "Simple, clean and authentic local camps.",
  },
  {
    name: "CHARACTER & HERITAGE",
    desc: "Boutique stays with deep local roots and charm.",
  },
  {
    name: "QUIET LUXURY",
    desc: "Exceptional design, privacy and uncompromising service.",
  }
];

export default function StayInJawai() {
  return (
    <section id="stays" className="py-32 md:py-48 bg-sand text-basalt overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        <div className="w-full lg:w-5/12 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          >
            <span className="text-terracotta text-xs tracking-widest uppercase mb-8 block">Accommodation</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.05] mb-10 tracking-tight">
              A PLACE TO STAY <br /> SHOULD BELONG TO <br /> THE JOURNEY.
            </h2>
            <p className="text-xl md:text-2xl text-basalt/80 font-light mb-16 max-w-xl">
              We do not automatically push one hotel. After understanding your preferences, our team recommends options that elevate your time in Jawai.
            </p>
            
            <div className="space-y-12 mb-16">
              {categories.map((cat, idx) => (
                <motion.div 
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
                  className="flex flex-col"
                >
                  <h4 className="font-serif text-2xl md:text-3xl mb-2">{cat.name}</h4>
                  <p className="text-basalt/60 font-light text-lg">{cat.desc}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/plan" className="group inline-flex items-center gap-4 text-xs tracking-widest uppercase font-medium hover:text-terracotta transition-colors">
              Enquire About Stays <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="w-full lg:w-7/12 order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10%)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            className="w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-basalt/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2940&auto=format&fit=crop" 
              alt="Luxury Stay in Jawai" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
