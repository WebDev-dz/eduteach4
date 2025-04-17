// Auto-generated API route for subscriptions
import { NextResponse } from "next/server";
// import { getAllSubscriptions } from "@/lib/controllers/subscriptions";

export async function GET() {
  // const data = await getAllSubscriptions();
  // return NextResponse.json(data);
  return NextResponse.json({ message: "GET subscriptions" });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ message: "POST subscriptions", data: body });
}
