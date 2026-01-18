import React from 'react';
import Link from 'next/link';
import { 
  Globe, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowLeft,
  Server,
  Activity
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function WebsiteMonitoringPage() {
  const benefits = [
    {
      title: "1-Minute Intervals",
      desc: "Don't wait for users to report errors. Our system checks your site every 60 seconds.",
      icon: <Activity className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Global Verification",
      desc: "Downtime is verified from 12 global locations across 5 continents to prevent false alerts.",
      icon: <Server className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Advanced Logic",
      desc: "Support for HTTP(S), POST, PUT, and custom headers to monitor complex web applications.",
      icon: <Zap className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0b121f] pt-32 pb-24 text-white px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
            <Globe className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Website <span className="text-emerald-400">Monitoring</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Get notified the second your website or API becomes unreachable. Join 2 million users who rely on the world's leading uptime service.
          </p>
          <div className="pt-6">
            <Link href="/dashboard">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-12 h-16 text-lg rounded-md shadow-lg shadow-emerald-500/20 transition-all">
                Start Monitoring in 30s
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- DETAILED FEATURE SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Reliable monitoring for <br />
              modern infrastructure.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Our website monitoring service does more than just check for 200 OK responses. We analyze the full connection lifecycle to provide accurate uptime reports.
            </p>
            
            <div className="grid gap-6">
              {[
                { title: "HTTP(S) & API support", desc: "Monitor simple pages or complex REST APIs." },
                { title: "Custom headers", desc: "Send specific User-Agents or Authentication tokens." },
                { title: "SSL certificate tracking", desc: "Automatic alerts for expiring or invalid certificates." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="mt-1 bg-emerald-100 p-1 rounded-full h-fit">
                    <CheckCircle2 className="text-emerald-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* VISUAL DASHBOARD MOCKUP */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white rounded-2xl p-4 shadow-2xl border border-slate-100">
               <div className="bg-[#161e2d] rounded-xl overflow-hidden">
                  <div className="px-4 py-3 bg-[#1c2537] flex items-center justify-between">
                    <div className="flex gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                       <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                       <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">LIVE_MONITOR_VIEW</span>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                       <div className="flex items-center gap-3">
                         <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                         <span className="text-emerald-400 font-mono text-sm uppercase">Site_Up</span>
                       </div>
                       <span className="text-slate-400 text-xs font-mono">Latency: 42ms</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full w-[99.9%] bg-emerald-500" />
                    </div>
                    <p className="text-slate-500 text-[10px] text-center font-mono">Uptime: 99.998%</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-24 bg-slate-50/50 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="border-none shadow-sm bg-white p-4 hover:translate-y-[-4px] transition-all">
                <CardContent className="pt-6 space-y-4">
                  <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-slate-900">Start monitoring your website today.</h2>
        <p className="text-slate-500 mb-10 text-lg">Join 2,000,000+ users. 50 monitors for free. No credit card required.</p>
        <Link href="/dashboard">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-12 h-16 rounded-md shadow-lg shadow-emerald-500/20">
            Create Your Account
          </Button>
        </Link>
      </section>
    </div>
  );
}