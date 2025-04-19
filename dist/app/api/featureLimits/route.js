// Auto-generated API route for featureLimits
import { NextResponse } from "next/server";
// import { getAllFeatureLimits } from "@/lib/controllers/featureLimits";
export async function GET() {
    // const data = await getAllFeatureLimits();
    // return NextResponse.json(data);
    return NextResponse.json({ message: "GET featureLimits" });
}
export async function POST(request) {
    const body = await request.json();
    return NextResponse.json({ message: "POST featureLimits", data: body });
}
