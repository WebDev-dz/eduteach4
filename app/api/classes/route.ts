// Auto-generated API route for classes
import { NextResponse } from "next/server";
// import { getAllClasses } from "@/lib/controllers/classes";

export async function GET() {
  // const data = await getAllClasses();
  // return NextResponse.json(data);
  return NextResponse.json({ message: "GET classes" });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ message: "POST classes", data: body });
}
