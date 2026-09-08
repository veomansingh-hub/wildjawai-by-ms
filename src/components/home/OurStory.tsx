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
            <div className="space-y-6 text-lg font-light text-basalt/80 mb-10">
              <p>
                Wild Jawai was born from a unique intersection. Man Singh spent 17 years living and travelling across Europe, Asia and South America, bringing the discerning traveller&apos;s standard for clear communication, calm pacing and genuine support.
              </p>
              <p>
                Kalpesh Deora was born and raised in the Jawai region, knowing its granite hills, pastoral villages and leopard habitats through a lifetime of quiet, generational relationships.
              </p>
              <p>
                Together, we do not simply arrange safaris. We quietly open the true destination for our guests.
              </p>
            </div>

            <a
              href="/our-story"
              className="inline-block border-b border-basalt pb-1 text-xs tracking-widest uppercase hover:text-terracotta hover:border-terracotta transition-colors font-medium"
            >
              Read Our Full Story &rarr;
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
