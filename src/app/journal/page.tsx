import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Field Notes & Safari Guides | Wild Jawai",
  description: "Practical guides and editorial field notes from Jawai, Rajasthan. Siting seasons, logistics, safari timing, Rabari culture and landscape context.",
};

const guides = [
  {
    slug: "jawai-leopard-safari",
    title: "How a Jawai leopard safari works",
    category: "Safari Guide",
    readingTime: "5 min read",
    summary: "What a private drive through Jawai's granite hills actually involves — from dawn departures to tracking techniques and respectful viewing etiquette.",
    image: "https://images.unsplash.com/photo-1549646467-17ed488dc476?q=80&w=1000&auto=format&fit=crop",
    details: "Private open-jeep drives operate twice daily. Morning drives leave before first light (around 05:30–06:30) when leopards descend from high granite kopjes. Dusk drives depart around 15:30–16:30 as temperatures cool. No fixed gates or rigid routes exist — experienced local trackers navigate based on territory knowledge, alarm calls and morning tracks."
  },
  {
    slug: "best-time-to-visit-jawai",
    title: "Best time to visit Jawai: Month-by-month guide",
    category: "Seasonality",
    readingTime: "6 min read",
    summary: "Peak winter window (October–March), warm summer sightings (April–June) and the monsoon transition broken down honestly.",
    image: "https://images.unsplash.com/photo-1627443178229-87a32edbaaa5?q=80&w=1000&auto=format&fit=crop",
    details: "October to March is peak season with crisp morning air, comfortable midday sunshine and maximum wildlife activity. November through February also coincides with migratory waterfowl at Jawai Dam. Summer (April–May) reaches 38–42°C in the afternoon, but leopards concentrate predictably near water holes, making dawn drives exceptionally productive."
  },
  {
    slug: "how-to-reach-jawai",
    title: "How to reach Jawai from Udaipur, Jodhpur and Jaipur",
    category: "Logistics",
    readingTime: "4 min read",
    summary: "Road travel times, nearest airports (UDR/JDH), Jawai Bandh railway station details, and private transfer coordination.",
    image: "https://images.unsplash.com/photo-1524222717473-730000096953?q=80&w=1000&auto=format&fit=crop",
    details: "Jawai is situated in Pali district along NH 162, positioned directly between Udaipur (approx. 135 km, 2.5–3 hours) and Jodhpur (approx. 165 km, 2.5–3 hours). Maharana Pratap Airport in Udaipur (UDR) and Jodhpur Airport (JDH) receive daily flights from Delhi and Mumbai. Jawai Bandh (JWD) railway station connects directly to Delhi, Jaipur and Ahmedabad."
  },
  {
    slug: "jawai-dam-birdlife",
    title: "Water and wings: Birdlife around Jawai Dam",
    category: "Wildlife & Habitats",
    readingTime: "4 min read",
    summary: "The winter transformation of Jawai reservoir: bar-headed geese, flamingos, sarus cranes, and marsh crocodiles.",
    image: "https://images.unsplash.com/photo-1663488257088-dc780d6f466b?q=80&w=1000&auto=format&fit=crop",
    details: "Beyond the big cats, Jawai reservoir is western Rajasthan's largest water body. From late October to March, thousands of migratory birds settle along the shoreline alongside resident mugger crocodiles sunning on sandbanks."
  }
];

export default function JournalPage() {
  return (
    <div className="pt-28 md:pt-36 bg-ivory text-basalt min-h-screen">
      {/* Header */}
      <section className="px-6 lg:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-basalt/10">
        <span className="text-terracotta text-xs tracking-[0.3em] uppercase mb-6 block">
          Editorial & Logistics
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-5xl mb-10">
          FIELD NOTES <br /> FROM JAWAI
        </h1>
        <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl text-basalt/80">
          Practical guides, seasonal context and regional perspective to help you plan an unhurried journey through Rajasthan.
        </p>
      </section>

      {/* Featured Articles Grid */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col gap-24">
          {guides.map((guide, idx) => (
            <article 
              key={guide.slug}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-basalt/10 last:border-0"
            >
              {/* Image */}
              <div className="lg:col-span-6 aspect-[16/10] overflow-hidden bg-sand">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs tracking-widest uppercase mb-4 text-terracotta font-medium">
                    <span>{guide.category}</span>
                    <span className="text-basalt/30">&bull;</span>
                    <span className="text-basalt/50 font-normal">{guide.readingTime}</span>
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                    {guide.title}
                  </h2>

                  <p className="text-lg font-light text-basalt/80 mb-6 leading-relaxed">
                    {guide.summary}
                  </p>

                  <div className="p-6 bg-sand/40 border-l border-terracotta/40 mb-8 text-sm md:text-base font-light text-basalt/75 leading-relaxed">
                    {guide.details}
                  </div>
                </div>

                <Link
                  href="/plan"
                  className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-basalt hover:text-terracotta transition-colors w-max"
                >
                  Plan A Trip Around This Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-sand/50 py-24 border-t border-basalt/10 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Have a specific route or date in mind?
          </h2>
          <p className="text-lg font-light text-basalt/75 mb-10">
            Tell us where you are starting and what matters to you. We provide custom itinerary recommendations with complete pricing before you book.
          </p>
          <Link
            href="/plan"
            className="inline-block px-10 py-5 bg-basalt text-white text-xs tracking-widest uppercase hover:bg-terracotta transition-colors"
          >
            Start Your Plan
          </Link>
        </div>
      </section>
    </div>
  );
}
