"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.img
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          viewport={{ once: false }}
          transition={{ duration: 15, ease: "linear" }}
          src="https://images.unsplash.com/photo-1681283626786-2a4c147493a3?q=80&w=2940&auto=format&fit=crop"
          alt="Jawai Sunset"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8"
        >
          YOUR JOURNEY TO JAWAI <br /> BEGINS WITH A CONVERSATION.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl font-light text-white/90 mb-12 max-w-xl mx-auto"
        >
          Tell us your dates and what you are hoping to experience. We&apos;ll shape the rest around you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <Link
            href="/plan"
            className="px-10 py-5 bg-white text-basalt text-xs tracking-widest uppercase hover:bg-ivory transition-colors w-full sm:w-auto"
          >
            Plan My Jawai Journey
          </Link>
          <a
            href="#"
            className="px-10 py-5 border border-white/30 text-white text-xs tracking-widest uppercase hover:border-white transition-colors w-full sm:w-auto"
          >
            WhatsApp Wild Jawai
          </a>
        </motion.div>
      </div>
    </section>
  );
}
