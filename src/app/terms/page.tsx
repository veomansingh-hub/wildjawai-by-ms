import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Enquiry & Booking Terms | Wild Jawai",
  description: "Wild Jawai enquiry, pricing transparency, wildlife viewing principles, payment, and cancellation terms.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 md:pt-36 bg-ivory text-basalt min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        <span className="text-terracotta text-xs tracking-[0.3em] uppercase mb-4 block">
          Clear Before You Commit
        </span>
        <h1 className="font-serif text-4xl md:text-6xl mb-6">
          Enquiry & Booking Terms
        </h1>
        <p className="text-xs text-basalt/50 uppercase tracking-widest mb-16 pb-8 border-b border-basalt/10">
          Last updated: August 2026 &middot; Applicable to wildjawai.in
        </p>

        <div className="space-y-12 text-base md:text-lg font-light leading-relaxed text-basalt/85">
          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-basalt">1. Enquiries Are Not Confirmed Bookings</h2>
            <p>
              Submitting a trip plan via our website, exchanging messages on WhatsApp, or receiving a draft itinerary does not constitute a confirmed reservation. A journey is confirmed only after:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-basalt/75">
              <li>Accommodation and safari vehicle availability are formally re-verified for your dates</li>
              <li>You receive and approve a written proposal itemising named stays, safari drive counts and inclusions</li>
              <li>Required deposit or payment terms have been agreed upon and received</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-basalt">2. Honest Wildlife Principles</h2>
            <p>
              <strong>Wild animals cannot be scheduled.</strong> Jawai&apos;s leopards live in an unfenced, natural granite habitat alongside local Rabari pastoralists. While our local trackers possess generations of behavioural understanding and sightings are frequent, Wild Jawai strictly avoids guaranteeing sightings. 
            </p>
            <p>
              We prioritize respectful viewing distances, conservation ethics, and unhurried tracking over aggressive commercial chases.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-basalt">3. Transparent Quotations & Pricing</h2>
            <p>
              Trip costs depend on your chosen dates, duration, party size, accommodation category, number of private 4x4 drives, and intercity road transfer requirements. Wild Jawai quotes all costs clearly before requesting confirmation. There are no hidden booking commissions or post-arrival markups.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-basalt">4. Changes, Delays & Cancellations</h2>
            <p>
              Individual lodges, safari camps, and transport partners maintain specific advance reservation and cancellation rules. These specific policies are disclosed transparently in your formal proposal prior to payment.
            </p>
            <p>
              If your flight, train, or travel schedule changes, notify Wild Jawai immediately. As your direct on-ground coordinator, we actively liaise with our partners to reschedule drives and transfers wherever feasible.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-basalt">5. Traveller Responsibilities & Safety</h2>
            <ul className="list-disc pl-6 space-y-2 text-basalt/75">
              <li>Open 4x4 safaris operate over natural granite boulders, sandy riverbeds and uneven bush tracks. Please inform us in advance of any mobility or spinal comfort considerations so appropriate vehicles and routes can be chosen.</li>
              <li>Guests must adhere to safety guidance provided by safari drivers, trackers, and lodge staff at all times.</li>
              <li>Travellers are strongly advised to secure comprehensive international travel and medical insurance prior to their Rajasthan trip.</li>
            </ul>
          </section>

          <section className="space-y-4 pt-6 border-t border-basalt/10">
            <h2 className="font-serif text-2xl text-basalt">6. Questions Prior to Booking</h2>
            <p>
              If any aspect of your upcoming journey requires clarification, speak directly with our team:
            </p>
            <p className="text-sm">
              Email: <a href={CONTACT.mailtoUrl} className="underline underline-offset-4 hover:text-terracotta">{CONTACT.email}</a><br />
              Telephone: <a href={CONTACT.telUrl} className="underline underline-offset-4 hover:text-terracotta">{CONTACT.phone}</a><br />
              WhatsApp: <a href={CONTACT.whatsAppUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-terracotta">Direct Chat</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
