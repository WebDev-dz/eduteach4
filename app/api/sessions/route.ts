// Auto-generated API route for sessions
import { NextResponse } from "next/server";
// import { getAllSessions } from "@/lib/controllers/sessions";

export async function GET() {
  // const data = await getAllSessions();
  // return NextResponse.json(data);
  return NextResponse.json({ message: "GET sessions" });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ message: "POST sessions", data: body });
}
