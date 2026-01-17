export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Missing GEMINI_API_KEY");
    }

    const prompt = `
The website ${url} appears DOWN in automated uptime monitoring.
Explain possible technical reasons in simple bullet points.
Also suggest what the user can check manually.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return NextResponse.json({
      explanation: response.text,
    });
  } catch (err: any) {
    console.error("EXPLAIN API ERROR:", err);

    return NextResponse.json(
      { explanation: "AI error: " + err.message },
      { status: 500 }
    );
  }
}
