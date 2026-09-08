import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, MapPin, Train, Plane, Bus, Clock, ShieldCheck, ChevronRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Reach Jawai Rajasthan: Train, Airport & Bus Guide 2026 | Wild Jawai",
  description:
    "Planning a Jawai leopard safari? Find trains to Sumerpur–Jawai Bandh, Falna and Abu Road, Jodhpur Airport routes, buses, fares, travel times and local transfers.",
  alternates: {
    canonical: "/journal/how-to-reach-jawai-rajasthan",
  },
  openGraph: {
    title: "How to Reach Jawai, Rajasthan: Train, Airport, Bus & Transfer Guide",
    description:
      "A practical guide to Sumerpur-Jawai Bandh railway station, Falna, Abu Road, Jodhpur Airport routes, approximate fares and private transfers into leopard country.",
    url: "https://wildjawai.in/journal/how-to-reach-jawai-rajasthan",
    siteName: "Wild Jawai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "How to Reach Jawai, Rajasthan",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Reach Jawai, Rajasthan: Complete Guide",
    description:
      "Practical travel logistics for reaching Jawai via Sumerpur-Jawai Bandh, Falna, Abu Road, or Jodhpur Airport.",
    images: ["/og-image.jpg"],
  },
};

export default function HowToReachJawaiArticle() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Reach Jawai, Rajasthan: Train, Airport, Bus & Transfer Guide",
    "description": "Practical guide to reaching Jawai, Rajasthan via Sumerpur-Jawai Bandh, Falna, Abu Road, and Jodhpur Airport with verified travel times, train options, and transfers.",
    "image": "https://wildjawai.in/og-image.jpg",
    "datePublished": "2026-09-01T08:00:00+05:30",
    "dateModified": "2026-09-08T18:00:00+05:30",
    "author": {
      "@type": "Person",
      "name": "Man Singh",
      "url": "https://wildjawai.in/our-story"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Wild Jawai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wildjawai.in/og-image.jpg"
      }
    },
    "mainEntityOfPage": "https://wildjawai.in/journal/how-to-reach-jawai-rajasthan"
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the nearest railway station to Jawai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The closest railway station is Sumerpur–Jawai Bandh (Station Code: JWB), located right on the edge of the Jawai landscape, roughly 10–25 minutes from most camps and safari lodges."
        }
      },
      {
        "@type": "Question",
        "name": "What is Sumerpur–Jawai Bandh railway station?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is the primary railway station serving the Jawai Dam and Sumerpur region in Pali district, situated on the Ahmedabad–Ajmer–Delhi mainline."
        }
      },
      {
        "@type": "Question",
        "name": "Was Jawai Bandh railway station renamed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, older railway timetables and regional references list it as 'Jawai Bandh' (station code JWB). In railway records, it is designated as Sumerpur–Jawai Bandh."
        }
      },
      {
        "@type": "Question",
        "name": "What is the railway station code for Jawai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The official Indian Railways station code for Sumerpur–Jawai Bandh is JWB."
        }
      },
      {
        "@type": "Question",
        "name": "How long does Falna to Jawai take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Falna (FA) is approximately 32 km from Jawai. By road or taxi pickup, it takes 40–50 minutes. By train, the connecting ride between Falna and Sumerpur–Jawai Bandh takes roughly 25–35 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "How can I reach Jawai from Abu Road?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Abu Road (ABR) is about 85 km south of Jawai. You can board a connecting northbound train taking 1 hour 15 minutes to 1 hour 30 minutes to JWB, or arrange a direct private road transfer taking roughly 1.5 to 2 hours via NH 27."
        }
      },
      {
        "@type": "Question",
        "name": "How can I reach Jawai from Jodhpur Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jodhpur Airport (JDH) is roughly 150 km from Jawai. A direct private car transfer takes about 2.5 to 3 hours via NH 162/62. Alternatively, you can take a taxi to Jodhpur Junction railway station (approx. 5 km) and catch a train to Sumerpur–Jawai Bandh."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a train from Jodhpur to Jawai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, several daily express trains run between Jodhpur Junction (JU) and Sumerpur–Jawai Bandh (JWB), including the Ranakpur Express (14707) and Surya Nagari Express (12479), taking roughly 2.5 to 3.5 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Can I reach Jawai by bus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, state RSRTC buses and private services run regularly between Jodhpur and Sumerpur bus stand (taking 3 to 4 hours). From Sumerpur town, a local transfer or taxi is required to reach your safari camp."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cheapest way to reach Jawai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most economical route is taking an Indian Railways Second Sitting (2S) or Sleeper (SL) train to Sumerpur–Jawai Bandh (JWB), with tickets starting between ₹80 and ₹180 from Jodhpur, followed by local transport."
        }
      },
      {
        "@type": "Question",
        "name": "Can Wild Jawai arrange railway station pickup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If you provide your train number, scheduled arrival time and accommodation name in advance, Wild Jawai can coordinate a dedicated private vehicle to receive you directly at the platform."
        }
      },
      {
        "@type": "Question",
        "name": "Can Wild Jawai arrange Jodhpur Airport pickup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Private door-to-door road transfers from Jodhpur Airport directly to any lodge or tented camp in Jawai are regularly coordinated for our guests."
        }
      },
      {
        "@type": "Question",
        "name": "How many days should I spend in Jawai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Two nights with 3 to 4 private safari drives is the minimum recommended stay. Three nights allows a relaxed pace, combining dawn leopard tracking, evening dam birdlife, Rabari village walks and sunset viewpoints."
        }
      },
      {
        "@type": "Question",
        "name": "Is a leopard sighting guaranteed in Jawai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Leopards in Jawai roam in a wild, unfenced granite landscape. While local trackers and high feline density make sightings frequent, sightings can never be guaranteed by any ethical operator."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <article className="pt-28 md:pt-36 bg-ivory text-basalt min-h-screen">
        {/* Breadcrumb Header */}
        <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-6">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-widest text-basalt/50 flex items-center gap-2">
            <Link href="/" className="hover:text-terracotta transition-colors">Wild Jawai</Link>
            <ChevronRight className="w-3 h-3 text-basalt/30" />
            <Link href="/journal" className="hover:text-terracotta transition-colors">Journal</Link>
            <ChevronRight className="w-3 h-3 text-basalt/30" />
            <span className="text-terracotta">Getting Here</span>
          </nav>
        </div>

        {/* Hero Section */}
        <header className="max-w-4xl mx-auto px-6 lg:px-12 py-12 md:py-16">
          <span className="text-terracotta text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
            GETTING TO JAWAI &middot; LOGISTICS GUIDE
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-6">
            How to Reach Jawai, Rajasthan: Train, Airport, Bus &amp; Transfer Guide
          </h1>
          <p className="text-xl md:text-2xl font-light text-basalt/80 leading-relaxed mb-8">
            Trains, airports, buses, fares and the simplest ways into leopard country.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs tracking-widest uppercase text-basalt/50 font-mono pt-6 border-t border-basalt/10">
            <span>LAST VERIFIED: SEPTEMBER 2026</span>
            <span>&bull;</span>
            <span>8 MIN READ</span>
            <span>&bull;</span>
            <span>BY MAN SINGH</span>
          </div>
        </header>

        {/* Cinematic Lead Photography */}
        <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-16 md:mb-24">
          <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-sand relative">
            <img
              src="https://images.unsplash.com/photo-1549646467-17ed488dc476?q=80&w=2000&auto=format&fit=crop"
              alt="Jawai Rajasthan Granite Landscape and Safari Country"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs text-basalt/50 font-light mt-3 tracking-wide text-right">
            The granite hills and thorn-scrub wilderness of Jawai, Pali district.
          </p>
        </div>

        {/* Article Body */}
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Introduction */}
          <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-basalt/85 mb-16">
            <p>
              Jawai often feels remote, wild and untouched. Yet geographically, this dramatic granite terrain sits directly on one of western India&apos;s most active travel axes—tucked neatly between Udaipur, Jodhpur and Mount Abu.
            </p>
            <p>
              For the vast majority of travellers, the most convenient railway station is <strong>Sumerpur–Jawai Bandh Railway Station (Station Code: JWB)</strong>. For others on major express routes, <strong>Falna</strong> or <strong>Abu Road</strong> serve as invaluable junctions. And for those arriving by air from Delhi or Mumbai, <strong>Jodhpur Airport</strong> offers the fastest door-to-door flight gateway.
            </p>
            <p className="p-6 bg-sand/50 border-l border-terracotta/40 text-base md:text-lg italic font-serif">
              &ldquo;An essential detail to know before you book: &lsquo;Jawai&rsquo; is not a single compact town with hotels clustered outside a train station. It is a vast rural landscape of granite hills, agricultural pastures and scattered villages. Your ideal arrival point and final transfer depend on where your lodge or camp is set.&rdquo;
            </p>
          </div>

          {/* Quick Comparison Table */}
          <div className="mb-20">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Quick Overview: Ways to Reach Jawai</h2>
            <div className="overflow-x-auto border border-basalt/15 bg-sand/20">
              <table className="w-full text-left text-sm font-light">
                <thead className="bg-sand/60 text-xs tracking-widest uppercase text-basalt border-b border-basalt/15 font-sans">
                  <tr>
                    <th className="p-4">Arriving At</th>
                    <th className="p-4">Best Onward Option</th>
                    <th className="p-4">Approx. Time</th>
                    <th className="p-4">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-basalt/10 text-basalt/80">
                  <tr>
                    <td className="p-4 font-medium text-basalt">Sumerpur–Jawai Bandh (JWB)</td>
                    <td className="p-4">Local pre-arranged station pickup</td>
                    <td className="p-4 font-mono text-xs">15–25 mins</td>
                    <td className="p-4">Direct train arrivals; shortest road journey</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-basalt">Falna Railway Station (FA)</td>
                    <td className="p-4">Connecting train to JWB or private road transfer</td>
                    <td className="p-4 font-mono text-xs">40–50 mins (road)</td>
                    <td className="p-4">Superfast trains that skip smaller halts</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-basalt">Abu Road Railway Station (ABR)</td>
                    <td className="p-4">Connecting train to JWB or road transfer</td>
                    <td className="p-4 font-mono text-xs">1.5–2 hours (road)</td>
                    <td className="p-4">Travellers coming northbound from Gujarat / Mumbai</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-basalt">Jodhpur Airport (JDH)</td>
                    <td className="p-4">Private road transfer directly to lodge</td>
                    <td className="p-4 font-mono text-xs">2.5–3 hours</td>
                    <td className="p-4">Flying in from Delhi, Mumbai or Bangalore</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-basalt">Jodhpur City / Junction</td>
                    <td className="p-4">Direct express train or private taxi</td>
                    <td className="p-4 font-mono text-xs">2.5–3.5 hours</td>
                    <td className="p-4">Continuing on a wider Rajasthan circuit</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-basalt/50 font-mono mt-3">
              Note: Schedules and local conditions change. Confirm exact timings on IRCTC/NTES before travel.
            </p>
          </div>

          {/* Section 1: Sumerpur-Jawai Bandh */}
          <section className="mb-20 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-basalt">
              Sumerpur–Jawai Bandh: The Most Convenient Railway Station for Jawai
            </h2>
            <p className="text-lg font-light leading-relaxed text-basalt/80">
              For most travellers travelling by rail, this is the destination to set on your ticket. Located right between Sumerpur town and the Jawai Bandh dam area, this station puts you at the threshold of the leopard country.
            </p>
            <p className="text-lg font-light leading-relaxed text-basalt/80">
              <strong>Station Name &amp; Code:</strong> The official Indian Railways station code is <strong>JWB</strong>. In older timetables and historical booking systems, it was listed simply as <em>Jawai Bandh</em>. Today, search engines and IRCTC recognize both <strong>Jawai Bandh</strong> and <strong>Sumerpur Jawai Bandh</strong> under code <strong>JWB</strong>.
            </p>
            <p className="text-lg font-light leading-relaxed text-basalt/80">
              <strong>Why a Station Pickup Matters:</strong> Because lodges and tented camps are scattered across private farms, granite valleys and villages like Sena, Bera, and Perwa, you cannot simply step out of the station and catch an automated city cab. Booking your station transfer with your camp or through Wild Jawai ensures a private vehicle is waiting when your coach pulls in.
            </p>

            <div className="p-6 bg-sand/50 border border-basalt/15 my-8">
              <span className="text-xs tracking-widest uppercase text-terracotta font-medium block mb-2 font-mono">
                Best For
              </span>
              <p className="text-base text-basalt/85 font-light leading-relaxed mb-4">
                Travellers whose train stops directly at Sumerpur–Jawai Bandh (JWB).
              </p>
              <p className="text-sm text-basalt/70 font-light border-t border-basalt/15 pt-3">
                Send us your train number, arrival time and accommodation name, and Wild Jawai can coordinate the final private station pickup directly to your stay.
              </p>
            </div>
          </section>

          {/* Section 2: Falna to Jawai */}
          <section className="mb-20 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-basalt">
              Falna to Jawai: The Reliable Express Alternative
            </h2>
            <p className="text-lg font-light leading-relaxed text-basalt/80">
              <strong>Falna Railway Station (Station Code: FA)</strong> is situated approximately 32 km north of Jawai. Because it serves as a major commercial stop for the Ranakpur Jain temple complex and regional trade, several high-speed and long-distance trains from Delhi, Jaipur, Ahmedabad and Mumbai halt at Falna without stopping at smaller stations.
            </p>
            <p className="text-lg font-light leading-relaxed text-basalt/80">
              If your preferred express halts at Falna, you have two simple choices:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg font-light text-basalt/80">
              <li>
                <strong>Direct Private Road Transfer (Recommended):</strong> Meet a pre-arranged vehicle directly at Falna station. The drive through quiet rural roads takes roughly <strong>40 to 50 minutes</strong> straight to your camp.
              </li>
              <li>
                <strong>Connecting Train:</strong> Board a short connecting passenger or express train from Falna (FA) to Sumerpur–Jawai Bandh (JWB). The rail journey takes just 25 to 35 minutes.
              </li>
            </ul>

            <h3 className="font-serif text-2xl md:text-3xl pt-6 text-basalt">
              Useful Trains: Falna to Sumerpur–Jawai Bandh
            </h3>
            <p className="text-sm text-basalt/60">
              Key daily services operating south from Falna towards Jawai Bandh:
            </p>

            <div className="overflow-x-auto border border-basalt/15 bg-sand/20">
              <table className="w-full text-left text-sm font-light">
                <thead className="bg-sand/60 text-xs tracking-widest uppercase text-basalt border-b border-basalt/15 font-sans">
                  <tr>
                    <th className="p-3">Train #</th>
                    <th className="p-3">Train Name</th>
                    <th className="p-3">Falna (FA)</th>
                    <th className="p-3">Jawai (JWB)</th>
                    <th className="p-3">Duration</th>
                    <th className="p-3">Schedule Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-basalt/10 text-basalt/80 font-mono text-xs">
                  <tr>
                    <td className="p-3 text-basalt font-medium">14707</td>
                    <td className="p-3 font-sans text-sm">Ranakpur Express</td>
                    <td className="p-3">16:15</td>
                    <td className="p-3">16:45</td>
                    <td className="p-3">30m</td>
                    <td className="p-3 font-sans">Daily service</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-basalt font-medium">19032</td>
                    <td className="p-3 font-sans text-sm">Yoga Express</td>
                    <td className="p-3">08:20</td>
                    <td className="p-3">08:52</td>
                    <td className="p-3">32m</td>
                    <td className="p-3 font-sans">Daily service</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-basalt font-medium">12479</td>
                    <td className="p-3 font-sans text-sm">Surya Nagari Superfast</td>
                    <td className="p-3">22:45</td>
                    <td className="p-3">23:14</td>
                    <td className="p-3">29m</td>
                    <td className="p-3 font-sans">Daily service</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-basalt font-medium">12990</td>
                    <td className="p-3 font-sans text-sm">AII DDR Express</td>
                    <td className="p-3">23:55</td>
                    <td className="p-3">00:26</td>
                    <td className="p-3">31m</td>
                    <td className="p-3 font-sans">Wed, Fri, Sun</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-basalt/50 font-mono italic">
              Train schedules change. Confirm your travel date on IRCTC/NTES before booking.
            </p>
          </section>

          {/* Section 3: Abu Road to Jawai */}
          <section className="mb-20 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-basalt">
              Abu Road to Jawai: The Southern Gateway
            </h2>
            <p className="text-lg font-light leading-relaxed text-basalt/80">
              <strong>Abu Road Railway Station (Station Code: ABR)</strong> sits roughly 85 km south of Jawai, near the Gujarat–Rajasthan border. For visitors arriving from Mumbai, Vadodara or Ahmedabad on premier expresses (like the Rajdhani or Garib Rath) that may not stop at Sumerpur, Abu Road is the primary debarkation point.
            </p>
            <p className="text-lg font-light leading-relaxed text-basalt/80">
              From Abu Road, a direct private road transfer takes approximately <strong>1.5 to 2 hours</strong> via the well-surfaced NH 27 / toll highway. Alternatively, multiple northbound connecting trains make the climb to Sumerpur–Jawai Bandh in about 1 hour 15 minutes to 1 hour 30 minutes.
            </p>

            <h3 className="font-serif text-2xl md:text-3xl pt-6 text-basalt">
              Abu Road to Sumerpur–Jawai Bandh Trains
            </h3>
            <div className="overflow-x-auto border border-basalt/15 bg-sand/20">
              <table className="w-full text-left text-sm font-light">
                <thead className="bg-sand/60 text-xs tracking-widest uppercase text-basalt border-b border-basalt/15 font-sans">
                  <tr>
                    <th className="p-3">Train #</th>
                    <th className="p-3">Train Name</th>
                    <th className="p-3">Abu Road (ABR)</th>
                    <th className="p-3">Jawai (JWB)</th>
                    <th className="p-3">Duration</th>
                    <th className="p-3">Frequency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-basalt/10 text-basalt/80 font-mono text-xs">
                  <tr>
                    <td className="p-3 text-basalt font-medium">14708</td>
                    <td className="p-3 font-sans text-sm">Ranakpur Express</td>
                    <td className="p-3">03:30</td>
                    <td className="p-3">04:55</td>
                    <td className="p-3">1h 25m</td>
                    <td className="p-3 font-sans">Daily</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-basalt font-medium">19031</td>
                    <td className="p-3 font-sans text-sm">Yoga Express</td>
                    <td className="p-3">15:00</td>
                    <td className="p-3">16:22</td>
                    <td className="p-3">1h 22m</td>
                    <td className="p-3 font-sans">Daily</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-basalt font-medium">12480</td>
                    <td className="p-3 font-sans text-sm">Surya Nagari Superfast</td>
                    <td className="p-3">00:30</td>
                    <td className="p-3">01:52</td>
                    <td className="p-3">1h 22m</td>
                    <td className="p-3 font-sans">Daily</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-basalt/50 font-mono italic">
              Train schedules change. Confirm your travel date on IRCTC/NTES before booking.
            </p>
          </section>

          {/* Section 4: Jodhpur Gateway */}
          <section className="mb-20 space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl text-basalt">
              Flying to Jodhpur Airport and Travelling to Jawai
            </h2>
            <p className="text-lg font-light leading-relaxed text-basalt/80">
              For guests flying into Rajasthan, <strong>Jodhpur Airport (JDH)</strong> is one of the smoothest gateways. Located roughly 150 km north of Jawai, it pairs effortlessly with regional itineraries such as:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-xs tracking-widest uppercase font-mono py-2">
              <span className="p-3 bg-sand/60 border border-basalt/15">JODHPUR &rarr; JAWAI &rarr; UDAIPUR</span>
              <span className="p-3 bg-sand/60 border border-basalt/15">UDAIPUR &rarr; JAWAI &rarr; JODHPUR</span>
            </div>

            {/* Option 1 */}
            <div className="space-y-4 pt-4 border-t border-basalt/10">
              <h3 className="font-serif text-2xl md:text-3xl text-basalt">
                Option 1 &mdash; Private Transfer from Jodhpur Airport to Jawai
              </h3>
              <p className="text-lg font-light leading-relaxed text-basalt/80">
                The most seamless and comfortable approach. You are received directly at Jodhpur Airport arrival gates by a private air-conditioned vehicle.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base font-light text-basalt/80">
                <li><strong>Road Distance:</strong> ~150 km</li>
                <li><strong>Drive Duration:</strong> 2.5 to 3 hours via NH 162/62 through Pali and Sumerpur</li>
                <li><strong>Advantage:</strong> Door-to-door directly into your specific leopard lodge with zero luggage handling or station waiting.</li>
              </ul>
              <div className="p-5 bg-sand/40 border border-basalt/15 text-sm text-basalt/80 font-light">
                Prefer not to coordinate multiple drivers yourself? Tell us your flight schedule and accommodation, and Wild Jawai can arrange your private airport arrival transfer.
              </div>
            </div>

            {/* Option 2 */}
            <div className="space-y-4 pt-4 border-t border-basalt/10">
              <h3 className="font-serif text-2xl md:text-3xl text-basalt">
                Option 2 &mdash; Jodhpur Airport &rarr; Jodhpur Junction &rarr; Train to Jawai
              </h3>
              <p className="text-lg font-light leading-relaxed text-basalt/80">
                If you prefer the romance and comfort of Indian rail travel, take an airport prepaid taxi or auto-rickshaw to <strong>Jodhpur Junction (approx. 5 km, 15–20 minutes)</strong>, then board a direct train south to Sumerpur–Jawai Bandh.
              </p>

              <h4 className="font-serif text-xl text-basalt pt-2">Direct Jodhpur to Jawai Trains</h4>
              <div className="overflow-x-auto border border-basalt/15 bg-sand/20">
                <table className="w-full text-left text-sm font-light">
                  <thead className="bg-sand/60 text-xs tracking-widest uppercase text-basalt border-b border-basalt/15 font-sans">
                    <tr>
                      <th className="p-3">Train #</th>
                      <th className="p-3">Train Name</th>
                      <th className="p-3">Jodhpur (JU)</th>
                      <th className="p-3">Jawai (JWB)</th>
                      <th className="p-3">Duration</th>
                      <th className="p-3">Approx. Fare</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-basalt/10 text-basalt/80 font-mono text-xs">
                    <tr>
                      <td className="p-3 text-basalt font-medium">14707</td>
                      <td className="p-3 font-sans text-sm">Ranakpur Express</td>
                      <td className="p-3">13:10</td>
                      <td className="p-3">16:45</td>
                      <td className="p-3">3h 35m</td>
                      <td className="p-3 font-sans">₹100 (2S) &middot; ₹160 (SL) &middot; ₹500 (3A)</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-basalt font-medium">12479</td>
                      <td className="p-3 font-sans text-sm">Surya Nagari SF</td>
                      <td className="p-3">19:45</td>
                      <td className="p-3">23:14</td>
                      <td className="p-3">3h 29m</td>
                      <td className="p-3 font-sans">₹115 (2S) &middot; ₹185 (SL) &middot; ₹550 (3A)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-basalt/50 font-mono italic">
                Train schedules change. Confirm your travel date on IRCTC/NTES before booking.
              </p>
            </div>

            {/* Option 3 */}
            <div className="space-y-4 pt-4 border-t border-basalt/10">
              <h3 className="font-serif text-2xl md:text-3xl text-basalt">
                Option 3 &mdash; Jodhpur to Sumerpur by Bus
              </h3>
              <p className="text-lg font-light leading-relaxed text-basalt/80">
                Regular state transport (RSRTC) and private air-conditioned sleeper/seater buses connect Jodhpur Central Bus Stand to Sumerpur throughout the day.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base font-light text-basalt/80">
                <li><strong>Journey Time:</strong> Approximately 3 to 4 hours.</li>
                <li><strong>Approximate Fare:</strong> ₹180 to ₹450 depending on bus type (Ordinary vs. AC Express).</li>
                <li><strong>Important Note:</strong> Buses terminate at Sumerpur town bus stand, not at your wildlife lodge. You will still need an onward rural taxi to cover the remaining 10–25 km into the Jawai hills.</li>
              </ul>
            </div>
          </section>

          {/* Public Transport Cost Table */}
          <section className="mb-20 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-basalt">
              How Much Does It Cost to Reach Jawai?
            </h2>
            <p className="text-lg font-light leading-relaxed text-basalt/80">
              Transport costs vary widely based on whether you choose local public trains, express buses or private chauffeurs:
            </p>

            <div className="overflow-x-auto border border-basalt/15 bg-sand/20">
              <table className="w-full text-left text-sm font-light">
                <thead className="bg-sand/60 text-xs tracking-widest uppercase text-basalt border-b border-basalt/15 font-sans">
                  <tr>
                    <th className="p-3">Route</th>
                    <th className="p-3">Transport Option</th>
                    <th className="p-3">Approx. Cost</th>
                    <th className="p-3">Approx. Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-basalt/10 text-basalt/80 font-mono text-xs">
                  <tr>
                    <td className="p-3 text-basalt font-medium font-sans">Falna &rarr; Jawai</td>
                    <td className="p-3 font-sans">Connecting Passenger Train</td>
                    <td className="p-3">₹30 &ndash; ₹75</td>
                    <td className="p-3">25 &ndash; 35 mins</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-basalt font-medium font-sans">Falna &rarr; Jawai</td>
                    <td className="p-3 font-sans">Private Road Transfer</td>
                    <td className="p-3">₹1,200 &ndash; ₹1,800</td>
                    <td className="p-3">40 &ndash; 50 mins</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-basalt font-medium font-sans">Abu Road &rarr; Jawai</td>
                    <td className="p-3 font-sans">Express Train (Sleeper/3A)</td>
                    <td className="p-3">₹140 &ndash; ₹500</td>
                    <td className="p-3">1h 15m &ndash; 1h 30m</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-basalt font-medium font-sans">Abu Road &rarr; Jawai</td>
                    <td className="p-3 font-sans">Private Road Transfer</td>
                    <td className="p-3">₹2,800 &ndash; ₹3,800</td>
                    <td className="p-3">1.5 &ndash; 2 hours</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-basalt font-medium font-sans">Jodhpur &rarr; Sumerpur</td>
                    <td className="p-3 font-sans">RSRTC / Private Bus</td>
                    <td className="p-3">₹180 &ndash; ₹450</td>
                    <td className="p-3">3 &ndash; 4 hours</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-basalt font-medium font-sans">Jodhpur Airport &rarr; Jodhpur Jn</td>
                    <td className="p-3 font-sans">Prepaid Taxi / Auto</td>
                    <td className="p-3">₹150 &ndash; ₹350</td>
                    <td className="p-3">15 &ndash; 25 mins</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-basalt font-medium font-sans">Jodhpur &rarr; Jawai</td>
                    <td className="p-3 font-sans">Express Train (2S / SL)</td>
                    <td className="p-3">₹100 &ndash; ₹185</td>
                    <td className="p-3">2.5 &ndash; 3.5 hours</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-basalt font-medium font-sans">Jodhpur Airport &rarr; Jawai</td>
                    <td className="p-3 font-sans">Private AC Sedan / SUV</td>
                    <td className="p-3">₹4,000 &ndash; ₹5,500</td>
                    <td className="p-3">2.5 &ndash; 3 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-basalt/60 italic font-mono pt-2">
              Prices are indicative and can vary by travel date, class, operator, demand and your exact Jawai destination.
            </p>
          </section>

          {/* Wild Jawai Transfer Editorial Section */}
          <section className="my-24 p-10 md:p-16 bg-basalt text-white">
            <span className="text-terracotta text-xs tracking-[0.3em] uppercase block mb-4">
              Ground Coordination
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-sand mb-8 leading-tight">
              WE CAN MEET YOU <br /> WHERE YOU ARRIVE.
            </h2>
            <div className="space-y-6 text-base md:text-lg font-light text-sand/85 leading-relaxed max-w-2xl mb-10">
              <p>
                If your most convenient train finishes at Falna or Abu Road instead of Sumerpur–Jawai Bandh, it does not need to complicate your journey.
              </p>
              <p>
                Send us your train number and arrival time and we can help coordinate a private transfer directly to your stay.
              </p>
              <p>
                The same applies when flying into Jodhpur. We can collect you from the airport, or help combine a cheaper train or bus journey with the final local transfer.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/plan"
                className="w-full sm:w-auto px-8 py-4 bg-white text-basalt text-xs tracking-widest uppercase hover:bg-terracotta hover:text-white transition-colors text-center font-medium"
              >
                Plan My Jawai Journey
              </Link>
              <a
                href={CONTACT.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white text-xs tracking-widest uppercase hover:border-white transition-colors text-center"
              >
                WhatsApp Wild Jawai
              </a>
            </div>
          </section>

          {/* Arriving in Jawai is Only the Beginning */}
          <section className="mb-24 space-y-16">
            <div>
              <span className="text-terracotta text-xs tracking-[0.3em] uppercase block mb-4">
                The Landscape Ahead
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-basalt mb-6">
                Arriving in Jawai Is Only the Beginning
              </h2>
              <p className="text-xl font-light text-basalt/80 max-w-2xl leading-relaxed">
                Reaching Jawai brings you to one of India&apos;s most extraordinary wilderness narratives. Why spend more than a rushed overnight here?
              </p>
            </div>

            {/* 4 Mini Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* 1. Leopard Country */}
              <div className="space-y-4">
                <span className="font-serif text-3xl text-terracotta/40 italic">01</span>
                <h3 className="font-serif text-2xl md:text-3xl text-basalt">Leopard Country</h3>
                <p className="text-base font-light text-basalt/80 leading-relaxed">
                  Jawai&apos;s leopards live among billion-year-old natural granite formations. Unlike gated national parks with strict artificial zones, here cats roam freely across the hills. A leopard sighting can never be guaranteed—wildlife is wildlife. But local knowledge, experienced trackers, patience and dawn timing yield honest, unforgettable encounters.
                </p>
              </div>

              {/* 2. Jawai Dam & Birdlife */}
              <div className="space-y-4">
                <span className="font-serif text-3xl text-terracotta/40 italic">02</span>
                <h3 className="font-serif text-2xl md:text-3xl text-basalt">Jawai Dam &amp; Birdlife</h3>
                <p className="text-base font-light text-basalt/80 leading-relaxed">
                  The Jawai reservoir is western Rajasthan&apos;s largest freshwater expanse. Throughout winter, migratory waterfowl arrive in thousands, including bar-headed geese, flamingos and demoiselle cranes, while resident marsh crocodiles bask along exposed sandbars in the afternoon light.
                </p>
              </div>

              {/* 3. Rabari Culture */}
              <div className="space-y-4">
                <span className="font-serif text-3xl text-terracotta/40 italic">03</span>
                <h3 className="font-serif text-2xl md:text-3xl text-basalt">Rabari Culture</h3>
                <p className="text-base font-light text-basalt/80 leading-relaxed">
                  Jawai is not an empty game reserve; it is a lived pastoral home. For centuries, the Rabari herdsmen have shared these hills with leopards in remarkable harmony. Wild Jawai facilitates respectful village encounters where pastoral traditions are experienced as living culture, never as staged tourist props.
                </p>
              </div>

              {/* 4. Photography & Slow Exploration */}
              <div className="space-y-4">
                <span className="font-serif text-3xl text-terracotta/40 italic">04</span>
                <h3 className="font-serif text-2xl md:text-3xl text-basalt">Photography &amp; Slow Exploration</h3>
                <p className="text-base font-light text-basalt/80 leading-relaxed">
                  Jawai does not have to be an exhausting sprint between safari jeeps. Photographers, filmmakers and slow travellers can explore ancient hill temples, granite ridges, dawn birdsong and quiet twilight walks that standard commercial tours rush past.
                </p>
              </div>
            </div>
          </section>

          {/* Full FAQ Section */}
          <section className="mb-24 pt-16 border-t border-basalt/15">
            <span className="text-terracotta text-xs tracking-[0.3em] uppercase block mb-4 font-mono">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl md:text-5xl mb-12">
              Planning Your Journey to Jawai
            </h2>

            <div className="space-y-8 divide-y divide-basalt/10">
              <div className="pt-6">
                <h3 className="font-serif text-xl md:text-2xl text-basalt mb-2">
                  What is the nearest railway station to Jawai?
                </h3>
                <p className="text-base font-light text-basalt/75 leading-relaxed">
                  The closest station is Sumerpur–Jawai Bandh (Station Code: JWB), located 10 to 25 minutes from most camps and lodges.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl md:text-2xl text-basalt mb-2">
                  What is Sumerpur–Jawai Bandh railway station?
                </h3>
                <p className="text-base font-light text-basalt/75 leading-relaxed">
                  It is the primary railway halt serving the Jawai Dam and Sumerpur region in Pali district on the North Western Railway network.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl md:text-2xl text-basalt mb-2">
                  Was Jawai Bandh railway station renamed?
                </h3>
                <p className="text-base font-light text-basalt/75 leading-relaxed">
                  Yes, older references and regional maps name it &lsquo;Jawai Bandh&rsquo;. Indian Railways timetables list it as Sumerpur–Jawai Bandh, both retaining the station code <strong>JWB</strong>.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl md:text-2xl text-basalt mb-2">
                  What is the railway station code for Jawai?
                </h3>
                <p className="text-base font-light text-basalt/75 leading-relaxed">
                  The station code is <strong>JWB</strong>.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl md:text-2xl text-basalt mb-2">
                  How long does Falna to Jawai take?
                </h3>
                <p className="text-base font-light text-basalt/75 leading-relaxed">
                  Falna is 32 km away. A private road transfer takes 40 to 50 minutes, while connecting passenger trains take about 25 to 35 minutes.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl md:text-2xl text-basalt mb-2">
                  How can I reach Jawai from Abu Road?
                </h3>
                <p className="text-base font-light text-basalt/75 leading-relaxed">
                  Abu Road (ABR) is roughly 85 km away. Connecting trains take about 1 hour 20 minutes, or a private highway cab takes roughly 1.5 to 2 hours.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl md:text-2xl text-basalt mb-2">
                  How can I reach Jawai from Jodhpur Airport?
                </h3>
                <p className="text-base font-light text-basalt/75 leading-relaxed">
                  Jodhpur Airport (JDH) is approximately 150 km from Jawai. A direct private car takes 2.5 to 3 hours via NH 162/62. Alternatively, take a 15-minute taxi to Jodhpur Junction to catch a southbound train.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl md:text-2xl text-basalt mb-2">
                  Is there a train from Jodhpur to Jawai?
                </h3>
                <p className="text-base font-light text-basalt/75 leading-relaxed">
                  Yes, daily expresses including the Ranakpur Express (14707) and Surya Nagari Express (12479) link Jodhpur Junction directly to Sumerpur–Jawai Bandh in about 3.5 hours.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl md:text-2xl text-basalt mb-2">
                  Can I reach Jawai by bus?
                </h3>
                <p className="text-base font-light text-basalt/75 leading-relaxed">
                  Yes, state RSRTC and private buses run between Jodhpur and Sumerpur bus stand (3–4 hours). An onward rural taxi is then required to reach your safari camp.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl md:text-2xl text-basalt mb-2">
                  What is the cheapest way to reach Jawai?
                </h3>
                <p className="text-base font-light text-basalt/75 leading-relaxed">
                  Taking a 2S or Sleeper class train directly to Sumerpur–Jawai Bandh (tickets from ₹100–₹185 from Jodhpur), followed by local station pickup.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl md:text-2xl text-basalt mb-2">
                  Can Wild Jawai arrange railway station pickup?
                </h3>
                <p className="text-base font-light text-basalt/75 leading-relaxed">
                  Yes. Provide your train details and stay name in advance and we can arrange a private pickup directly from the platform.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl md:text-2xl text-basalt mb-2">
                  Can Wild Jawai arrange Jodhpur Airport pickup?
                </h3>
                <p className="text-base font-light text-basalt/75 leading-relaxed">
                  Yes, private chauffeur transfers from Jodhpur Airport directly to your Jawai camp are routinely coordinated for our travellers.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl md:text-2xl text-basalt mb-2">
                  How many days should I spend in Jawai?
                </h3>
                <p className="text-base font-light text-basalt/75 leading-relaxed">
                  At least two nights (allowing 3 to 4 safari drives) is recommended. Three nights permits a leisurely balance between wildlife tracking and cultural exploration.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl md:text-2xl text-basalt mb-2">
                  Is a leopard sighting guaranteed in Jawai?
                </h3>
                <p className="text-base font-light text-basalt/75 leading-relaxed">
                  No. Jawai&apos;s leopards live in an open, unfenced wilderness. While sighting probabilities are very high thanks to experienced local trackers, honest wildlife travel never promises guaranteed sightings.
                </p>
              </div>
            </div>
          </section>

          {/* Closing Editorial CTA */}
          <div className="text-center py-16 border-t border-basalt/15">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Ready to Shape Your Journey?
            </h2>
            <p className="text-base md:text-lg font-light text-basalt/70 mb-8 max-w-lg mx-auto">
              Tell us when you plan to travel and your preferred gateway. We handle stays, private safaris and all regional transfers.
            </p>
            <Link
              href="/plan"
              className="inline-block px-10 py-4 bg-basalt text-white text-xs tracking-widest uppercase hover:bg-terracotta transition-colors"
            >
              Start Your Plan
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
