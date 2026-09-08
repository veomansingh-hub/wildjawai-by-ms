"use client";

import { motion } from "framer-motion";

export default function EditorialIntro() {
  return (
    <section className="py-32 md:py-48 px-6 lg:px-12 bg-ivory text-basalt overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        <div className="w-full lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-10"
          >
            THERE IS MORE TO JAWAI THAN THE LEOPARD.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-16 h-[1px] bg-terracotta mb-10"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl font-light leading-relaxed max-w-md text-basalt/80"
          >
            The granite hills, the elusive leopards, the quiet villages, the Rabari pastoral life, the vast reservoir, and the long periods of unbroken silence are what make this land extraordinary. Jawai is a rhythm, not just a sighting.
          </motion.p>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg aspect-[3/4] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1627443178229-87a32edbaaa5?q=80&w=2940&auto=format&fit=crop" 
              alt="Jawai Granite Landscape" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
