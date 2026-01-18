import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowLeft,
  BellRing,
  ShieldAlert
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SSLMonitoringPage() {
  const benefits = [
    {
      title: "Expiry Notifications",
      desc: "Get notified 30, 14, and 7 days before your certificate expires so you have plenty of time to renew.",
      icon: <BellRing className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Error Detection",
      desc: "Identify common SSL configuration issues, protocol mismatches, or broken chains before your users do.",
      icon: <ShieldAlert className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Automated Tracking",
      desc: "No manual data entry. Simply provide the URL and we'll automatically track the certificate details.",
      icon: <Lock className="w-6 h-6 text-emerald-600" />
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
            <ShieldCheck className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            SSL <span className="text-emerald-400">Monitoring</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Don't let an expired SSL certificate hurt your SEO or scare away your visitors. We track your certificates and alert you before they expire.
          </p>
          <div className="pt-6">
            <Link href="/dashboard">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-12 h-16 text-lg rounded-md shadow-lg shadow-emerald-500/20 transition-all">
                Start Monitoring SSL
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- DETAILED VALUE PROPOSITION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Maintain trust with <br />
              flawless security.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Google and other search engines prioritize secure websites. Our SSL monitor ensures your site remains 'HTTPS' compliant 24/7 without you having to check your calendar.
            </p>
            
            <div className="grid gap-6">
              {[
                { title: "Avoid 'Not Secure' warnings", desc: "Prevent browser warnings that kill conversion rates." },
                { title: "Monitor any TLD", desc: "We support monitoring certificates for all top-level domains." },
                { title: "Multi-point verification", desc: "Checks are verified from global locations to ensure accuracy." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/30">
                  <div className="mt-1 bg-emerald-100 p-1 rounded-full h-fit">
                    <CheckCircle2 className="text-emerald-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* SSL STATUS MOCKUP */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white rounded-2xl p-6 shadow-2xl border border-slate-100">
               <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center">
                        <Lock className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="font-bold text-slate-800">Certificate Status</span>
                    </div>
                    <Badge className="bg-emerald-500 text-white border-none">VALID</Badge>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <div className="flex justify-between text-sm">
                       <span className="text-slate-500">Issuer</span>
                       <span className="text-slate-900 font-medium italic">Let's Encrypt</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-slate-500">Expires in</span>
                       <span className="text-emerald-600 font-bold tracking-tight">64 days</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full">
                       <div className="w-2/3 h-full bg-emerald-500 rounded-full" />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS CARDS --- */}
      <section className="py-24 bg-slate-50/50 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="border-none shadow-sm bg-white p-4 hover:shadow-md transition-shadow">
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
        <h2 className="text-4xl font-bold mb-6 text-slate-900 italic uppercase tracking-tight">Stay secure, stay online.</h2>
        <p className="text-slate-500 mb-10 text-lg">Never deal with an unexpected SSL outage again.</p>
        <Link href="/dashboard">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-12 h-16 rounded-md shadow-lg shadow-emerald-500/20">
            Set Up SSL Monitoring
          </Button>
        </Link>
      </section>
    </div>
  );
}