"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Plus, Globe, AlertCircle, Loader2, Signal } from "lucide-react";

type Monitor = {
  id: string;
  name: string;
  url: string;
  checks?: { status: string; checked_at: string }[];
};

export default function DashboardPage() {
  const [monitors, setMonitors] = useState<Monitor[]>([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const [open, setOpen] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [loadingExplain, setLoadingExplain] = useState(false);

  async function fetchMonitors() {
    const { data } = await supabase
      .from("monitors")
      .select(`id, name, url, checks (status, checked_at)`)
      .order("checked_at", { foreignTable: "checks", ascending: false });

    setMonitors(data || []);
  }

  async function addMonitor() {
    if (!name || !url) return;
    
    // Optimistically add monitor or refresh after insert to ensure high performance 
    await supabase.from("monitors").insert({ name, url });
    setName("");
    setUrl("");
    
    // Trigger background check worker
    await fetch("/api/check", { cache: "no-store" });
    fetchMonitors();
  }

  async function explain(siteUrl: string) {
    try {
      setOpen(true);
      setLoadingExplain(true);
      setExplanation("");
      const res = await fetch("/api/explain", {
        method: "POST",
        body: JSON.stringify({ url: siteUrl }),
      });
      const data = await res.json();
      setExplanation(data.explanation);
    } catch (e) {
      setExplanation("Failed to analyze website status. Please try again.");
    } finally {
      setLoadingExplain(false);
    }
  }

  useEffect(() => {
    fetchMonitors();
    // Real-time "status" feeling with polling 
    const interval = setInterval(fetchMonitors, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Monitor Dashboard</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">Live System Monitoring</p>
            </div>
          </div>
        </div>

        {/* Add Monitor Section */}
        <Card className="border-dashed border-2 bg-white/50 shadow-sm">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <Input
                  placeholder="Monitor Name (e.g. Google)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white border-slate-200 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-1">
                <Input
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="bg-white border-slate-200 focus:ring-emerald-500"
                />
              </div>
              <Button onClick={addMonitor} className="w-full bg-slate-900 hover:bg-slate-800 text-white gap-2 transition-all">
                <Plus className="w-4 h-4" /> Add Monitor
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Desktop Table View  */}
        <div className="hidden md:block rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="w-[300px] font-semibold text-slate-700">Website</TableHead>
                <TableHead className="font-semibold text-slate-700">URL</TableHead>
                <TableHead className="font-semibold text-slate-700">Status</TableHead>
                <TableHead className="text-right font-semibold text-slate-700">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {monitors.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-32 text-center text-slate-400">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Signal className="w-8 h-8 opacity-20" />
                      <p>No monitors active. Add a website to start tracking.</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                monitors.map((m) => {
                  const latest = m.checks?.[0];
                  return (
                    <TableRow key={m.id} className="hover:bg-slate-50/50 transition-colors border-b border-slate-100">
                      <TableCell className="font-semibold text-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-slate-100 rounded-lg">
                            <Globe className="w-4 h-4 text-slate-500" />
                          </div>
                          {m.name}
                        </div>
                      </TableCell>
                      <TableCell className="text-slate-500 font-mono text-xs">{m.url}</TableCell>
                      <TableCell>
                        <StatusBadge status={latest?.status} />
                      </TableCell>
                      <TableCell className="text-right">
                        {latest?.status === "down" && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => explain(m.url)}
                            className="text-amber-600 border-amber-200 hover:bg-amber-50 hover:text-amber-700 gap-2"
                          >
                            <AlertCircle className="w-4 h-4" />
                            Why is it down?
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View  */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {monitors.map((m) => {
            const latest = m.checks?.[0];
            return (
              <Card key={m.id} className="shadow-sm border-slate-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <CardTitle className="text-base font-bold text-slate-800">{m.name}</CardTitle>
                  <StatusBadge status={latest?.status} />
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-xs text-slate-500 font-mono break-all bg-slate-50 p-2 rounded border border-slate-100">
                    {m.url}
                  </p>
                  {latest?.status === "down" && (
                    <Button 
                      className="w-full border-amber-200 text-amber-700 hover:bg-amber-50" 
                      variant="outline" 
                      onClick={() => explain(m.url)}
                    >
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Get AI Analysis
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* AI ANALYSIS MODAL  */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md sm:rounded-2xl border-none shadow-2xl">
          <DialogHeader className="space-y-3">
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Activity className="w-6 h-6 text-indigo-500" />
              Incident Analysis
            </DialogTitle>
            <DialogDescription className="text-slate-500">
              Advanced diagnostics for recent connectivity issues.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            {loadingExplain ? (
              <div className="flex flex-col items-center justify-center py-16 space-y-4">
                <Loader2 className="w-10 h-10 animate-spin text-indigo-500" />
                <p className="text-sm font-medium text-slate-600 animate-pulse">Running global diagnostics...</p>
              </div>
            ) : (
              <div className="bg-slate-950 rounded-xl p-5 text-indigo-100 text-sm font-mono leading-relaxed max-h-[400px] overflow-auto shadow-inner border border-slate-800">
                <div className="flex gap-2 mb-2 text-indigo-400 opacity-50 uppercase text-[10px] font-bold tracking-widest">
                  <span>Terminal</span>
                  <span>•</span>
                  <span>Diagnostic Output</span>
                </div>
                {explanation}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function StatusBadge({ status }: { status?: string }) {
  if (!status) return (
    <Badge variant="secondary" className="bg-slate-100 text-slate-500 border-slate-200">
      Pending
    </Badge>
  );
  
  return status === "up" ? (
    <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-50 px-3 py-1 font-bold">
      ONLINE
    </Badge>
  ) : (
    <Badge variant="destructive" className="bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-50 px-3 py-1 font-bold">
      OFFLINE
    </Badge>
  );
}