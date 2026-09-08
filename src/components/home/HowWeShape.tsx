"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "LISTEN",
    desc: "Tell us when you are travelling, who is coming and what matters to you.",
  },
  {
    title: "SHAPE",
    desc: "We combine the right stay, private drives, transfers and experiences.",
  },
  {
    title: "WELCOME",
    desc: "You arrive with one local contact and support throughout your time in Jawai.",
  }
];

export default function HowWeShape() {
  return (
    <section className="py-32 md:py-48 bg-ivory text-basalt">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-20">
        
        {/* Sticky Left Column */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-40 h-max">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          >
            <span className="text-terracotta text-xs tracking-widest uppercase mb-6 block">The Process</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight">
              HOW WE <br /> SHAPE YOUR <br /> JOURNEY
            </h2>
          </motion.div>
        </div>

        {/* Scrolling Right Column */}
        <div className="w-full lg:w-7/12 flex flex-col gap-32 pt-10 lg:pt-0">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col gap-6"
            >
              <span className="font-serif text-6xl md:text-8xl text-terracotta/20 italic leading-none">
                0{index + 1}
              </span>
              <h3 className="text-4xl md:text-5xl font-serif tracking-tight">
                {step.title}
              </h3>
              <p className="text-xl md:text-2xl font-light text-basalt/80 max-w-md">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
