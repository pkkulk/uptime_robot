import React from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  Clock, 
  Bell, 
  Terminal, 
  CheckCircle2, 
  ArrowLeft,
  Settings,
  ShieldAlert
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CronMonitoringPage() {
  const benefits = [
    {
      title: "Flexible Timing",
      desc: "Support for any cron expression. Whether your job runs every minute or once a month.",
      icon: <Clock className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Smart Thresholds",
      desc: "Prevent false alerts by setting custom grace periods for scripts that might run late.",
      icon: <ShieldAlert className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Simple Integration",
      desc: "Integrate with a single HTTP request. Compatible with any language or environment.",
      icon: <Settings className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0b121f] pt-32 pb-24 text-white px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
            <BarChart3 className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Cron <span className="text-emerald-400">Monitoring</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Ensure your recurring background jobs, database backups, and scripts are running as expected. If they don't check in, we notify you immediately.
          </p>
          <div className="pt-6">
            <Link href="/dashboard">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-12 h-16 text-lg rounded-md shadow-lg shadow-emerald-500/20 transition-all">
                Start Monitoring Crons
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Prevent silent failures</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Standard monitoring won't help if a background task fails. With Heartbeat monitoring, your script "pings" our unique URL. No ping means a failure.
            </p>
            
            <div className="space-y-4">
              {[
                { title: "Define your schedule", desc: "Tell us how often your job should run." },
                { title: "Set a grace period", desc: "Allow extra time for heavy tasks to complete." },
                { title: "Get alerted instantly", desc: "Notification via Slack, SMS, or Email on a missed heartbeat." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
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
          
          {/* TECHNICAL CODE PREVIEW */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-[#161e2d] rounded-2xl p-6 shadow-2xl border border-slate-800">
              <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <Terminal className="w-4 h-4 text-slate-500" />
              </div>
              <pre className="text-emerald-400 font-mono text-sm leading-relaxed overflow-x-auto">
                <code>{`# Step 1: Your backup/job logic
./db-backup.sh --full

# Step 2: Notify UptimeRobot on success
curl -m 10 https://heartbeat.uptimerobot.com/m782...

# Step 3: Sleep well knowing it worked.`}</code>
              </pre>
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
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-slate-900">Monitor your background tasks today.</h2>
        <Link href="/dashboard">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-12 h-16 rounded-md shadow-lg shadow-emerald-500/20 transition-all">
            Create Your First Heartbeat
          </Button>
        </Link>
      </section>
    </div>
  );
}