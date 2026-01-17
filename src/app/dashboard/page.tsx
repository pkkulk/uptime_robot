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

  async function fetchMonitors() {
    const { data } = await supabase
  .from("monitors")
  .select(`
    id,
    name,
    url,
    checks (
      status,
      checked_at
    )
  `)
  .order("checked_at", { foreignTable: "checks", ascending: false });


  setMonitors(data || []);
}
async function addMonitor() {
  if (!name || !url) return;

  const { data, error } = await supabase
    .from("monitors")
    .insert({ name, url })
    .select()
    .single();

  if (error || !data) return;

  setName("");
  setUrl("");

  // FORCE CHECK IMMEDIATELY
  await fetch(`${window.location.origin}/api/check`, {
    cache: "no-store",
  });

  fetchMonitors();
}

useEffect(() => {
  fetchMonitors();

  const interval = setInterval(() => {
    fetchMonitors();
  }, 10000); // every 10 sec

  return () => clearInterval(interval);
}, []);


  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Website Monitors</h1>

      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Name (Google)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="https://google.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button onClick={addMonitor}>Add</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>URL</TableHead>
            <TableHead>Status</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
  {monitors.map((m) => {
    const latest = m.checks?.[0];

    return (
      <TableRow key={m.id}>
        <TableCell>{m.name}</TableCell>
        <TableCell>{m.url}</TableCell>

        <TableCell>
          {latest ? (
            <span
              className={
                latest.status === "up"
                  ? "text-green-600 font-semibold"
                  : "text-red-600 font-semibold"
              }
            >
              {latest.status.toUpperCase()}
            </span>
          ) : (
            "—"
          )}
        </TableCell>
      </TableRow>
    );
  })}
</TableBody>

      </Table>
    </div>
  );
}
