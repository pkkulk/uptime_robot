import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data: monitors } = await supabase.from("monitors").select("*");

  if (!monitors) {
    return NextResponse.json({ error: "No monitors" }, { status: 500 });
  }

  for (const m of monitors) {
    const start = Date.now();
    let status = "down";

    try {
    const res = await fetch(m.url, {
        headers: { "User-Agent": "Mozilla/5.0" },
        cache: "no-store"
      });
      if (res.ok) status = "up";
    } catch (err) {
      status = "down";
    }

    await supabase.from("checks").insert({
      monitor_id: m.id,
      status,
      response_time: Date.now() - start,
    });
  }

  return NextResponse.json({ success: true });
}
