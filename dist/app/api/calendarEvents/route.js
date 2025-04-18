// Auto-generated API route for calendarEvents
import { NextResponse } from "next/server";
// import { getAllCalendarEvents } from "@/lib/controllers/calendarEvents";
export async function GET() {
    // const data = await getAllCalendarEvents();
    // return NextResponse.json(data);
    return NextResponse.json({ message: "GET calendarEvents" });
}
export async function POST(request) {
    const body = await request.json();
    return NextResponse.json({ message: "POST calendarEvents", data: body });
}
