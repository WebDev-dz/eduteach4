// Auto-generated API route for organizations
import { NextResponse } from "next/server";
// import { getAllOrganizations } from "@/lib/controllers/organizations";

export async function GET() {
  // const data = await getAllOrganizations();
  // return NextResponse.json(data);
  return NextResponse.json({ message: "GET organizations" });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ message: "POST organizations", data: body });
}
