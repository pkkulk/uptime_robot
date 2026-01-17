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
import { Activity, Plus, Globe, AlertCircle, Loader2 } from "lucide-react";

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
    await supabase.from("monitors").insert({ name, url });
    setName("");
    setUrl("");
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
      setExplanation("Failed to analyze website. Please try again.");
    } finally {
      setLoadingExplain(false);
    }
  }

  useEffect(() => {
    fetchMonitors();
    const interval = setInterval(fetchMonitors, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
            <p className="text-slate-500 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Live system monitoring
            </p>
          </div>
        </div>

        {/* Add Monitor Section */}
        <Card className="border-dashed bg-white/50">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Input
                placeholder="Site Name (e.g. Google)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white"
              />
              <Input
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="bg-white"
              />
              <Button onClick={addMonitor} className="w-full md:w-auto gap-2">
                <Plus className="w-4 h-4" /> Add Monitor
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Desktop Table View */}
        <div className="hidden md:block rounded-xl border bg-white shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="w-[250px]">Website</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {monitors.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="h-24 text-center text-slate-400">
                    No monitors found. Add your first website above.
                  </TableCell>
                </TableRow>
              )}
              {monitors.map((m) => {
                const latest = m.checks?.[0];
                return (
                  <TableRow key={m.id} className="hover:bg-slate-50/50 transition-colors">
                    <TableCell className="font-medium text-slate-700">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-slate-400" />
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
                          variant="ghost" 
                          onClick={() => explain(m.url)}
                          className="text-amber-600 hover:text-amber-700 hover:bg-amber-50"
                        >
                          <AlertCircle className="w-4 h-4 mr-1" />
                          Explain
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {monitors.map((m) => {
            const latest = m.checks?.[0];
            return (
              <Card key={m.id} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-bold">{m.name}</CardTitle>
                  <StatusBadge status={latest?.status} />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-500 font-mono mb-4 break-all">{m.url}</p>
                  {latest?.status === "down" && (
                    <Button 
                      className="w-full" 
                      variant="outline" 
                      onClick={() => explain(m.url)}
                    >
                      Why is it down?
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* AI MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg sm:rounded-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-indigo-500" />
              Incident Analysis
            </DialogTitle>
            <DialogDescription>
              AI-powered diagnosis for the current connection failure.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            {loadingExplain ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
                <p className="text-sm text-slate-500 animate-pulse">Running diagnostic scripts...</p>
              </div>
            ) : (
              <div className="bg-slate-900 rounded-xl p-4 text-indigo-100 text-sm font-mono leading-relaxed max-h-[400px] overflow-auto shadow-inner">
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
  if (!status) return <Badge variant="secondary" className="opacity-50">Pending</Badge>;
  
  return status === "up" ? (
    <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-50">
      Online
    </Badge>
  ) : (
    <Badge variant="destructive" className="bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-50">
      Offline
    </Badge>
  );
}