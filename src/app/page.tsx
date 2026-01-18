import React from 'react';
import Link from 'next/link';
import { 
  Check, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Bell, 
  BarChart3, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NOTE: Navigation is now managed globally in layout.tsx. 
          The Hero section starts with a pt-32 to account for the fixed Navbar height.
      */}

      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#0b121f] pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              The world's leading <br />
              <span className="text-emerald-400">monitoring service.</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-lg">
              Join over 2,000,000 users. Get 50 monitors for free. Reliable, accurate, and easy to use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 h-14 text-lg">
                  Start monitoring in 30s
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <img src="https://uptimerobot.com/assets/img/static/g2-badge.svg" alt="G2" className="h-10 opacity-80" />
              <img src="https://uptimerobot.com/assets/img/static/capterra-badge.svg" alt="Capterra" className="h-10 opacity-80" />
            </div>
          </div>

          {/* Dashboard Preview Mockup */}
          <div className="relative">
            <div className="bg-[#161e2d] rounded-xl border border-slate-800 shadow-2xl overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-[#1c2537] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
                <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Dashboard Preview</div>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { name: "Main Website", status: "up", time: "100.00%" },
                  { name: "API Server", status: "up", time: "99.99%" },
                  { name: "Database Cluster", status: "down", time: "98.42%" }
                ].map((monitor, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#0b121f] rounded-lg border border-slate-800/50">
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${monitor.status === 'up' ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
                      <span className="text-slate-200 text-sm font-medium">{monitor.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-slate-500">{monitor.time}</span>
                      <Badge variant="outline" className={monitor.status === 'up' ? 'text-emerald-400 border-emerald-500/20' : 'text-rose-400 border-rose-500/20'}>
                        {monitor.status.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LOGO STRIP --- */}
      <div className="py-12 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale">
            <span className="text-xl font-bold italic tracking-tighter">NASA</span>
            <span className="text-xl font-bold">NETFLIX</span>
            <span className="text-xl font-bold uppercase">Siemens</span>
            <span className="text-xl font-bold uppercase tracking-widest">Disney</span>
            <span className="text-xl font-bold">SONY</span>
          </div>
        </div>
      </div>

      {/* --- FEATURE SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50 px-4 py-1">Features</Badge>
          <h2 className="text-4xl font-bold tracking-tight">A platform built for reliability.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureItem 
            icon={<Globe className="w-6 h-6" />}
            title="Website Monitoring"
            desc="We check your website every minute from 12 different locations across 5 continents."
            href="/features/website-monitoring"
          />
          <FeatureItem 
            icon={<ShieldCheck className="w-6 h-6" />}
            title="SSL Monitoring"
            desc="Don't lose visitors because of an expired SSL certificate. We notify you before it happens."
            href="/features/ssl-monitoring"
          />
          <FeatureItem 
            icon={<Zap className="w-6 h-6" />}
            title="Port Monitoring"
            desc="Check if your SMTP, FTP, or any other service is running on a specific port."
            href="/features/port-monitoring"
          />
          <FeatureItem 
            icon={<BarChart3 className="w-6 h-6" />}
            title="Cron Monitoring"
            desc="Heartbeat monitoring for your recurring background jobs and intranet services."
            href="/features/cron-monitoring"
          />
          <FeatureItem 
            icon={<Bell className="w-6 h-6" />}
            title="Keyword Monitoring"
            desc="Check if a specific keyword is present or missing on a page to ensure it's loading right."
            href="/features/keyword-monitoring"
          />
          <FeatureItem 
            icon={<Clock className="w-6 h-6" />}
            title="Maintenance Windows"
            desc="Schedule maintenance periods where monitoring is paused so you don't get false alerts."
            href="/features/maintenance"
          />
        </div>
      </section>

      {/* --- PRICING --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Simple pricing for everyone.</h2>
            <p className="text-slate-500">Free forever for personal use, or upgrade for advanced features.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard 
              tier="Free" 
              price="$0" 
              features={["50 Monitors", "5-minute intervals", "1 Status Page"]} 
            />
            <PricingCard 
              tier="Pro" 
              price="$7" 
              highlight 
              features={["Unlimited Monitors", "1-minute intervals", "20 Status Pages", "SSL Monitoring", "SMS Alerts"]} 
            />
            <PricingCard 
              tier="Enterprise" 
              price="Custom" 
              features={["Custom Intervals", "Unlimited Status Pages", "Team Management", "Dedicated Support"]} 
            />
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Common questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">How often do you check my website?</AccordionTrigger>
            <AccordionContent>
              On the free plan, we check every 5 minutes. Pro plans offer checks as frequent as every 30 seconds.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">Can I monitor services other than websites?</AccordionTrigger>
            <AccordionContent>
              Yes! You can monitor ports (like 80, 443, 21), keywords on a page, and even heartbeat signals from your own scripts.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">How do the alerts work?</AccordionTrigger>
            <AccordionContent>
              When a monitor goes down, we verify the status from multiple global locations. If confirmed, we instantly notify you via email, SMS, Slack, or Telegram.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* --- FOOTER --- */}
     
    </div>
  );
}

// Helper Components
function FeatureItem({ icon, title, desc, href }: { icon: React.ReactNode; title: string; desc: string; href?: string }) {
  return (
    <Card className="border-slate-100 hover:border-emerald-500/20 transition-all group shadow-sm hover:shadow-xl hover:shadow-emerald-500/5">
      <CardContent className="pt-8 space-y-4">
        <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        <Link href={href || "#"} className="text-emerald-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
          Learn more <ArrowRight className="w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

function PricingCard({ tier, price, features, highlight = false }: { tier: string; price: string; features: string[]; highlight?: boolean }) {
  return (
    <div className={`p-8 rounded-2xl border ${highlight ? 'border-emerald-500 ring-4 ring-emerald-500/10' : 'border-slate-200'} relative bg-white transition-transform hover:scale-[1.02]`}>
      {highlight && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500">MOST POPULAR</Badge>}
      <h3 className="text-lg font-bold mb-2">{tier}</h3>
      <div className="text-4xl font-black mb-6">{price}<span className="text-base text-slate-400 font-normal">/mo</span></div>
      <ul className="space-y-4 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
            <Check className="w-4 h-4 text-emerald-500 shrink-0" /> {f}
          </li>
        ))}
      </ul>
      <Link href="/dashboard">
        <Button className={`w-full h-12 font-bold ${highlight ? 'bg-emerald-500 hover:bg-emerald-600' : ''}`} variant={highlight ? 'default' : 'outline'}>
          Start for Free
        </Button>
      </Link>
    </div>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  const linkMapping: Record<string, string> = {
    "Features": "/",
    "Integrations": "/integrations",
    "Pricing": "/pricing",
    "Status Pages": "/dashboard",
    "Blog": "/blog"
  };

  return (
    <div className="space-y-4">
      <h4 className="text-white font-bold">{title}</h4>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link}>
            <Link href={linkMapping[link] || "#"} className="hover:text-emerald-400 transition-colors">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}