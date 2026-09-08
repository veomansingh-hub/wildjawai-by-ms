"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Experiences", href: "/#experiences" },
  { name: "Safaris", href: "/#safari" },
  { name: "Stays", href: "/#stays" },
  { name: "Jawai", href: "/#jawai" },
  { name: "Our Story", href: "/#story" },
  { name: "Journal", href: "/#journal" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
          isScrolled ? "bg-ivory/95 backdrop-blur-md text-basalt shadow-sm py-2" : "bg-transparent text-white py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <Link href="/" className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase">
            Wild Jawai
          </Link>

          <nav className="hidden lg:flex gap-10 text-[11px] tracking-widest uppercase">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-terracotta transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/plan"
              className={`text-[10px] tracking-widest uppercase border px-8 py-4 transition-colors ${
                isScrolled
                  ? "border-basalt hover:bg-basalt hover:text-white"
                  : "border-white hover:bg-white hover:text-basalt"
              }`}
            >
              Plan Your Journey
            </Link>
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-[60] bg-ivory text-basalt flex flex-col"
          >
            <div className="px-6 py-8 flex items-center justify-between h-auto">
              <Link href="/" className="font-serif text-2xl tracking-[0.2em] uppercase" onClick={() => setMobileMenuOpen(false)}>
                Wild Jawai
              </Link>
              <button
                className="p-2 -mr-2 text-basalt"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" strokeWidth={1} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-10 pb-20">
              {links.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                >
                  <Link
                    href={link.href}
                    className="font-serif text-4xl md:text-5xl hover:text-terracotta transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="mt-8"
              >
                <Link
                  href="/plan"
                  className="text-xs tracking-widest uppercase border border-basalt px-10 py-5 hover:bg-basalt hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Plan Your Journey
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
