"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden flex items-end justify-center pb-24 md:pb-32">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60 z-10" />
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1681283626786-2a4c147493a3?q=80&w=2940&auto=format&fit=crop"
          alt="Jawai Leopard Landscape"
          className="w-full h-full object-cover object-[center_30%]"
        />
        {/* Placeholder for actual video later */}
        {/* <video src="/videos/jawai-hero.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" /> */}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 w-full max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="overflow-hidden mb-6 md:mb-8"
        >
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-90">
            Jawai &middot; Rajasthan &middot; India
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="w-full"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[100px] xl:text-[120px] leading-[1.05] tracking-tight mb-8 drop-shadow-lg">
            COME FOR THE LEOPARDS.<br />
            LEAVE WITH JAWAI.
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
          className="text-base md:text-xl font-light max-w-2xl mx-auto mb-12 text-white/95"
        >
          Private safaris, considered stays and journeys shaped by people who know Jawai.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto"
        >
          <Link
            href="/plan"
            className="w-full sm:w-auto px-10 py-4 bg-white/90 backdrop-blur-sm text-basalt text-xs tracking-widest uppercase hover:bg-white transition-colors"
          >
            Begin Your Journey
          </Link>
          <Link
            href="#experiences"
            className="w-full sm:w-auto px-10 py-4 border border-white/40 text-white text-xs tracking-widest uppercase hover:border-white transition-colors"
          >
            Discover Jawai
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <ArrowDown className="w-4 h-4 text-white/70 animate-bounce" strokeWidth={1} />
      </motion.div>
    </section>
  );
}
