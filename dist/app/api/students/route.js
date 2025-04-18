// Auto-generated API route for students
import { NextResponse } from "next/server";
// import { getAllStudents } from "@/lib/controllers/students";
export async function GET() {
    // const data = await getAllStudents();
    // return NextResponse.json(data);
    return NextResponse.json({ message: "GET students" });
}
export async function POST(request) {
    const body = await request.json();
    return NextResponse.json({ message: "POST students", data: body });
}
