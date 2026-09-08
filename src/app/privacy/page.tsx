import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Notice | Wild Jawai",
  description: "How Wild Jawai handles traveller enquiries, booking information, and personal communication.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 md:pt-36 bg-ivory text-basalt min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        <span className="text-terracotta text-xs tracking-[0.3em] uppercase mb-4 block">
          Legal & Privacy
        </span>
        <h1 className="font-serif text-4xl md:text-6xl mb-6">
          Privacy Notice
        </h1>
        <p className="text-xs text-basalt/50 uppercase tracking-widest mb-16 pb-8 border-b border-basalt/10">
          Last updated: August 2026 &middot; Applicable to wildjawai.in
        </p>

        <div className="space-y-12 text-base md:text-lg font-light leading-relaxed text-basalt/85">
          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-basalt">1. Overview</h2>
            <p>
              Wild Jawai is a boutique travel company based in Rajasthan, India. This privacy notice explains how we collect, handle and protect information when you enquire about a safari or itinerary through our website, WhatsApp, phone or email.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-basalt">2. What Happens When You Enquire</h2>
            <p>
              When you use our trip planner at <Link href="/plan" className="underline underline-offset-4 hover:text-terracotta">/plan</Link>, you can review and choose how you wish to communicate with us. If you submit via WhatsApp, the planner compiles a structured trip brief on your device and opens WhatsApp for you to review before sending. No details are transmitted until you confirm.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-basalt">3. Information You Choose to Share</h2>
            <p>
              To design and coordinate your journey, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-basalt/75">
              <li>Names and contact information (email address, WhatsApp/telephone number)</li>
              <li>Estimated travel dates, trip duration and group composition</li>
              <li>Preferences regarding safari pace, stay categories and local experiences</li>
              <li>Arrival points, intercity routing and transfer requirements</li>
              <li>Any mobility, dietary or special comfort needs you voluntarily share</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-basalt">4. How We Use Your Information</h2>
            <p>
              Information shared with Wild Jawai is used exclusively to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-basalt/75">
              <li>Understand your journey requirements and formulate a tailored itinerary</li>
              <li>Check live property availability and negotiate private vehicle arrangements</li>
              <li>Provide a transparent, line-item quotation prior to booking</li>
              <li>Coordinate on-ground logistics with handpicked camps, drivers and trackers once confirmed</li>
              <li>Provide direct assistance during your stay in Jawai</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-basalt">5. Data Sharing & Third Parties</h2>
            <p>
              We do not sell, rent or trade personal information to marketers or advertisers. We share specific details only with verified accommodation providers, licensed vehicle operators and safari guides strictly as necessary to execute your confirmed itinerary.
            </p>
            <p>
              Third-party communication tools (such as WhatsApp/Meta and your email provider) process data in accordance with their respective privacy policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-basalt">6. International Travellers & User Rights</h2>
            <p>
              Many of our guests travel from the UK, European Union, North America and across Asia. Regardless of where you live, you may at any time:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-basalt/75">
              <li>Request a copy of the details we hold concerning your enquiry</li>
              <li>Ask for corrections to inaccurate dates, names or preferences</li>
              <li>Request the erasure of your contact details once your journey or enquiry is complete</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-basalt">7. Retention & Security</h2>
            <p>
              We retain correspondence only as long as necessary to complete your travel planning, fulfill service commitments, or satisfy Indian statutory tax/accounting requirements. We implement appropriate administrative safeguards to prevent unauthorized access.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-basalt/10">
            <h2 className="font-serif text-2xl text-basalt">8. Contact Us</h2>
            <p>
              For privacy enquiries or to update your contact preferences, reach us directly:
            </p>
            <p className="text-sm">
              Email: <a href={CONTACT.mailtoUrl} className="underline underline-offset-4 hover:text-terracotta">{CONTACT.email}</a><br />
              Telephone: <a href={CONTACT.telUrl} className="underline underline-offset-4 hover:text-terracotta">{CONTACT.phone}</a><br />
              WhatsApp: <a href={CONTACT.whatsAppUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-terracotta">Direct Chat</a><br />
              Location: {CONTACT.location}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
