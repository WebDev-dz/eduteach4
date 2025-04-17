// Auto-generated API route for classStudents
import { NextResponse } from "next/server";
// import { getAllClassStudents } from "@/lib/controllers/classStudents";

export async function GET() {
  // const data = await getAllClassStudents();
  // return NextResponse.json(data);
  return NextResponse.json({ message: "GET classStudents" });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ message: "POST classStudents", data: body });
}
