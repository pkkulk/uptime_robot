import React from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Server, 
  Activity, 
  CheckCircle2, 
  ArrowLeft,
  Network,
  Settings2
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PortMonitoringPage() {
  const benefits = [
    {
      title: "Any Port, Any Service",
      desc: "Monitor standard ports like 80 (HTTP), 443 (HTTPS), 21 (FTP), and 25 (SMTP), or define any custom TCP port.",
      icon: <Network className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Global Connectivity",
      desc: "We verify port availability from 12 global nodes to ensure your services are reachable from anywhere.",
      icon: <Server className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Custom Timeouts",
      desc: "Set specific connection thresholds to match the expected latency of your infrastructure.",
      icon: <Settings2 className="w-6 h-6 text-emerald-600" />
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
            <Zap className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Port <span className="text-emerald-400">Monitoring</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Ensure your critical network services are responsive. Monitor SMTP, FTP, MySQL, or any custom TCP service with ease.
          </p>
          <div className="pt-6">
            <Link href="/dashboard">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-12 h-16 text-lg rounded-md shadow-lg shadow-emerald-500/20 transition-all">
                Start Port Checks
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL VALUE SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Monitor beyond the <br />
              web layer.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Website monitoring isn't enough when your mail server or database goes silent. Our port monitor verifies the underlying services that keep your business running.
            </p>
            
            <div className="grid gap-6">
              {[
                { title: "TCP Connection Checks", desc: "Verify three-way handshakes for reliable service status." },
                { title: "Custom Port Support", desc: "Monitor non-standard ports used by your internal applications." },
                { title: "Fast Verification", desc: "Instant multi-location confirmation to eliminate false positives." }
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
          
          {/* PORT STATUS MOCKUP */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-[#161e2d] rounded-2xl p-8 shadow-2xl border border-slate-800">
               <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <Server className="text-emerald-500 w-5 h-5" />
                      <span className="text-slate-200 font-mono text-sm">DB_CLUSTER_01</span>
                    </div>
                    <Badge className="bg-emerald-500 text-white border-none text-[10px]">LISTENING</Badge>
                  </div>
                  
                  <div className="space-y-4 pt-2">
                    <div className="flex justify-between text-xs font-mono">
                       <span className="text-slate-500 uppercase">Target Port</span>
                       <span className="text-emerald-400">3306 (MySQL)</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                       <span className="text-slate-500 uppercase">Response Time</span>
                       <span className="text-slate-300">14ms</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono pt-4 border-t border-slate-800">
                       <span className="text-slate-500 uppercase italic">Connection State</span>
                       <span className="text-emerald-500">ESTABLISHED</span>
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
        <h2 className="text-4xl font-bold mb-6 text-slate-900">Get complete infrastructure visibility.</h2>
        <p className="text-slate-500 mb-10 text-lg">Ensure every layer of your network is responsive and reliable.</p>
        <Link href="/dashboard">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-12 h-16 rounded-md shadow-lg shadow-emerald-500/20">
            Set Up Port Monitoring
          </Button>
        </Link>
      </section>
    </div>
  );
}