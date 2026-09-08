"use client";

import { motion } from "framer-motion";

const routes = [
  "UDAIPUR",
  "JODHPUR",
  "MOUNT ABU",
  "RANAKPUR"
];

export default function JawaiWithinRajasthan() {
  return (
    <section className="py-32 md:py-48 bg-ivory text-basalt overflow-hidden relative">
      {/* Very faint background landscape abstraction or map implication */}
      <div className="absolute top-0 right-0 w-2/3 h-full opacity-[0.03] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1599661559862-e42142e88a38?q=80&w=2940&auto=format&fit=crop" 
          alt="Vintage Map / Compass Travel Theme"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] grayscale mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8">
            NOT A DETOUR. <br /> PART OF THE JOURNEY.
          </h2>
          <p className="text-lg md:text-xl font-light text-basalt/70 max-w-2xl mx-auto mb-20">
            Wild Jawai coordinates private road transfers, integrating Jawai seamlessly into your wider Rajasthan itinerary.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-8 max-w-md mx-auto mb-16">
          {routes.map((city, idx) => (
            <motion.div 
              key={city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="flex items-center justify-center gap-6 w-full group"
            >
              <span className="text-xl tracking-widest uppercase font-medium group-hover:text-terracotta transition-colors">{city}</span>
              <div className="flex-1 h-[1px] bg-basalt/20 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-terracotta/50" />
              </div>
              <span className="text-xl tracking-widest uppercase font-serif text-terracotta italic">JAWAI</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="/plan"
            className="inline-block text-xs tracking-widest uppercase border-b border-basalt pb-1 hover:text-terracotta hover:border-terracotta transition-colors font-medium"
          >
            Coordinate Private Intercity Transfers &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
