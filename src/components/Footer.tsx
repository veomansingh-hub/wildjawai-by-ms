import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-basalt text-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="font-serif text-3xl tracking-widest uppercase block mb-6">
            Wild Jawai
          </Link>
          <p className="text-sand/80 max-w-sm text-sm leading-relaxed">
            Private Jawai leopard safaris, handpicked stays, and tailored journeys shaped by people who know Jawai.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-sand mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-sand/80">
            <li><Link href="/#experiences" className="hover:text-terracotta transition-colors">Experiences</Link></li>
            <li><Link href="/#safari" className="hover:text-terracotta transition-colors">Safaris</Link></li>
            <li><Link href="/#stays" className="hover:text-terracotta transition-colors">Stays</Link></li>
            <li><Link href="/#story" className="hover:text-terracotta transition-colors">Our Story</Link></li>
            <li><Link href="/#journal" className="hover:text-terracotta transition-colors">Journal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-sand mb-6">Connect</h4>
          <ul className="space-y-4 text-sm text-sand/80">
            <li>
              <Link href="/plan" className="hover:text-terracotta transition-colors">Plan Your Journey</Link>
            </li>
            <li>
              <a href="#" className="hover:text-terracotta transition-colors">WhatsApp Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-terracotta transition-colors">hello@wildjawai.in</a>
            </li>
            <li>
              <a href="#" className="hover:text-terracotta transition-colors">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-sand/50">
        <p>&copy; {new Date().getFullYear()} Wild Jawai. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-sand transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-sand transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
