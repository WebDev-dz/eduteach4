// Auto-generated API route for assignmentSubmissions
import { NextResponse } from "next/server";
// import { getAllAssignmentSubmissions } from "@/lib/controllers/assignmentSubmissions";

export async function GET() {
  // const data = await getAllAssignmentSubmissions();
  // return NextResponse.json(data);
  return NextResponse.json({ message: "GET assignmentSubmissions" });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ message: "POST assignmentSubmissions", data: body });
}
