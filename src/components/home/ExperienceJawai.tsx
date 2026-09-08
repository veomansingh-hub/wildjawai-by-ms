"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    num: "01",
    title: "LEOPARD COUNTRY",
    desc: "Private dawn and dusk drives through Jawai's granite wilderness.",
    image: "https://images.unsplash.com/photo-1549646467-17ed488dc476?q=80&w=2940&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "AMONG THE RABARI",
    desc: "A respectful encounter with the pastoral culture that has lived alongside this landscape for generations.",
    image: "https://images.unsplash.com/photo-1627443178229-87a32edbaaa5?q=80&w=2940&auto=format&fit=crop", 
  },
  {
    num: "03",
    title: "WATER & WINGS",
    desc: "Jawai Dam, winter birdlife, crocodiles and changing light.",
    image: "https://images.unsplash.com/photo-1663488257088-dc780d6f466b?q=80&w=2940&auto=format&fit=crop", 
  },
  {
    num: "04",
    title: "HIDDEN JAWAI",
    desc: "Temples, villages, viewpoints and places most visitors pass by.",
    image: "https://images.unsplash.com/photo-1582298538104-fe2e74c878f1?q=80&w=2940&auto=format&fit=crop", 
  }
];

export default function ExperienceJawai() {
  return (
    <section id="experiences" className="py-32 md:py-48 bg-sand text-basalt relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 md:mb-32"
        >
          <span className="text-terracotta text-xs tracking-widest uppercase mb-4 block">Experiences</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl uppercase tracking-wide">
            Ways to <br /> Experience Jawai
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 relative">
          {/* Mobile view: Stacked. Desktop view: Left side empty to allow right side to be wide, but actually let's do a staggered editorial grid instead of complex sticky for better mobile parity */}
          <div className="w-full flex flex-col gap-32">
            {experiences.map((exp, index) => {
              // Creating a staggered asymmetric look
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group`}
                >
                  <div className={`w-full ${isEven ? 'lg:w-7/12' : 'lg:w-8/12'} overflow-hidden relative aspect-[4/5] lg:aspect-[3/2]`}>
                    <motion.img 
                      src={exp.image} 
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  
                  <div className={`w-full ${isEven ? 'lg:w-5/12' : 'lg:w-4/12'} flex flex-col`}>
                    <span className="text-terracotta text-xl md:text-2xl tracking-widest font-serif italic mb-6">
                      {exp.num}
                    </span>
                    <h3 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-basalt/70 font-light text-lg md:text-xl max-w-sm">
                      {exp.desc}
                    </p>
                    <div className="mt-8 flex items-center gap-4 text-xs tracking-widest uppercase text-basalt group-hover:text-terracotta transition-colors w-max cursor-pointer">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
