// Auto-generated API route for assignments
import { NextResponse } from "next/server";
// import { getAllAssignments } from "@/lib/controllers/assignments";
export async function GET() {
    // const data = await getAllAssignments();
    // return NextResponse.json(data);
    return NextResponse.json({ message: "GET assignments" });
}
export async function POST(request) {
    const body = await request.json();
    return NextResponse.json({ message: "POST assignments", data: body });
}
