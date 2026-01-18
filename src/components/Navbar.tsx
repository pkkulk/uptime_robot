import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b121f]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-white text-xl font-bold flex items-center gap-2">
            <div className="w-6 h-6 bg-emerald-500 rounded-sm" /> UptimeRobot
          </Link>
          <div className="hidden md:flex gap-6 text-sm text-slate-300">
            <Link href="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</Link>
            <Link href="/integrations" className="hover:text-emerald-400 transition-colors">Integrations</Link>
            <Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" className="text-white hover:text-emerald-400">Login</Button>
          </Link>
          <Link href="/dashboard">
            <Button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold">Register for FREE</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}