// Auto-generated API route for materials
import { NextResponse } from "next/server";
// import { getAllMaterials } from "@/lib/controllers/materials";

export async function GET() {
  // const data = await getAllMaterials();
  // return NextResponse.json(data);
  return NextResponse.json({ message: "GET materials" });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ message: "POST materials", data: body });
}
