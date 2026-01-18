import React from 'react';
import Link from 'next/link';
import { 
  Bell, 
  Search, 
  FileText, 
  CheckCircle2, 
  ArrowLeft,
  Terminal,
  SearchCode
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function KeywordMonitoringPage() {
  const benefits = [
    {
      title: "Content Verification",
      desc: "Perfect for ensuring your database-driven content is actually appearing, even if the server returns a 200 OK.",
      icon: <Search className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Error Detection",
      desc: "Instantly alert your team if specific error strings like 'Database Connection Failed' or '404' appear on your page.",
      icon: <SearchCode className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Flexible Logic",
      desc: "Alert when a keyword exists OR when it disappears. Great for monitoring dynamic inventories or stock levels.",
      icon: <FileText className="w-6 h-6 text-emerald-600" />
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
            <Bell className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Keyword <span className="text-emerald-400">Monitoring</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Go beyond simple pings. Monitor your website's content to ensure dynamic pages are loading correctly and critical information is always present.
          </p>
          <div className="pt-6">
            <Link href="/dashboard">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-12 h-16 text-lg rounded-md shadow-lg shadow-emerald-500/20 transition-all">
                Start Keyword Checks
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL VALUE PROPOSITION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Verify what your <br />
              users actually see.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Sometimes a website returns a successful status code even when the content is broken. Keyword monitoring scans the HTML of your page to verify its integrity.
            </p>
            
            <div className="grid gap-6">
              {[
                { title: "Check for existence", desc: "Ensure your brand name or a specific product is visible." },
                { title: "Check for absence", desc: "Get alerted if 'Out of stock' or error messages appear." },
                { title: "Case-sensitive matching", desc: "Fine-tune your monitoring with strict string matching." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
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
          
          {/* CONTENT SCANNER MOCKUP */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-[#161e2d] rounded-2xl p-6 shadow-2xl border border-slate-800">
               <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-emerald-500" />
                    <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Scanner_Log</span>
                  </div>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px]">SUCCESS</Badge>
               </div>
               <div className="space-y-3 font-mono text-xs">
                  <p className="text-slate-500 italic uppercase tracking-tighter">Running scan for: "Welcome to UptimeRobot"</p>
                  <div className="p-3 bg-slate-900/50 rounded border border-slate-800 text-slate-300 leading-relaxed overflow-x-auto">
                    {`<html>
  <body>
    <h1>Welcome to UptimeRobot</h1> 
    </body>
</html>`}
                  </div>
                  <p className="text-emerald-500 font-bold uppercase tracking-widest pt-2">Match confirmed</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS GRID --- */}
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
        <h2 className="text-4xl font-bold mb-6 text-slate-900">Ensure your content stays consistent.</h2>
        <p className="text-slate-500 mb-10 text-lg">Start monitoring what actually matters on your pages.</p>
        <Link href="/dashboard">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-12 h-16 rounded-md shadow-lg shadow-emerald-500/20">
            Set Up Keyword Monitoring
          </Button>
        </Link>
      </section>
    </div>
  );
}