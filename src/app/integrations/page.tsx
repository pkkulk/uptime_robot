import React from 'react';
import Link from 'next/link';
import { 
  Share2, 
  Slack, 
  MessageSquare, 
  Bell, 
  Mail, 
  Webhook, 
  ArrowLeft,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function IntegrationsPage() {
  const categories = [
    {
      title: "Team Communication",
      apps: ["Slack", "Discord", "Microsoft Teams", "Telegram"],
      icon: <MessageSquare className="w-5 h-5 text-emerald-500" />
    },
    {
      title: "Incident Management",
      apps: ["PagerDuty", "Opsgenie", "Splunk On-Call", "Squadcast"],
      icon: <Zap className="w-5 h-5 text-emerald-500" />
    },
    {
      title: "Direct Alerts",
      apps: ["SMS", "Voice Call", "Email", "Mobile Push"],
      icon: <Bell className="w-5 h-5 text-emerald-500" />
    },
    {
      title: "Developer Tools",
      apps: ["Webhooks", "Zapier", "Pushover", "Google Chat"],
      icon: <Webhook className="w-5 h-5 text-emerald-500" />
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
            <Share2 className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Seamless <span className="text-emerald-400">Integrations</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Get notified where your team already works. Connect UptimeRobot with over 30+ popular apps and services in just a few clicks.
          </p>
          <div className="pt-6">
            <Link href="/dashboard">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-12 h-16 text-lg rounded-md shadow-lg shadow-emerald-500/20 transition-all">
                Connect Your Apps
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- INTEGRATION GRID --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg">{cat.icon}</div>
                <h2 className="text-2xl font-bold text-slate-900">{cat.title}</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {cat.apps.map((app) => (
                  <Card key={app} className="border-slate-100 hover:border-emerald-500/20 hover:shadow-md transition-all group">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-slate-300 group-hover:text-emerald-500" />
                      </div>
                      <span className="font-semibold text-slate-700">{app}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WEBHOOKS SECTION (TECHNICAL HIGHLIGHT) --- */}
      <section className="py-24 bg-slate-50/50 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Badge className="bg-emerald-500/10 text-emerald-600 border-none uppercase tracking-widest text-[10px] font-bold">Advanced Feature</Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Powerful Webhooks <br />
              for your workflow.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Need something custom? Use our outgoing webhooks to trigger automated deployments, reboot servers, or update your own internal status pages.
            </p>
            <Link href="/dashboard" className="inline-flex items-center text-emerald-600 font-bold hover:underline">
              Read Webhook Documentation <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
          
          <div className="bg-[#161e2d] rounded-2xl p-6 shadow-2xl border border-slate-800">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
               <div className="w-2 h-2 rounded-full bg-emerald-500" />
               <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Webhook_Payload.json</span>
            </div>
            <pre className="text-emerald-400 font-mono text-sm leading-relaxed overflow-x-auto">
              <code>{`{
  "monitorID": "782194",
  "monitorURL": "https://api.myapp.com",
  "status": "down",
  "error": "Connection Timeout",
  "timestamp": "2026-01-18T15:30:00Z"
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-slate-900 uppercase italic tracking-tighter">Stay connected to your stack.</h2>
        <p className="text-slate-500 mb-10 text-lg">Never miss an incident, no matter where you are.</p>
        <Link href="/dashboard">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-12 h-16 rounded-md shadow-lg shadow-emerald-500/20">
            Start Integrating Now
          </Button>
        </Link>
      </section>
    </div>
  );
}