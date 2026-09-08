"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const steps = [
  { id: "when", title: "WHEN", question: "When are you hoping to visit Jawai?" },
  { id: "who", title: "WHO", question: "Who is travelling?" },
  { id: "what", title: "THE FOCUS", question: "What draws you to Jawai?" },
  { id: "stay", title: "STAY STYLE", question: "How would you prefer to stay?" },
  { id: "arrival", title: "ARRIVAL", question: "Where will you be arriving from?" },
  { id: "else", title: "ANYTHING ELSE", question: "Is there anything else we should know?" },
  { id: "contact", title: "CONTACT", question: "How can we reach you?" },
];

export default function EnquiryPlanner() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // State for form data
  const [when, setWhen] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [focusOptions, setFocusOptions] = useState<string[]>([]);
  const [stayStyle, setStayStyle] = useState("");
  const [arrival, setArrival] = useState("");
  const [anythingElse, setAnythingElse] = useState("");
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", phone: "" });

  // Validation
  const canGoNext = () => {
    switch (currentStep) {
      case 0: return when.trim().length > 0;
      case 1: return parseInt(adults) > 0;
      case 2: return focusOptions.length > 0;
      case 3: return stayStyle.length > 0;
      case 4: return arrival.trim().length > 0;
      case 5: return true; // Optional step
      case 6: return contactInfo.name.length > 0 && contactInfo.email.includes("@");
      default: return true;
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1 && canGoNext()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const submit = () => {
    if (canGoNext()) {
      setIsSubmitted(true);
    }
  };

  const toggleFocus = (option: string) => {
    setFocusOptions(prev => 
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    );
  };

  const isLastStep = currentStep === steps.length - 1;

  if (isSubmitted) {
    return (
      <div className="min-h-[100svh] bg-ivory text-basalt flex flex-col items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-center"
        >
          <span className="text-terracotta text-xs tracking-widest uppercase mb-8 block">Enquiry Received</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
            THANK YOU, <br /> {contactInfo.name.toUpperCase()}.
          </h1>
          <p className="text-xl font-light text-basalt/80 mb-16">
            We have received your details. One of our local specialists will review your preferences and contact you shortly to begin shaping your journey.
          </p>
          <Link href="/" className="inline-block border border-basalt px-10 py-5 text-xs tracking-widest uppercase hover:bg-basalt hover:text-white transition-colors">
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[100svh] bg-ivory text-basalt flex flex-col">
      {/* Header */}
      <div className="px-6 lg:px-12 py-8 flex justify-between items-center border-b border-basalt/10 pt-12 md:pt-8">
        <Link href="/" className="text-xs tracking-widest uppercase hover:text-terracotta transition-colors flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Return
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-24 md:w-48 h-[1px] bg-basalt/10">
            <div 
              className="h-full bg-terracotta transition-all duration-500 ease-out" 
              style={{ width: `${((currentStep) / (steps.length - 1)) * 100}%` }} 
            />
          </div>
          <span className="font-serif text-sm italic text-terracotta">
            {String(currentStep + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 mt-12 md:mt-0">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            >
              <span className="text-terracotta text-xs tracking-widest uppercase mb-6 block">
                {steps[currentStep].title}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">
                {steps[currentStep].question}
              </h1>

              {/* Form Controls */}
              <div className="min-h-[250px]">
                
                {currentStep === 0 && (
                  <input 
                    type="text" 
                    value={when}
                    onChange={(e) => setWhen(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter' && canGoNext()) nextStep(); }}
                    placeholder="E.g. November this year, or exact dates" 
                    className="w-full bg-transparent border-b border-basalt/30 text-2xl md:text-3xl font-light py-4 focus:outline-none focus:border-terracotta transition-colors placeholder:text-basalt/20"
                    autoFocus
                  />
                )}

                {currentStep === 1 && (
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <label className="text-xs tracking-widest uppercase text-basalt/50 mb-4 block">Adults</label>
                      <input 
                        type="number" min="1" 
                        value={adults} onChange={(e) => setAdults(e.target.value)}
                        className="w-full bg-transparent border-b border-basalt/30 text-3xl font-light py-4 focus:outline-none focus:border-terracotta transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase text-basalt/50 mb-4 block">Children</label>
                      <input 
                        type="number" min="0" 
                        value={children} onChange={(e) => setChildren(e.target.value)}
                        className="w-full bg-transparent border-b border-basalt/30 text-3xl font-light py-4 focus:outline-none focus:border-terracotta transition-colors" 
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="flex flex-wrap gap-4">
                    {["Leopard safari", "Photography", "Culture", "Birdlife", "Relaxation", "Rajasthan journey", "Not sure yet"].map(option => (
                      <button
                        key={option}
                        onClick={() => toggleFocus(option)}
                        className={`px-8 py-5 border text-sm transition-all duration-300 ${
                          focusOptions.includes(option) 
                            ? "border-basalt bg-basalt text-white shadow-lg" 
                            : "border-basalt/20 hover:border-basalt/50 text-basalt"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="flex flex-col gap-4">
                    {[
                      { name: "Local comfort", desc: "Authentic, simple, clean camps." },
                      { name: "Character", desc: "Boutique stays with local charm." },
                      { name: "Quiet luxury", desc: "Exceptional design and privacy." },
                      { name: "Help me choose", desc: "I'll decide later based on recommendations." }
                    ].map(style => (
                      <button
                        key={style.name}
                        onClick={() => setStayStyle(style.name)}
                        className={`text-left p-8 border transition-all duration-300 group ${
                          stayStyle === style.name 
                            ? "border-basalt bg-basalt text-white shadow-xl" 
                            : "border-basalt/20 hover:border-basalt/50"
                        }`}
                      >
                        <span className="block text-2xl font-serif mb-2 group-hover:text-terracotta transition-colors">{style.name}</span>
                        <span className={`text-base font-light ${stayStyle === style.name ? "text-white/70" : "text-basalt/50"}`}>{style.desc}</span>
                      </button>
                    ))}
                  </div>
                )}

                {currentStep === 4 && (
                  <div>
                    <input 
                      type="text" 
                      value={arrival} onChange={(e) => setArrival(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter' && canGoNext()) nextStep(); }}
                      placeholder="E.g. Udaipur, Jodhpur, or New Delhi" 
                      className="w-full bg-transparent border-b border-basalt/30 text-2xl md:text-3xl font-light py-4 focus:outline-none focus:border-terracotta transition-colors placeholder:text-basalt/20"
                    />
                    <p className="text-sm font-light text-basalt/50 mt-6">We can coordinate private transfers from anywhere in Rajasthan.</p>
                  </div>
                )}

                {currentStep === 5 && (
                  <textarea 
                    value={anythingElse} onChange={(e) => setAnythingElse(e.target.value)}
                    placeholder="Any specific requests, mobility requirements, or celebrations?" 
                    rows={4}
                    className="w-full bg-transparent border-b border-basalt/30 text-xl font-light py-4 focus:outline-none focus:border-terracotta transition-colors placeholder:text-basalt/20 resize-none"
                  />
                )}

                {currentStep === 6 && (
                  <div className="space-y-8">
                    <input 
                      type="text" value={contactInfo.name} onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                      placeholder="Your Name" 
                      className="w-full bg-transparent border-b border-basalt/30 text-xl font-light py-4 focus:outline-none focus:border-terracotta transition-colors placeholder:text-basalt/20"
                    />
                    <input 
                      type="email" value={contactInfo.email} onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                      placeholder="Email Address" 
                      className="w-full bg-transparent border-b border-basalt/30 text-xl font-light py-4 focus:outline-none focus:border-terracotta transition-colors placeholder:text-basalt/20"
                    />
                    <input 
                      type="tel" value={contactInfo.phone} onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                      onKeyDown={(e) => { if (e.key === 'Enter' && canGoNext()) submit(); }}
                      placeholder="WhatsApp Number (with country code)" 
                      className="w-full bg-transparent border-b border-basalt/30 text-xl font-light py-4 focus:outline-none focus:border-terracotta transition-colors placeholder:text-basalt/20"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-12 flex justify-between items-center pt-8 border-t border-basalt/10 pb-12">
            <button 
              onClick={prevStep}
              className={`text-xs tracking-widest uppercase transition-opacity flex items-center gap-2 hover:text-terracotta ${currentStep === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            
            <button 
              onClick={isLastStep ? submit : nextStep}
              disabled={!canGoNext()}
              className={`px-10 py-5 text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-3 ${
                canGoNext() 
                  ? "bg-basalt text-white hover:bg-terracotta cursor-pointer" 
                  : "bg-basalt/10 text-basalt/30 cursor-not-allowed"
              }`}
            >
              {isLastStep ? "Send Enquiry" : "Continue"}
              {!isLastStep && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
