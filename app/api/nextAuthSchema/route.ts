// Auto-generated API route for nextAuthSchema
import { NextResponse } from "next/server";
// import { getAllNextAuthSchema } from "@/lib/controllers/nextAuthSchema";

export async function GET() {
  // const data = await getAllNextAuthSchema();
  // return NextResponse.json(data);
  return NextResponse.json({ message: "GET nextAuthSchema" });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ message: "POST nextAuthSchema", data: body });
}
