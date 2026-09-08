"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section id="story" className="py-32 bg-sand text-basalt overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-stretch min-h-[70vh]">
        
        {/* Left side: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1534062489679-b13c719e83ec?q=80&w=2940&auto=format&fit=crop" 
            alt="Founders in Jawai Landscape" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Right side: Content */}
        <div className="w-full lg:w-1/2 flex items-center bg-ivory p-12 lg:p-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-terracotta text-xs tracking-widest uppercase mb-6 block">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-10">
              TWO PERSPECTIVES. <br /> ONE JAWAI.
            </h2>
            <div className="space-y-6 text-lg font-light text-basalt/80">
              <p>
                Wild Jawai was born from a unique intersection. One perspective intimately understands what the discerning international traveller seeks—the pacing, the privacy, and the quiet expectation of luxury.
              </p>
              <p>
                The other perspective was formed by a lifetime lived within this very landscape—knowing the rhythm of the granite hills, reading the dust, and holding deep, generational respect for the leopards and the Rabari people.
              </p>
              <p>
                Together, we do not just book safaris. We quietly open the true destination for our guests.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
