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

const partnerProperties = [
  "UPVAN JAWAI",
  "CASTLE BERA",
  "BERA SAFARI LODGE",
  "ALTURA JAWAI",
  "AGVANI RESORT",
  "MANA RANAKPUR",
  "AMET HAVELI",
  "NARAIN NIWAS PALACE",
  "FORT BARLI",
  "BAL SAMAND LAKE PALACE"
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
            <span className="text-terracotta text-xs tracking-widest uppercase mb-8 block">Accommodation & Pricing</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.05] mb-10 tracking-tight">
              A PLACE TO STAY <br /> SHOULD BELONG TO <br /> THE JOURNEY.
            </h2>
            <p className="text-xl md:text-2xl text-basalt/80 font-light mb-8 max-w-xl">
              We hold direct partnerships with handpicked camps, boutique lodges and luxury retreats across the Jawai landscape.
            </p>
            <p className="text-base text-basalt/70 font-light mb-14 max-w-xl leading-relaxed">
              Because room categories, seasonal rates and private safari counts vary, we don&apos;t publish rigid package prices. Instead, we understand your travel rhythm and send a clear, itemised proposal with named properties and zero hidden markups before you commit.
            </p>
            
            <div className="space-y-10 mb-14">
              {categories.map((cat, idx) => (
                <motion.div 
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
                  className="flex flex-col border-l border-basalt/15 pl-6"
                >
                  <h4 className="font-serif text-2xl md:text-3xl mb-1.5">{cat.name}</h4>
                  <p className="text-basalt/60 font-light text-base">{cat.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link href="/plan" className="group inline-flex items-center gap-4 text-xs tracking-widest uppercase font-medium hover:text-terracotta transition-colors px-8 py-4 bg-basalt text-white hover:bg-terracotta">
                Request A Stay Proposal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-xs text-basalt/50 tracking-wider uppercase font-mono">
                Itemised quote &middot; No booking fee
              </span>
            </div>
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
            <motion.img
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2940&auto=format&fit=crop" 
              alt="Luxury Canvas Tents in Jawai"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>

      {/* Luxury Partner Stays Marquee */}
      <div className="mt-28 md:mt-36 pt-12 border-t border-basalt/10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-6">
          <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-terracotta font-medium">
            Select Partner Properties &middot; Jawai &amp; Rajasthan Circuit
          </p>
        </div>

        {/* Marquee Track with subtle edge vignettes */}
        <div className="relative w-full overflow-hidden py-3">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-sand to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-sand to-transparent z-10" />

          <div className="animate-marquee flex items-center whitespace-nowrap">
            {[...partnerProperties, ...partnerProperties].map((property, idx) => (
              <span 
                key={idx} 
                className="inline-flex items-center text-xs md:text-sm tracking-[0.24em] uppercase text-basalt/70 font-sans hover:text-basalt transition-colors px-6"
              >
                <span>{property}</span>
                <span className="ml-12 text-terracotta/40 text-xs">&middot;</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
