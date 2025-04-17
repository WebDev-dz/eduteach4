// Auto-generated API route for grades
import { NextResponse } from "next/server";
// import { getAllGrades } from "@/lib/controllers/grades";

export async function GET() {
  // const data = await getAllGrades();
  // return NextResponse.json(data);
  return NextResponse.json({ message: "GET grades" });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ message: "POST grades", data: body });
}
