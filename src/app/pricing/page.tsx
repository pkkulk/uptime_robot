import React from 'react';
import Link from 'next/link';
import { Check, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic monitoring for personal projects.",
      features: [
        "50 Monitors",
        "5-minute check intervals",
        "1 Status Page",
        "Email alerts only",
        "1 month of logs"
      ],
      buttonText: "Register for Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$7",
      description: "Advanced features for professionals.",
      features: [
        "Unlimited Monitors",
        "1-minute check intervals",
        "20 Status Pages",
        "SSL Monitoring included",
        "SMS & Voice alerts",
        "1 year of logs",
        "Maintenance windows"
      ],
      buttonText: "Start 7-Day Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Scale with dedicated infrastructure.",
      features: [
        "30-second check intervals",
        "Unlimited Status Pages",
        "Advanced team management",
        "Dedicated account manager",
        "SLA Guarantee",
        "White-label branding"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans">
      {/* --- HEADER --- */}
      <section className="bg-[#0b121f] pt-40 pb-24 text-white px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Simple, <span className="text-emerald-400">transparent</span> pricing.
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Choose the plan that fits your monitoring needs. No hidden fees, no credit card required for the free plan.
          </p>
        </div>
      </section>

      {/* --- PRICING GRID --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                ? 'border-emerald-500 ring-4 ring-emerald-500/10 scale-105 z-10' 
                : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 px-4 py-1 text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </Badge>
              )}
              
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tighter text-slate-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-400 font-medium">/mo</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/dashboard">
                <Button 
                  className={`w-full h-14 font-bold text-lg rounded-xl transition-all ${
                    plan.popular 
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20' 
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- TRUST BADGE SECTION --- */}
      <section className="py-16 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Trusted by modern engineering teams</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale contrast-125">
             <div className="text-2xl font-black italic">NASA</div>
             <div className="text-2xl font-black">NETFLIX</div>
             <div className="text-2xl font-black uppercase tracking-widest">Siemens</div>
             <div className="text-2xl font-black uppercase">Sony</div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 bg-[#0b121f] text-white text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Still have questions?</h2>
          <p className="text-slate-400">Our support team is online 24/7 to help you set up your first monitor.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 h-12 px-8">
                Visit Help Center
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold h-12 px-8">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}