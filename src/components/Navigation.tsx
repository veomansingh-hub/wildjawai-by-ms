"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const links = [
  { name: "Experiences", href: "/#experiences" },
  { name: "Safaris", href: "/#safari" },
  { name: "Stays", href: "/#stays" },
  { name: "Our Story", href: "/our-story" },
  { name: "Journal", href: "/journal" },
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

          <nav className="hidden lg:flex gap-8 text-[11px] tracking-widest uppercase">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-terracotta transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href={CONTACT.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[11px] tracking-widest uppercase flex items-center gap-1.5 transition-colors ${
                isScrolled ? "text-basalt/75 hover:text-terracotta" : "text-white/85 hover:text-white"
              }`}
              title="Message on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-terracotta" strokeWidth={1.5} />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/plan"
              className={`text-[10px] tracking-widest uppercase border px-6 py-3 transition-colors ${
                isScrolled
                  ? "border-basalt hover:bg-basalt hover:text-white"
                  : "border-white hover:bg-white hover:text-basalt"
              }`}
            >
              Plan Your Journey
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <a
              href={CONTACT.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-terracotta"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
            </a>
            <button
              className="p-2 -mr-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-[60] bg-ivory text-basalt flex flex-col justify-between"
          >
            <div className="px-6 py-8 flex items-center justify-between h-auto border-b border-basalt/10">
              <Link href="/" className="font-serif text-2xl tracking-[0.2em] uppercase" onClick={() => setMobileMenuOpen(false)}>
                Wild Jawai
              </Link>
              <button
                className="p-2 -mr-2 text-basalt"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-7 h-7" strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-8 py-12">
              {links.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                >
                  <Link
                    href={link.href}
                    className="font-serif text-3xl md:text-4xl hover:text-terracotta transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-4 flex flex-col items-center gap-4 w-full px-8 max-w-xs"
              >
                <Link
                  href="/plan"
                  className="w-full text-center text-xs tracking-widest uppercase border border-basalt px-8 py-4 bg-basalt text-white hover:bg-terracotta hover:border-terracotta transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Plan Your Journey
                </Link>
                <a
                  href={CONTACT.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-xs tracking-widest uppercase border border-basalt/20 px-8 py-3.5 hover:border-basalt transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-terracotta" strokeWidth={1.5} />
                  WhatsApp Direct
                </a>
              </motion.div>
            </div>

            <div className="px-6 py-6 border-t border-basalt/10 text-center text-xs text-basalt/60">
              <p>{CONTACT.location}</p>
              <a href={CONTACT.telUrl} className="mt-1 inline-block hover:text-terracotta transition-colors font-medium">
                {CONTACT.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
