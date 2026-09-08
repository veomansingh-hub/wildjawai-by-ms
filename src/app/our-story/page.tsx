import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, HeartHandshake, Eye } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Story — Two Perspectives, One Jawai | Wild Jawai",
  description: "Founded by Man Singh and Kalpesh Deora. Blending global travel perspective with lifelong local Jawai heritage. Private safaris shaped with patience, respect and honest guidance.",
};

export default function OurStoryPage() {
  return (
    <div className="pt-28 md:pt-36 bg-ivory text-basalt min-h-screen">
      {/* Hero Header */}
      <section className="px-6 lg:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-basalt/10">
        <span className="text-terracotta text-xs tracking-[0.3em] uppercase mb-6 block">
          About Wild Jawai
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-5xl mb-12">
          TWO PERSPECTIVES.<br />
          ONE UNHURRIED JAWAI.
        </h1>
        <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl text-basalt/85">
          Wild Jawai began where two lives intersected: one shaped by seventeen years travelling and living across the world, and one rooted in the granite hills of Rajasthan through a lifetime of local heritage.
        </p>
      </section>

      {/* Founders Section */}
      <section className="px-6 lg:px-12 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Founder 1 */}
          <div className="flex flex-col">
            <span className="font-serif text-6xl md:text-7xl text-terracotta/25 italic mb-6">01</span>
            <span className="text-xs tracking-widest uppercase text-terracotta mb-2 font-medium">
              Founder &middot; The Traveller&apos;s Perspective
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Man Singh</h2>
            <div className="space-y-6 text-lg font-light text-basalt/80 leading-relaxed">
              <p>
                Years of living abroad and travelling across Europe, Asia and South America taught Man something simple: the journeys you remember most are rarely the ones with the longest itinerary. They are the ones where the right people quietly make everything work.
              </p>
              <p>
                That idea sits at the heart of Wild Jawai.
              </p>
              <p>
                Having experienced travel from the guest’s side — good hotels and disappointing ones, exceptional guides and forgettable tours, effortless journeys and badly organised ones — Man wanted Wild Jawai to feel different from a typical safari operator.
              </p>
              <p>
                There are no journeys built around what is easiest to sell. Instead, the starting point is the traveller: how much time you have, what kind of place you want to stay in, how interested you are in wildlife, photography, culture or simply slowing down, and what would make Jawai meaningful for you.
              </p>
              <p>
                From the moment you begin planning, the details are handled with the same questions Man asks when travelling himself:
              </p>
              <div className="p-6 bg-sand/40 border-l border-terracotta/40 my-4 space-y-2 text-base md:text-lg italic font-serif text-basalt/85">
                <p>&ldquo;Is this genuinely worth doing?</p>
                <p>Is this the right person to guide them?</p>
                <p>Is the price clear?</p>
                <p>Will someone be there when they arrive?</p>
                <p>And will this feel like Jawai — rather than just another safari?&rdquo;</p>
              </div>
              <p>
                The result is a more personal way to experience the region: thoughtfully planned, locally connected and supported on the ground from arrival to departure.
              </p>
              <p className="font-serif italic text-xl md:text-2xl text-basalt pt-4 border-t border-basalt/10 leading-snug">
                Because the real luxury in travel is not excess. It is knowing that someone has thought about the details before you ever have to.
              </p>
            </div>
            {/* Elegant placeholder for genuine founder portrait */}
            <div className="mt-8 aspect-[4/5] bg-sand/60 relative overflow-hidden border border-basalt/10 flex items-center justify-center text-center p-8">
              <div className="max-w-xs text-xs tracking-widest uppercase text-basalt/50 font-mono">
                [ Authentic Portrait &middot; Man Singh ]
              </div>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="flex flex-col">
            <span className="font-serif text-6xl md:text-7xl text-terracotta/25 italic mb-6">02</span>
            <span className="text-xs tracking-widest uppercase text-terracotta mb-2 font-medium">
              Co-Founder &middot; Jawai Native
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Kalpesh Deora</h2>
            <div className="space-y-5 text-lg font-light text-basalt/80 leading-relaxed">
              <p>
                Born and raised in the Jawai region, Kalpesh knows its granite kopjes, pastoral villages and seasonal water bodies through a lifetime of relationships and everyday experience.
              </p>
              <p>
                He provides the indispensable regional anchor: generational respect for the Rabari community, an instinct for wildlife movement across private and village lands, and trusted local coordination that cannot be learned from a map or travel book.
              </p>
            </div>
            {/* Elegant placeholder for genuine founder portrait */}
            <div className="mt-8 aspect-[4/5] bg-sand/60 relative overflow-hidden border border-basalt/10 flex items-center justify-center text-center p-8">
              <div className="max-w-xs text-xs tracking-widest uppercase text-basalt/50 font-mono">
                [ Authentic Portrait &middot; Kalpesh Deora ]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-sand/60 py-24 md:py-32 border-y border-basalt/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="text-terracotta text-xs tracking-[0.3em] uppercase mb-4 block">
            Our Ethos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mb-16 max-w-2xl">
            HOW WE APPROACH JAWAI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col">
              <Eye className="w-6 h-6 text-terracotta mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl mb-4">No Guaranteed Wildlife</h3>
              <p className="text-basalt/75 font-light leading-relaxed">
                Jawai&apos;s leopards roam wild across an open granite landscape. We never manufacture sightings or chase animals. Experienced local trackers and patience yield genuine encounters.
              </p>
            </div>

            <div className="flex flex-col">
              <ShieldCheck className="w-6 h-6 text-terracotta mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl mb-4">Transparent Pricing</h3>
              <p className="text-basalt/75 font-light leading-relaxed">
                We present an itemised proposal with named stays, drive counts, transfers and exact inclusions before you commit. There are no hidden fees or unexpected extras.
              </p>
            </div>

            <div className="flex flex-col">
              <HeartHandshake className="w-6 h-6 text-terracotta mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl mb-4">Direct On-Ground Support</h3>
              <p className="text-basalt/75 font-light leading-relaxed">
                You are not handed off to a call centre. If a train runs late or your timing changes, one dedicated local contact manages everything on the ground in Jawai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-6xl mb-8">
          Begin with a conversation.
        </h2>
        <p className="text-lg md:text-xl font-light text-basalt/80 mb-12">
          Share your travel dates and what you hope to experience in Rajasthan. We will shape the right stay, private drives and transfers for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/plan"
            className="px-10 py-5 bg-basalt text-white text-xs tracking-widest uppercase hover:bg-terracotta transition-colors w-full sm:w-auto"
          >
            Plan Your Journey
          </Link>
          <a
            href={CONTACT.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 border border-basalt/30 text-basalt text-xs tracking-widest uppercase hover:border-basalt hover:text-terracotta transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
          >
            WhatsApp Directly
          </a>
        </div>
      </section>
    </div>
  );
}
