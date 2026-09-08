"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Genuine testimonials from wildjawai.in
const testimonials = [
  {
    quote: "The tracker found two leopards in the first hour. Seeing them move across the granite at first light — nothing else on the Rajasthan circuit comes close.",
    author: "S. Mehta",
    location: "Mumbai",
    date: "November 2025"
  },
  {
    quote: "Man Singh handled every detail. When our train was delayed, everything was rearranged without us having to manage anything. That is what good ground support looks like.",
    author: "R. & J. Thompson",
    location: "United Kingdom",
    date: "January 2026"
  },
  {
    quote: "Three nights, four drives, three leopard sightings. The quote was transparent and the support on the ground was the best part of our Rajasthan trip.",
    author: "A. Nair",
    location: "Bangalore",
    date: "December 2025"
  }
];

export default function GuestStories() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-36 md:py-48 bg-basalt text-white flex items-center min-h-[85vh] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center w-full">
        <span className="text-terracotta text-xs tracking-[0.3em] uppercase mb-12 block">
          Guest Accounts
        </span>

        <div className="min-h-[220px] md:min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="w-full"
            >
              <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.35] font-light mb-12 text-sand max-w-4xl mx-auto">
                &ldquo;{testimonials[current].quote}&rdquo;
              </h2>

              <div className="flex flex-col items-center gap-1.5">
                <p className="tracking-widest uppercase text-sm font-medium">
                  {testimonials[current].author}
                </p>
                <p className="text-xs text-sand/60 tracking-widest uppercase">
                  {testimonials[current].location} &middot; {testimonials[current].date}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="p-3 border border-white/15 rounded-full hover:border-white/50 text-white/70 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs tracking-widest text-sand/40 font-mono">
            {current + 1} / {testimonials.length}
          </span>
          <button
            onClick={next}
            className="p-3 border border-white/15 rounded-full hover:border-white/50 text-white/70 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-xs text-sand/50">
          Find verified reviews on{" "}
          <a
            href="https://www.google.com/search?q=Wild+Jawai+leopard+safari+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-sand transition-colors"
          >
            Google
          </a>{" "}
          and{" "}
          <a
            href="https://www.tripadvisor.in/Search?q=Wild+Jawai"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-sand transition-colors"
          >
            TripAdvisor
          </a>
        </div>
      </div>
    </section>
  );
}
