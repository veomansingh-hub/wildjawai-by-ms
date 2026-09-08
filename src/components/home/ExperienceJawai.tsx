"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    num: "01",
    title: "LEOPARD COUNTRY",
    desc: "Private dawn and dusk drives through Jawai's granite wilderness.",
    image: "/images/safari-jeep.jpg",
  },
  {
    num: "02",
    title: "GRANITE KOPJES",
    desc: "Centuries of wind and water shaped these dramatic hills. Walk among ancient formations that harbor wildlife, hidden shrines, and breathtaking valley views.",
    image: "/images/jawai-kopjes-landscape.jpg", 
  },
  {
    num: "03",
    title: "RABARI WALKS",
    desc: "Walk with the Rabari pastoralists. Understand their deep connection with the leopards, their traditions, and how they navigate this wild terrain.",
    image: "/images/rabari-shepherd-jawai.jpg", 
  },
  {
    num: "04",
    title: "JAWAI DAM",
    desc: "The largest waterbody in western Rajasthan transforms the arid landscape, drawing flocks of migratory flamingos, pelicans, and sunning crocodiles.",
    image: "/images/jawai-dam-birds.jpg", 
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
                    <Link 
                      href="/plan"
                      className="mt-8 flex items-center gap-4 text-xs tracking-widest uppercase text-basalt group-hover:text-terracotta transition-colors w-max"
                    >
                      Plan This Experience <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
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
