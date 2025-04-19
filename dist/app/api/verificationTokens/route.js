// Auto-generated API route for verificationTokens
import { NextResponse } from "next/server";
// import { getAllVerificationTokens } from "@/lib/controllers/verificationTokens";
export async function GET() {
    // const data = await getAllVerificationTokens();
    // return NextResponse.json(data);
    return NextResponse.json({ message: "GET verificationTokens" });
}
export async function POST(request) {
    const body = await request.json();
    return NextResponse.json({ message: "POST verificationTokens", data: body });
}
