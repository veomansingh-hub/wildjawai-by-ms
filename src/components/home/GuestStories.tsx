"use client";

import { motion } from "framer-motion";

export default function GuestStories() {
  return (
    <section className="py-40 bg-basalt text-white flex items-center min-h-[90vh]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-terracotta text-xs tracking-widest uppercase mb-12 block">Guest Story</span>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.3] font-light mb-16 text-sand">
            &ldquo;We arrived expecting to see a leopard, which we did. But what we didn&apos;t expect was the absolute silence of the granite hills at dawn, and the feeling that we were seeing a Rajasthan that most people simply drive past.&rdquo;
          </h2>

          <div className="flex flex-col items-center gap-2">
            <p className="tracking-widest uppercase text-sm font-medium">Eleanor & James</p>
            <p className="text-xs text-sand/50 tracking-widest uppercase">United Kingdom &middot; November</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
