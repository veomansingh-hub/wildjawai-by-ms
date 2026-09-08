"use client";

import { motion } from "framer-motion";

export default function SignatureLeopard() {
  return (
    <section id="safari" className="relative h-[90vh] md:h-[100vh] w-full flex items-center justify-center overflow-hidden bg-basalt text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-basalt/60 z-10" />
        <motion.img
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          viewport={{ once: false }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1549646467-17ed488dc476?q=80&w=2940&auto=format&fit=crop"
          alt="Wild Leopard"
          className="w-full h-full object-cover object-center opacity-70"
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-10 text-sand"
        >
          WILD MEANS <br /> NOT GUARANTEED.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl font-light text-sand/80"
        >
          <p>
            We never promise a leopard sighting. These are wild animals in an open, unfenced landscape.
          </p>
          <p>
            However, experienced trackers, deep local understanding, good timing and patience give you the best possible opportunity for a genuine encounter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
