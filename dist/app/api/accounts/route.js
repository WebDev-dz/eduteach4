// Auto-generated API route for accounts
import { NextResponse } from "next/server";
// import { getAllAccounts } from "@/lib/controllers/accounts";
export async function GET() {
    // const data = await getAllAccounts();
    // return NextResponse.json(data);
    return NextResponse.json({ message: "GET accounts" });
}
export async function POST(request) {
    const body = await request.json();
    return NextResponse.json({ message: "POST accounts", data: body });
}
