import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { MessageCircle, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-basalt text-white py-20 px-6 lg:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="font-serif text-3xl tracking-widest uppercase block mb-6">
            Wild Jawai
          </Link>
          <p className="text-sand/80 max-w-sm text-sm leading-relaxed mb-6">
            Private Jawai leopard safaris, handpicked stays, and tailored journeys shaped by people who know Jawai.
          </p>
          <p className="text-xs text-sand/60 tracking-wider uppercase">
            {CONTACT.location}
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-sand mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-sand/80">
            <li><Link href="/#experiences" className="hover:text-terracotta transition-colors">Experiences</Link></li>
            <li><Link href="/#safari" className="hover:text-terracotta transition-colors">Safaris</Link></li>
            <li><Link href="/#stays" className="hover:text-terracotta transition-colors">Stays</Link></li>
            <li><Link href="/our-story" className="hover:text-terracotta transition-colors">Our Story</Link></li>
            <li><Link href="/journal" className="hover:text-terracotta transition-colors">Journal & Guides</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-sand mb-6">Connect</h4>
          <ul className="space-y-4 text-sm text-sand/80">
            <li>
              <Link href="/plan" className="hover:text-terracotta transition-colors inline-flex items-center gap-2">
                Plan Your Journey
              </Link>
            </li>
            <li>
              <a 
                href={CONTACT.whatsAppUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-terracotta transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-terracotta" />
                WhatsApp Us
              </a>
            </li>
            <li>
              <a 
                href={CONTACT.telUrl} 
                className="hover:text-terracotta transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-terracotta" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a 
                href={CONTACT.mailtoUrl} 
                className="hover:text-terracotta transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-terracotta" />
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-sand/50">
        <p>&copy; {new Date().getFullYear()} Wild Jawai. Private safaris, thoughtfully handled.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-sand transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-sand transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
